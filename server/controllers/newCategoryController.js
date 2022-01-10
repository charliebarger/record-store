const getCategories = require("./helperController");
const Userdb = require("../models/Catagory");
require("../models/database");

/**
 * Get
 * New Genre Form Page
 */
exports.newCategoryHomepage = async (req, res, next) => {
  try {
    console.log("hehehhehe");
    const category = await getCategories.getCategory();
    res.render("new-genre", {
      title: "Record Store",
      category,
      selectedCategory: { name: "" },
    });
  } catch (error) {
    res.status(500);
    console.log(error);
  }
};

/**
 * Post
 * create a new Genre
 */
exports.create = async (req, res) => {
  try {
    //new user
    const user = await new Userdb({
      name: req.body.name,
      description: req.body.description,
    });
    //save data
    await Userdb.create(user);

    res.redirect(`/category/${user._id}`);
  } catch (error) {
    res.status(400).send({ message: "content cannot be empty" });
  }
};

/**
 * Get
 * update category page
 */
exports.updateCategoryPage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    const selectedCategory = await getCategories.getSelectedCategory(
      req.params.id
    );
    console.log(selectedCategory.description);
    console.log("hi");
    res.render("new-genre", {
      title: "Record Store",
      category,
      selectedCategory: selectedCategory,
    });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Put
 * update genre in the db
 */
exports.updateCategory = async (req, res, next) => {
  try {
    await getCategories.updateCategory(req.params.id, req.body);
    res.redirect(`/category/${req.params.id}`);
  } catch (error) {
    console.log(error);
  }
};

/**
 * delete
 * delete genre in db
 */
exports.delete = async (req, res, next) => {
  try {
    await getCategories.deleteCategory(req.params.id);
    res.redirect(`/`);
  } catch (error) {
    console.log(error);
  }
};
