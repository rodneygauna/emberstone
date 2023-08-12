"""
This is the main file for the application.
"""

# Imports
from src import app


# Run the app
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
