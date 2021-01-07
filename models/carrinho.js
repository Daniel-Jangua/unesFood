'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrinho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Carrinho.hasOne(models.Pedido);
      Carrinho.hasMany(models.Cardapio);
    }
  };
  Carrinho.init({
    cardapioID: DataTypes.INTEGER,
    pedidoId: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carrinho',
  });
  return Carrinho;
};