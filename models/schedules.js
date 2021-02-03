'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedules extends Model {
    static associate(models) {
      this.belongsToMany(models.Classes, {
        through: "Classes_Schedules",
        foreignKey: "classesId"
      })
    }
  };
  Schedules.init({
    name: DataTypes.STRING,
    startTime: DataTypes.TIME,
    endTime: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Schedules',
  });
  return Schedules;
};