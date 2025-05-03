var express = require("express");
var router = express.Router();
const universidadController = require("../controllers").universidadController;
router.get("/", universidadController.list);
router.get('/:id_universidad', universidadController.getById);
module.exports = router;