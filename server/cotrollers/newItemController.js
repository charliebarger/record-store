const getCategories = require("./getCategories");

exports.newItemHomepage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    res.render("new-item", { title: "Record Store", category });
  } catch (error) {
    res.status(500);
  }
};
