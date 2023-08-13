"""
Database models for the application.
"""

# Imports
from datetime import datetime
from flask import redirect, url_for
from werkzeug.security import check_password_hash
from flask_login import UserMixin
from src import db, login_manager


# Login Manager - User Loader
@login_manager.user_loader
def load_user(user_id):
    """Loads the user from the database"""
    return User.query.get(int(user_id))


# Login Manager - Unauthorized Handler
@login_manager.unauthorized_handler
def unauthorized():
    """Redirects unauthorized users to the login page"""
    return redirect(url_for("users.login"))


# Model - User
class User(db.Model, UserMixin):
    """Model - Users"""

    __tablename__ = "users"

    # IDs
    id = db.Column(db.Integer, primary_key=True)
    # Login Information
    email = db.Column(db.String(255), unique=True, index=True)
    password_hash = db.Column(db.String(128))
    # Profile Picture
    profile_image = db.Column(
        db.String(255), nullable=False, default="default_profile.jpg"
    )
    # User Information
    firstname = db.Column(db.String(255), nullable=False)
    middlename = db.Column(db.String(255))
    lastname = db.Column(db.String(255), nullable=False)
    suffixname = db.Column(db.String(255))
    prefixname = db.Column(db.String(255))
    street_number = db.Column(db.String(255), nullable=False)
    street_prefix = db.Column(db.String(255))
    street_name = db.Column(db.String(255), nullable=False)
    street_type = db.Column(db.String(255), nullable=False)
    street_suffix = db.Column(db.String(255))
    city = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(255), nullable=False)
    zipcode = db.Column(db.Integer, nullable=False)
    county_code = db.Column(db.String(255), nullable=False)
    tele_phone = db.Column(db.String(255), nullable=False)
    fax_phone = db.Column(db.String(255))
    personnel_number = db.Column(db.String(255), nullable=False)
    rank = db.Column(db.String(255), nullable=False)
    # Status
    status = db.Column(db.String(10), default="ACTIVE")
    # Timestamps
    created_date = db.Column(db.DateTime, nullable=False,
                             default=datetime.utcnow)
    created_by = db.Column(db.Integer)
    updated_date = db.Column(db.DateTime)
    updated_by = db.Column(db.Integer)

    def check_password(self, password):
        """Checks if the password is correct"""
        return check_password_hash(self.password_hash, password)


# Model - Department
class Department(db.Model):
    """Model - Departments"""

    __tablename__ = "departments"

    # IDs
    id = db.Column(db.Integer, primary_key=True)
    # Department Information
    nfirs_id = db.Column(db.String(5), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    street_number = db.Column(db.String(255), nullable=False)
    street_prefix = db.Column(db.String(255))
    street_name = db.Column(db.String(255), nullable=False)
    street_type = db.Column(db.String(255), nullable=False)
    street_suffix = db.Column(db.String(255))
    city = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(255), nullable=False)
    zipcode = db.Column(db.Integer, nullable=False)
    county_code = db.Column(db.String(255), nullable=False)
    tele_phone = db.Column(db.Integer, nullable=False)
    fax_phone = db.Column(db.Integer)
    # Status
    status = db.Column(db.String(10), default="ACTIVE")
    # Timestamps
    created_date = db.Column(db.DateTime, nullable=False,
                             default=datetime.utcnow)
    created_by = db.Column(db.Integer, db.ForeignKey('users.id'))
    updated_date = db.Column(db.DateTime)
    updated_by = db.Column(db.Integer, db.ForeignKey('users.id'))


# Model - Relationship - User and Department
class UserDepartment(db.Model):
    """
    Model - Relationship - User and Department
    One-to-One Relationship
    """

    __tablename__ = "user_departments"

    # IDs
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    department_id = db.Column(db.Integer, db.ForeignKey('departments.id'))
    # Status
    status = db.Column(db.String(10), default="ACTIVE")
    # Timestamps
    created_date = db.Column(db.DateTime, nullable=False,
                             default=datetime.utcnow)
    created_by = db.Column(db.Integer, db.ForeignKey('users.id'))
    updated_date = db.Column(db.DateTime)
    updated_by = db.Column(db.Integer, db.ForeignKey('users.id'))


# Model - Station
class Station(db.Model):
    """Model - Stations"""

    __tablename__ = "stations"

    # IDs
    id = db.Column(db.Integer, primary_key=True)
    department_id = db.Column(db.Integer, db.ForeignKey('departments.id'))
    # Station Information
    name = db.Column(db.String(255), nullable=False)
    number = db.Column(db.String(255), nullable=False)
    street_number = db.Column(db.String(255), nullable=False)
    street_prefix = db.Column(db.String(255))
    street_name = db.Column(db.String(255), nullable=False)
    street_type = db.Column(db.String(255), nullable=False)
    street_suffix = db.Column(db.String(255))
    city = db.Column(db.String(255), nullable=False)
    state = db.Column(db.String(255), nullable=False)
    zipcode = db.Column(db.String(255), nullable=False)
    county_code = db.Column(db.String(255), nullable=False)
    tele_phone = db.Column(db.String(255), nullable=False)
    fax_phone = db.Column(db.String(255))
    # Status
    status = db.Column(db.String(10), default="ACTIVE")
    # Timestamps
    created_date = db.Column(db.DateTime, nullable=False,
                             default=datetime.utcnow)
    created_by = db.Column(db.Integer, db.ForeignKey('users.id'))
    updated_date = db.Column(db.DateTime)
    updated_by = db.Column(db.Integer, db.ForeignKey('users.id'))
