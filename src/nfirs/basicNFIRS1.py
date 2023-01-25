'''
Basic Module (NFIRS-1) form
'''

# Imports
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField, IntegerField
from wtforms import DateField
from wtforms.validators import DataRequired, InputRequired, Length
from src.dictionaries import INDICENT_REPORTING_STATUS, LOCATION
from src.dictionaries import STREET_PREFIX_SUFFIX, STREET_TYPE_CHOICES, STATE


# Form - Basic Module (NFIRS-1)
class BasicModuleForm(FlaskForm):
    '''Basic Module (NFIRS-1) form'''
    # Section A - Incident Header
    # collects the indicent header information
    # TODO: fdid = prepopulated from the department
    # TODO: state = prepopulated from the department
    incident_date = DateField('Incident Date*', validators=[InputRequired()])
    # TODO: station = prepopulated from the station selected
    incident_number = IntegerField(
        'Incident Number*', validators=[InputRequired(), Length(max=7)])
    # Original incident exposure number will be '000',
    # and exposure are numbered sequentially and incremented by 1
    # beginning with '001'
    exposure_number = StringField(
        'Exposure Number*', validators=[InputRequired(), Length(min=3, max=3)])
    incident_reporting_status = SelectField(
        'Incident Reporting Status*', choices=INDICENT_REPORTING_STATUS,
        validators=[DataRequired()])

    # Section B - Location
    # collects information on the specific incident location
    location_type = SelectField(
        'Location Type*', choices=LOCATION, validators=[DataRequired()])
    census_tract = StringField('Census Tract')
    milepost = StringField('Milepost')
    street_prefix = SelectField('Street Prefix', choices=STREET_PREFIX_SUFFIX)
    street_highway = StringField('Street or Highway Name')
    street_type = SelectField('Street Type', choices=STREET_TYPE_CHOICES)
    street_suffix = SelectField('Street Suffix', choices=STREET_PREFIX_SUFFIX)
    apartment_suite_room = StringField('Apartment, Suite, or Room')
    city = StringField('City', validators=[Length(max=50)])
    state = SelectField('State', choices=STATE)
    zipcode = StringField('ZIP Code', validators=[Length(min=5, max=9)])

    # Submit
    submit = SubmitField('Save')
