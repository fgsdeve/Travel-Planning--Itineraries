const express = require('express');
const { Itinerary, Attractions } = require('../models');
console.log(Itinerary, Attractions);


const router = express.Router();

// Example route using Itinerary and Attractions
//user_id,country_id,place_id,attraction_id,hotel_id
router.post('/create', async (req, res) => {

  console.log(req.body.lengthOfStay);
  try {
    const newItinerary = await Itinerary.create({
      total_cost: req.body.total_cost,
      lengthOfStay:req.body.lenght_Of_Stay,
      place_id: req.body.place_id,
      country_id: req.body.country_id,
      attraction_id: req.body.attraction_id,
      hotel_id:req.body.hotel_id,
      user_id:req.body.user_id

    });


    res.status(200).send('Your travel itinerary created succesfully');

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// // Example edit route
// router.post('/edit/:id', async (req, res) => {
//   try {
//     const itinerary = await Itinerary.findOne({ where: { id: req.params.id } });

//     if (!itinerary) {
//       return res.status(404).send('Itinerary not found');
//     }

//     await itinerary.update({
//       total_cost: req.body.total_cost,
//       lengthOfStay: req.body.lengthOfStay,
//       street_name: req.body.street_name,
//       zip_code: req.body.zip_code,
//       place_id: req.body.place_id,
//       country_id: req.body.country_id,
//       attraction_id: req.body.attraction_id,
//     });
//     await itinerary.save()
    
//     res.redirect('/');
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Server error');
//   }
// });

module.exports = router;
