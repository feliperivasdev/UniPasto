const costos = require('../models').costos_model;
const universidad = require('../models').universidad_model;
const carrera = require('../models').carrera_model;


module.exports = {
    list(req, res) {
        return costos
            .findAll({})
            .then((costos) => res.status(200).send(costos))
            .catch((error) => { res.status(400).send(error); });
    },
    listWithCost: async (req, res) => {
        try {
            const data = await costos.findAll({
                include: [{
                    model: carrera,
                    attributes: ['nombre', 'id_universidad'],
                    include: [{
                        model: universidad,
                        attributes: ['nombre']
                    }]
                }]
            });
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
    getById(req, res) {
        const id_costo = req.params.id_costo;
        return Costos.findByPk(id_costo)
            .then(costo => {
                if (!costo) {
                    return res.status(404).send({ message: 'Costo not found' });
                }
                return res.status(200).send(costo);
            })
            .catch(error => res.status(400).send(error));
    },

    create(req, res) {
        return Costos.create({
            id_costo: req.body.id_costo,
            id_carrera: req.body.id_carrera,
            matricula: req.body.matricula,
            otros_costos: req.body.otros_costos
        })
            .then(costo => res.status(201).send(costo))
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        const id_costo = req.params.id_costo;
        return Costos.findByPk(id_costo)
            .then(costo => {
                if (!costo) {
                    return res.status(404).send({ message: 'Costo not found' });
                }
                return costo.update({
                    id_carrera: req.body.id_carrera || costo.id_carrera,
                    matricula: req.body.matricula || costo.matricula,
                    otros_costos: req.body.otros_costos || costo.otros_costos
                })
                    .then(updatedCosto => res.status(200).send(updatedCosto))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    delete(req, res) {
        const id_costo = req.params.id_costo;
        return Costos.findByPk(id_costo)
            .then(costo => {
                if (!costo) {
                    return res.status(404).send({ message: 'Costo not found' });
                }
                return costo.destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};