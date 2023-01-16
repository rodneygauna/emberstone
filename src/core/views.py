'''
Views for the core section of the app.
'''

# Imports
from flask import Blueprint, render_template


# Blueprint variable
core_bp = Blueprint('core', __name__)


# Routes
# Homepage
@core_bp.route('/')
def index():
    '''Route: Homepage'''
    return render_template('index.html',
                           title='Emberstone - Home')
