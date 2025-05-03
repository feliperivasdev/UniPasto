var express = require("express");
var router = express.Router();
const planes_de_estudioController = require("../controllers").planes_de_estudioController;
router.get("/", planes_de_estudioController.list);
router.get('/:id_plan', planes_de_estudioController.getById);
router.post('/', planes_de_estudioController.create);
router.put('/:id_plan', planes_de_estudioController.update);
router.delete('/:id_plan', planes_de_estudioController.delete);

module.exports = router;