'''
User views for emberstone
'''

# Imports
from flask import Blueprint, render_template, redirect, url_for, flash, request
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required, current_user
from emberstone.users.forms import LoginForm
from emberstone.models import User
from emberstone import db


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
        user = users.find_one({'email': form.username.data})

        # Check if user exists
        if user and form.password.data == user['password']:
            user_obj = User(user['email'], user['password'])
            login_user(user_obj, remember=form.remember.data)

            # Redirect user to home page
            return redirect(url_for('main.home'))

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
