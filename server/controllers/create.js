const Category = require("../models/Catagory");
exports.create = (req, res) => {
  try {
    //new user
    const user = new Category({
      name: req.body.name,
      description: req.body.description,
    });
    //save data
    await Category.insert(user);
  } catch (error) {
    res.status(400).send({ message: "content cannot be empty" });
  }
};
