# emberstone

![emberstone](/src/static/assets/logos/emberstone_logo_1024x1024.png "emberstone")

## Docker

Before building the image and running the container, you'll have to create a `.env` file.
This can be done by creating a new file in the parent directory (`emberstone`) with the filename of `.env`.

Open the `.env` file and add the following:

```text
SECRET_KEY="secret key goes here"
```

Remember to replace the examples in the quotes on your .env file.
Make the necessary changes to the .env file and save the file.

Lastly, for the data to be saved on the server, a database will need to be created. This can be done with the following command:

```python
flask commands db_create
```

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

Commands go here.
