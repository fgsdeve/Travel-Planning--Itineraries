const sequelize = require('../config/connection');
const { Countries,Places,Attractions,Hotel} = require('../models');

const CountriesData = require('./Countries.json');

const PlacesData = require('./Places.json');

const AttractionData = require('./Attractions.json');

const HotelData = require('./Hotel.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Countries.bulkCreate(CountriesData, {
    individualHooks: true,
    returning: true,
  });

  await Places.bulkCreate(PlacesData, {
    individualHooks: true,
    returning: true,
  });

  await Attractions.bulkCreate(AttractionData, {
    individualHooks: true,
    returning: true,
  });


  await Hotel.bulkCreate(HotelData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
