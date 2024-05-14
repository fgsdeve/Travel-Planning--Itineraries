const router = require('express').Router();
const { Countries, Places } = require('../models');

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
  
      res.status(200).json(countriesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.get('/:countryId', async (req, res) => {
    try {
      // Get all users, sorted by name
      const placesData = await Places.findAll();
  
      res.status(200).json(placesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  