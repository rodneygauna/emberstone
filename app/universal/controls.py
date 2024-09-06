'''Univeral > Controllers - global controls for the application'''
import string
import random
from flask_mail import Message

from app import mail


# Send email
def send_email(subject, recipient, body):
    """Sends an email to the recipient with the specified subject and body."""

    msg = Message(subject, recipients=[
                  recipient], sender="donotreply@openvolunteer.com")
    msg.body = body
    mail.send(msg)


# Random string
def randompass(length):
    """Generates a random string for a temporary password"""
    s = string
    letters = s.ascii_lowercase + s.ascii_uppercase + s.digits
    return "".join(random.choice(letters) for i in range(length))
