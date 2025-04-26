const planes_de_estudio = require('../models').planes_de_estudio_model;
module.exports = {
    list(req, res) {
        return planes_de_estudio
            .findAll({})
            .then((planes_de_estudio) => res.status(200).send(planes_de_estudio))
            .catch((error) => { res.status(400).send(error); });
    },
};