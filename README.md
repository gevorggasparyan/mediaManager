# Media Manager Documentation

## Table of Contents

1. [Introduction](#1-introduction)
    - [Project Overview](#project-overview)
    - [Technical Stack](#technical-stack)

2. [Installation](#2-installation)
    - [Prerequisites](#prerequisites)
    - [Installation Steps](#installation-steps)

3. [Configuration](#3-configuration)
    - [Run](#run-)
    - [MongoDB Configuration](#mongodb-configuration)
    - [Environment Variables](#environment-variables)

4. [Usage](#4-usage)
    - [User Registration](#user-registration)
    - [User Login](#user-login)
    - [Adding Properties](#adding-properties)
    - [Running the Scraper](#running-the-scraper)
    - [Viewing Scraped Properties](#viewing-scraped-properties)

5. [Testing](#5-testing)

6. [API Documentation](#6-api-documentation)
    - [Postman Collection](#postman-collection)

7. [Project Structure](#7-project-structure)
    - [Directory Structure](#directory-structure)


## 1. Introduction

### Project Overview

Media Manager is a web application that allows users to save their Tumblr credentials and scrape account details, such as the account name and account URL. This documentation provides detailed instructions on how to set up, configure, and use the Media Manager application.

### Technical Stack

- Frontend: React
- Backend: Express
- Scraping: Playwright
- Database: MongoDB

## 2. Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running
- Docker installed
- Internet connection (for Playwright scraping)

### Installation Steps

1. Clone project repository from GitHub.
2. Go to project directory.
3. Install dependencies for both React and Express applications.

## 3. Configuration

### Run 
For the very first time run this command:
```shell
docker-compose up --build
```

### MongoDB Configuration
Make sure you have MongoDB running on port 27017.

### Environment Variables

Create a `.env` file in the server directory with the following variables:

- `PORT`: Port where server must run.
-  `SENDER`: GMail address of sender of verification email.
-  `PASS`: App Password of GMail.
-  `JWT_SECRET_KEY`: Secret key for JWT token generation.

## 4. Usage
[Go to website](http://localhost:3000/)


### User Registration

1. Register to MediaManager in Registration window.
2. Provide username, password and email to register.
3. Your account will be created.
4. Go to your email inbox and check for activation link.

### User Login

1. Register to your MediaManager account in Login window.
2. Provide your login credentials (username, password).
3. Once logged in, you will have access to the application.

### Adding Properties

1. After logging in, you will be navigated to Properties page.
2. Enter your properties (username, password and account type(e.g. Tumblr)) in "Add Property" form.
3. Save the credentials by clicking "Add property" button.

### Running the Scraper

Once properties are added, scraper automatically will run on server and after refreshing the page scraped data will
be able to view.

### Viewing Scraped Properties

Scraped properties are available in Scraped Properties window. User can select the property, whose scraped data need to view.

## 5. Testing
Application was tested using Postman. Sending requests and checking for correct responses.

## 6. API Documentation

### Postman Collection

The Postman collection contains API endpoints for the backend. Import the collection into Postman to test API endpoints.

[Postman Collection Link](https://martian-station-600895.postman.co/workspace/New-Team-Workspace~bfa80e8d-aa3e-45e5-b70f-97cc4ef70363/collection/29734070-7a8e72fd-4b07-43ab-8c89-01d60301205c?action=share&creator=29734070)

## 7. Project Structure

### Directory Structure

- `app`: Contains the React frontend application.
- - `public`: Public files like index.html.
- - `src`: Contains components, routes and default React application necessary files.
- `server`: Contains the Express backend application.
- - `config`: Configurations for server-side application instances.
- - `libs`: Contains custom libraries.
- - `middleware`: Custom middlewares to use in routes.
- - `properties`: Properties' functionality.
- - `scraped-properties`: Scraped properties' functionality.
- - `users`: Users' functionality.
- - `validations`: Validations to use in routes.
