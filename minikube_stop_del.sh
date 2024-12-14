#!/bin/sh

# Stop Minikube
echo "Stopping Minikube..."
minikube stop

# Delete Minikube cluster
echo "Deleting Minikube cluster..."
minikube delete

# Confirm the actions are complete
echo "Minikube has been stopped and deleted."
