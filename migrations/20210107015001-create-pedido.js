'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clienteId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'clientes',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      vandedorId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'vendedors',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      regiao_entrega: {
        type: Sequelize.STRING
      },
      metodo_pagamento: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.INTEGER
      },
      nota_avaliacao: {
        type: Sequelize.FLOAT
      },
      comentario_avaliacao: {
        type: Sequelize.STRING
      },
      valor_total: {
        type: Sequelize.FLOAT
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
    await queryInterface.dropTable('Pedidos');
  }
};