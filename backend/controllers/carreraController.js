const carrera = require('../models').carrera_model;
module.exports = {
    list(req, res) {
        return carrera
            .findAll({})
            .then((carrera) => res.status(200).send(carrera))
            .catch((error) => { res.status(400).send(error); });
    },
};