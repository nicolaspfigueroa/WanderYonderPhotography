# Wander Yonder Photography

- This web page was developed for a client who is a landscape photographer.
- He wanted a personalized website that would allow users to view his photos and purchase prints.
- He has access to the admin page where he can edit / add /delete the photos displayed.

## Setup

- Install all node packages using the command "npm i" in the root directory, and client folder.
- This app utlizes MongoDB as the database language. Download the MongoDB Compass prior to starting the server.
- Create a Stripe account and navigate to the developer tools to retrieve your public and private test keys
- Create a ".env" file within the root directory. Add two variables entitled "STRIPE_SECRET_KEY" and "STRIPE_PUBLIC_KEY". Assign them to your respective stripe keys.
- Enter "nodemon index.js" within the "server" folder to start the server.

## Execution

- Start the client by entering "npm start" within the "client/src" folder.
- The user can navigate between the different tabs to read about the photographer, brosw through his photos, and checkout.
- The photographer can "login" and has access to the admin page where he can edit / add / delete photos.

## Tech Stack

- React, JavaScript, MongoDB, Express, Firebase, Stripe, Node.js


