# dummy Kedro API Docker file
FROM node:18-slim

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 5008

CMD ["node", "server.js"]
