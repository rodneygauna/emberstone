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
