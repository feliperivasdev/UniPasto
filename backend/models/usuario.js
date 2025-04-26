const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id_usuario: {
      type: DataTypes.CHAR(30),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id_usuario",
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
    email: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "email",
      autoIncrement: false,
      unique: "usuario_email_key"
    },
    contrasena: {
      type: DataTypes.CHAR(255),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "contrasena",
      autoIncrement: false
    },
    tipo_usuario: {
      type: DataTypes.CHAR(50),
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "tipo_usuario",
      autoIncrement: false
    }
  };
  const options = {
    tableName: "usuario",
    comment: "",
    indexes: []
  };
  const UsuarioModel = sequelize.define("usuario_model", attributes, options);
  return UsuarioModel;
};