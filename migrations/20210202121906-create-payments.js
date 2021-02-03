'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      membershipId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Memberships",
          key: "id"
        }
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Clients",
          key: "id"
        }
      },
      amount: {
        type: Sequelize.NUMERIC
      },
      date: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Payments');
  }
};