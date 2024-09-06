"""Controls > Users - Functions for the User Blueprint."""
from random import randint
from datetime import datetime
from flask import flash, redirect, url_for
from flask_login import login_user
from werkzeug.security import check_password_hash

from models.terms_of_service_models import TermsOfService, UserAgreement
from models.user_models import User


# Function - Handle Login
def handle_login(form):
    """Handles the login form submission."""
    user = User.query.filter_by(email=form.email.data).first()

    # If the email is not found
    if not user:
        flash(f"Account not found for {form.email.data}.", category="error")
        return redirect(url_for("users.login"))

    # If the password is incorrect
    if not check_password_hash(user.password, form.password.data):
        flash(
            f"The account information used for {form.email.data} is incorrect",
            category="error")
        return redirect(url_for("users.login"))

    # Check if user is a Support user
    if user.role == "Support":
        login_user(user, remember=True)
        flash("Logged in successfully", category="success")
        return redirect(url_for("supportapp.support"))

    # Check if password needs to be updated
    if user.password_reset_by_system:
        login_user(user, remember=True)
        flash("Please update your password.", category="error")
        return redirect(url_for("users.change_password"))

    # Check if user has agreed to the latest TOS
    active_tos = get_active_tos()

    # If no active TOS is found
    if not active_tos:
        login_user(user, remember=True)
        flash("Logged in successfully", category="success")
        return redirect(url_for("core.home"))

    latest_user_agreement = UserAgreement.query.filter(
        UserAgreement.user_id == user.id,
        UserAgreement.tos_id == active_tos.id,
    ).first()

    # If user has not agreed to the latest TOS
    if not latest_user_agreement:
        login_user(user, remember=True)
        return redirect(url_for("terms_of_service.user_agreement",
                                tos_id=active_tos.id))

    # If all checks pass, log the user in
    login_user(user, remember=True)
    flash("Logged in successfully", category="success")
    return redirect(url_for("core.home"))


# Function - Get Active TOS
def get_active_tos():
    """Queries the database for the active Terms of Service"""
    return (
        TermsOfService.query.filter(
            TermsOfService.active_date <= datetime.now(),
            TermsOfService.sunset_date > datetime.now(),
        )
        .order_by(TermsOfService.active_date.desc())
        .first()
    )


# Function - Generate Short Code
def generate_short_code():
    """Generates a random 6-digit short code for 2FA or password reset."""
    return str(randint(100000, 999999))
