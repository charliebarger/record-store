const getCategories = require("./helperController");
const Records = require("../models/Records");
const ObjectId = require("mongodb").ObjectId;
/**
 * Get
 * Homepage (All Records Page)
 */
exports.homePage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    const records = await getCategories.getRecords();

    res.render("index", {
      title: "Record Store",
      category,
      records,
      selectedCategory: { name: "all records", _id: "" },
    });
  } catch (error) {
    res.status(500);
  }
};

/**
 * Get
 * Category Specific Page
 */

exports.catagoryPage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    const selectedCategory = await getCategories.getSelectedCategory(
      req.params.id
    );
    const records = await getCategories.getRecordsbyId(req.params.id);
    res.render("index", {
      title: "Record Store",
      category,
      records,
      selectedCategory,
    });
  } catch (error) {
    res.status(500);
  }
};
