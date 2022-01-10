var express = require("express");
const indexController = require("../cotrollers/indexController");
var router = express.Router();

/* GET home page for all categories */
router.get("/", indexController.homePage);
router.get("/category", indexController.homePage);
/* GET home page with specific category */
router.get("/category/:id", indexController.catagoryPage);

module.exports = router;
