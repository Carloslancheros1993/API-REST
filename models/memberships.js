'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Memberships extends Model {
    static associate(models) {
      this.hasMany(models.Payments, {
        foreignKey: "membershipId"
      });
    }
  };
  Memberships.init({
    name: DataTypes.STRING,
    price: DataTypes.NUMERIC,
    durationMonth: DataTypes.INTEGER,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Memberships',
  });
  return Memberships;
};