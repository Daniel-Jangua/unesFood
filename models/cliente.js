'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cliente.hasMany(models.Pedido);
    }
  };
  Cliente.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    num_celular: DataTypes.STRING,
    data_nasc: DataTypes.STRING,
    email: DataTypes.STRING,
    login: DataTypes.STRING,
    senha: DataTypes.STRING,
    nota_avaliacao: DataTypes.FLOAT,
    regiao: DataTypes.STRING,
    ocupacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};