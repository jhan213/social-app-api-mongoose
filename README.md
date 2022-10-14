# Social Network API w/ MongoDB

## Description
In this application, MongoDB is used to create, update, and delete users, their thoughts, their friends, and their reactions to other users' thoughts. The app resembles an API for a social networking application. 

## Instructions for Adding Data
### Add User w/ POST request
`{
  "username": "leonardo",
  "email": "leonardodavinci@gmail.com"
}`

### Add Thought w/ POST Request
`{
  "thoughtText": "Here's an interesting thought...",
  "username": "leonardo",
  "userId": "5edff358a0fcb779aa7b118b"
}`

### Add Friend to User w/ POST Request
`{
  "_id": (userId)
}`

### Add Reaction to Thought w/ POST Request
`{
  "reactionBody": "I really liked this thought.",
  "username": (username)
}`
