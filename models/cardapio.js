'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cardapio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cardapio.belongsTo(models.Vendedor);
      Cardapio.belongsTo(models.Carrinho);
    }
  };
  Cardapio.init({
    vendedorId: DataTypes.INTEGER,
    cod_cardapio: DataTypes.INTEGER,
    tipo: DataTypes.INTEGER,
    valor: DataTypes.FLOAT,
    foto: DataTypes.STRING,
    descricao: DataTypes.STRING,
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cardapio',
  });
  return Cardapio;
};