const express = require('express');
const router = express.Router();
const Prospect = require('../models/Prospect');

router.get('/', (req,res) =>
{
    res.send("we are on prospects");
});

router.post('/', (req,res) =>
    {
        const post = 
        {

        }
    });

module.exports = router;