# Makefile
.PHONY: build run up stop clean logs bash seed test-env

# Docker-related variables
DOCKER_COMPOSE = docker-compose
DOCKERFILE = Dockerfile

# Build the Docker image
build:
	$(DOCKER_COMPOSE) build

# Run the Docker container
run:
	$(DOCKER_COMPOSE) up

# Build and run the Docker container
up:
	$(DOCKER_COMPOSE) up --build -d

# Stop and remove the Docker container
stop:
	$(DOCKER_COMPOSE) down

# Clean up Docker images and volumes
clean:
	$(DOCKER_COMPOSE) down -v --rmi local

# View the logs
logs:
	$(DOCKER_COMPOSE) logs --tail=100 -f

# Container bash
bash:
	$(DOCKER_COMPOSE) exec app /bin/bash

# Seed the database with test data
seed:
	$(DOCKER_COMPOSE) exec app flask commands db_seed

# Test environment
test-env: clean up seed
