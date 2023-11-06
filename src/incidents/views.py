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


# Route - Incidents > New Basic (NFIRS 1)
@login_required
@incidents_bp.route('/incidents/new/basic',
                    methods=['GET', 'POST'])
def nfirs1():
    """Basic Incident Information (NFIRS 1)"""

    form = BasicModuleForm()

    if form.validate_on_submit():
        # Create Incident
        new_incident = NFIRS1Basic(
            # Section A - Incident Header
            # Section B - Location
            # Section C - Incident Type
            # Section D - Aid Given or Received
            # Section E1 - Date and Times
            # Section E2 - Shifts and Alarms
            # Section E3 - Special Studies
            # Section F - Actions Taken
            # Section G1 - Resources
            # Section G2 - Estimated Dollar Losses and Values
            # Section H - Completed Models
            # Section H1 - Casualties
            # Section H2 - Detector
            # Section H3 - Hazardous materials Release
            # Section I - Mixed Use
            # Section J - Property Use
            # Section K1 - Person/Entity Involved
            # Section K2 - Owner
            # Section L - Remarks
            # Section M - Authorization
        )
        # Add Incident to database
        db.session.add(new_incident)
        db.session.commit()
        # Flash success message
        flash('Incident created successfully!', 'success')
        # Redirect to Incidents Landing Page
        return redirect(url_for('incidents.incidents'))
