var express = require("express");
const indexController = require("../cotrollers/indexController");
const itemController = require("../cotrollers/newItemController");
const categoryFormController = require("../cotrollers/newCategoryController");
var router = express.Router();

/* GET home page. */
router.get("/", indexController.homePage);
router.get("/category", indexController.homePage);
router.get("/category/:id", indexController.catagoryPage);
router.get("/deleteCategory/:id", categoryFormController.delete);

module.exports = router;
