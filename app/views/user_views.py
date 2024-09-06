'''Views > Users'''
from datetime import datetime, timezone
from flask import (
    Blueprint, render_template, request, flash, redirect, url_for, session)
from werkzeug.security import generate_password_hash
from flask_login import login_required, logout_user, current_user

from universal.controls import send_email
from forms.user_forms import (
    LoginForm, ResetPasswordForm, ResetRequestForm, ShortCodeForm)
from models.user_models import User
from controls.user_controls import handle_login, generate_short_code
from app import db



# Blueprint Configuration
users = Blueprint("users", __name__)


# Login Page
@users.route("/login", methods=["GET", "POST"])
def login():
    """Login page"""
    # If user is currently logged in, redirect to home
    if current_user.is_authenticated and current_user.role == "Support":
        return redirect(url_for("supportapp.support"))

    if current_user.is_authenticated and not current_user.role == "Support":
        return redirect(url_for("core.home"))

    # Form and validation
    form = LoginForm()
    if form.validate_on_submit():
        return handle_login(form)

    return render_template("users/login.html", title="Soulstone - Login",
                           form=form, user=current_user)


# Logout
@ users.route("/logout")
@ login_required
def logout():
    """Logout operation"""
    logout_user()
    flash("Logged out successfully.", category="success")
    return redirect(url_for("users.login"))


# Forgot Password - Reset Request Page
@users.route("/forgot_password_request", methods=["GET", "POST"])
def forgot_password_request():
    """Reset page"""
    form = ResetRequestForm()

    if form.validate_on_submit():
        user = User.query.filter_by(email=form.email.data).first()

        # If email is not found
        if not user:
            flash("Email not found.", category="error")

        # Generate token
        short_code = generate_short_code()
        send_email("Soulstone - Password Reset Request",
                   user.email,
                   f"You have requested a password reset for your account."
                   f"\n\nPlease use this code to reset your password:"
                   f"\n{short_code}"
                   f"\n\nIf you did not request this, please ignore"
                   f" this email."
                   )
        session['short_code'] = short_code
        session['user_id'] = user.id
        flash(
            "An email has been sent with instructions to reset your password.",
            category="success")

        return redirect(url_for("users.forgot_password_short_code"))

    return render_template(
        "users/reset_request.html",
        title="Soulstone - Password Reset Request", form=form)


# Forgot Password - Confirm Short Code Page
@ users.route("/forgot_password_short_code", methods=["GET", "POST"])
def forgot_password_short_code():
    """Allows the user to enter the short code sent to their email"""
    form = ShortCodeForm()

    if form.validate_on_submit():
        if form.short_code.data == session.get("short_code"):
            flash("Code accepted. Please enter your new password.",
                  category="success")
            return redirect(url_for("users.forgot_password_reset_password"))

        else:
            flash("The code you entered is incorrect. Please try again.",
                  category="error")

    return render_template("users/change_password_reset_code.html",
                           form=form)


# Forgot Password - Reset User Password Page
@ users.route("/forgot_password_reset_password", methods=["GET", "POST"])
def forgot_password_reset_password():
    """Allows the user to change their password"""
    form = ResetPasswordForm()

    if form.validate_on_submit():
        user = User.query.get(session.get("user_id"))
        user.password = generate_password_hash(form.password.data)
        user.password_reset_by_system = False
        user.password_reset_at = datetime.now(tz=timezone.utc)
        user.updated_at = datetime.now(tz=timezone.utc)
        user.updated_by = user.id
        db.session.commit()
        flash("Password updated!", category="success")

        return redirect(url_for("users.login"))

    return render_template("users/change_password.html",
                           title="Soulstone - Change Password", form=form)


# Change Password Page
@ users.route("/change_password", methods=["GET", "POST"])
@ login_required
def change_password():
    """Change password page"""

    form = ResetPasswordForm()

    if form.validate_on_submit():
        current_user.password = generate_password_hash(form.password.data)
        current_user.password_reset_by_system = False
        current_user.password_reset_at = datetime.now(tz=timezone.utc)
        current_user.updated_at = datetime.now(tz=timezone.utc)
        current_user.updated_by = current_user.id
        db.session.commit()
        flash("Password updated!", category="success")

        return redirect(url_for("settings.profile", user_id=current_user.id))

    return render_template("users/change_password.html",
                           title="Soulstone - Change Password", form=form)
