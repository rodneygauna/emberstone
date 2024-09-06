'''Forms > Users'''
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, SubmitField, EmailField
from wtforms.validators import DataRequired, Length, EqualTo, Email


# Form - User Registration
class RegistrationForm(FlaskForm):
    """Sign Up / Register User Form"""

    email = EmailField(
        label="Email *", validators=[DataRequired(), Email(),
                                     Length(min=3, max=150)]
    )
    first_name = StringField(
        label="First Name *", validators=[DataRequired(),
                                          Length(min=2, max=150)]
    )
    last_name = StringField(
        label="Last Name *", validators=[DataRequired(),
                                         Length(min=2, max=150)]
    )
    password = PasswordField(
        label="Password *", validators=[DataRequired(), Length(min=6, max=50)]
    )
    confirm_password = PasswordField(
        label="Confirm Password *", validators=[DataRequired(),
                                                EqualTo("password")]
    )
    submit = SubmitField(label="Register Account")


# Form - Change Password
class ChangePasswordForm(FlaskForm):
    """Change Password Form"""

    new_password = PasswordField(
        label="New Password *", validators=[DataRequired(),
                                            Length(min=6, max=50)]
    )
    confirm_new_password = PasswordField(
        label="Confirm New Password *", validators=[DataRequired(),
                                                    EqualTo("new_password")]
    )
    submit = SubmitField(label="Change Password")


# Form - Login
class LoginForm(FlaskForm):
    """Login Form"""

    email = EmailField(label="Email *", validators=[DataRequired(), Email()])
    password = PasswordField(label="Password *", validators=[DataRequired()])
    submit = SubmitField(label="Log In")


# Form - Short Code & Forgot Password - Confirm Short Code Page
class ShortCodeForm(FlaskForm):
    """Short Code Form"""

    short_code = StringField(label="Short Code *", validators=[DataRequired()])
    submit = SubmitField(label="Submit")


# Form - Forgot Password - Reset Request Page
class ResetRequestForm(FlaskForm):
    """Request Reset Password Form"""

    email = StringField(label="Email *", validators=[DataRequired()])
    submit = SubmitField(label="Request Password Reset")


# Form - Reset Password
class ResetPasswordForm(FlaskForm):
    """Reset Password Form"""

    password = PasswordField(
        label="Password *", validators=[DataRequired(), Length(min=6, max=50)]
    )
    confirm_password = PasswordField(
        label="Confirm Password *", validators=[DataRequired(),
                                                EqualTo("password")]
    )
    submit = SubmitField(label="Reset Password")
