const mongoose = require("mongoose");

//get schema class/prototype...
const Schema = mongoose.Schema;

//create instance of Schema
const exerciseSchema = new Schema(
  {
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

//Create a schema specified by userSchema under the name 'User'
const Exercise = mongoose.model("Exercise", exerciseSchema);

//export the User model
module.exports = Exercise;
