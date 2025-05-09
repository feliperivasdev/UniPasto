var express = require("express");
var router = express.Router();
const costosController = require("../controllers").costosController;
router.get("/", costosController.list);
router.get("/detalle", costosController.listWithCost);
router.get('/:id_costo', costosController.getById);
router.post('/', costosController.create);
router.put('/:id_costo', costosController.update);
router.delete('/:id_costo', costosController.delete);

module.exports = router;