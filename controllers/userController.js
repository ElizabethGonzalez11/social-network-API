const { User, Thought, Reaction } = require('../models');
const { ObjectId } = require("mongodb")


module.exports = {
  getAllUsers(req, res) {
    User.find()
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  getUserById(req, res) {
    User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends')
      .select('-_v')
      .then((dbUserData) =>
        !dbUserData
          ? res.status(404).json({ message: 'No user with this ID' })
          : res.json(dbUserData)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },
  //update a user
  updateUser(req, res) {
    User.findOneAndUpdate({_id: req.params.userId})
    .then((dbUserData) =>
    !dbUserData
      ? res.status(404).json({ message: 'No user with this ID' })
      : res.json(dbUserData)
  )
  .catch((err) => res.status(500).json(err));
  },
  //adding a friend
  addFriend(req, res) {
    console.log('You are adding a friend');
    console.log(req.body);
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: params.friendId } },
      { runValidators: true, new: true }
    )
      .then((dbUserData) =>
        !dbUserData
          ? res
              .status(404) 
              .json({ message: 'No user found with that ID' })
          : res.json(dbUserData)
      )
      .catch((err) => res.status(500).json(err));
  },
};

