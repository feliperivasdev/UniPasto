var express = require("express");
var router = express.Router();
const carreraController = require("../controllers").carreraController;

router.get('/universidad/:id_universidad/carreras', carreraController.getCarrerasByUniversidad); 
router.get('/', carreraController.list);
router.get('/:id_carrera', carreraController.getById);
router.post('/', carreraController.create);
router.put('/:id_carrera', carreraController.update);
router.delete('/:id_carrera', carreraController.delete);


module.exports = router;
