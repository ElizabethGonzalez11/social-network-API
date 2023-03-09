const { Schema, model } = require('mongoose');


// Schema to create user model: username, email, thoughts -ref: thought, friends -ref: user
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Enter a valid email address"],
    },
    thoughts: [
      {
      type: Schema.Types.ObjectId,
      ref: "Thought",
      },
    ],
    friends: [
      {
      type: Schema.Types.ObjectId,
      ref: "User",
      },
    ],
  },
    {
    toJSON: {
      virtual: true,
    },
    id: false,
  }
);
//virtual created called 'friendCount to retrieve the length of the users 'friends array field on query.
UserSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

const User = model('user', UserSchema);

module.exports = User;
