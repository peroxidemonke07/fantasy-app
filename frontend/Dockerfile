# frontend Dockerfile 

FROM node:22

# Create app directory
WORKDIR /app

# Install app dependencies
COPY ./package.json /app
COPY ./package-lock.json /app

RUN npm ci

# Bundle app source
COPY . /app

EXPOSE 3000
CMD [ "npm", "start" ]