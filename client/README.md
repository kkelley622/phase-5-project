# MyHealth

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

For this project I wanted to create an application where users could keep track of their health data. Working as a nurse I encounter a lot of patients that are unable to provide an accurate health history for themselves. MyHealth could be a way for users to keep track of all medications, appointments, diagnoses, healthcare providers, etc. Independent of whatever health system they have received care at in the past. 

## Requirements

- Ruby 2.7.4
- Node.js (v16) and NPM
- Postgresql

## Setup

To run this app locally in the development environment, open a terminal within this app's folder. Enter the following commands in the console:

- `bundle install`
- `npm install --prefix client`

This will install dependencies. You can run the following commands to run the application:

- `rails s`: will run rails backend server on localhost:3000
- `npm start --prefix client`: will run the front end server on localhost:4000

This application was also deployed via Render.com however I lost access to the free server and it is no longer functioning.

## Instructions

- Login or signup to access this applications functionality.
- Once logged in a user can input various health data like scheduled appointments, prescriptions, past procedures and diagnoses. 
- There is currently a small database of providers. From this list, users are able to establish which provider their appointment is scheduled with.
- There is currently a small database of medications. From this list, users are able to establish which medication a specific prescription pertains to.
- A user only ever has access to their own health data.
- Delete or modify appointments.
- Delete prescriptions, procedures or diagnoses as needed.
- Logout when finished

### Acknowledgements

- Thank you to Enoch Griffith for his teaching and guidance during the building of this application.

- Thank you to my fellow Flatiron School Flex Software Engineering students who helped me understand concepts and provided encouragement.

- The outline of this application was provided by Flatiron School via the Phase-4 project guidelines.