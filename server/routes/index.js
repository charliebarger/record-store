var express = require("express");
const indexController = require("../cotrollers/indexController");
var router = express.Router();

/* GET home page. */
router.get("/", indexController.homePage);

module.exports = router;
