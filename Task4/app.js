const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');

/**
 * import routes
 */

const prospectRoutes = require('./routes/prospects');

/**
 * Middleware
 */

 app.use('/prospects',prospectRoutes);
 app.use(bodyParser.json());

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