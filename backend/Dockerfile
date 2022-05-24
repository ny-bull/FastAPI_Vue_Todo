# python3.9のイメージをダウンロード
FROM python:3.9-buster
ENV PYTHONUNBUFFERED=1

RUN mkdir src
WORKDIR /src

COPY ./api/poetry.lock ./api/pyproject.toml ./

RUN pip install poetry &&\
    poetry config virtualenvs.create false &&\
    poetry install 
WORKDIR /src/api
