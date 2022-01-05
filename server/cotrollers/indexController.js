const getCategories = require("./getCategories");
const Records = require("../models/Records");
/**
 * Get
 * Homepage
 */
exports.homePage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    const records = await getCategories.getRecords();
    console.log(records);
    res.render("index", { title: "Express", category, records });
  } catch (error) {
    res.status(500);
  }
};
