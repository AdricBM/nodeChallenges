const express = require('express');

const app = express();


/**
 * Middleware
 */

 

/**
 * Routes
 */

app.get('/', (req,res) =>
{
    res.send("we are on home");
});

app.get('/prospects', (req,res) =>
{
    res.send("we are on prospects");
});

app.listen(3000);