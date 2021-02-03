'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    static associate(models) {
      this.belongsTo(models.Clients, {
        foreignKey: "clientId"
      });
      this.belongsTo(models.Memberships, {
        foreignKey: "membershipId"
      });
    }
  };
  Payments.init({
    membershipId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER,
    amount: DataTypes.NUMERIC,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Payments',
  });
  return Payments;
};