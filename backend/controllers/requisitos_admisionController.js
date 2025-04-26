const requisitos_admision = require('../models').carrera_model;
module.exports = {
    list(req, res) {
        return requisitos_admision
            .findAll({})
            .then((requisitos_admision) => res.status(200).send(requisitos_admision))
            .catch((error) => { res.status(400).send(error); });
    },
};