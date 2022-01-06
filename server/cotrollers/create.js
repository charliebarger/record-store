const Userdb = require("../models/Catagory");
exports.create = (req, res) => {
  try {
    //new user
    const user = new Userdb({
      name: req.body.name,
      description: req.body.description,
    });
    //save data
    await Userdb.insert(user);
  } catch (error) {
    res.status(400).send({ message: "content cannot be empty" });
  }
};
