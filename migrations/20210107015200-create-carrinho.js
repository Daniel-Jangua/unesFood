'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Carrinhos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cardapioID: {
        type: Sequelize.INTEGER,
        references:{
          model: 'cardapios',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      pedidoId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'pedidos',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      qtd: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Carrinhos');
  }
};