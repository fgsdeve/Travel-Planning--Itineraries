const router = require('express').Router();

//const homeRoutes = require('./home-routes.js');
const countriesRoutes = require('./countriesController.js');

//router.use('/', homeRoutes);
router.use('/countries', countriesRoutes);

module.exports = router;
