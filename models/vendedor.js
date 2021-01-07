'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendedor.hasMany(models.Cardapio);
      Vendedor.hasMany(models.RegioesVendedor);
      Vendedor.hasMany(models.Pedido);
    }
  };
  Vendedor.init({
    nome: DataTypes.STRING,
    cpf: DataTypes.STRING,
    num_celular: DataTypes.STRING,
    data_nasc: DataTypes.STRING,
    email: DataTypes.STRING,
    login: DataTypes.STRING,
    senha: DataTypes.STRING,
    nota_avaliacao: DataTypes.FLOAT,
    ra: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Vendedor',
  });
  return Vendedor;
};