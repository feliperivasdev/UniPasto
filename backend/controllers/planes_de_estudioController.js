const planes_de_estudio = require('../models').planes_de_estudio_model;
module.exports = {
    list(req, res) {
        return planes_de_estudio
            .findAll({})
            .then((planes_de_estudio) => res.status(200).send(planes_de_estudio))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {
        const id_plan = req.params.id_plan;
        return PlanesDeEstudio.findByPk(id_plan)
            .then(plan => {
                if (!plan) {
                    return res.status(404).send({ message: 'Plan de Estudio not found' });
                }
                return res.status(200).send(plan);
            })
            .catch(error => res.status(400).send(error));
    },

    create(req, res) {
        return PlanesDeEstudio.create({
            id_plan: req.body.id_plan,
            id_carrera: req.body.id_carrera,
            descripcion: req.body.descripcion
        })
            .then(plan => res.status(201).send(plan))
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        const id_plan = req.params.id_plan;
        return PlanesDeEstudio.findByPk(id_plan)
            .then(plan => {
                if (!plan) {
                    return res.status(404).send({ message: 'Plan de Estudio not found' });
                }
                return plan.update({
                    id_carrera: req.body.id_carrera || plan.id_carrera,
                    descripcion: req.body.descripcion || plan.descripcion
                })
                    .then(updatedPlan => res.status(200).send(updatedPlan))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    delete(req, res) {
        const id_plan = req.params.id_plan;
        return PlanesDeEstudio.findByPk(id_plan)
            .then(plan => {
                if (!plan) {
                    return res.status(404).send({ message: 'Plan de Estudio not found' });
                }
                return plan.destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};