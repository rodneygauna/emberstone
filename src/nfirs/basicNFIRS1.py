'''
Basic Module (NFIRS-1) form
'''

# Imports
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField, IntegerField
from wtforms import DateField, TimeField, BooleanField
from wtforms.validators import DataRequired, InputRequired, Length
from src.dictionaries import INDICENT_REPORTING_STATUS, LOCATION
from src.dictionaries import STREET_PREFIX_SUFFIX, STREET_TYPE_CHOICES, STATE
from src.dictionaries import INCIDENT_TYPE, AID_GIVEN, ACTIONS_TAKEN, DETECTOR
from src.dictionaries import HAZARDOUS_MATERIALS_RELEASE


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
    census_tract = StringField('Census Tract', validators=[Length(max=8)])
    milepost = StringField('Milepost', validators=[Length(max=8)])
    street_prefix = SelectField('Street Prefix', choices=STREET_PREFIX_SUFFIX)
    street_highway = StringField(
        'Street or Highway Name', validators=[Length(max=30)])
    street_type = SelectField('Street Type', choices=STREET_TYPE_CHOICES)
    street_suffix = SelectField('Street Suffix', choices=STREET_PREFIX_SUFFIX)
    apartment_suite_room = StringField(
        'Apartment, Suite, or Room', validators=[Length(max=15)])
    city = StringField('City', validators=[Length(max=50)])
    state = SelectField('State', choices=STATE)
    zipcode = StringField('ZIP Code', validators=[Length(min=5, max=9)])
    crossstreet_directions_usnationalgrid = StringField(
        'Cross Street, Directions, or US National Grid',
        validators=[Length(max=30)])

    # Section C - Incident Type
    incident_type = SelectField('Incident Type', choices=INCIDENT_TYPE)

    # Section D - Aid Given or Received
    aid_given_or_received = SelectField(
        'Aid Given or Received', choices=AID_GIVEN,
        validators=[DataRequired()])
    fdid_receiving_aid = StringField(
        'FDID Receiving Aid', validators=[Length(min=5, max=5)])
    state_receiving_aid = SelectField('State Receiving Aid', choices=STATE)
    incident_number_receiving_aid = IntegerField(
        'Incident Number Receiving Aid', validators=[Length(max=7)])

    # Section E1 - Dates and Times
    alarm_date = DateField('Alarm Date', validators=[InputRequired()])
    alarm_time = TimeField('Alarm Time', validators=[InputRequired()])
    arrival_date = DateField('Arrival Date', validators=[InputRequired()])
    arrival_time = TimeField('Arrival Time', validators=[InputRequired()])
    controlled_date = DateField('Controlled Date')
    controlled_time = TimeField('Controlled Time')
    cleared_date = DateField('Cleared Date')
    cleared_time = TimeField('Cleared Time')

    # Section E2 - Shifts and Alarms
    shift_or_platoon = StringField(
        'Shift or Platoon', validators=[Length(max=1)])
    alarms = StringField('Alarms', validators=[Length(max=2)])
    district = StringField('District', validators=[Length(max=3)])

    # Section E3 - Special Studies
    special_study_sequence_number_1 = StringField(
        'Special Study Sequence Number #1', validators=[Length(max=3)])
    special_study_id_1 = StringField(
        'Special Study ID #1', validators=[Length(max=5)])
    special_study_code_1 = StringField(
        'Special Study Code #1', validators=[Length(max=5)])
    special_study_sequence_number_2 = StringField(
        'Special Study Sequence Number #2', validators=[Length(max=3)])
    special_study_id_2 = StringField(
        'Special Study ID #2', validators=[Length(max=5)])
    special_study_code_2 = StringField(
        'Special Study Code #2', validators=[Length(max=5)])

    # Section F - Actions Taken
    actions_taken_1 = SelectField(
        'Primary Action Taken', choices=ACTIONS_TAKEN,
        validators=[DataRequired()])
    actions_taken_2 = SelectField(
        'Secondary Action Taken', choices=ACTIONS_TAKEN)
    actions_taken_3 = SelectField(
        'Tertiary Action Taken', choices=ACTIONS_TAKEN)

    # Section G1 - Resources
    suppression_apparatus = StringField(
        'Suppression Apparatus', validators=[Length(max=4)])
    suppression_personnel = StringField(
        'Suppression Personnel', validators=[Length(max=4)])
    ems_apparatus = StringField('EMS Apparatus', validators=[Length(max=4)])
    ems_personnel = StringField('EMS Personnel', validators=[Length(max=4)])
    other_apparatus = StringField(
        'Other Apparatus', validators=[Length(max=4)])
    other_personnel = StringField(
        'Other Personnel', validators=[Length(max=4)])
    resource_count_includes_aid_received = BooleanField(
        'Resource Count Includes Aid Received')

    # Section G2 - Estimated Dollar Losses and Values
    property_loss = StringField('Property Loss', validators=[Length(max=9)])
    contents_loss = StringField('Contents Loss', validators=[Length(max=9)])
    property_value = StringField(
        'Pre-Incident Property Value', validators=[Length(max=9)])
    contents_value = StringField(
        'Pre-Incident Contents Value', validators=[Length(max=9)])

    # Section H - Completed Modules
    # TODO: the system will automatically populate this field
    # based on the forms needed and completed by the user

    # Section H1 - Casualties
    fire_service_deaths = StringField(
        'Fire Service Deaths', validators=[Length(max=3)])
    fire_service_injuries = StringField(
        'Fire Service Injuries', validators=[Length(max=3)])
    civilian_deaths = StringField(
        'Civilian Deaths', validators=[Length(max=3)])
    civilian_injuries = StringField(
        'Civilian Injuries', validators=[Length(max=3)])

    # Section H2 - Detector
    detector = SelectField('Detector', choices=DETECTOR)

    # Section H3 - Hazardous Materials Release
    hazmat_release = SelectField(
        'Hazardous Materials Release', choices=HAZARDOUS_MATERIALS_RELEASE)

    # Submit
    submit = SubmitField('Save')
