var express = require("express");
const categoryFormController = require("../cotrollers/newCategoryController");
var router = express.Router();

/* GET delete a genre */
router.get("/:id", categoryFormController.delete);

module.exports = router;
