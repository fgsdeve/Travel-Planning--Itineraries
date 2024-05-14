const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Attraction model
class Hotel extends Model {}

// create fields/columns for Location model
Hotel.init(
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
      price:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
    attraction_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            // This references the `attraction` model, which we set in `attraction.js` as its `modelName` property
            model: 'Attractions',
            key: 'id',
          },
      }

  },
  {
    sequelize,
    timestamps: false,
   // freezeTableName: true,
    underscored: true,
    modelName: 'Hotel'
  }
);

module.exports = Hotel;
