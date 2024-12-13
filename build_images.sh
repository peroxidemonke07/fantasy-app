#!/bin/bash

# Define paths to each service's Dockerfile
FRONTEND_DIR="./frontend"
BACKEND_DIR="./backend"
KEDRO_API_DIR="./dummy-kedro-API"

# Build the frontend Docker image
echo "Building frontend Docker image..."
docker build -t fantasy-frontend $FRONTEND_DIR
if [ $? -eq 0 ]; then
  echo "Frontend Docker image built successfully."
else
  echo "Frontend Docker image build failed."
  exit 1
fi

# Build the backend Docker image
echo "Building backend Docker image..."
docker build -t fantasy-backend $BACKEND_DIR
if [ $? -eq 0 ]; then
  echo "Backend Docker image built successfully."
else
  echo "Backend Docker image build failed."
  exit 1
fi

# Build the Kedro API Docker image
echo "Building Kedro API Docker image..."
docker build -t fantasy-kedro-api $KEDRO_API_DIR
if [ $? -eq 0 ]; then
  echo "Kedro API Docker image built successfully."
else
  echo "Kedro API Docker image build failed."
  exit 1
fi

echo "All Docker images built successfully!"
