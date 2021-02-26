// import mongoose
const mongoose = require("mongoose");

// import schema
const Schema = mongoose.Schema;

//Declare Schema
const messagesSchema = new Schema({
  id: {type: Number, required: true},
  text: {type: String, required: true},
  date: {type: Date, default: Date.now},
  user_id: { type: Schema.Types.ObjectId, ref: 'User' },
});

//Export module
module.exports = mongoose.model("Message", messagesSchema);