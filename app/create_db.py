'''Create the database and tables'''
import time
from app import app, db

time.sleep(4)  # wait for the database to start

with app.app_context():
    db.create_all()
    print('Database created')
