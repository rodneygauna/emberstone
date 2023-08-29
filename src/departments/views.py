"""
Departments > views.py
Department views for emberstone
"""

# Imports
from datetime import datetime
from flask import (
    Blueprint, render_template, redirect, url_for, request, flash,
    abort, make_response
)
from flask_login import (
    login_required, current_user)
from sqlalchemy import func
from src.departments.forms import DepartmentForm
from src import db
from src.models import (
    Department
)


# Blueprint variable
departments_bp = Blueprint('departments', __name__)


# Route - Create Department Page
@departments_bp.route('/add_department', methods=['GET', 'POST'])
def add_department():
    '''Route: Add Department Page'''

    form = DepartmentForm()

    # Validate form
    if form.validate_on_submit():
        # Check if department exists
        existing_department = Department.query.filter_by(
            func.lower(Department.name) == func.lower(form.name.data)
        ).first()
        # If department exists, return error
        if existing_department:
            return abort(400, 'Error: Department already exists')

        new_department = Department(
            nfirs_id=form.nfirs_id.data,
            name=form.name.data,
            street_number=form.street_number.data,
            street_prefix=form.street_prefix.data,
            street_name=form.street_name.data,
            street_type=form.street_type.data,
            street_suffix=form.street_suffix.data,
            city=form.city.data,
            state=form.state.data,
            zipcode=form.zipcode.data,
            county_code=form.county_code.data,
            tele_phone=form.tele_phone.data,
            fax_phone=form.fax_phone.data,
            status=form.status.data,
            created_by=current_user.id,
        )
        db.session.add(new_department)
        db.session.commit()

        # Store department in a cookie
        resp = make_response(redirect(url_for('users.register')))
        resp.set_cookie('new_department', str(new_department.inserted_id))
        # Redirect user to register page with department cookie
        return resp

    return render_template('add_department.html',
                           title='Emberstone - Add Department',
                           form=form)


# Route - Edit Department Page
@departments_bp.route('/department/edit',
                      methods=['GET', 'POST'])
@login_required
def edit_department():
    '''Route: Edit Department Page'''

    form = DepartmentForm()

    # Variables
    department = Department.query.first()

    # Populate form fields
    if request.method == 'GET':
        form.nfirs_id.data = department.nfirs_id
        form.name.data = department.name
        form.street_number.data = department.street_number
        form.street_prefix.data = department.street_prefix
        form.street_name.data = department.street_name
        form.street_type.data = department.street_type
        form.street_suffix.data = department.street_suffix
        form.city.data = department.city
        form.state.data = department.state
        form.zipcode.data = department.zipcode
        form.county_code.data = department.county_code
        form.tele_phone.data = department.tele_phone
        form.fax_phone.data = department.fax_phone
        form.status.data = department.status

        # Validate form
    if form.validate_on_submit():
        department.nfirs_id = form.nfirs_id.data
        department.name = form.name.data
        department.street_number = form.street_number.data
        department.street_prefix = form.street_prefix.data
        department.street_name = form.street_name.data
        department.street_type = form.street_type.data
        department.street_suffix = form.street_suffix.data
        department.city = form.city.data
        department.state = form.state.data
        department.zipcode = form.zipcode.data
        department.county_code = form.county_code.data
        department.tele_phone = form.tele_phone.data
        department.fax_phone = form.fax_phone.data
        department.status = form.status.data
        department.updated_by = current_user.id
        department.updated_date = datetime.utcnow()
        db.session.commit()
        # Redirect user to settings page
        flash('Department updated successfully', 'success')
        return redirect(url_for('settings.settings'))

    return render_template('edit_department.html',
                           title='Emberstone - Edit Department',
                           department=department,
                           form=form)
