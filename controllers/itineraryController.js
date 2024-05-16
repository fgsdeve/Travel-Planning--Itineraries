const express = require('express');
const { Itinerary, Attractions, Hotels, Countries, Places } = require('../models');
const router = express.Router();

// Function to get itinerary details by ID
async function getItineraryById(id) {
  return await Itinerary.findOne({
    where: { id },
    include: [
      { model: Countries, as: 'country' },
      { model: Places, as: 'place' },
      { model: Attractions, as: 'attraction' },
      { model: Hotels, as: 'hotel' }
    ]
  });
}

// Get all itineraries
router.get('/:id', async (req, res) => {
  try {
    const ItineraryData = await Itinerary.findAll({
      
        where:{user_id:req.params.id},   
        include: [{ model: Attractions }, { model: Hotels }, { model: Countries }, { model: Places }],
    });
   // res.status(200).json(itineraries);const countriesData = await Countries.findAll();

      //console.table(countriesData);

      const Itinerarys = ItineraryData.map((country) => country.get({ plain: true }));

      res.render('itinerary', { Itinerarys });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Define route for /main
router.get('/main', (req, res) => {
  res.render('main', {
    logged_in: req.session.logged_in,
    // You can add more data here if needed
  });
});

// Get itinerary by ID
router.get('/:id', async (req, res) => {
  try {
    const itinerary = await getItineraryById(req.params.id);

    if (!itinerary) {
      return res.status(404).send('Itinerary not found');
    }

    res.render('itinerary', {
      logged_in: req.session.logged_in,
      country: itinerary.country.country,
      city: itinerary.place.place_name,
      attraction: itinerary.attraction.attraction_name,
      hotel: itinerary.hotel.hotel_name,
      length_of_stay: itinerary.length_of_stay,
      estimated_cost: itinerary.total_cost,
      country_flag_url: itinerary.country.flag_url,
      city_image_url: itinerary.place.city_image_url,
      attraction_image_url: itinerary.attraction.attraction_image_url,
      hotel_image_url: itinerary.hotel.hotel_image_url,
      passport_stamp_url: itinerary.country.passport_stamp_url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Create new itinerary
router.post('/create', async (req, res) => {
  try {
    const newItinerary = await Itinerary.create({
      total_cost: req.body.total_cost,
      length_of_stay: req.body.length_of_stay,
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

// Edit itinerary
router.post('/edit/:id', async (req, res) => {
  try {
    const itinerary = await Itinerary.findOne({ where: { id: req.params.id } });

    if (!itinerary) {
      return res.status(404).send('Itinerary not found');
    }

    await itinerary.update({
      total_cost: req.body.total_cost,
      length_of_stay: req.body.length_of_stay,
      street_name: req.body.street_name,
      zip_code: req.body.zip_code,
      place_id: req.body.place_id,
      country_id: req.body.country_id,
      attraction_id: req.body.attraction_id,
    });
    await itinerary.save();

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
