const getCategories = require("./getCategories");
const Userdb = require("../models/Catagory");
require("../models/database");

exports.newCategoryHomepage = async (req, res, next) => {
  try {
    console.log("hehehhehe");
    const category = await getCategories.getCategory();
    res.render("new-category", {
      title: "Record Store",
      category,
      selectedCategory: { name: "" },
    });
  } catch (error) {
    res.status(500);
  }
};

exports.create = async (req, res) => {
  try {
    //new user
    const user = await new Userdb({
      name: req.body.name,
      description: req.body.description,
    });
    //save data

    const categoryId = await Userdb.create(user);

    res.redirect(`/category/${user._id}`);
  } catch (error) {
    res.status(400).send({ message: "content cannot be empty" });
  }
};

exports.updateCategoryPage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    const selectedCategory = await getCategories.getSelectedCategory(
      req.params.id
    );
    console.log(selectedCategory.description);
    console.log("hi");
    res.render("new-category", {
      title: "Record Store",
      category,
      selectedCategory: selectedCategory,
    });
  } catch (error) {
    console.log("failed");
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    await getCategories.updateCategory(req.params.id, req.body);
    res.redirect(`/category/${req.params.id}`);
  } catch (error) {}
};

exports.delete = async (req, res, next) => {
  try {
    await getCategories.deleteCategory(req.params.id);
    res.redirect(`/`);
  } catch (error) {}
};
