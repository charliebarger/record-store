const getCategories = require("./getCategories");
const Records = require("../models/Records");
const ObjectId = require("mongodb").ObjectId;
/**
 * Get
 * Homepage
 */
exports.homePage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    const records = await getCategories.getRecords();
    console.log("here");
    res.render("index", {
      title: "Express",
      category,
      records,
      selectedCategory: { name: "all items", _id: "" },
    });
  } catch (error) {
    res.status(500);
  }
};

exports.catagoryPage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    const selectedCategory = await getCategories.getSelectedCategory(
      req.params.id
    );
    const records = await getCategories.getRecordsbyId(req.params.id);
    console.log(req.params.id);
    res.render("index", {
      title: "Express",
      category,
      records,
      selectedCategory,
    });
  } catch (error) {
    res.status(500);
  }
};
