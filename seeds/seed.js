require('dotenv').config({ path: '../.env' });
const sequelize = require('../config/connection');
const { Countries, Places, Attractions, Hotel } = require('../models');

const CountriesData = require('./Countries.json');
const PlacesData = require('./Places.json');
const AttractionsData = require('./Attractions.json');
const HotelData = require('./Hotel.json');

console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);

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

  await Attractions.bulkCreate(AttractionsData, {
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
