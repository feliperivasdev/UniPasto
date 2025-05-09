const universidad = require('../models').universidad_model;
const carrera = require('../models').carrera_model;
const costos = require('../models').costos_model;

module.exports = {
    list(req, res) {
        return universidad
            .findAll({})
            .then((universidad) => res.status(200).send(universidad))
            .catch((error) => { res.status(400).send(error); });
    },
    getById(req, res) {
        const id_universidad = req.params.id_universidad;
        return universidad.findByPk(id_universidad)
            .then(universidad => {
                if (!universidad) {
                    return res.status(404).send({ message: 'Universidad not found' });
                }
                return res.status(200).send(universidad);
            })
            .catch(error => res.status(400).send(error));
    },
};