'''
This file initializes the Flask app, the routes, and the database.
'''

# Imports
import os
import pymongo
import bcrypt
from dotenv import load_dotenv
from flask import Flask
from flask_login import LoginManager
from flask_mail import Mail


# Read Secret Key and Email Password from .env file
load_dotenv()
SECRET_KEY = os.getenv("SECRET_KEY")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")


# Flask initialization
app = Flask(__name__)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SECRET_KEY'] = SECRET_KEY


# Initialize the database
client = pymongo.MongoClient('mongodb://localhost:27017/')
db = client.get_database('emberstone')


# Initializes the login manager
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'users.login'


# Mail configuration and initialization
mail = Mail()
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True
app.config['MAIL_USERNAME'] = 'rodneygauna@gmail.com'
app.config['MAIL_PASSWORD'] = EMAIL_PASSWORD
mail.init_app(app)


# Import models
from . import models


# Blueprint imports
from emberstone.cli.commands import commands_bp
from emberstone.core.views import core_bp
from emberstone.users.views import users_bp

# Register blueprints
app.register_blueprint(commands_bp)
app.register_blueprint(core_bp)
app.register_blueprint(users_bp)
