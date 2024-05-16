
const router = require('express').Router();

const { Countries, Places, Attractions, Hotels } = require('../models');

const {Op}=require("sequelize");

//match with get request "/countries/"

router.get(['/by/:countryid','/'], async (req, res) => {
    try {
      // Get all users, sorted by name
      const countriesData = await Countries.findAll();

      //console.table(countriesData);

      const countries = countriesData.map((country) => country.get({ plain: true }));

      res.render('create', { countries });

      //res.status(200).json(countriesData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
//match with get request "/countries/1"
  router.get('/:countryid', async (req, res) => {
    try {
      // Get all cities, for the  given country

      const countriesData = await Countries.findOne({
        where:{id:req.params.countryid},
        include : Places
      }
      );

      //console.table(countriesData);

     const countries =  countriesData.get({ plain: true });
      console.log(countries);
      res.render('create', { countries });

     
     // res.status(200).json({Places});
    } catch (err) {
      res.status(500).json(Places);
    }
  });

  router.get('/:countryid/places/:placeId', async (req, res) => {
    try {
      // Get all attractions, for the  given city
      const attractionData = await Countries.findOne({
        where:{ 
          id: req.params.countryid
        },
        include : [
          {
            model: Places, 
            where: {
              id: req.params.placeId
            },
            include: [
              {
                model: Attractions, 
              }
            ]
          }
        ]
      }); 


     const countries =  attractionData.get({ plain: true });
     console.log(countries)
      res.render('create', { countries });



     
    } catch (err) {
      res.status(500).json(err);
    }
  });




  router.get('/:countryid/places/:placeId/attractions/:attractionId', async (req, res) => {
    try {
     
      const hotelData = await Countries.findOne({
        where:{ 
          id: req.params.countryid
        },
        include : [
          {
            model: Places, 
            where: {
              id: req.params.placeId
            },
            include: [
              {
                model: Attractions, 
                where: {
                  id: req.params.attractionId
                },
                include: [
                  {
                    model: Hotels, 
                  }
                ]
              }
            ]
          }
        ]
      }); 


     const countries =  hotelData.get({ plain: true });
     console.log(countries.places[0].attractions[0].hotels);
      res.render('create', { countries });



     
    } catch (err) {
      res.status(500).json(err);
    }
  });

  
  router.get('/:countryid/places/:placeId/attractions/:attractionId/hotels/:hotelId', async (req, res) => {
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


  // router.get('/attraction/:attractionId', async (req, res) => {
  //   try {
  //     // Get all attractions, for the  given city
  //     const HotelData = await Hotels.findAll({
  //       where:{attraction_id:req.params.attractionId}
  //   });
  //   console.table(HotelData);
  //     res.status(200).json(HotelData);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // });
  
  
  
  module.exports = router;
  