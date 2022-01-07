const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  albumName: {
    type: String,
    required: "this field is required",
  },
  artistName: {
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
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "categories",
    required: "this field is required",
  },
  categoryName: {
    type: String,
    required: "this field is required",
  },
});

module.exports = mongoose.model("Records", recordSchema);
