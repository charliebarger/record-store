const getCategories = require("./getCategories");

exports.detailPage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    const record = await getCategories.getRecordbyId(req.params.id);
    console.log(record);
    res.render("detail", {
      title: "Record Store",
      category,
      record,
      selectedCategory: { name: "" },
    });
  } catch (error) {
    res.status(500);
  }
};
