#!/bin/sh

# Start Minikube
echo "Starting Minikube..."
minikube start --driver=docker

# Enable the Ingress addon
echo "Enabling Minikube Ingress addon..."
minikube addons enable ingress

# Confirm the actions are complete
echo "Minikube has started, and Ingress addon has been enabled."
