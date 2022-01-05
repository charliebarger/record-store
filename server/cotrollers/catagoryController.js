require("../models/database");
const Category = require("../models/Catagory");

const dummyData = [{ name: "John", name: "Hip Hop" }];

async function insertDummyItems() {
  try {
    await Category.insertMany(dummyData);
  } catch (error) {
    console.log("error");
  }
}
