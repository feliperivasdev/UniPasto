var express = require("express");
var router = express.Router();
const requisitos_admisionController = require("../controllers").requisitos_admisionController;
router.get("/", requisitos_admisionController.list);
router.get('/:id_requisito', requisitos_admisionController.getById);
router.post('/', requisitos_admisionController.create);
router.put('/:id_requisito', requisitos_admisionController.update);
router.delete('/:id_requisito', requisitos_admisionController.delete);

module.exports = router;