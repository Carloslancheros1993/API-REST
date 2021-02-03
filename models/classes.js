'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    static associate(models) {
      this.belongsToMany(models.Clients, {
        through: "Clients_Classes",
        foreignKey: "clientId"
      });
      this.belongsTo(models.Instructors, {
        foreignKey: "instructorId"
      });
      this.belongsToMany(models.Schedules, {
        through: "Classes_Schedules",
        foreignKey: "schedulesId"
      })
    }
  };
  Classes.init({
    name: DataTypes.STRING,
    instructorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Classes',
  });
  return Classes;
};