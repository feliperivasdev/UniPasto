const materia = require('../models').materia_model;


module.exports = {
    list(req, res) {
        return materia
            .findAll({})
            .then((materia) => res.status(200).send(materia))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {
        const id_materia = req.params.id_materia;
        return Materia.findByPk(id_materia)
            .then(materia => {
                if (!materia) {
                    return res.status(404).send({ message: 'Materia not found' });
                }
                return res.status(200).send(materia);
            })
            .catch(error => res.status(400).send(error));
    },

    create(req, res) {
        return Materia.create({
            id_materia: req.body.id_materia,
            id_plan: req.body.id_plan,
            nombre: req.body.nombre,
            creditos: req.body.creditos,
            semestre: req.body.semestre
        })
            .then(materia => res.status(201).send(materia))
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        const id_materia = req.params.id_materia;
        return Materia.findByPk(id_materia)
            .then(materia => {
                if (!materia) {
                    return res.status(404).send({ message: 'Materia not found' });
                }
                return materia.update({
                    id_plan: req.body.id_plan || materia.id_plan,
                    nombre: req.body.nombre || materia.nombre,
                    creditos: req.body.creditos || materia.creditos,
                    semestre: req.body.semestre || materia.semestre
                })
                    .then(updatedMateria => res.status(200).send(updatedMateria))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    delete(req, res) {
        const id_materia = req.params.id_materia;
        return Materia.findByPk(id_materia)
            .then(materia => {
                if (!materia) {
                    return res.status(404).send({ message: 'Materia not found' });
                }
                return materia.destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};