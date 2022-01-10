var express = require("express");
const itemController = require("../cotrollers/newItemController");
var router = express.Router();

/* GET delete a record */
router.get("/:id/:categoryId", itemController.deleteItem);

module.exports = router;
