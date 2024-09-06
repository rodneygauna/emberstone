'''
Basic configuration file for the application.
Variables are read from the environment variables from docker-compose.yml
'''
import os


class BaseConfig(object):
    '''Base configuration.'''
    # Encryption key
    SECRET_KEY = os.environ['SECRET_KEY']
    # Database configuration for SQLite3
    SQLALCHEMY_DATABASE_URI = (
        f"sqlite:///{os.path.join(os.getcwd(), 'data/database.db')}"
    )
    # Flask-Mail configuration
    MAIL_SERVER = os.environ['MAIL_SERVER']
    MAIL_PORT = os.environ['MAIL_PORT']
    MAIL_USE_TLS = os.environ['MAIL_USE_TLS'].lower() == 'true'
    MAIL_USE_SSL = os.environ['MAIL_USE_SSL'].lower() == 'true'
    MAIL_USERNAME = os.environ['MAIL_USERNAME']
    MAIL_PASSWORD = os.environ['MAIL_PASSWORD']
