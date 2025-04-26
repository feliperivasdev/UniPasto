const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_universidad: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_universidad",
      autoIncrement: false
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
    tipo: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tipo",
      autoIncrement: false
    },
    ubicacion: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "ubicacion",
      autoIncrement: false
    },
    telefono: {
      type: DataTypes.CHAR(20),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "telefono",
      autoIncrement: false
    },
    sitio_web: {
      type: DataTypes.CHAR(255),
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "sitio_web",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "universidad",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: "public",
  };
  const UniversidadModel = sequelize.define("universidad_model", attributes, options);
  return UniversidadModel;
};