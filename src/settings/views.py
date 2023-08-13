"""
Settings > views.py
Settings views for emberstone
"""

# Imports
from flask import (
    Blueprint, render_template
)
from flask_login import (
    login_required
)


# Blueprint variable
settings_bp = Blueprint('settings', __name__)


# Routes
# Settings Page
@settings_bp.route('/settings')
@login_required
def settings():
    '''Route: Settings Page'''

    return render_template('settings.html',
                           title='Emberstone - Settings')
