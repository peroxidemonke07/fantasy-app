# Use an official Node.js runtime as a parent image
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install dependencies
RUN npm install

# Expose the port the app will run on
EXPOSE 5008

# Define the command to run the app
CMD ["node", "server.js"]
