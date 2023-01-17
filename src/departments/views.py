'''
Department views for emberstone
'''

# Imports
from flask import Blueprint, render_template, redirect, url_for
from flask_login import login_required
from src.departments.forms import DepartmentForm
from src import db


# Blueprint variable
departments_bp = Blueprint('departments', __name__)

# Database - Departments variable
departments = db.departments


# Routes
# Create Department Page
@departments_bp.route('/add_department', methods=['GET', 'POST'])
def add_department():
    '''Route: Add Department Page'''
    form = DepartmentForm()

    # Validate form
    if form.validate_on_submit():
        # Check if department exists
        existing_department = departments.find_one({'name': form.name.data})
        if existing_department:
            return render_template('add_department.html',
                                   form=form,
                                   # TODO: Fix this message
                                   error='Error: Department already exists')
        else:
            departments.insert_one({'nfirs_id': form.nfirs_id.data,
                                    'name': form.name.data,
                                    'street_number': form.street_number.data,
                                    'street_prefix': form.street_prefix.data,
                                    'street_name': form.street_name.data,
                                    'street_type': form.street_type.data,
                                    'street_suffix': form.street_suffix.data,
                                    'city': form.city.data,
                                    'state': form.state.data,
                                    'zipcode': form.zipcode.data,
                                    'county_code': form.county_code.data,
                                    'tele_phone': form.tele_phone.data,
                                    'fax_phone': form.fax_phone.data,
                                    'status': form.status.data})
            return redirect(url_for('users.register'))
    return render_template('add_department.html',
                           title='Emberstone - Add Department',
                           form=form)
