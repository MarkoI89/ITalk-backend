const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    first: {
      type: String,
      trim: true,
    },
    last: {
      type: String,
      trim: true,
    },
  },

  username: {
    type: Schema.Types.String,
    unique: true,
    required: true,
  },
  avatar: {
    type: Schema.Types.String,
  },
  about: {
    type: Schema.Types.String,
  },

  password: {
    type: Schema.Types.String,
    required: true,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
    lowercase: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
