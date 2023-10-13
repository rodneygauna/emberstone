"""
This is the main file for the application.
"""

# Imports
from src import (
    app, db,
    create_database_if_not_exists
)


# Create the database if it doesn't exist
with app.app_context():
    create_database_if_not_exists()

    # Create the database tables
    db.create_all()


# Run the app
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
