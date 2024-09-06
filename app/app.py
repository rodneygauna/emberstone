"""Flask application initialization and configuration."""
# Imports
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail

from config import BaseConfig


# Flask app configuration
app = Flask(__name__)
app.config.from_object(BaseConfig)
db = SQLAlchemy(app)


# Importing the models to create the tables
from models.user_models import *
from models.terms_of_service_models import *


# Login manager initialization
from login_config import login_manager
login_manager.init_app(app)
login_manager.login_view = 'users.login'


# Mail configuration and initialization
mail = Mail(app)
mail.init_app(app)


# Flask Blueprints - Imports
from views.core_views import core
from views.user_views import users

# Flask Blueprints - Register
app.register_blueprint(core)
app.register_blueprint(users)


# Main function
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8000, debug=True)
