'''
Station views for emberstone
'''

# Imports
from flask import Blueprint, render_template, redirect, url_for, make_response, request
from flask_login import login_required, current_user
from bson.objectid import ObjectId
from src.stations.forms import StationForm
from src import db


# Blueprint variable
stations_bp = Blueprint('stations', __name__)

# Database - Stations variable
departments = db.departments
users = db.users
stations = db.stations


# Routes
# View Stations Page
@stations_bp.route('/view_stations/<department_id>')
@login_required
def view_stations(department_id):
    '''Route: View Stations Page'''
    department = departments.find_one({'_id': ObjectId(department_id)})
    stations_list = stations.find({'department': ObjectId(department_id)})
    return render_template('view_stations.html',
                           title='Emberstone - View Stations',
                           department=department,
                           stations_list=stations_list)


# Create Station Page
@stations_bp.route('/add_station/<department_id>', methods=['GET', 'POST'])
@login_required
def add_station(department_id):
    '''Route: Add Station Page'''
    department = departments.find_one({'_id': ObjectId(department_id)})
    form = StationForm()

    # Validate form
    if form.validate_on_submit():
        # Check if station exists
        existing_station = stations.find_one({'name': form.name.data})
        if existing_station:
            return 'Error: Station already exists', 400
        stations.insert_one(
            {'_id': ObjectId(),
             'name': form.name.data,
             'number': form.number.data,
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
             'status': form.status.data,
             'department': department['_id']})
        return redirect(url_for('settings.settings'))
    return render_template('add_station.html',
                           title='Emberstone - Add Station',
                           department=department,
                           form=form)


# Edit Station Page
@stations_bp.route('/edit_station/<station_id>', methods=['GET', 'POST'])
@login_required
def edit_station(station_id):
    '''Route: Edit Station Page'''
    station = stations.find_one({'_id': ObjectId(station_id)})
    form = StationForm()

    # Check if station exists
    if station is None:
        return 'Error: Station does not exist', 404

    if request.method == 'GET':
        form.name.data = station.get('name')
        form.number.data = station.get('number')
        form.street_number.data = station.get('street_number', '')
        form.street_prefix.data = station.get('street_prefix', '')
        form.street_name.data = station.get('street_name')
        form.street_type.data = station.get('street_type', '')
        form.street_suffix.data = station.get('street_suffix', '')
        form.city.data = station.get('city')
        form.state.data = station.get('state')
        form.zipcode.data = station.get('zipcode')
        form.county_code.data = station.get('county_code', '')
        form.tele_phone.data = station.get('tele_phone')
        form.fax_phone.data = station.get('fax_phone', '')
        form.status.data = station.get('status')

    if form.validate_on_submit():
        stations.update_one({'_id': ObjectId(station_id)},
                            {'$set': {'name': form.name.data,
                                      'number': form.number.data,
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
                                      'status': form.status.data}})
        return redirect(url_for('settings.settings'))
    return render_template('edit_station.html',
                           title='Emberstone - Edit Station',
                           station=station,
                           form=form)
