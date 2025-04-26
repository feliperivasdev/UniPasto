var express = require("express");
var router = express.Router();
const planes_de_estudioController = require("../controllers").planes_de_estudioController;
router.get("/", planes_de_estudioController.list);
module.exports = router;