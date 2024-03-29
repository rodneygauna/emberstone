"""
Departments > forms.py
Department forms for emberstone
"""

# Imports
from flask_wtf import FlaskForm
from wtforms import (
    StringField, SubmitField, SelectField, IntegerField
)
from wtforms.validators import (
    DataRequired, InputRequired, Length
)
from src.dictionaries.dict_location import (
    STREET_PREFIX_SUFFIX, STREET_TYPE_CHOICES, STATE, COUNTY_CODES,
)
from src.dictionaries.dict_general import STATUS


# Form - Department
class DepartmentForm(FlaskForm):
    '''Department creation form'''
    # NFIRS ID
    nfirs_id = StringField('NFIRS ID',
                           validators=[Length(min=5, max=5)])
    # Department Name
    name = StringField('Department Name*',
                       validators=[InputRequired()],
                       render_kw={'placeholder': 'Department Name'})
    # Address
    street_number = StringField('Street Number')
    street_prefix = SelectField('Street Prefix', choices=STREET_PREFIX_SUFFIX)
    street_name = StringField('Street Name*', validators=[InputRequired()])
    street_type = SelectField('Street Type', choices=STREET_PREFIX_SUFFIX)
    street_suffix = SelectField('Street Suffix', choices=STREET_TYPE_CHOICES)
    city = StringField('City*', validators=[InputRequired()])
    state = SelectField('State*', choices=STATE, validators=[DataRequired()])
    zipcode = IntegerField('Zipcode*', validators=[InputRequired()])
    county_code = SelectField('County Code', choices=COUNTY_CODES)
    # Phone
    tele_phone = IntegerField('Phone Number*', validators=[InputRequired()])
    fax_phone = IntegerField('Fax Number')
    # Status
    status = SelectField('Status', choices=STATUS,
                         validators=[DataRequired()])
    # Submit
    submit = SubmitField('Save')
