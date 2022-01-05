var express = require("express");
const indexController = require("../cotrollers/indexController");
var router = express.Router();

/* GET home page. */
router.get("/", indexController.homePage);
router.get("/category", indexController.homePage);
router.get("/category/:id", indexController.catagoryPage);

router.get;

module.exports = router;
