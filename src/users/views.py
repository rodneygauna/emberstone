'''
User views for emberstone
'''

# Imports
import os
from flask import Blueprint, render_template, redirect, url_for
from flask_login import login_user, logout_user, login_required
import bcrypt
from src.users.forms import LoginForm, RegisterForm
from src.models import User
from src import db


# Blueprint variable
users_bp = Blueprint('users', __name__)


# Database - Users variable
users = db.users


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
            user_obj = User(user['email'], user['password'])
            # remember user
            login_user(user_obj, remember=form.remember.data)

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
    # Log user out
    logout_user()

    # Redirect user to login page
    return redirect(url_for('users.login'))


# User Registration Page
@users_bp.route('/register', methods=['GET', 'POST'])
def register():
    '''Route: User Registration Page'''
    form = RegisterForm()
    if form.validate_on_submit():
        existing_user = users.find_one({'email': form.email.data})
        if existing_user:
            return render_template('register.html',
                                   form=form,
                                   # TODO: Fix this message
                                   error='Error: Email already exists.')
        else:
            hashed_password = bcrypt.hashpw(
                form.password.data.encode('utf-8'), bcrypt.gensalt())
            users.insert_one({'email': form.email.data,
                              'password': hashed_password})
            return redirect(url_for('users.login'))
    return render_template('register.html',
                           title='Emberstone - Register',
                           form=form)
