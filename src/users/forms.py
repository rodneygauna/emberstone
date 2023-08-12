"""
Users > forms.py
User forms for emberstone
"""

# Imports
from flask_wtf import FlaskForm
from wtforms import (
    PasswordField, SubmitField, EmailField, StringField,
    SelectField
)
from wtforms.validators import (
    InputRequired, DataRequired, Length, Email,
    EqualTo
)
from src.dictionaries.dict_location import (
    STATE, STREET_PREFIX_SUFFIX, COUNTRY_CODES,
    STREET_TYPE_CHOICES
)
from src.dictionaries.dict_general import STATUS


# Form - Login
class LoginForm(FlaskForm):
    '''Login form'''
    email = EmailField('Email*',
                       validators=[DataRequired(),
                                   Email()],
                       render_kw={'placeholder': 'Email'})
    password = PasswordField('Password*',
                             validators=[DataRequired(),
                                         Length(min=6)],
                             render_kw={'placeholder': 'Password'})
    submit = SubmitField('Login')


# Form - Registration
class RegisterForm(FlaskForm):
    '''User registration form'''
    email = EmailField('Email', validators=[InputRequired()])
    password = PasswordField('Password', validators=[
                             InputRequired(), Length(min=6)])
    confirm_password = PasswordField('Confirm Password',
                                     validators=[InputRequired(),
                                                 EqualTo('password')])
    submit = SubmitField('Register User')


# Form - User
class UserForm(FlaskForm):
    '''User form'''
    # Email
    email = EmailField('Email*', validators=[InputRequired()])
    # Name
    firstname = StringField('First Name*', validators=[InputRequired()])
    middlename = StringField('Middle Name')
    lastname = StringField('Last Name*', validators=[InputRequired()])
    suffixname = StringField('Suffix Name')
    prefixname = StringField('Prefix Name')
    # Address
    street_number = StringField('Street Number')
    apartment_number = StringField('Apartment Number')
    street_prefix = SelectField('Street Prefix', choices=STREET_PREFIX_SUFFIX)
    street_name = StringField('Street Name')
    street_type = SelectField('Street Type', choices=STREET_PREFIX_SUFFIX)
    street_suffix = SelectField('Street Suffix', choices=STREET_TYPE_CHOICES)
    city = StringField('City')
    state = SelectField('State', choices=STATE)
    zipcode = StringField('Zipcode')
    county_code = SelectField('County Code', choices=COUNTRY_CODES)
    # Phone
    tele_phone = StringField('Phone Number')
    fax_phone = StringField('Fax Number')
    # Personnel Information
    personnel_number = StringField('Personnel Number')
    rank = StringField('Rank')
    # Status
    status = SelectField('Status', choices=STATUS)
    # Submit
    submit = SubmitField('Save User')
