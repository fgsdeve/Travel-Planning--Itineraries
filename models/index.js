const User = require('./User');
const Countries = require('./Countries');
const Places = require('./Places');
const Attractions = require('./Attractions');
const Hotels = require('./Hotels');
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

Attractions.hasMany(Hotels, { 
  foreignKey: 'attraction_id',
  onDelete: 'CASCADE'
});

Hotels.belongsTo(Attractions, {
  foreignKey: 'attraction_id',
});

Countries.belongsTo(Itinerary, {
  foreignKey: 'country_id',
});

<<<<<<< HEAD
Itinerary.hasMany(Countries, {
=======
Itinerary.hasOne(Countries, {
>>>>>>> 3a44026e235b9fd5058a03c1b7558c0f59a773c3
  foreignKey: 'country_id',
});

Places.belongsTo(Itinerary, {
  foreignKey: 'place_id',
});
<<<<<<< HEAD
Itinerary.hasMany(Places, {
=======
Itinerary.hasOne(Places, {
>>>>>>> 3a44026e235b9fd5058a03c1b7558c0f59a773c3
  foreignKey: 'place_id',
});

Attractions.belongsTo(Itinerary, {
  foreignKey: 'attraction_id',
});
<<<<<<< HEAD
Itinerary.hasMany(Attractions, {
=======
Itinerary.hasOne(Attractions, {
>>>>>>> 3a44026e235b9fd5058a03c1b7558c0f59a773c3
  foreignKey: 'attraction_id',
});

Hotels.belongsTo(Itinerary, {
  foreignKey: 'hotel_id',
});
<<<<<<< HEAD
Itinerary.hasMany(Hotels, {
  foreignKey: 'hotel_id',
});



module.exports = { User, Countries, Places, Attractions, Hotels, Itinerary };
=======
Itinerary.hasOne(Hotels, {
  foreignKey: 'hotel_id',
});

User.belongsTo(Itinerary, {
  foreignKey: 'user_id',
});
Itinerary.hasOne(User, {
  foreignKey: 'user_id',
});



module.exports = { User, Countries, Places, Attractions, Hotels, Itinerary };
>>>>>>> 3a44026e235b9fd5058a03c1b7558c0f59a773c3
