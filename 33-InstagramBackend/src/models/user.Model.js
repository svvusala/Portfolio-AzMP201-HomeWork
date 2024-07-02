const mongoose = require("mongoose");

const userModel = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
    required: true,
  },
  friends: {
    type: [
      {
        friendId: Number,
        friendUsername: String,
      },
    ],
    default: [],
  },
  messages: {
    type: [
      {
        messageId: Number,
        messageUsername: String,
      },
    ],
    default: [],
  },
});

module.exports = mongoose.model("User", userModel);
