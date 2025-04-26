const universidad = require('../models').universidad_model;
module.exports = {
    list(req, res) {
        return universidad
            .findAll({})
            .then((universidad) => res.status(200).send(universidad))
            .catch((error) => { res.status(400).send(error); });
    },
};