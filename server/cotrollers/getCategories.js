require("../models/database");
const Category = require("../models/Catagory");

exports.getCategory = async () => {
  try {
    const categories = await Category.find({});
    console.log(categories);
    return categories;
  } catch (error) {
    console.log("mistake in getCategories");
  }
};
