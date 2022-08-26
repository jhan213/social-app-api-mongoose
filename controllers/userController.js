const User = require('../models/User');

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true },
      function (err, docs) {
        if (err) {
          console.log(err)
        }
        else {
          console.log("Updated User : ", docs);
        }
      })
  },

  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId },
      function (err, docs) {
        if (err) {
          console.log(err)
        }
        else {
          console.log("Removed User : ", docs);
        }
      })
  },
};
