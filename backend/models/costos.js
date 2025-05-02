const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    const attributes = {
        id_costo: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: null,
            comment: null,
            primaryKey: true,
            field: "id_costo",
            autoIncrement: false
        },
        id_carrera: {
            type: DataTypes.CHAR,  // or DataTypes.STRING, verify your DB schema
            allowNull: true,
            defaultValue: null,
            comment: null,
            primaryKey: false,
            field: "id_carrera",
            autoIncrement: false,
            references: {
                key: "id_carrera",
                model: "carrera_model" // Ensure this matches the defined name
            }
        },
        matricula: {
            type: DataTypes.DOUBLE,
            allowNull: false,
            defaultValue: null,
            comment: null,
            primaryKey: false,
            field: "matricula",
            autoIncrement: false
        },
        otros_costos: {
            type: DataTypes.DOUBLE,
            allowNull: true,
            defaultValue: null,
            comment: null,
            primaryKey: false,
            field: "otros_costos",
            autoIncrement: false
        }
    };
    const options = {
        tableName: "costos",
        comment: "",
        indexes: [],
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        schema: "public",
    };
    const CostosModel = sequelize.define("costos_model", attributes, options);
    CostosModel.associate = (models) => {
        CostosModel.belongsTo(models.carrera_model, {   // Use models.carrera_model
            foreignKey: 'id_carrera'
        });
    };
    return CostosModel;
};