'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cardapios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      vendedorId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'vendedors',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      cod_cardapio: {
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.INTEGER
      },
      valor: {
        type: Sequelize.FLOAT
      },
      foto: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      nome: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Cardapios');
  }
};