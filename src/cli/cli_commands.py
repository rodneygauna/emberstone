"""
CLI Commands for the app
"""


# Imports
import random
from faker import Faker
from flask import Blueprint
from werkzeug.security import generate_password_hash
from src import db
from src.models import (
    User,
    Department,
    Station,
)
from src.dictionaries.dict_names import (
    NAME_PREFIX, NAME_SUFFIX
)
from src.dictionaries.dict_location import (
    STATE, STREET_PREFIX_SUFFIX, COUNTY_CODES,
    STREET_TYPE_CHOICES
)
from src.dictionaries.dict_general import STATUS

# Faker instance
faker = Faker()


# Blueprint initialization
commands_bp = Blueprint("commands", __name__)


# Flask CLI Commands
@commands_bp.cli.command("db_create")
def db_create():
    """Creates the database using SQLAlchemy"""
    db.create_all()
    print("Database created!")


@commands_bp.cli.command("db_drop")
def db_drop():
    """Drops the database using SQLAlchemy"""
    db.drop_all()
    print("Database dropped!")


@commands_bp.cli.command("db_seed")
def db_seed():
    """Seeds the database"""

    # Variable for the maximum range
    max_range = 10
    # Data to seed the database with
    data = []

    # Create Users
    for i in range(1, max_range):
        random_name_prefix = random.choice(
            [item[0] for item in NAME_PREFIX])
        random_name_suffix = random.choice(
            [item[0] for item in NAME_SUFFIX])
        random_street_pre_suffix = random.choice(
            [item[0] for item in STREET_PREFIX_SUFFIX])

        data.append(
            User(
                email=faker.email(),
                password_hash=generate_password_hash("password"),
                firstname=faker.first_name(),
                middlename=random.choice([faker.first_name(), None]),
                lastname=faker.last_name(),
                suffixname=random.choice([random_name_suffix, None]),
                prefixname=random.choice([random_name_prefix, None]),
                street_number=faker.building_number(),
                street_prefix=random.choice([random_street_pre_suffix, None]),
                street_name=faker.street_name(),
                street_type=random.choice(
                    [item[0] for item in STREET_TYPE_CHOICES]),
                street_suffix=random.choice([random_street_pre_suffix, None]),
                city=faker.city(),
                state=random.choice([item[0] for item in STATE]),
                zipcode=faker.zipcode(),
                county_code=random.choice([item[0] for item in COUNTY_CODES]),
                tele_phone=faker.phone_number(),
                fax_phone=random.choice([faker.phone_number(), None]),
                personnel_number=random.randint(1000, 9999),
                rank=random.choice(["Firefighter", "Captain", "Chief"]),
                status=random.choice([item[0] for item in STATUS]),
            )
        )

    # Create Departments
    random_department_name = f"{faker.city()} Fire Department"
    random_street_pre_suffix = random.choice(
        [item[0] for item in STREET_PREFIX_SUFFIX])

    data.append(
        Department(
            nfirs_id=random.randint(10000, 99999),
            state_fdid=random.randint(10000, 99999),
            name=random_department_name,
            street_number=faker.building_number(),
            street_prefix=random.choice([random_street_pre_suffix, None]),
            street_name=faker.street_name(),
            street_type=random.choice(
                [item[0] for item in STREET_TYPE_CHOICES]),
            street_suffix=random.choice([random_street_pre_suffix, None]),
            city=faker.city(),
            state=random.choice([item[0] for item in STATE]),
            zipcode=faker.zipcode(),
            county_code=random.choice([item[0] for item in COUNTY_CODES]),
            tele_phone=faker.phone_number(),
            fax_phone=random.choice([faker.phone_number(), None]),
        )
    )

    # Create Stations
    for i in range(1, max_range):
        random_street_pre_suffix = random.choice(
            [item[0] for item in STREET_PREFIX_SUFFIX])

        data.append(
            Station(
                name=faker.company(),
                number=random.randint(1, 99),
                street_number=faker.building_number(),
                street_prefix=random.choice([random_street_pre_suffix, None]),
                street_name=faker.street_name(),
                street_type=random.choice(
                    [item[0] for item in STREET_TYPE_CHOICES]),
                street_suffix=random.choice([random_street_pre_suffix, None]),
                city=faker.city(),
                state=random.choice([item[0] for item in STATE]),
                zipcode=faker.zipcode(),
                county_code=random.choice([item[0] for item in COUNTY_CODES]),
                tele_phone=faker.phone_number(),
                fax_phone=random.choice([faker.phone_number(), None]),
                status=random.choice([item[0] for item in STATUS]),
            )
        )

    # Add the data to the database
    for entry in data:
        db.session.add(entry)
    db.session.commit()
    print("Database seeded!")
