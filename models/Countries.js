const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Countries extends Model {}

Countries.init(
    {
        Country: {
            type: DataTypes.VARCHAR(100),
            allowNull: false,
            primaryKey: true
        }
    },
    
    {
        sequelize,
        timestamps: false,
       // freezeTableName: true,
        underscored: true,
        modelName: 'Countries'
      }
);

module.exports = Countries;