var express = require("express");
const itemFormController = require("../cotrollers/newItemController");
var router = express.Router();

/* GET home page. */
router.get("/", itemFormController.newItemHomepage);
router.get("/:id", itemFormController.addItemToGenre);
router.post("/", itemFormController.create);

module.exports = router;
