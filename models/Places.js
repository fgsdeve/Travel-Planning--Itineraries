const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Places extends Model {}

Places.init( 
    {
    placeName: DataTypes.VARCHAR(100),
    streetName: DataTypes.VARCHAR(255),
    zipCode: DataTypes.INTEGER,
    Country_id,
    allowNull: false,
    primaryKey: true
    },
    
    {
        sequelize,
        timestamps: false,
       // freezeTableName: true,
        underscored: true,
        modelName: 'Places'
      }
);

module.exports = Places;