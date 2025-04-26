var express = require("express");
var router = express.Router();
const costosController = require("../controllers").costosController;
router.get("/", costosController.list);
module.exports = router;
