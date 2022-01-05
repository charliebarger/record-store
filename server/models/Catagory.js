const mongoose = require("mongoose");

const catagoryScheme = new mongoose.Schema({
  name: {
    type: String,
    required: "this field is required",
  },
});

module.exports = mongoose.model("Category", catagoryScheme);
