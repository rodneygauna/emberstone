'''Views > Core'''
from flask import Blueprint, render_template
from flask_login import login_required


# Blueprint Configuration
core = Blueprint("core", __name__)


# Homepage
@core.route("/")
@login_required
def home():
    """Home page"""

    return render_template("core/home.html")
