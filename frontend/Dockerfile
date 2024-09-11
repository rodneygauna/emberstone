# Create image based on the official Node image from dockerhub
FROM node

# Create app directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# Install dependecies
RUN npm ci

# Get all the code needed to run the app
COPY . /usr/src/app

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
# Learned that "-- --host" to expose the app to the network
CMD ["npm", "run", "dev", "--", "--host"]