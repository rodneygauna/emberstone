# EMBERSTONE

![emberstone](/frontend/public/images/logos/emberstone_logo_294x483.png "emberstone")

Emberstone is a free and open source (FOSS) full-stack web application for managing fire and emergency medical incidents.

The application follows the National Fire Incident Reporting System (NFIRS) standards for fire incidents and the National Emergency Medical Services Information System (NEMSIS) standards for emergency medical incidents.

Functionality includes the ability to create, read, update, and delete (CRUD) fire and emergency medical incidents.

## Technologies

The application is built using the MERN stack (MongoDB, Express, React, Node.js).

## Setup and Installation

Before building the image and running the container, you'll have to create a `.env` file.
This can be done by creating a new file in the parent directory (`emberstone`) with the filename of `.env`.

Open the `.env` file and update the following:

```env
MONGO_USERNAME=username_goes_here
MONGO_PASSWORD=password_goes_here
MONGO_DATABASE=emberstone
JWT_SECRET="long_random_string_here"
```

Remember to replace the examples in the quotes on your .env file.
Make the necessary changes to the .env file and save the file.

### Docker Build, Run, and Stop

Build the image and run the container:

```terminal
docker-compose up --build -d
```

Stop and remove the image:

```terminal
docker-compose down --rmi all
```

### Makefile Commands

To build the image and run the container:

```terminal
make build
```

To stop and remove the image:

```terminal
make stop
```

To restart the container:

```terminal
make restart
```
