var express = require("express");
const indexController = require("../cotrollers/detailController");
var router = express.Router();

/* GET home page. */
router.get("/:id", indexController.detailPage);

module.exports = router;