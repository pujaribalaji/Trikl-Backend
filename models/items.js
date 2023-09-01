const mongoose = require("mongoose");
const db = require("./db");

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

module.exports = mongoose.model("Item", itemSchema);
