var express = require("express");
const itemController = require("../cotrollers/newItemController");
var router = express.Router();

/* GET update record page with updated values. */
router.get("/:id", itemController.updateItemPage);
/* Post update the changes made in the db. */
router.post("/:id", itemController.updateItem);

module.exports = router;
