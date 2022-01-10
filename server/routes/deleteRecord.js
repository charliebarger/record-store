var express = require("express");
const itemController = require("../cotrollers/newItemController");
var router = express.Router();

router.get("/:id/:categoryId", itemController.deleteItem);

module.exports = router;
