FROM python:3.10-slim-bullseye as getpipped

# Get Pipped
COPY requirements.txt .
RUN pip install --upgrade pip && \
    pip install --user -r requirements.txt

FROM python:3.10-slim-bullseye

RUN apt-get -yqq update && \
    apt-get -yqq install \
    libglib2.0 \
    libnss3 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

USER 1000:1000

COPY --chown=1000:1000 emberstone /app/emberstone
COPY --chown=1000:1000 app.py /app/app.py

WORKDIR /app

COPY --chown=1000:1000 --from=getpipped /root/.local /.local

ENV PATH="/.local/bin:${PATH}"

# TODO: Make this not use sqllite, can add another container with mysql/postgres/etc
RUN mkdir /app/database && chown -R 1000:1000 /app/database

CMD ["python", "app.py"]
