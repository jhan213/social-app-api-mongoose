Adding Data w/ MongoDB
Example Data to Add User w/ POST request
{
  "username": "leonardo",
  "email": "leonardodavinci@gmail.com"
}

Example Data to Add Thought w/ POST Request
{
  "thoughtText": "Here's an interesting thought...",
  "username": "leonardo",
  "userId": "5edff358a0fcb779aa7b118b"
}

Example Data to Add Friend to User w/ POST Request
{
  "_id": (userId)
}

Example Data to Add Reaction to Thought w/ POST Request
{
  "reactionBody": "I really liked this thought.",
  "username": (username)
}