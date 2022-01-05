const getCategories = require("./getCategories");

exports.newCategoryHomepage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    res.render("new-category", { title: "Record Store", category });
  } catch (error) {
    res.status(500);
  }
};
