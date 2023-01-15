'''
User forms for emberstone
'''

# Imports
from flask_wtf import FlaskForm
from wtforms import PasswordField, SubmitField, EmailField, BooleanField
from wtforms.validators import DataRequired, Length, Email, EqualTo


# Form - Login
class LoginForm(FlaskForm):
    '''Login form'''
    email = EmailField('Email*',
                       validators=[DataRequired(),
                                   Email()],
                       render_kw={'placeholder': 'Email'})
    password = PasswordField('Password*',
                             validators=[DataRequired(),
                                         Length(min=6)],
                             render_kw={'placeholder': 'Password'})
    remember = BooleanField('Remember Me')
    submit = SubmitField('Login')
