var express = require("express");
const itemController = require("../controllers/recordController");
var router = express.Router();

/* GET delete a record */
router.get("/:id/:categoryId", itemController.deleteItem);

module.exports = router;
