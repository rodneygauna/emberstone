"""
Users > Views
"""

# Imports
from flask import (
    Blueprint,
    abort,
    render_template,
    request,
    flash,
    redirect,
    url_for,
)
from werkzeug.security import generate_password_hash
from flask_login import (
    login_user,
    login_required,
    logout_user,
    current_user,
)
from src.users.forms import (
    RegisterUserForm,
    LoginForm,
    ChangePasswordForm,
)
from src import db
from src.models import (
    User,
    Department,
)


# Blueprint Configuration
users_bp = Blueprint('users', __name__)


# Route - Register User
@users_bp.route('/register', methods=['GET', 'POST'])
def register_user():
    """Registers a new user"""

    form = RegisterUserForm()

    if form.validate_on_submit():
        # Check if email is already registered
        if User.query.filter_by(email=form.email.data).first():
            flash('This email is already registered.', 'error')
            return redirect(url_for('users.register_user'))

        # Check if email ends with @healthtrio.com
        if not form.email.data.endswith('@healthtrio.com'):
            flash('Please use your HealthTrio email.', 'error')
            return redirect(url_for('users.register_user'))

        # Commit the new user to the database
        user = User(
            email=form.email.data,
            password_hash=generate_password_hash(form.password.data),
        )
        db.session.add(user)
        db.session.commit()
        flash('You have successfully registered!', 'success')
        return redirect(url_for('users.login'))

    return render_template('users/register.html',
                           title='emberstone - Register',
                           form=form)


# Route - Login user
@users_bp.route('/login', methods=['GET', 'POST'])
def login():
    """Logs in a user"""

    form = LoginForm()

    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()

        if user.check_password(form.password.data) and user is not None:
            login_user(user)

            next = request.args.get('next')

            if next is None or not next[0] == '/':
                next = url_for('core.index')

            flash('Login successful.', 'success')
            return redirect(next)
        flash('Invalid email or password.', 'error')

    return render_template('users/login.html',
                           title='emberstone - Login',
                           form=form)


# Route - Logout user
@users_bp.route('/logout')
@login_required
def logout():
    '''Logs out a user'''

    logout_user()
    return redirect(url_for('core.index'))


# Route - User Account
@users_bp.route('/account/<int:user_id>', methods=['GET', 'POST'])
@login_required
def user_profile(user_id):
    """Routes the current user to their profile page"""

    user = User.query.get_or_404(user_id)

    if user != current_user:
        abort(403)

    return render_template('users/account.html',
                           title='emberstone - Account',
                           user=user)


# Route - Change Password
@users_bp.route('/change_password', methods=['GET', 'POST'])
@login_required
def change_password():
    """Allows the user to change their password"""

    user = User.query.get_or_404(current_user.id)

    if user != current_user:
        abort(403)

    form = ChangePasswordForm()

    if form.validate_on_submit():
        user.password_hash = generate_password_hash(form.password.data)
        db.session.commit()
        flash('Your password has been updated.', 'success')
        return redirect(url_for('users.user_profile', user_id=user.id))

    return render_template('users/change_password.html',
                           title='emberstone - Change Password',
                           form=form)


# Route - View Department Users
@users_bp.route('/department/<int:department_id>/users')
@login_required
def view_department_users(department_id):
    """Allows the user to view all users in a department"""

    department = Department.query.get_or_404(department_id)

    if department not in current_user.departments:
        abort(403)

    return render_template('users/department_users.html',
                           title='emberstone - Department Users',
                           department=department)
