# Social Network API w/ MongoDB

MongoDB is a popular database that stores unstructured data. It can be used to work with and manipulate different types of data. In this application, MongoDB is used to create, update, and delete users, their thoughts, their friends, and their reactions to other users' thoughts. It basically resembles an API for a social networking application. 

Packages Required: express

To run: `node server.js`

A walkthrough video is provided below as well as the JSON formats for creating users, thoughts, friends, reactions with POST requests.

Walkthrough Video Link: https://drive.google.com/file/d/1N9xdyVpwhaBADUiFRxrN3QRO6PYsdfnT/view

## JSON Format for Adding Data w/ MongoDB
### Example Data to Add User w/ POST request
`{
  "username": "leonardo",
  "email": "leonardodavinci@gmail.com"
}`

### Example Data to Add Thought w/ POST Request
`{
  "thoughtText": "Here's an interesting thought...",
  "username": "leonardo",
  "userId": "5edff358a0fcb779aa7b118b"
}`

### Example Data to Add Friend to User w/ POST Request
`{
  "_id": (userId)
}`

### Example Data to Add Reaction to Thought w/ POST Request
`{
  "reactionBody": "I really liked this thought.",
  "username": (username)
}`