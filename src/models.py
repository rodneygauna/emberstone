'''
Database models for the Emberstone project.
NFIRS Design Documents can be found here:
https://www.usfa.fema.gov/nfirs/documentation/
'''

# Imports
from flask import redirect, url_for
from . import db, login_manager


# Database - Users variable
users = db.users


# LoginManager - User Loader
@login_manager.user_loader
def load_user(user_id):
    '''Queries the database for the user_id and returns the user object'''
    user = users.find_one({'email': user_id})
    if user:
        return User(user['email'], user['password'])
    return None


@login_manager.unauthorized_handler
def unauthorized():
    '''Redirects unauthorized users to the login page'''
    return redirect(url_for('users.login'))


# User model
class User:
    '''SQL Table: Users'''

    def __init__(self, email, password):
        self.email = email
        self.password = password

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return self.email

    def __repr__(self):
        return f"User('{self.email}')"
