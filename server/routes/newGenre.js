var express = require("express");
const categoryFormController = require("../cotrollers/newCategoryController");
var router = express.Router();

/* GET new genre page. */
router.get("/", categoryFormController.newCategoryHomepage);
/* Post a new genre to the db */
router.post("/", categoryFormController.create);
module.exports = router;
