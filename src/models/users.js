'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  }
  users.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    gender: DataTypes.STRING,
    password: DataTypes.STRING,
    store_name: DataTypes.STRING,
    store_description: DataTypes.STRING,
    image: DataTypes.STRING,
    key_reset_pass:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};