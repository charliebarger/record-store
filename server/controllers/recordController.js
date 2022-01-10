const getCategories = require("./helperController");
const Userdb = require("../models/Records");
const { ObjectId } = require("mongodb");
require("../models/database");

/**
 * Get
 * New Record Form Page
 */

exports.newItemHomepage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    res.render("new-record", {
      title: "Record Store",
      category,
      selectedCategory: { name: "" },
      record: "",
      selected: "",
      http: "post",
    });
  } catch (error) {
    res.status(500);
  }
};

/**
 * Get
 * Update Record Form Page. Populate form fields with record to be updated's information
 */

exports.updateItemPage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    const record = await getCategories.getRecordbyId(req.params.id);
    res.render("new-record", {
      title: "Record Store",
      category,
      selectedCategory: { name: "" },
      record,
      selected: ObjectId(record.categoryId),
      http: "put",
    });
  } catch (error) {
    res.status(500);
  }
};

/**
 * Get
 *  New Record Form Page. Only difference is the Category is pre popualted
 */

exports.addItemToGenre = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    const selectedCategory = await getCategories.getSelectedCategory(
      req.params.id
    );
    res.render("new-record", {
      title: "Record Store",
      category,
      selectedCategory,
      record: "",
      selected: ObjectId(selectedCategory._id),
      http: "post",
    });
  } catch (error) {
    res.status(500);
  }
};

/**
 * Post
 *  add a new Record to the DB
 */

exports.create = async (req, res) => {
  try {
    //new user
    const category = await getCategories.getSelectedCategory(req.body.category);
    const user = await new Userdb({
      albumName: req.body.albumName,
      artistName: req.body.artistName,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
      image: req.body.image,
      categoryId: category._id,
      categoryName: category.name,
    });
    //save data
    await Userdb.create(user);
    res.redirect(`/category/${req.body.category}`);
  } catch (error) {
    res.status(400).send({ message: "content cannot be empty" });
  }
};

/**
 * Put
 *  update a new Record in the DB
 */

exports.updateItem = async (req, res, next) => {
  try {
    const category = await getCategories.getSelectedCategory(req.body.category);
    const updatedRecord = {
      categoryId: category._id,
      categoryName: category.name,
      ...req.body,
    };
    await getCategories.updateItem(req.params.id, updatedRecord);
    res.redirect(`/record/${req.params.id}`);
  } catch (error) {}
};

/**
 * Delete
 *  delete a new Record in the DB
 */

exports.deleteItem = async (req, res, next) => {
  try {
    await getCategories.delete(req.params.id);
    res.redirect(`/category/${req.params.categoryId}`);
  } catch (error) {}
};
