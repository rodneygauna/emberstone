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
    state_fdid = db.Column(db.String(5), nullable=False)
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


# Model - Station
class Station(db.Model):
    """Model - Stations"""

    __tablename__ = "stations"

    # IDs
    id = db.Column(db.Integer, primary_key=True)
    # Station Information
    name = db.Column(db.String(255), nullable=False)
    number = db.Column(db.Integer, nullable=False)
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


# Model - NFIRS 1 - Basic Incident Information
class NFIRS1Basic(db.Model):
    """Model - NFIRS 1 - Basic Incident Information"""

    __tablename__ = "nfirs1_basic"

    # IDs
    id = db.Column(db.Integer, primary_key=True)
    # Timestamps
    created_date = db.Column(db.DateTime, nullable=False,
                             default=datetime.utcnow)
    created_by = db.Column(db.Integer, db.ForeignKey('users.id'))
    updated_date = db.Column(db.DateTime)
    updated_by = db.Column(db.Integer, db.ForeignKey('users.id'))
    # Section A - Incident Header
    state_fdid = db.Column(db.String(5), nullable=False)
    department_state = db.Column(db.String(2), nullable=False)
    incident_date = db.Column(db.Date, nullable=False)
    station = db.Column(db.String(3))
    incident_number = db.Column(db.String(7), nullable=False)
    exposure_number = db.Column(db.String(3), nullable=False)
    incident_reporting_status = db.Column(db.String(14), nullable=False)
    # Section B - Location
    location_type = db.Column(db.String(2), nullable=False)
    census_tract = db.Column(db.String(6))
    number_milepost = db.Column(db.String(8))
    street_prefix = db.Column(db.String(2))
    street_highway = db.Column(db.String(30), nullable=False)
    street_type = db.Column(db.String(4))
    street_suffix = db.Column(db.String(4))
    apartment_suite_room = db.Column(db.String(15))
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(2), nullable=False)
    zipcode = db.Column(db.String(9), nullable=False)
    crossstreet_directions_usnationalgrid = db.Column(db.String(30))
    # Section C - Incident Type
    incident_type = db.Column(db.String(3), nullable=False)
    # Section D - Aid Given or Received
    aid_given_or_received = db.Column(db.String(1), nullable=False)
    fdid_receiving_aid = db.Column(db.String(5))
    state_receiving_aid = db.Column(db.String(2))
    incident_number_receiving_aid = db.Column(db.String(7))
    # Section E1 - Date and Times
    alarm_date = db.Column(db.Date, nullable=False)
    alarm_time = db.Column(db.Time, nullable=False)
    arrival_date = db.Column(db.Date, nullable=False)
    arrival_time = db.Column(db.Time, nullable=False)
    controlled_date = db.Column(db.Date)
    controlled_time = db.Column(db.Time)
    cleared_date = db.Column(db.Date)
    cleared_time = db.Column(db.Time)
    # Section E2 - Shifts and Alarms
    shift_or_platoon = db.Column(db.String(1))
    alarms = db.Column(db.String(2))
    district = db.Column(db.String(3))
    # Section E3 - Special Studies
    special_study_sequence_number_1 = db.Column(db.String(3))
    special_study_id_1 = db.Column(db.String(5))
    special_study_code_1 = db.Column(db.String(5))
    special_study_sequence_number_2 = db.Column(db.String(3))
    special_study_id_2 = db.Column(db.String(5))
    special_study_code_2 = db.Column(db.String(5))
    # Section F - Actions Taken
    actions_taken_1 = db.Column(db.String(50), nullable=False)
    actions_taken_2 = db.Column(db.String(50))
    actions_taken_3 = db.Column(db.String(50))
    # Section G1 - Resources
    suppression_apparatus = db.Column(db.String(4))
    suppression_personnel = db.Column(db.String(4))
    ems_apparatus = db.Column(db.String(4))
    ems_personnel = db.Column(db.String(4))
    other_apparatus = db.Column(db.String(4))
    other_personnel = db.Column(db.String(4))
    resource_count_includes_aid_received = db.Column(db.String(1))
    # Section G2 - Estimated Dollar Losses and Values
    property_loss = db.Column(db.String(9))
    contents_loss = db.Column(db.String(9))
    property_value = db.Column(db.String(9))
    contents_value = db.Column(db.String(9))
    # Section H - Completed Models
    # Section H1 - Casualties
    fire_service_deaths = db.Column(db.String(3))
    fire_service_injuries = db.Column(db.String(3))
    civilian_deaths = db.Column(db.String(3))
    civilian_injuries = db.Column(db.String(3))
    # Section H2 - Detector
    detector = db.Column(db.String(50))
    # Section H3 - Hazardous materials Release
    hazmat_release = db.Column(db.String(50))
    # Section I - Mixed Use
    mixed_use = db.Column(db.String(50))
    # Section J - Property Use
    property_use = db.Column(db.String(50))
    # Section K1 - Person/Entity Involved
    business_name_involved = db.Column(db.String(25))
    telephone_number_involved = db.Column(db.String(10))
    name_prefix_involved = db.Column(db.String(10))
    firstname_involved = db.Column(db.String(15))
    middleinitial_involved = db.Column(db.String(1))
    lastname_involved = db.Column(db.String(25))
    name_suffix_involved = db.Column(db.String(10))
    same_as_incident_location_involved = db.Column(db.String(1))
    number_milepost_involved = db.Column(db.String(8))
    street_prefix_involved = db.Column(db.String(10))
    street_highway_involved = db.Column(db.String(20))
    street_type_involved = db.Column(db.String(10))
    street_suffix_involved = db.Column(db.String(10))
    apartment_suite_room_involved = db.Column(db.String(15))
    city_involved = db.Column(db.String(20))
    state_involved = db.Column(db.String(2))
    zipcode_involved = db.Column(db.String(9))
    pobox_involved = db.Column(db.String(10))
    # Section K2 - Owner
    same_as_person_involved = db.Column(db.String(1))
    business_name_owner = db.Column(db.String(25))
    telephone_number_owner = db.Column(db.String(10))
    name_prefix_owner = db.Column(db.String(10))
    firstname_owner = db.Column(db.String(15))
    middleinitial_owner = db.Column(db.String(1))
    lastname_owner = db.Column(db.String(25))
    name_suffix_owner = db.Column(db.String(10))
    same_as_incident_location_owner = db.Column(db.String(1))
    number_milepost_owner = db.Column(db.String(8))
    street_prefix_owner = db.Column(db.String(10))
    street_highway_owner = db.Column(db.String(20))
    street_type_owner = db.Column(db.String(10))
    street_suffix_owner = db.Column(db.String(10))
    apartment_suite_room_owner = db.Column(db.String(15))
    city_owner = db.Column(db.String(20))
    state_owner = db.Column(db.String(2))
    zipcode_owner = db.Column(db.String(9))
    pobox_owner = db.Column(db.String(10))
    # Section L - Remarks
    remarks = db.Column(db.String(255))
    # Section M - Authorization
    officer_id = db.Column(db.String(9))
    officer_lastname = db.Column(db.String(25))
    officer_firstname = db.Column(db.String(15))
    officer_middleinitial = db.Column(db.String(1))
    officer_rank = db.Column(db.String(10))
    officer_assignment = db.Column(db.String(10))
    officer_date = db.Column(db.Date)
    same_as_officer = db.Column(db.String(1))
    member_id = db.Column(db.String(9))
    member_lastname = db.Column(db.String(25))
    member_firstname = db.Column(db.String(15))
    member_middleinitial = db.Column(db.String(1))
    member_rank = db.Column(db.String(10))
    member_assignment = db.Column(db.String(10))
    member_date = db.Column(db.Date)
