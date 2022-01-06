const getCategories = require("./getCategories");
const Userdb = require("../models/Catagory");
require("../models/database");

exports.newCategoryHomepage = async (req, res, next) => {
  try {
    const category = await getCategories.getCategory();
    res.render("new-category", { title: "Record Store", category });
  } catch (error) {
    res.status(500);
  }
};

exports.create = async (req, res) => {
  try {
    //new user
    console.log(req.body);
    const user = await new Userdb({
      name: req.body.name,
      description: req.body.description,
    });
    console.log(user);
    //save data
    await Userdb.create(user);
    res.redirect("/");
  } catch (error) {
    res.status(400).send({ message: "content cannot be empty" });
  }
};
