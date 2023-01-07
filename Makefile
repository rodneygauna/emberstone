.PHONY: help build up down destroy start stop restart logs ps login-emberstone debug-emberstone test_db test_env test 
build:
		docker-compose build $(c)
up-no-db:
		docker-compose up --build -d $(c)
up: up-no-db init_db
down:
		-docker-compose exec emberstone flask commands db_drop
		docker-compose down $(c)
destroy:
		docker-compose down -v $(c)
rebuild: down up
start:
		docker-compose start $(c)
stop:
		docker-compose stop $(c)
restart : stop start
logs:
		docker-compose logs --tail=100 -f $(c)
ps:
		docker-compose ps
login-emberstone:
		docker-compose exec emberstone /bin/bash
init_db:
		docker-compose exec emberstone flask commands db_create
seed_db:
		docker-compose exec emberstone flask commands db_seed_min
test_env: destroy up init_db seed_db
test:
		pytest -v
