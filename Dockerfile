FROM node:9.2

COPY . /app

WORKDIR /app

EXPOSE 2727

CMD [ "yarn", "start" ]
