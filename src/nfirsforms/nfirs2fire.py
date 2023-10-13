'''
Fire Module (NFIRS-1) form
'''

# Imports
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField, IntegerField
from wtforms import DateField, TimeField, TextAreaField
from wtforms.validators import DataRequired, InputRequired, Length


# Form - Fire Module (NFIRS-2)
class FireModuleForm(FlaskForm):
    '''Fire Module (NFIRS-2) form'''
    # Section A - Incident Header
    # this section should pull from the Basic Module (NFIRS-1) form

    # Section B - Property Details
    not_residential_flag = SelectField('Not Residential Flag', choices=[
                                       ('', ''), ('Y', 'Yes'), ('N', 'No')])
    number_of_residential_units = StringField(
        'Number of Residential Units', validators=[Length(max=4)])
    number_of_buildings_involved = StringField(
        'Number of Buildings Involved', validators=[Length(max=3)])
    building_not_involved_flag = SelectField('Building Not Invovled Flag',
                                             choices=[('', ''), ('Y', 'Yes'), ('N', 'No')])
    acres_burned_none_less_than_one = SelectField('Acres Burned', choices=[
        ('N', 'No'), ('Y', 'Yes')])
    number_of_acres_burned = StringField(
        'Acres Burned', validators=[Length(max=6)])

    # Section C - On-Site Materials or Products
