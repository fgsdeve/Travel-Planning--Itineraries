const express = require('express');
const{ Itinerary, Attractions }  = require('../models')

const routes = express.Router();

//Creating intinerary
routes.post('/create', async (req, res) => {
    try {
        const newItinenary = await Itinerary.create({
            total_cost: req.body.total_cost,
            lengthOfStay: req.body.lengthOfStay,
            street_name: req.body.street_name,
            zip_code: req.body.zip_code,
            place_id: req.body.place_id,
            country_id: req.body.country_id,
            attractions: req.body.place_id,
        });

        res.redirect('/');
    }catch (err) {
        res.status(500).send('Server error');
    }
});

//edit itinenary

routes.post('/edit/:id', async (req, res) => {
    try{
        const itinenary = await Itinerary.findOne({ where: {id: req.params.id} });
        
        if(!itinenary) {
            return res.status(404).send('Itinenary not found');
        }

    await itinenary.update({
            total_cost: req.body.total_cost,
            lengthOfStay: req.body.lengthOfStay,
            street_name: req.body.street_name,
            zip_code: req.body.zip_code,
            place_id: req.body.place_id,
            country_id: req.body.country_id,
            attractions: req.body.place_id,

    });
    res.redirect('/');
    }catch(err) {
        res.status(500).send('Server error');
    }
});
