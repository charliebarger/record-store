const mongoose = require("mongoose");

const catagorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "this field is required",
  },
  description: {
    type: String,
    required: "this field is required",
  },
});

module.exports = mongoose.model("Category", catagorySchema);
