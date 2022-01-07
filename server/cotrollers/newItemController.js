const getCategories = require("./getCategories");
const Userdb = require("../models/Records");
require("../models/database");
exports.newItemHomepage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    res.render("new-item", { title: "Record Store", category });
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
    console.log(user);
    //save data
    await Userdb.create(user);
    res.redirect("/");
  } catch (error) {
    res.status(400).send({ message: "content cannot be empty" });
  }
};
