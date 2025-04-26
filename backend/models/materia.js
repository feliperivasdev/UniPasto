const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_materia: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_materia",
      autoIncrement: false
    },
    id_plan: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_plan",
      autoIncrement: false,
      references: {
        key: "id_plan",
        model: "planes_de_estudio_model"
      }
    },
    nombre: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nombre",
      autoIncrement: false
    },
    creditos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "creditos",
      autoIncrement: false
    },
    semestre: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "semestre",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "materia",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: "public",
  };
  const MateriaModel = sequelize.define("materia_model", attributes, options);
  return MateriaModel;
};