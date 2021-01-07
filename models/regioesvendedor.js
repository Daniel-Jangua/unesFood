'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RegioesVendedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      RegioesVendedor.belongsTo(models.Vendedor);
    }
  };
  RegioesVendedor.init({
    vendedorId: DataTypes.INTEGER,
    regiao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'RegioesVendedor',
  });
  return RegioesVendedor;
};