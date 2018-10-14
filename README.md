## Table Tennis application
This is Full Stack implementation for table tennis application

## Technologies
* Node.js
* Express
* React
* Redux
* MongoDB

## User Actions
  * Add players
  * See all players
  * See player's details
  * Add matches
  * See all matches
  * See match's details
  * See head 2 head score and history matches between 2 players
  * See rankings by number of wins
  * See rankings by number of won sets
  * See rankings by number of won points

## Setting environment
* Start MongoDB on port 27017
* Server is running on port 8000
* Client is running on port 3000
* Edit ```.env``` file, specify your development or production MongoDB URI. If nothing is specified application will try to connect to MongoDB on localhost on port 27017. Also if you want to run application in production mode set ```NODE_ENV``` value in ```.env``` file to **production**. If you specify **production** environment application will try to connect to production MongoDB URI specified in ```.env``` file, otherwise application will try to connect to development MongoDB URI specified in ```.env```.
 
## Running application
```
#Install server packages
npm install

#Install client packages
npm run client-install

#Start server and client using concurrently
npm run dev
```
