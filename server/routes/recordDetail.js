var express = require("express");
const indexController = require("../controllers/detailController");
var router = express.Router();

/* GET record detail page. */
router.get("/:id", indexController.detailPage);

module.exports = router;
