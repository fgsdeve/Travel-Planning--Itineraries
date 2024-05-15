const express = require('express');
const { Itinerary, Attractions } = require('../models');
console.log(Itinerary, Attractions);


const router = express.Router();

// Example route using Itinerary and Attractions
router.post('/create', async (req, res) => {
  try {
    const newItinerary = await Itinerary.create({
      total_cost: req.body.total_cost,
      lengthOfStay: req.body.lengthOfStay,
      street_name: req.body.street_name,
      zip_code: req.body.zip_code,
      place_id: req.body.place_id,
      country_id: req.body.country_id,
      attraction_id: req.body.attraction_id,
    });

    // Use Attractions model
    const attraction = await Attractions.findOne({ where: { id: req.body.attraction_id } });
    if (attraction) {
      console.log(`Itinerary created for attraction: ${attraction.attraction_name}`);
    }

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Example edit route
router.post('/edit/:id', async (req, res) => {
  try {
    const itinerary = await Itinerary.findOne({ where: { id: req.params.id } });

    if (!itinerary) {
      return res.status(404).send('Itinerary not found');
    }

    await itinerary.update({
      total_cost: req.body.total_cost,
      lengthOfStay: req.body.lengthOfStay,
      street_name: req.body.street_name,
      zip_code: req.body.zip_code,
      place_id: req.body.place_id,
      country_id: req.body.country_id,
      attraction_id: req.body.attraction_id,
    });

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
