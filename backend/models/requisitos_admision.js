const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_requisito: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_requisito",
      autoIncrement: false
    },
    id_universidad: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_universidad",
      autoIncrement: false,
      references: {
        key: "id_universidad",
        model: "universidad_model"
      }
    },
    puntaje_minimo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "puntaje_minimo",
      autoIncrement: false
    },
    ponderacion_materias: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "ponderacion_materias",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "requisitos_admision",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: "public",
  };
  const RequisitosAdmisionModel = sequelize.define("requisitos_admision_model", attributes, options);
  return RequisitosAdmisionModel;
};