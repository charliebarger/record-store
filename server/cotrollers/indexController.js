/**
 * Get
 * Homepage
 */
exports.homePage = (req, res, next) => {
  res.render("index", { title: "Express" });
};
