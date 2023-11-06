"""
Incidents > views.py
Incidents views for emberstone
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
from src.nfirsforms.nfirs1basic import BasicModuleForm
from src import db
from src.models import NFIRS1Basic


# Blueprint variable
incidents_bp = Blueprint('incidents', __name__)


# Route - Incidents Landing Page
@incidents_bp.route('/incidents')
@login_required
def incidents():
    '''Route: Incidents Landing Page'''

    return render_template(
        'incidents/incidents.html',
        title='Incidents'
    )


# Route - Incidents > New Basic Module (NFIRS 1)
@login_required
@incidents_bp.route('/incidents/nfirs1/new',
                    methods=['GET', 'POST'])
def nfirs1():
    """Basic Incident Information (NFIRS 1)"""

    form = BasicModuleForm()

    if form.validate_on_submit():
        # Create Incident
        new_incident = NFIRS1Basic(
            # Section A - Incident Header
            # TODO: the system will automatically populate the state_fdid and incident_state fields based on the current user
            incident_date=form.incident_date.data,
            # TODO: this needs to be auto-generated based on the date
            incident_number=form.incident_number.data,
            exposure_number=form.exposure_number.data,
            incident_reporting_status=form.incident_reporting_status.data,
            # Section B - Location
            location_type=form.location_type.data,
            census_tract=form.census_tract.data,
            milepost=form.milepost.data,
            street_prefix=form.street_prefix.data,
            street_highway=form.street_highway.data,
            street_type=form.street_type.data,
            street_suffix=form.street_suffix.data,
            apartment_suite_room=form.apartment_suite_room.data,
            city=form.city.data,
            state=form.state.data,
            zipcode=form.zipcode.data,
            crossstreet_directions_usnationalgrid=form.crossstreet_directions_usnationalgrid.data,
            # Section C - Incident Type
            incident_type=form.incident_type.data,
            # Section D - Aid Given or Received
            aid_given_or_received=form.aid_given_or_received.data,
            fdid_receiving_aid=form.fdid_receiving_aid.data,
            state_receiving_aid=form.state_receiving_aid.data,
            incident_number_receiving_aid=form.incident_number_receiving_aid.data,
            # Section E1 - Date and Times
            alarm_date=form.alarm_date.data,
            alarm_time=form.alarm_time.data,
            arrival_date=form.arrival_date.data,
            arrival_time=form.arrival_time.data,
            controlled_date=form.controlled_date.data,
            controlled_time=form.controlled_time.data,
            cleared_date=form.cleared_date.data,
            cleared_time=form.cleared_time.data,
            # Section E2 - Shifts and Alarms
            shift_or_platoon=form.shift_or_platoon.data,
            alarms=form.alarms.data,
            district=form.district.data,
            # Section E3 - Special Studies
            special_study_sequence_number_1=form.special_study_sequence_number_1.data,
            special_study_id_1=form.special_study_type_1.data,
            special_study_code_1=form.special_study_code_1.data,
            special_study_sequence_number_2=form.special_study_sequence_number_2.data,
            special_study_id_2=form.special_study_type_2.data,
            special_study_code_2=form.special_study_code_2.data,
            # Section F - Actions Taken
            actions_taken_1=form.actions_taken_1.data,
            actions_taken_2=form.actions_taken_2.data,
            actions_taken_3=form.actions_taken_3.data,
            # Section G1 - Resources
            suppression_apparatus=form.suppression_apparatus.data,
            suppression_personnel=form.suppression_personnel.data,
            ems_apparatus=form.ems_apparatus.data,
            ems_personnel=form.ems_personnel.data,
            other_apparatus=form.other_apparatus.data,
            other_personnel=form.other_personnel.data,
            resource_count_includes_aid_received=form.resource_count_includes_aid_received.data,
            # Section G2 - Estimated Dollar Losses and Values
            property_loss=form.property_loss.data,
            contents_loss=form.contents_loss.data,
            property_value=form.property_value.data,
            contents_value=form.contents_value.data,
            # Section H - Completed Models
            # TODO: the system will automatically populate this field
            # based on the forms needed and completed by the user
            # Section H1 - Casualties
            fire_service_deaths=form.fire_service_deaths.data,
            fire_service_injuries=form.fire_service_injuries.data,
            civilian_deaths=form.civilian_deaths.data,
            civilian_injuries=form.civilian_injuries.data,
            # Section H2 - Detector
            dectector=form.detector.data,
            # Section H3 - Hazardous materials Release
            hazmat_release=form.hazmat_release.data,
            # Section I - Mixed Use
            mixed_use=form.mixed_use.data,
            # Section J - Property Use
            property_use=form.property_use.data,
            # Section K1 - Person/Entity Involved
            business_name_involved=form.business_name_involved.data,
            telephone_number_involved=form.telephone_number_involved.data,
            name_prefix_involved=form.name_prefix_involved.data,
            firstname_involved=form.firstname_involved.data,
            middleinitial_involved=form.middleinitial_involved.data,
            lastname_involved=form.lastname_involved.data,
            name_suffix_involved=form.name_suffix_involved.data,
            same_as_incident_location_involved=form.same_as_incident_location_involved.data,
            number_milepost_involved=form.number_milepost_involved.data,
            street_prefix_involved=form.street_prefix_involved.data,
            street_highway_involved=form.street_highway_involved.data,
            street_type_involved=form.street_type_involved.data,
            street_suffix_involved=form.street_suffix_involved.data,
            apartment_suite_room_involved=form.apartment_suite_room_involved.data,
            city_involved=form.city_involved.data,
            state_involved=form.state_involved.data,
            zipcode_involved=form.zipcode_involved.data,
            pobox_involved=form.pobox_involved.data,
            # Section K2 - Owner
            savme_as_person_involved=form.same_as_person_involved.data,
            business_name_owner=form.business_name_owner.data,
            telephone_number_owner=form.telephone_number_owner.data,
            name_prefix_owner=form.name_prefix_owner.data,
            firstname_owner=form.firstname_owner.data,
            middleinitial_owner=form.middleinitial_owner.data,
            lastname_owner=form.lastname_owner.data,
            name_suffix_owner=form.name_suffix_owner.data,
            same_as_incident_location_owner=form.same_as_incident_location_owner.data,
            number_milepost_owner=form.number_milepost_owner.data,
            street_prefix_owner=form.street_prefix_owner.data,
            street_highway_owner=form.street_highway_owner.data,
            street_type_owner=form.street_type_owner.data,
            street_suffix_owner=form.street_suffix_owner.data,
            apartment_suite_room_owner=form.apartment_suite_room_owner.data,
            city_owner=form.city_owner.data,
            state_owner=form.state_owner.data,
            zipcode_owner=form.zipcode_owner.data,
            pobox_owner=form.pobox_owner.data,
            # Section L - Remarks
            remarks=form.remarks.data,
            # Section M - Authorization
            # TODO: the system will automatically populate this field
            # based on the current user or selecting a user from a list
        )
        # Add Incident to database
        db.session.add(new_incident)
        db.session.commit()
        # Flash success message
        flash('Incident created successfully!', 'success')
        # Redirect to Incidents Landing Page
        return redirect(url_for('incidents.incidents'))

    return render_template(
        'incidents/nfirs1.html',
        title='New Incident',
        form=form
    )


# Route - Incidents > NFIRS 1 > Edit
@login_required
@incidents_bp.route('/incidents/nfirs1/edit/<int:incident_id>',
                    methods=['GET', 'POST'])
def edit_nfirs1(incident_id):
    """Basic Incident Information (NFIRS 1)"""

    form = BasicModuleForm()

    # Get Incident
    incident = NFIRS1Basic.query.get_or_404(incident_id)

    # Populate form with existing data
    form.incident_number.data = incident.incident_number
    form.incident_date.data = incident.incident_date
    form.incident_time.data = incident.incident_time
    form.incident_type.data = incident.incident_type
    form.incident_subtype.data = incident.incident_subtype
    form.incident_description.data = incident.incident_description

    if form.validate_on_submit():
        # Update Incident
        incident.incident_number = form.incident_number.data
        incident.incident_date = form.incident_date.data
        # Commit changes
        db.session.commit()
        # Flash success message
        flash('Incident updated successfully!', 'success')
        # Redirect to Incidents Landing Page
        return redirect(url_for('incidents.incidents'))

    return render_template(
        'incidents/nfirs1.html',
        title='Edit Incident',
        form=form
    )
