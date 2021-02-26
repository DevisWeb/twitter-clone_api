// import mongoose
const mongoose = require("mongoose");

// import schema
const Schema = mongoose.Schema;

const messagesSchema = new Schema({
  title: "",
  content: "",
});
