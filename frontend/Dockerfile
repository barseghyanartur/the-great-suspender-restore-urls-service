# Pull official base image
FROM node:14.15.4-slim

# Set working directory
WORKDIR /usr/src/app

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install system dependencies
RUN apt-get update \
  && apt-get -y install netcat gcc mc net-tools curl \
  && apt-get clean

RUN npm install -g http-server

COPY package*.json ./

RUN yarn install

# Add app
COPY . .
