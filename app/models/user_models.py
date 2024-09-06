'''User modles'''
from datetime import datetime, timezone
from flask import redirect, url_for
from flask_login import UserMixin

from login_config import login_manager
from app import db


# LoginManager - user_loader
@login_manager.user_loader
def load_user(user_id):
    """Queries the database for the user_id and returns the user object"""
    return User.query.get(user_id)


@login_manager.unauthorized_handler
def unauthorized():
    """Redirects unauthorized users to the login page"""
    return redirect(url_for("users.login"))


# Models - Database Tables
class User(db.Model, UserMixin):
    '''SQL Table: user'''
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True)
    # Data Points - Create/Updated
    created_at = db.Column(db.DateTime(timezone=True),
                           default=datetime.now(tz=timezone.utc))
    created_by = db.Column(db.Integer, db.ForeignKey("users.id"))
    updated_at = db.Column(db.DateTime(timezone=True))
    updated_by = db.Column(db.Integer, db.ForeignKey("users.id"))
    # Data Points - Main
    email = db.Column(db.Text, nullable=False)
    password = db.Column(db.Text, nullable=False)
    # Who reset the password and when was it reset
    password_reset_by_system = db.Column(db.Boolean, default=False)
    password_reset_at = db.Column(db.DateTime(timezone=True))
    # Data Points - Personal
    first_name = db.Column(db.String(150), nullable=False)
    middle_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150), nullable=False)
    suffix_name = db.Column(db.String(150))
    address_1 = db.Column(db.Text)
    address_2 = db.Column(db.Text)
    city = db.Column(db.Text)
    state = db.Column(db.Text)
    zipcode = db.Column(db.Integer)
    phone_number = db.Column(db.String(10))
    phone_type = db.Column(db.String(10))
    role = db.Column(db.String(50), nullable=False, default="Staff")
    user_type = db.Column(db.String(10), nullable=False, default="User")
    status = db.Column(db.Text, nullable=False, default="Active")
    profile_image = db.Column(
        db.String(255), nullable=False, default='default_profile.jpg')
