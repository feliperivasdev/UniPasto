const materia = require('../models').materia_model;
module.exports = {
    list(req, res) {
        return materia
            .findAll({})
            .then((materia) => res.status(200).send(materia))
            .catch((error) => { res.status(400).send(error); });
    },
};