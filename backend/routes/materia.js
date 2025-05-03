var express = require("express");
var router = express.Router();
const materiaController = require("../controllers").materiaController;
router.get("/", materiaController.list);
router.get('/:id_materia', materiaController.getById);
router.post('/', materiaController.create);
router.put('/:id_materia', materiaController.update);
router.delete('/:id_materia', materiaController.delete);

module.exports = router;