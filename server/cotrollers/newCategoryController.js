exports.newCategoryHomepage = (req, res, next) => {
  res.render("new-category", { title: "Record Store" });
};
