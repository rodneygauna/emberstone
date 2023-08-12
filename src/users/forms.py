"""
Users > Forms
"""

# Imports
from flask_wtf import FlaskForm
from wtforms import (
    StringField,
    PasswordField,
    SubmitField,
)
from wtforms.validators import (
    DataRequired,
    Email,
    EqualTo,
    Length,
)


# Register user form
class RegisterUserForm(FlaskForm):
    """Register user form"""

    email = StringField('Email*', validators=[DataRequired(), Email()])
    password = PasswordField('Password*', validators=[DataRequired(), EqualTo(
        'pass_confirm', message='Passwords must match.')])
    pass_confirm = PasswordField(
        'Confirm Password*', validators=[DataRequired()])
    submit = SubmitField('Register')


# Form - Login
class LoginForm(FlaskForm):
    '''Form to login a user'''

    email = StringField('Email', validators=[DataRequired(), Email()])
    password = PasswordField('Password', validators=[DataRequired()])
    submit = SubmitField('Log In')


# Form - Change Password
class ChangePasswordForm(FlaskForm):
    """Change Password Form"""

    password = PasswordField(
        label="Password*", validators=[DataRequired(), Length(min=6, max=50)]
    )
    confirm_password = PasswordField(
        label="Confirm Password*", validators=[DataRequired(),
                                               EqualTo("password")]
    )
    submit = SubmitField(label="Change Password")
