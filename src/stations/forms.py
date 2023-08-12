"""
Stations > Forms
Station forms for emberstone
"""

# Imports
from flask_wtf import FlaskForm
from wtforms import (
    StringField, SubmitField, SelectField, IntegerField
)
from wtforms.validators import DataRequired, InputRequired
from src.dictionaries.dict_location import (
    STREET_PREFIX_SUFFIX, STREET_TYPE_CHOICES, STATE, COUNTRY_CODES,
)
from src.dictionaries.dict_general import STATUS

# Form - Station


class StationForm(FlaskForm):
    '''Station creation form'''
    # Station Name and Number
    name = StringField('Station Name*', validators=[InputRequired()])
    number = StringField('Station Number*', validators=[InputRequired()])
    # Address
    street_number = StringField('Street Number')
    street_prefix = SelectField('Street Prefix', choices=STREET_PREFIX_SUFFIX)
    street_name = StringField('Street Name*', validators=[InputRequired()])
    street_type = SelectField('Street Type', choices=STREET_PREFIX_SUFFIX)
    street_suffix = SelectField('Street Suffix', choices=STREET_TYPE_CHOICES)
    city = StringField('City*', validators=[InputRequired()])
    state = SelectField('State*', choices=STATE, validators=[DataRequired()])
    zipcode = IntegerField('Zipcode*', validators=[InputRequired()])
    county_code = SelectField('County Code', choices=COUNTRY_CODES)
    # Phone
    tele_phone = StringField('Phone Number*', validators=[InputRequired()])
    fax_phone = StringField('Fax Number')
    # Status
    status = SelectField('Status', choices=STATUS,
                         validators=[DataRequired()])
    # Submit
    submit = SubmitField('Save Station')
