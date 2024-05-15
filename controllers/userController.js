const express = require('express'); // Corrected typo
const { User } = require('../models');

const routes = express.Router();

// Register user
routes.post('/register', async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.user_id = newUser.id;
    req.session.logged_in = true;

    res.redirect('/');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

module.exports = routes;
