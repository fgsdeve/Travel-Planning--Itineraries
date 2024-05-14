const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// create our Attraction model
class Attractions extends Model {}

// create fields/columns for Location model
Attractions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    attraction_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    street_name: {
        type: DataTypes.STRING,
        allowNull: false
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

  },
  {
    sequelize,
    timestamps: false,
   //freezeTableName: true,
    underscored: true,
   
    modelName: 'Attractions'
  }
);

module.exports = Attractions;
