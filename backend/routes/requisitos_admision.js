var express = require("express");
var router = express.Router();
const requisitos_admisionController = require("../controllers").requisitos_admisionController;
router.get("/", requisitos_admisionController.list);
module.exports = router;