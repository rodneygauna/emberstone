"""
Initialization and configuration for the application.
"""


# Imports
import os
from dotenv import load_dotenv
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.exc import OperationalError
from flask_migrate import Migrate
from flask_login import LoginManager


# Read .env file
load_dotenv()
SECRET_KEY = os.getenv("SECRET_KEY")


# Flask initialization
app = Flask(__name__)
app.config["SECRET_KEY"] = SECRET_KEY
# Database configuration
database_path = os.path.join(app.root_path, 'data', 'database.db')
os.makedirs(os.path.join(app.root_path, 'data'), exist_ok=True)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + database_path


# Database initialization
db = SQLAlchemy(app)


# Migrations initialization
Migrate(app, db)


# Function to create the database if it doesn't exist
def create_database_if_not_exists():
    """Create the database if it doesn't exist."""
    try:
        engine = create_engine(app.config["SQLALCHEMY_DATABASE_URI"])
        engine.connect()
    except OperationalError as e:
        app.logger.error("Database connection failed due to: %s", e)
        app.logger.info("Attempting to create the database...")
        try:
            with app.app_context():
                db.create_all()
            app.logger.info("Database created successfully.")
        except Exception as e_inner:
            app.logger.error("Database creation failed due to: %s", e_inner)
            raise e_inner


# Login manager initialization
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "users.login"

# Flask Blueprints - Imports
from src.cli.cli_commands import commands_bp
from src.core.views import core_bp
from src.incidents.views import incidents_bp
from src.users.views import users_bp
from src.departments.views import departments_bp
from src.stations.views import stations_bp
from src.settings.views import settings_bp

# Flask Blueprints - Register
app.register_blueprint(commands_bp)
app.register_blueprint(core_bp)
app.register_blueprint(incidents_bp)
app.register_blueprint(users_bp)
app.register_blueprint(departments_bp)
app.register_blueprint(stations_bp)
app.register_blueprint(settings_bp)
