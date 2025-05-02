const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    const attributes = {
        id_plan: {
            type: DataTypes.CHAR(30),
            allowNull: false,
            defaultValue: null,
            comment: null,
            primaryKey: true,
            field: "id_plan",
            autoIncrement: false
        },
        id_carrera: {
            type: DataTypes.CHAR(30),
            allowNull: true,
            defaultValue: null,
            comment: null,
            primaryKey: false,
            field: "id_carrera",
            autoIncrement: false,
            references: {
                key: "id_carrera",
                model: "carrera_model"
            }
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: null,
            comment: null,
            primaryKey: false,
            field: "descripcion",
            autoIncrement: false
        }
    };
    const options = {
        tableName: "planes_de_estudio",
        comment: "",
        indexes: [],
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        schema: "public",
    };
    const PlanesDeEstudioModel = sequelize.define("planes_de_estudio_model", attributes, options);
    PlanesDeEstudioModel.associate = (models) => {
        PlanesDeEstudioModel.hasMany(models.materia_model, { foreignKey: 'id_plan' });  // Use models.materia_model
        PlanesDeEstudioModel.belongsTo(models.carrera_model, { foreignKey: 'id_carrera' }); // Use models.carrera_model
    };
    return PlanesDeEstudioModel;
};