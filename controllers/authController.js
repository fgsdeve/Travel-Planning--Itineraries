const express = require('express');
const { User } = require ('../models');

const routes = express.Router();

//login to the route
routes.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({where: {email: req.body.email}});

        if(!user) {
            return res.status(400).send('Invalid email or password');
        }

        const validPassword = user.checkPassword(req.body.password);

        if(!validPassword) {
            return res.status(400).send('Invalid email or password');
        }

        req.session.user_id = user.id;
        req.session.logged_in = true;

        res.redirect('/');
    }catch(err) {
        res.status(500).send('Server error!');
    }
});

router.post('/logout', (req, res) => {
    if(req.session.logged_in) {
        req.session.destroy(() => {
            res.status(200).end();
        });
    }else {
        res.status(404).end();
    }
});

module.exports = router;