// import mongoose
const mongoose = require("mongoose");

// import schema
const Schema = mongoose.Schema;

//Declare Schema
const usersSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true}
});

//Export module
module.exports = mongoose.model("user", usersSchema);