'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Pedido.belongsTo(models.Cliente);
      Pedido.belongsTo(models.Vendedor);
      Pedido.belongsTo(models.Carrinho);
    }
  };
  Pedido.init({
    clienteId: DataTypes.INTEGER,
    vandedorId: DataTypes.INTEGER,
    regiao_entrega: DataTypes.STRING,
    metodo_pagamento: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    nota_avaliacao: DataTypes.FLOAT,
    comentario_avaliacao: DataTypes.STRING,
    valor_total: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};