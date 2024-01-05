'''
Fire Module (NFIRS-1) form
'''

# Imports
from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, SelectField, IntegerField
from wtforms import DateField, TimeField, TextAreaField
from wtforms.validators import DataRequired, InputRequired, Length
from src.dictionaries.dict_on_site_materials_or_product_codes import (
    ON_SITE_MATERIALS_STORAGE_USE_CODES, ON_SITE_MATERIALS_OR_PRODUCT_CODES
)
from src.dictionaries.dict_area_of_fire_origin_codes import (
    AREA_OF_FIRE_ORIGIN_CODES
)
from src.dictionaries.dict_heat_source_codes import HEAT_SOURCE_CODES
from src.dictionaries.dict_item_first_ignited_codes import (
    ITEM_FIRST_IGNITED_CODES
)
from src.dictionaries.dict_type_of_material_first_ignited_codes import (
    TYPE_OF_MATERIAL_FIRST_IGNITED_CODES
)


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
    building_not_involved_flag = SelectField(
        'Building Not Invovled Flag', choices=[('N', 'No'), ('Y', 'Yes')]
    )
    number_of_buildings_involved = StringField(
        'Number of Buildings Involved', validators=[Length(max=3)])
    acres_burned_none_less_than_one = SelectField('Acres Burned', choices=[
        ('None', 'None'), ('Less than one acre', 'Less than one acre')])
    number_of_acres_burned = StringField(
        'Acres Burned', validators=[Length(max=6)])

    # Section C - On-Site Materials or Products
    on_site_materials_or_products_involved_flag = SelectField(
        'On-Site Materials or Products Involved',
        choices=[('', ''), ('None', 'None')])
    first_on_site_material_storage_use = SelectField(
        'On-Site Materials Storage Use (1)',
        choices=ON_SITE_MATERIALS_STORAGE_USE_CODES)
    first_on_site_material_code = SelectField(
        'On-Site Material (1)',
        choices=ON_SITE_MATERIALS_OR_PRODUCT_CODES)
    second_on_site_material_storage_use = SelectField(
        'On-Site Materials Storage Use (2)',
        choices=ON_SITE_MATERIALS_STORAGE_USE_CODES)
    second_on_site_material_code = SelectField(
        'On-Site Material (2)',
        choices=ON_SITE_MATERIALS_OR_PRODUCT_CODES)
    third_on_site_material_storage_use = SelectField(
        'On-Site Materials Storage Use (3)',
        choices=ON_SITE_MATERIALS_STORAGE_USE_CODES)
    third_on_site_material_code = SelectField(
        'On-Site Material (3)',
        choices=ON_SITE_MATERIALS_OR_PRODUCT_CODES)

    # Section D - Ignition
    area_of_fire_origin = SelectField(
        'Area of Fire Origin', choices=AREA_OF_FIRE_ORIGIN_CODES)
    heat_source = SelectField('Heat Source', choices=HEAT_SOURCE_CODES)
    item_first_ignited = SelectField(
        'Item First Ignited', choices=ITEM_FIRST_IGNITED_CODES)
    fire_spread_was_confined_to_origin = SelectField(
        'Fire Spread Was Confined to Origin',
        choices=[('Y', 'Yes'), ('N', 'No')])
    type_of_material_first_ignited = SelectField(
        'Type of Material First Ignited',
        choices=TYPE_OF_MATERIAL_FIRST_IGNITED_CODES)

    # Section E1 - Cause of Ignition
    # Section E2 - Factors Contributing to Ignition
    # Section E3 - Human Factors Contributing to Ignition
    # Section F1 - Equipment Involved in Ignition
    # Section F2 - Equipment Power Surge
    # Section G - Fire Suppression Factors
    # Section H1 - Mobile Property Involved
    # Section H2 - Mobile Property Type and Make
    # Local Use
