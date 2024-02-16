Pre-Requisites for working on this Project

# INSTALL Python 3.10.0 on your system.
   - Got to Customized Installation
   - Select all the options in the first window, Click Next
   - Select all except the last two options in the second window, Click Next
   - Complete Installation

# INSTALL XAMPP Apache MySql Server on your machine
    - Just continue with the default settings

// XAMPP settings ============================

# Create a new database
    - Run the XAMPP
    - Start the Apache and MySQL modules
    - Create a new database named "resweb"

// Django Based Dependencies =========================

# Install Django
    - pip install django

# Install Django Rest Framework
    - pip install djangorestframework

# Install Django Cors Header for React Connectivity
    - pip install django-cors-headers
    - If the above command does not work use this - "python -m pip install django-cors-headers"

# Install MySQlClient for Django
    - pip install mysqlclient
    - If the above command does not work use this - "pip install --only-binary :all: mysqlclient"

# Install Djoser with JWT Authentication module
    - pip install -U djoser
    - pip install -U djangorestframework_simplejwt
    - Documentation at -> https://djoser.readthedocs.io/en/latest/getting_started.html

# Install Beautiful Soup 4
    - pip install beautifulsoup4

# Install Requests
    - pip install requests

# Install LXML Parser
    - pip install lxml

# Install PyPDF2
    - pip install PyPDF2

# Install docx2txt
    - pip install docx2txt

# Install python-pptx
    - pip install python-pptx

// Django Commands ==============================

# Make Migrations to your database
    - python manage.py makemigrations
    - python manage.py migrate

# Run Django Server
    - python manage.py runserver

//  React Basics =================================

# Create React App (Only if the project is not created, Here it is already created)
    - npx create-react-app my-app - // Incase of my-app is frontend

# Go inside to your react app directory, here "frontend" and install node modules
    - npm install

# Run React Server
    - npm start


//  React Based Dependencies =================================

# React Router DOM
    - npm install react-router-dom

# Bable Parser
    - npm install --save-dev @babel/parser


// VS Code Extentions

# Simple React Snippets
    - Install it from the VS code extensions
    - Go to Settings and Search for "Emmets"
    - On the Emmet: Include languages Place "Item: javascript" and "Value: javascriptreact" and Add it.

// Install Bootstrap 5 using Terminal
    - npm install react-bootstrap bootstrap@5.1.3
    - Place this in index.js "import 'bootstrap/dist/css/bootstrap.min.css';"

// Install Jquery on React application
    - npm install jquery

// Install Font Awesome
    - npm i --save @fortawesome/fontawesome-svg-core
    - npm install --save @fortawesome/free-solid-svg-icons
    - npm install --save @fortawesome/react-fontawesome