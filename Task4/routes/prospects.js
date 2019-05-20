const express = require('express');
const router = express.Router();
const Prospect = require('../models/Prospect');

router.get('/', (req,res) =>
{
    res.send("we are on prospects");
});

router.post('/', async(req,res) =>
    {
        
        const prospect = new Prospect
        ({
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.age,
            inquiry: req.body.inquiry,
            assistor: req.body.assistor
            
        });
        prospect.save().then(data =>
            {
                res.json(data);
            }).catch(err =>
                {
                    res.json({message: err});
                });
    });

module.exports = router;