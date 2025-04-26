const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const attributes = {
    id_carrera: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_carrera",
      autoIncrement: false,
    },
    id_universidad: {
      type: DataTypes.CHAR(30),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_universidad",
      autoIncrement: false,
      references: {
        key: "id_universidad",
        model: "universidad_model",
      },
    },
    nombre: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nombre",
      autoIncrement: false,
    },
    duracion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "duracion",
      autoIncrement: false,
    },
    tipo_titulo: {
      type: DataTypes.CHAR(100),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tipo_titulo",
      autoIncrement: false,
    },
  };
  const options = {
    tableName: "carrera",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: "public",
  };
  const CarreraModel = sequelize.define("carrera_model", attributes, options);
  return CarreraModel;
};
