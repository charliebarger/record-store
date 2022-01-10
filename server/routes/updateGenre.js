var express = require("express");
const categoryFormController = require("../controllers/newCategoryController");
var router = express.Router();

/* GET update genre page with updated values. */
router.get("/:id", categoryFormController.updateCategoryPage);
/* Post update the changes made in the db. */
router.post("/:id", categoryFormController.updateCategory);

module.exports = router;
