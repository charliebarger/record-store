const getCategories = require("./getCategories");
/**
 * Get
 * Homepage
 */
exports.homePage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    res.render("index", { title: "Express", category });
  } catch (error) {
    res.status(500);
  }
};
