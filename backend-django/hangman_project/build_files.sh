#!/bin/bash
# Exit on error
set -e

echo "Installing dependencies..."
pip install -r requirements.txt

echo "Collecting static files..."
python manage.py collectstatic --noinput --clear

echo "Listing contents of staticfiles directory:"
ls -la staticfiles

echo "Build process completed."