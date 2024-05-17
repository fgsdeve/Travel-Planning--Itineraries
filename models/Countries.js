const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Countries extends Model {}

Countries.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city_image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    passport_stamp_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'countries',
  }
);

module.exports = Countries;
