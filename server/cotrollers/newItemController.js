const getCategories = require("./getCategories");
const Userdb = require("../models/Records");
const { ObjectId } = require("mongodb");
require("../models/database");
exports.newItemHomepage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    res.render("new-item", {
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

exports.updateItemPage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    const record = await getCategories.getRecordbyId(req.params.id);
    res.render("new-item", {
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

exports.addItemToGenre = async (req, res, next) => {
  try {
    console.log("hereee");
    const category = await getCategories.getCategory();
    const selectedCategory = await getCategories.getSelectedCategory(
      req.params.id
    );
    res.render("new-item", {
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

exports.updateItem = async (req, res, next) => {
  try {
    const category = await getCategories.getSelectedCategory(req.body.category);
    const updatedRecord = {
      categoryId: category._id,
      categoryName: category.name,
      ...req.body,
    };
    await getCategories.updateItem(req.params.id, updatedRecord);
    res.redirect(`/item/${req.params.id}`);
  } catch (error) {}
};

exports.deleteItem = async (req, res, next) => {
  try {
    await getCategories.delete(req.params.id);
    res.redirect(`/category/${req.params.categoryId}`);
  } catch (error) {}
};
