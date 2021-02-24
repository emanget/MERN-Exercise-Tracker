const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//This loads .env file contents into process.env object at start using dotenv config method
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors()); //allows cors - needed but I'm not 100% sure why
app.use(express.json()); //used instead of bodyparser - allows JSON parsing

//establish the DEFAULT mongoose connection to mongoDB Atlas DB
//need the bottom two parameters due to deprecation issues
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
const connection = mongoose.connection; //default mongoose connection (the mongoose object can have multiple)
//setup one time call back on the 'open' event (connection established)
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//load routing objects
const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
