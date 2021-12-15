const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    required: true,
    lowercase: true,
  },
  username: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  roles: {
    type: [
      {
        type: String,
        enum: ["user", "admin","editor","moderator"],
      },
    ],
    default: ["user"],
  },
  created: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
  },
});


const User = mongoose.model("User", UserSchema, "user");
module.exports = User;