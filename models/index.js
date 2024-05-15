const User = require('./User');
const Countries = require('./Countries');
const Places = require('./Places');
const Attractions = require('./Attractions');
const Hotel = require('./Hotel');
const Itinerary = require('./Itinerary');

Countries.hasMany(Places, { 
  foreignKey: 'country_id',
  onDelete: 'CASCADE'
});

Places.belongsTo(Countries, {
  foreignKey: 'country_id',
});

Places.hasMany(Attractions, { 
  foreignKey: 'place_id',
  onDelete: 'CASCADE'
});

Attractions.belongsTo(Places, {
  foreignKey: 'place_id',
});

Attractions.hasMany(Hotel, { 
  foreignKey: 'attraction_id',
  onDelete: 'CASCADE'
});

Hotel.belongsTo(Attractions, {
  foreignKey: 'attraction_id',
});

module.exports = { User, Countries, Places, Attractions, Hotel, Itinerary };
