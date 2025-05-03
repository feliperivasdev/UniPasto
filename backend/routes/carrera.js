var express = require("express");
var router = express.Router();
const carreraController = require("../controllers").carreraController;
router.get("/", carreraController.list);
router.get('/:id_carrera', carreraController.getById);  // GET /carreras/:id - Get one by ID
router.post('/', carreraController.create);      // POST /carreras - Create new
router.put('/:id_carrera', carreraController.update);    // PUT /carreras/:id - Update
router.delete('/:id_carrera', carreraController.delete); // DELETE /carreras/:id - Delete

module.exports = router;
