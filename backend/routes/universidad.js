var express = require("express");
var router = express.Router();
const universidadController = require("../controllers").universidadController;
router.get("/", universidadController.list);
module.exports = router;