var express = require("express");
var router = express.Router();
const carreraController = require("../controllers").carreraController;
router.get("/", carreraController.list);
module.exports = router;
