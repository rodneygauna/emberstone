'''
Database models for the Emberstone project.
NFIRS Design Documents can be found here:
https://www.usfa.fema.gov/nfirs/documentation/
'''

# Imports
from flask import redirect, url_for
from flask_login import UserMixin
from bson.objectid import ObjectId
from src import db, login_manager


# Database - Users variable
users = db.users


# LoginManager - User Loader
@login_manager.user_loader
def load_user(user_id):
    '''Queries the database for the user_id and returns the user object'''
    user = users.find_one({"_id": ObjectId(user_id)})
    if isinstance(user, dict):
        user_obj = User(_id=str(user["_id"]),
                        email=user["email"],
                        password=user["password"],
                        departments=user["departments"])
        return user_obj
    return user


@login_manager.unauthorized_handler
def unauthorized():
    '''Redirects unauthorized users to the login page'''
    return redirect(url_for('users.login'))


# User model
class User(UserMixin):
    '''SQL Table: Users'''

    def __init__(self, _id, email, password, departments):
        self._id = _id
        self.email = email
        self.password = password
        self.departments = departments

    def get_id(self):
        '''Returns a unique identifier for the user as a string'''
        return self._id

    def __repr__(self):
        return f"User('{self.email}')"
