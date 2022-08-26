

WHEN I enter the command to invoke the application
node server.js
THEN my server is started and the Mongoose models are synced to the MongoDB database

Connects with config

WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON

API get routes for insomnia for users and thoughts
Data is displayed in a formatted json
api/users
api/thoughts

added get routes

WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database

api post, api put, api delete for cresating, updating, deleting


WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
