const router = require('express').Router();
const { Countries, Places, Attractions, Hotel } = require('../models');



//match with get request "/countries/"

router.get(['/by/:countryid','/'], async (req, res) => {
    try {
      // Get all users, sorted by name
      const countriesData = await Countries.findAll();

      console.table(countriesData);

      const countries = countriesData.map((country) => country.get({ plain: true }));

      res.render('create', { countries });

      //res.status(200).json(countriesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
//match with get request "/countries/"
  router.get('/:countryid', async (req, res) => {
    try {
      // Get all cities, for the  given country
      const placesData = await Places.findAll(
        {
            where:{country_id:req.params.countryid}
        }
      );
      const Places = placesData.map((place) => place.get({ plain: true }));

     // res.render('create', { Places });
      res.status(200).json({Places});
    } catch (err) {
      res.status(500).json(Places);
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
      const HotelData = await Hotel.findAll({
        where:{attraction_id:req.params.attractionId}
    });
    console.table(HotelData);
      res.status(200).json(HotelData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  
  
  module.exports = router;
  