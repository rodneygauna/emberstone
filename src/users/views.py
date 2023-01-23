'''
User views for emberstone
'''

# Imports
from flask import Blueprint, render_template, redirect, url_for, request
from flask import make_response
from flask_login import login_user, logout_user, login_required, current_user
import bcrypt
from bson.objectid import ObjectId
from src.users.forms import LoginForm, RegisterForm, UserForm
from src.models import User
from src import db


# Blueprint variable
users_bp = Blueprint('users', __name__)


# Database - Users variable
users = db.users
departments = db.departments


# Routes
# Login Page
@users_bp.route('/login', methods=['GET', 'POST'])
def login():
    '''Route: Login Page'''
    # Login form
    form = LoginForm()

    # Validate form
    if form.validate_on_submit():
        # Query database for user
        user = users.find_one({'email': form.email.data})

        # Check if user exists
        user = users.find_one({'email': form.email.data})

        if user and bcrypt.checkpw(form.password.data.encode('utf-8'),
                                   user['password']):
            user_obj = User(_id=str(user["_id"]),
                            email=user["email"],
                            password=user["password"],
                            departments=user["departments"])
            login_user(user_obj)
            # remember user
            login_user(user_obj)

            # Redirect user to home page
            return redirect(url_for('core.index'))

    return render_template('login.html',
                           title='Emberstone - Login',
                           form=form)


# Logout Page
@users_bp.route('/logout')
@login_required
def logout():
    '''Route: Logout Page'''
    user = current_user
    if isinstance(user, User):
        logout_user()
    else:
        user_obj = User(_id=str(user["_id"]),
                        email=user["email"],
                        password=user["password"],
                        departments=user["departments"])
        logout_user()

    # Redirect user to login page
    return redirect(url_for('users.login'))


# User Registration Page
@users_bp.route('/register', methods=['GET', 'POST'])
def register():
    '''Route: User Registration Page'''
    form = RegisterForm()
    if form.validate_on_submit():
        # Check if user exists
        existing_user = users.find_one({'email': form.email.data})
        if existing_user:
            return render_template('register.html',
                                   form=form,
                                   # TODO: Fix this message
                                   error='Error: Email already exists.')
        # If user doesn't exist, create user
        # Hash password
        hashed_password = bcrypt.hashpw(
            form.password.data.encode('utf-8'), bcrypt.gensalt())
        # Insert user into database
        users.insert_one({'_id': ObjectId(),
                          'email': form.email.data,
                          'password': hashed_password,
                          'departments': []})
        # Check if user is being created from a department
        new_department = request.cookies.get('new_department')
        if new_department:
            departments.update_one({'_id': ObjectId(new_department)},
                                   {'$push': {'users': form.email.data}})
            users.update_one({'email': form.email.data},
                             {'$push': {'departments':
                                        ObjectId(new_department)}})
            # Remove department cookie
            resp = make_response(redirect(url_for('users.login')))
            resp.delete_cookie('new_department')
            # Redirect user to login page and delete department cookie
            return resp
    return render_template('register.html',
                           title='Emberstone - Register',
                           form=form)


# Department Users Page
@users_bp.route('/department_users/<department_id>')
@login_required
def department_users(department_id):
    '''Route: Department Users Page'''
    # Query database for department
    department = departments.find_one({'_id': ObjectId(department_id)})

    # Check if department exists
    if department is None:
        return 'Department not found.', 404

    # Query database for users
    department_users = users.find({'departments': ObjectId(department_id)})

    return render_template('department_users.html',
                           title='Emberstone - Department Users',
                           department=department,
                           department_users=department_users)


# User Edit Profile Page
@users_bp.route('/edit_profile/<user_id>', methods=['GET', 'POST'])
@login_required
def edit_profile(user_id):
    '''Route: User Edit Profile Page'''
    form = UserForm()

    # Query database for user
    user = users.find_one({'_id': ObjectId(user_id)})

    # Check if user exists
    if user is None:
        return 'User not found.', 404

    if request.method == 'GET':
        form.email.data = user['email']
        form.firstname.data = user.get('firstname', '')
        form.middlename.data = user.get('middlename', '')
        form.lastname.data = user.get('lastname', '')
        form.suffixname.data = user.get('suffixname', '')
        form.prefixname.data = user.get('prefixname', '')
        form.street_number.data = user.get('street_number', '')
        form.apartment_number.data = user.get('apartment_number', '')
        form.street_prefix.data = user.get('street_prefix', '')
        form.street_name.data = user.get('street_name', '')
        form.street_type.data = user.get('street_type', '')
        form.street_suffix.data = user.get('street_suffix', '')
        form.city.data = user.get('city', '')
        form.state.data = user.get('state', '')
        form.zipcode.data = user.get('zipcode', '')
        form.county_code.data = user.get('county_code', '')
        form.tele_phone.data = user.get('tele_phone', '')
        form.fax_phone.data = user.get('fax_phone', '')
        form.personnel_number.data = user.get('personnel_number', '')
        form.rank.data = user.get('rank', '')
        form.status.data = user.get('status', '')

    if form.validate_on_submit():
        # TODO: Check if email is already in use other than current user
        users.update_one({'_id': ObjectId(user_id)},
                         {'$set': {'email': form.email.data,
                                   'firstname': form.firstname.data,
                                   'middlename': form.middlename.data,
                                   'lastname': form.lastname.data,
                                   'suffixname': form.suffixname.data,
                                   'prefixname': form.prefixname.data,
                                   'street_number': form.street_name.data,
                                   'apartment_number': form.apartment_number.data,
                                   'street_prefix': form.street_prefix.data,
                                   'street_name': form.street_name.data,
                                   'street_type': form.street_type.data,
                                   'street_suffix': form.street_suffix.data,
                                   'city': form.city.data,
                                   'state': form.state.data,
                                   'zipcode': form.zipcode.data,
                                   'county_code': form.county_code.data,
                                   'tele_phone': form.tele_phone.data,
                                   'fax_phone': form.fax_phone.data,
                                   'personnel_number': form.personnel_number.data,
                                   'rank': form.rank.data,
                                   'status': form.status.data}})
        return redirect(url_for('settings.settings'))
    return render_template('edit_profile.html',
                           user=user,
                           form=form)
