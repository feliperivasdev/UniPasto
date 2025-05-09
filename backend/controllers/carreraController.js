const carrera = require('../models').carrera_model;
const universidad = require('../models').universidad_model;
const costos = require('../models').costos_model;
const planes_de_estudio = require('../models').planes_de_estudio_model;

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
    },
    getCarrerasByUniversidad(req, res) {
        const id_universidad = req.params.id_universidad;
    
        return carrera.findAll({
            where: { id_universidad },
            include: [costos]  // Incluye modelos relacionados
        })
        .then(carreras => {
            if (!carreras || carreras.length === 0) {
                return res.status(404).send({ message: 'No se encontraron carreras para esta universidad.' });
            }
            return res.status(200).send(carreras);
        })
        .catch(error => {
            console.error('Error al obtener carreras por universidad:', error);
            return res.status(400).send(error);
        });
    }
    
};