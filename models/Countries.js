const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Countries extends Model {}

Countries.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        
          },
        Country: {
            type: DataTypes.STRING,
            allowNull: false,
           
        }
    },
    
    {
        sequelize,
        timestamps: false,
       // freezeTableName: true,
        underscored: true,
        modelName: 'countries'
      }
);

module.exports = Countries;