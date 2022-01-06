var express = require("express");
const categoryFormController = require("../cotrollers/newCategoryController");
var router = express.Router();

/* GET home page. */
router.get("/", categoryFormController.newCategoryHomepage);
router.post("/", categoryFormController.create);
module.exports = router;
