'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Instructors extends Model {
    static associate(models) {
      this.hasOne(models.Classes, {
        foreignKey: "instructorId"
      });
    }
  };
  Instructors.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Instructors',
  });
  return Instructors;
};