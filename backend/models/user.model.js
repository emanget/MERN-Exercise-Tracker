const mongoose = require("mongoose");

//get schema class/prototype...
const Schema = mongoose.Schema;

//create instance of Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

//Create a schema specified by userSchema under the name 'User'
const User = mongoose.model("User", userSchema);

//export the User model
module.exports = User;
