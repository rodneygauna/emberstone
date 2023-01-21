'''
Settings views for emberstone
'''

# Imports
from flask import Blueprint, render_template
from flask_login import login_required, current_user
from src import db


# Blueprint variable
settings_bp = Blueprint('settings', __name__)


# Database - Departments variable
departments = db.departments
users = db.users


# Routes
# Settings Page
@settings_bp.route('/settings')
@login_required
def settings():
    '''Route: Settings Page'''
    user = users.find_one({'email': current_user.email})
    department = user['departments'][0]
    return render_template('settings.html',
                           department=department,
                           title='Emberstone - Settings')
