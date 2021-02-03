'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients extends Model {
    static associate(models) {
      this.hasMany(models.Payments, {
        foreignKey: "clientId"
      });
      this.belongsToMany(models.Classes, {
        through: "Clients_Classes",
        foreignKey: "classId",
      });
    }
  };
  Clients.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Clients',
  });
  return Clients;
};