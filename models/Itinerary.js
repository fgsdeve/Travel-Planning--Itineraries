const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Attraction model
class Itinerary extends Model {}

// create fields/columns for Location model
Itinerary.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    total_cost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    length_Of_Stay: {
        type: DataTypes.INTEGER,
        allowNull: true
      },

     
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            // This references the `countries` model, which we set in `countries.js` as its `modelName` property
            model: 'countries',
            key: 'id',
          },
      },
      place_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            // This references the `places` model, which we set in `places.js` as its `modelName` property
            model: 'places',
            key: 'id',
          },
      },
      attraction_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            // This references the `attraction` model, which we set in `attraction.js` as its `modelName` property
            model: 'attractions',
            key: 'id',
          },
      },
      hotel_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            // This references the `attraction` model, which we set in `attraction.js` as its `modelName` property
            model: 'hotels',
            key: 'id',
          },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            // This references the `attraction` model, which we set in `attraction.js` as its `modelName` property
            model: 'users',
            key: 'id',
          },
        }
  },
  {
    sequelize,
    timestamps: false,
   // freezeTableName: true,
    underscored: true,
    modelName: 'itinerary'
  }
);

module.exports = Itinerary;