const router = require('express').Router();

//const homeRoutes = require('./home-routes.js');
const countriesRoutes = require('./countriesController.js');

//router.use('/', homeRoutes);
router.use('/countries', countriesRoutes);
const authController = require('./authController');
const userController = require('./userController');
const itineraryController = require('./itineraryController');
router.use('/auth', authController);
router.use('/user', userController);
router.use('/itinerary', itineraryController);
module.exports = router;
