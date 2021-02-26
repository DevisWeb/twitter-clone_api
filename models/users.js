// import mongoose
const mongoose = require("mongoose");

// import schema
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  name: "",
  email: "",
});
