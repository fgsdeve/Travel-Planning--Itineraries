const express = requiere ('express');
const { User } = require('../models');

const router = express.Router();

//resgister Use

router.post('/register', async (req, rep) => {
    try{
        const newUser = await User.create
    }
})