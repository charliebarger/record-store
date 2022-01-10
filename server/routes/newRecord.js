var express = require("express");
const itemFormController = require("../cotrollers/newItemController");
var router = express.Router();

/* GET new record form page. */
router.get("/", itemFormController.newItemHomepage);
/* GET new record form page. Prepopulate Album Genre */
router.get("/:id", itemFormController.addItemToGenre);
/* POST new record to the database */
router.post("/", itemFormController.create);

module.exports = router;
