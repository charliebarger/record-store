var express = require("express");
const indexController = require("../cotrollers/detailController");
var router = express.Router();

/* GET record detail pafe. */
router.get("/:id", indexController.detailPage);

module.exports = router;
