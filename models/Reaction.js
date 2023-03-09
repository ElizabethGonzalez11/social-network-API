const { Schema, model } = require('mongoose');


// Schema to create thought model: thoughtText, created at, and username
const ReactionSchema = new Schema(
  {
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
      type: String,
      required: true,
      },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);


const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;