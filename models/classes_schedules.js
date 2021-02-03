'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classes_Schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Classes_Schedules.init({
    scheduleId: DataTypes.INTEGER,
    dayOfWeek: DataTypes.SMALLINT
  }, {
    sequelize,
    modelName: 'Classes_Schedules',
  });
  return Classes_Schedules;
};