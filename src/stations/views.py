"""
Stations > views.py
Station views for emberstone
"""

# Imports
from datetime import datetime
from flask import (
    Blueprint, render_template, redirect, url_for, request, flash,
)
from flask_login import (
    login_required, current_user)
from sqlalchemy import func
from src.stations.forms import StationForm
from src import db
from src.models import (
    Department, Station
)


# Blueprint variable
stations_bp = Blueprint('stations', __name__)


# Route - View Stations Page
@stations_bp.route('/view_stations')
@login_required
def view_stations():
    '''Route: View Stations Page'''

    department = Department.query.first()
    stations_list = Station.query.all()

    return render_template('view_stations.html',
                           title='Emberstone - View Stations',
                           department=department,
                           stations_list=stations_list)


# Route - Create Station Page
@stations_bp.route('/add_station',
                   methods=['GET', 'POST'])
@login_required
def add_station():
    '''Route: Add Station Page'''

    form = StationForm()

    # Variables
    department = Department.query.first()

    # Validate form
    if form.validate_on_submit():
        # Check if station exists
        existing_station = Station.query.filter_by(
            func.lower(Station.name) == func.lower(form.name.data)
        ).first()
        # If station exists, return error
        if existing_station:
            return 'Error: Station already exists', 400

        # Add station to database
        new_station = Station(
            name=form.name.data,
            number=form.number.data,
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
            status=form.status.data
        )
        db.session.add(new_station)
        db.session.commit()
        # Return to settings page
        return redirect(url_for('settings.settings'))

    return render_template('add_station.html',
                           title='Emberstone - Add Station',
                           department=department,
                           form=form)


# Route - Edit Station Page
@stations_bp.route('/edit_station/<int:station_id>',
                   methods=['GET', 'POST'])
@login_required
def edit_station(station_id):
    '''Route: Edit Station Page'''

    form = StationForm()

    # Variables
    station = Station.query.filter_by(id=station_id).first()

    # Check if station exists
    if station is None:
        return 'Error: Station does not exist', 404

    # Prepopulate form fields
    if request.method == 'GET':
        form.name.data = station.name
        form.number.data = station.number
        form.street_number.data = station.street_number
        form.street_prefix.data = station.street_prefix
        form.street_name.data = station.street_name
        form.street_type.data = station.street_type
        form.street_suffix.data = station.street_suffix
        form.city.data = station.city
        form.state.data = station.state
        form.zipcode.data = station.zipcode
        form.county_code.data = station.county_code
        form.tele_phone.data = station.tele_phone
        form.fax_phone.data = station.fax_phone
        form.status.data = station.status

    # Save changes to database
    if form.validate_on_submit():
        station.name = form.name.data
        station.number = form.number.data
        station.street_number = form.street_number.data
        station.street_prefix = form.street_prefix.data
        station.street_name = form.street_name.data
        station.street_type = form.street_type.data
        station.street_suffix = form.street_suffix.data
        station.city = form.city.data
        station.state = form.state.data
        station.zipcode = form.zipcode.data
        station.county_code = form.county_code.data
        station.tele_phone = form.tele_phone.data
        station.fax_phone = form.fax_phone.data
        station.status = form.status.data
        station.updated_date = datetime.utcnow()
        station.updated_by = current_user.id
        db.session.commit()
        # Return to settings page
        flash('Station updated successfully.', 'success')
        return redirect(url_for('settings.settings'))

    return render_template('edit_station.html',
                           title='Emberstone - Edit Station',
                           station=station,
                           form=form)
