exports.newItemHomepage = (req, res, next) => {
  res.render("new-item", { title: "Record Store" });
};
