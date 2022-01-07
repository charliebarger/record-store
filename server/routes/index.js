var express = require("express");
const indexController = require("../cotrollers/indexController");
const itemController = require("../cotrollers/newItemController");
var router = express.Router();

/* GET home page. */
router.get("/", indexController.homePage);
router.get("/category", indexController.homePage);
router.get("/category/:id", indexController.catagoryPage);
router.get("/update-item/:id", itemController.updateItemPage);
router.post("/update-item/:id", itemController.updateItem);

module.exports = router;
