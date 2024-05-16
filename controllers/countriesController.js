const router = require('express').Router();
const { Countries, Places, Attractions, Hotels } = require('../models');

// router.get('/', async (req, res) => {
//     try {
//       // Get all users, sorted by name
//       const countriesData = await Countries.findAll();
  
//       // Serialize user data so templates can read it
//       const users = countriesData.map((project) => project.get({ plain: true }));
  
//       // Pass serialized data into Handlebars.js template
//       res.render('homepage', { users });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

router.get('/', async (req, res) => {
    try {
      // Get all users, sorted by name
      const countriesData = await Countries.findAll();
      console.table(countriesData);
      res.status(200).json(countriesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:countryId', async (req, res) => {
    try {
      // Get all cities, for the  given country
      const placesData = await Places.findAll(
        {
            where:{country_id:req.params.countryId}
        }
      );
      console.table(placesData);
      res.status(200).json(placesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/places/:placeId', async (req, res) => {
    try {
      // Get all attractions, for the  given city
      const attractionData = await Attractions.findAll({
        where:{place_id:req.params.placeId}
    });
    console.table(attractionData);
      res.status(200).json(attractionData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/attraction/:attractionId', async (req, res) => {
    try {
      // Get all attractions, for the  given city
      const HotelData = await Hotels.findAll({
        where:{attraction_id:req.params.attractionId}
    });
    console.table(HotelData);
      res.status(200).json(HotelData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  
  module.exports = router;
  