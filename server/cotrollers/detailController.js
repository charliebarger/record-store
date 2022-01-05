const getCategories = require("./getCategories");

exports.detailPage = (req, res, next) => {
  res.render("detail", { title: "Record Store" });
};
