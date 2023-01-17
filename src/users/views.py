'''
User views for emberstone
'''

# Imports
from flask import Blueprint, render_template, redirect, url_for, request
from flask import make_response
from flask_login import login_user, logout_user, login_required, current_user
import bcrypt
from bson.objectid import ObjectId
from src.users.forms import LoginForm, RegisterForm
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
        else:
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
