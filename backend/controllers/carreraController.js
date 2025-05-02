const carrera = require('../models').carrera_model;

module.exports = {
    list(req, res) {
        return carrera
            .findAll({})
            .then((carrera) => res.status(200).send(carrera))
            .catch((error) => { res.status(400).send(error); });
    },
    // Get a single carrera by ID
    getById(req, res) {
        const id_carrera = req.params.id_carrera; // Assuming you're passing ID in the URL
        return Carrera.findByPk(id_carrera)
            .then(carrera => {
                if (!carrera) {
                    return res.status(404).send({ message: 'Carrera not found' });
                }
                return res.status(200).send(carrera);
            })
            .catch(error => res.status(400).send(error));
    },

    // Create a new carrera
    create(req, res) {
        return Carrera.create({
            id_carrera: req.body.id_carrera,
            id_universidad: req.body.id_universidad,
            nombre: req.body.nombre,
            duracion: req.body.duracion,
            tipo_titulo: req.body.tipo_titulo
        })
            .then(carrera => res.status(201).send(carrera))
            .catch(error => res.status(400).send(error));
    },

    // Update a carrera by ID
    update(req, res) {
        const id_carrera = req.params.id_carrera;
        return Carrera.findByPk(id_carrera)
            .then(carrera => {
                if (!carrera) {
                    return res.status(404).send({ message: 'Carrera not found' });
                }
                return carrera.update({
                    id_universidad: req.body.id_universidad || carrera.id_universidad,
                    nombre: req.body.nombre || carrera.nombre,
                    duracion: req.body.duracion || carrera.duracion,
                    tipo_titulo: req.body.tipo_titulo || carrera.tipo_titulo
                })
                    .then(updatedCarrera => res.status(200).send(updatedCarrera))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    // Delete a carrera by ID
    delete(req, res) {
        const id_carrera = req.params.id_carrera;
        return Carrera.findByPk(id_carrera)
            .then(carrera => {
                if (!carrera) {
                    return res.status(404).send({ message: 'Carrera not found' });
                }
                return carrera.destroy()
                    .then(() => res.status(204).send()) // 204 No Content for successful deletion
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};