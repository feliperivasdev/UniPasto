var express = require("express");
var router = express.Router();
const materiaController = require("../controllers").materiaController;
router.get("/", materiaController.list);
module.exports = router;