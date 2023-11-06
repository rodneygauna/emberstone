"""
Incidents > views.py
Incidents views for emberstone
"""

# Imports
from datetime import datetime
from flask import (
    Blueprint, render_template, redirect, url_for, flash,
)
from flask_login import (
    login_required, current_user
)
from src.nfirsforms.nfirs1basic import BasicModuleForm
from src import db
from src.models import NFIRS1Basic


# Blueprint variable
incidents_bp = Blueprint('incidents', __name__)


# Helper Functions
def add_incident_to_db(incident):
    """Add Incident to database"""
    db.session.add(incident)
    db.session.commit()


# Route - Incidents Landing Page
@incidents_bp.route('/incidents')
@login_required
def incidents():
    '''Route: Incidents Landing Page'''

    return render_template(
        'incidents/incidents.html',
        title='Incidents'
    )


# Route - Incidents > NFIRS 1 > Add
@login_required
@incidents_bp.route('/incidents/nfirs1/new', methods=['GET', 'POST'])
def new_nfirs1():
    """Basic Incident Information (NFIRS 1)"""

    form = BasicModuleForm()

    if form.validate_on_submit():
        # Create a dictionary to map form data to model
        incident_data = {field.name: getattr(
            form, field.name).data for field in form}
        # Add timestamps and user info
        incident_data.update({
            'created_at': datetime.utcnow(),
            'created_by': current_user.id
        })
        # Create Incident
        new_incident = NFIRS1Basic(**incident_data)
        # Add Incident to database
        add_incident_to_db(new_incident)
        # Flash success message
        flash('Incident created successfully!', 'success')
        # Redirect to Incidents Landing Page
        return redirect(url_for('incidents.incidents'))

    return render_template('incidents/nfirs1.html',
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
