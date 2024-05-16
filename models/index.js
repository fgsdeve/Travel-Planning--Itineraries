const User = require('./User');
const Attractions = require('./Attractions');
const Countries = require('./Countries');
const Hotel = require('./Hotel');
const Itinerary = require('./Itinerary');
const Places = require('./Places');

// Associations
Countries.hasMany(Places, {
  foreignKey: 'country_id',
  onDelete: 'CASCADE',
});

Places.belongsTo(Countries, {
  foreignKey: 'country_id',
});

Places.hasMany(Attractions, {
  foreignKey: 'place_id',
  onDelete: 'CASCADE',
});

Attractions.belongsTo(Places, {
  foreignKey: 'place_id',
});

Attractions.hasMany(Hotel, {
  foreignKey: 'attraction_id',
  onDelete: 'CASCADE',
});

Hotel.belongsTo(Attractions, {
  foreignKey: 'attraction_id',
});

Countries.hasMany(Itinerary, {
  foreignKey: 'country_id',
  onDelete: 'CASCADE',
});

Itinerary.belongsTo(Countries, {
  foreignKey: 'country_id',
});

Places.hasMany(Itinerary, {
  foreignKey: 'place_id',
  onDelete: 'CASCADE',
});

Itinerary.belongsTo(Places, {
  foreignKey: 'place_id',
});

Attractions.hasMany(Itinerary, {
  foreignKey: 'attraction_id',
  onDelete: 'CASCADE',
});

Itinerary.belongsTo(Attractions, {
  foreignKey: 'attraction_id',
});

module.exports = {
  User,
  Attractions,
  Countries,
  Hotel,
  Itinerary,
  Places,
};
