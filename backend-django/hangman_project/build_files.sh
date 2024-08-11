#!/bin/bash

set -e

echo "Starting build process..."

echo "Python version:"
python3.9 --version

echo "Pip version:"
python3.9 -m pip --version

echo "Installing requirements..."
python3.9 -m pip install -r requirements.txt

echo "Collecting static files..."
python3.9 manage.py collectstatic --noinput --clear

echo "Listing contents of current directory:"
ls -la

echo "Listing contents of staticfiles directory (if it exists):"
ls -la staticfiles || echo "staticfiles directory not found"

mkdir -p staticfiles

echo "Build process completed."