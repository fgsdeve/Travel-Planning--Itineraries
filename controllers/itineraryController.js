const express = require('express');
const { Itinerary, Attractions, Hotels, Countries, Places } = require('../models');
const router = express.Router();

// Function to get itinerary details by ID
async function getItineraryById(id) {
  return await Itinerary.findByPk(id, {
    include: [
      { model: Countries },
      { model: Places },
      { model: Attractions },
      { model: Hotels }
    ]
  });
}

// Get all itineraries
router.get('/user/:userId/itineraries', async (req, res) => {
  try {
    const ItineraryData = await Itinerary.findAll({
      where: { user_id: req.params.userId },   
      include: [Attractions, Hotels, Countries, Places]
    });
    const Itinerarys = ItineraryData.map((country) => country.get({ plain: true }));
    res.render('itinerary', { Itinerarys });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Define route for /main
/* router.get('/main', (req, res) => {
  res.render('main', {
    logged_in: req.session.logged_in,
    // You can add more data here if needed
  });
}); */

// Get itinerary by ID
router.get('/:id', async (req, res) => {
  try {
    const itineraryData = await Itinerary.findByPk(req.params.id);

    if (!itineraryData) {
      return res.status(404).send('Itinerary not found');
    }

    // In theory, this should be accomplised with "include" option, but models are pluralized, yet Sequelize automatically interprets as singular. No connection was able to be established.
    const countryData = await Countries.findByPk(itineraryData.country_id)
    const placeData = await Places.findByPk(itineraryData.place_id)
    const hotelData = await Hotels.findByPk(itineraryData.hotel_id)
    const attrationData = await Attractions.findByPk(itineraryData.attraction_id)
    
    const country = countryData.get({plain: true})
    const place = placeData.get({plain: true})
    const hotel = hotelData.get({plain: true})
    const attraction = attrationData.get({plain: true})
    const itinerary = itineraryData.get({plain: true})

    res.render('itinerary', {
      logged_in: req.session.logged_in,
      country: country.country,
      city: place.place_name,
      attraction: attraction.attraction_name,
      hotel: hotel.hotel_name,
      length_of_stay: itinerary.length_of_stay,
      estimated_cost: itinerary.total_cost,
      country_flag_url: country.flag_url,
      city_image_url: place.city_image_url,
      attraction_image_url: attraction.attraction_image_url,
      passport_stamp_url: country.passport_stamp_url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});

// Create new itinerary
router.post('/create', async (req, res) => {
  try {
/*     const newItinerary = await Itinerary.create({*/ 
      await Itinerary.create({
      total_cost: req.body.total_cost,
      length_of_stay: req.body.length_of_stay,
      street_name: req.body.street_name,
      zip_code: req.body.zip_code,
      place_id: req.body.place_id,
      country_id: req.body.country_id,
      attraction_id: req.body.attraction_id,
    });

    //Attractions model
    const attraction = await Attractions.findOne({ where: { id: req.body.attraction_id } });
    if (attraction) {
      console.log(`Itinerary created for attraction: ${attraction.attraction_name}`);
    }

    res.redirect(`/itinerary/${newItinerary.id}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});
/*     res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
}); */

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
