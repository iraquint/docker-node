const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "User must have title"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "User must have body,"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
