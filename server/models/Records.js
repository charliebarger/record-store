const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "this field is required",
  },
  description: {
    type: String,
    required: "this field is required",
  },
  price: {
    type: Number,
    required: "this field is required",
  },
  quantity: {
    type: Number,
    required: "this field is required",
  },
  image: {
    type: String,
    required: "this field is required",
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "categories",
    required: "this field is required",
  },
});

module.exports = mongoose.model("Records", recordSchema);
