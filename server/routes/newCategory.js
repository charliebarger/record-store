var express = require("express");
const categoryFormController = require("../cotrollers/newCategoryController");
var router = express.Router();

/* GET home page. */
router.get("/", categoryFormController.newCategoryHomepage);

module.exports = router;
