const { User, Thought, Reaction } = require('../models');
const { ObjectId } = require("mongodb")


module.exports = {
  getAllThoughts(req, res) {
    Thought.find()
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(500).json(err));
  },
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((dbThoughtData) =>
        !dbThoughtData
          ? res.status(404).json({ message: 'No user with this ID' })
          : res.json(dbThoughtData)
      )
      .catch((err) => res.status(500).json(err));
  },
  //adding a thought
    addThought(req, res) {
      console.log('You are adding a thought');
      console.log(req.body);
      Thought.create(
        { _id: req.params.userId },
        { $push: { thoughts: _id } },
        { new: true }
      )
        .then((dbUserData) =>
          !dbUserData
            ? res
                .status(404)
                .json({ message: 'No user found with that ID' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
    },
    //add reaction
    addReaction(req, res) {
      Thought.findOneAndUpdate(
        { _id: params.thoughtId },
        { $addToSet: { reactions:body } },
        { runValidators: true, new: true })
      .then((dbThoughtData) =>
      !dbThoughtData
        ? res.status(404).json({ message: 'No thought with this ID' })
        : res.json(dbThoughtData)
    )
    .catch((err) => res.status(500).json(err));
    },
};

