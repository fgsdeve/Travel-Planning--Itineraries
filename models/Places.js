const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Places extends Model {}

Places.init( 
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          place_name: {
            type: DataTypes.STRING,
            allowNull: false
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
           
      
        },
    {
        sequelize,
        timestamps: false,
       // freezeTableName: true,
        underscored: true,
        modelName: 'places'
      }
);

module.exports = Places;