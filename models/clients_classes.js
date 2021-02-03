'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clients_Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Clients_Classes.init({
    classId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Clients_Classes',
  });
  return Clients_Classes;
};