const mongoose = require("mongoose");

const catagorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: "this field is required",
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("Category", catagorySchema);
