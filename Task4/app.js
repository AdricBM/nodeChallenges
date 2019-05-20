const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

/**
 * import routes
 */
app.use(bodyParser.json());

const prospectRoutes = require('./routes/prospects');

/**
 * Middleware
 */

 app.use('/prospects',prospectRoutes);
 

/**
 * Routes
 */

app.get('/', (req,res) =>
{
    res.send("we are on home");
});

/**
 * connet to database
 */

mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    ()=>console.log('connected to DB'));

/**
 * listen to port
 */
app.listen(3000);