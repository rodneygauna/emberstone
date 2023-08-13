"""
Settings > views.py
Settings views for emberstone
"""

# Imports
from flask import (
    Blueprint, render_template
)
from flask_login import (
    login_required,
    current_user
)
from src import db
from src.models import (
    User,
    Department,
    UserDepartment,
)


# Blueprint variable
settings_bp = Blueprint('settings', __name__)


# Routes
# Settings Page
@settings_bp.route('/settings')
@login_required
def settings():
    '''Route: Settings Page'''

    department = (
        db.session.query(
            UserDepartment.user_id,
            UserDepartment.department_id,
            Department.id,
            User.id,
            )
        .filter(UserDepartment.user_id == current_user.id)
        .join(User, User.id == UserDepartment.user_id)
        .join(Department, Department.id == UserDepartment.department_id)
        .first()
    )

    return render_template('settings/settings.html',
                           department=department,
                           title='Emberstone - Settings')
