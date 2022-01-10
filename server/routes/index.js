var express = require("express");
const indexController = require("../cotrollers/indexController");
const itemController = require("../cotrollers/newItemController");
const categoryFormController = require("../cotrollers/newCategoryController");
var router = express.Router();

/* GET home page. */
router.get("/", indexController.homePage);
router.get("/category", indexController.homePage);
router.get("/category/:id", indexController.catagoryPage);
router.get("/update-item/:id", itemController.updateItemPage);
router.post("/update-item/:id", itemController.updateItem);
router.get("/update-category/:id", categoryFormController.updateCategoryPage);
router.post("/update-category/:id", categoryFormController.updateCategory);
router.get("/delete/:id", itemController.deleteItem);
router.get("/deleteCategory/:id", categoryFormController.delete);

module.exports = router;
