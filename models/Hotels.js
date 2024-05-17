const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Hotels extends Model {}

Hotels.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    hotel_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    attraction_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'attractions', // Ensure this matches the case in the model definition
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'hotels'
  }
);

module.exports = Hotels;
