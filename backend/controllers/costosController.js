const costos = require('../models').costos_model;
module.exports = {
    list(req, res) {
        return costos
            .findAll({})
            .then((costos) => res.status(200).send(costos))
            .catch((error) => { res.status(400).send(error); });
    },
};