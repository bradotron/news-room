const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});
var Comment = mongoose.model("users", UserSchema);

 module.exports = Comment;