const { Schema, model } = require('mongoose');

//This will not be a model, but rather will be used as athe 'reaction' field's subdocument schema in the Thought model
const ReactionSchema = new Schema({
    reactionId: {
      type: Schema.Types.ObjectId()
    },
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
});


// Schema to create thought model: thoughtText, creaated at, and username
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
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
    reactions: [ReactionSchema] 
  },
);
//virtual created called 'reactionCount to retrieve the length of the thoughts reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
  return this.friends.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
