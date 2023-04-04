FROM node:17.4.0-alpine3.14

RUN apk update
RUN apk add --no-cache bash make expect

RUN apk add --no-cache curl-dev ruby-dev build-base
RUN apk add --no-cache ruby ruby-bundler
RUN gem install contracts -v 0.16.1
RUN gem install rspec:3.11.0 aruba:2.0.0

WORKDIR /project

COPY . .
