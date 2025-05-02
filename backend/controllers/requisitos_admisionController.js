const requisitos_admision = require('../models').carrera_model;

module.exports = {
    list(req, res) {
        return requisitos_admision
            .findAll({})
            .then((requisitos_admision) => res.status(200).send(requisitos_admision))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {
        const id_requisito = req.params.id_requisito;
        return RequisitosAdmision.findByPk(id_requisito)
            .then(requisito => {
                if (!requisito) {
                    return res.status(404).send({ message: 'Requisito de Admision not found' });
                }
                return res.status(200).send(requisito);
            })
            .catch(error => res.status(400).send(error));
    },

    create(req, res) {
        return RequisitosAdmision.create({
            id_requisito: req.body.id_requisito,
            id_universidad: req.body.id_universidad,
            puntaje_minimo: req.body.puntaje_minimo,
            ponderacion_materias: req.body.ponderacion_materias
        })
            .then(requisito => res.status(201).send(requisito))
            .catch(error => res.status(400).send(error));
    },

    update(req, res) {
        const id_requisito = req.params.id_requisito;
        return RequisitosAdmision.findByPk(id_requisito)
            .then(requisito => {
                if (!requisito) {
                    return res.status(404).send({ message: 'Requisito de Admision not found' });
                }
                return requisito.update({
                    id_universidad: req.body.id_universidad || requisito.id_universidad,
                    puntaje_minimo: req.body.puntaje_minimo || requisito.puntaje_minimo,
                    ponderacion_materias: req.body.ponderacion_materias || requisito.ponderacion_materias
                })
                    .then(updatedRequisito => res.status(200).send(updatedRequisito))
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    },

    delete(req, res) {
        const id_requisito = req.params.id_requisito;
        return RequisitosAdmision.findByPk(id_requisito)
            .then(requisito => {
                if (!requisito) {
                    return res.status(404).send({ message: 'Requisito de Admision not found' });
                }
                return requisito.destroy()
                    .then(() => res.status(204).send())
                    .catch(error => res.status(400).send(error));
            })
            .catch(error => res.status(400).send(error));
    }
};