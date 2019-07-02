const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to DB
mongoose.connect('mongodb://localhost/registration',{ useNewUrlParser: true });
let db = mongoose.connection;

// Check DB Connection
db.once('open',()=>{
    console.log('connected to MongoDB');
});

// Check for DB errors
db.on('error',(err)=>{
    console.log(err);
});

// Init App
const app = express();

// Bring in models
let Prospect = require('./models/prospect');

// Load view engine
app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

// Body-parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Set public folder
app.use(express.static(path.join(__dirname,'public'
)));

// Home Route
app.get('/',(req,res)=>{
    Prospect.find({},(err,prospects)=>{
        if(err){
            console.log(err);
        }else{
            res.render('index',{
                title: 'Prospects',
                prospects: prospects
            }); 
        }
        
    });
});

// Get single prospect
app.get('/prospect/:id',(req,res)=>{
    Prospect.findById(req.params.id,(err,prospect)=>{
        res.render('prospect',{
            prospect: prospect
        });
    });
});

// Add route
app.get('/prospects/add',(req,res)=>{
    res.render('add_prospect',{
        title: 'Add Prospect'
    });
});

// Add submit POST route
app.post('/prospects/add',(req,res)=>{
    let prospect = new Prospect();
    prospect.name = req.body.name;
    prospect.surname = req.body.surname;
    prospect.age = req.body.age;
    prospect.soi = req.body.soi;
    prospect.assistant = req.body.assistant;

    prospect.save((err)=>{
        if(err){
            console.log(err);
            return;
        }else{
            res.redirect('/');
        }
    });
});

// Load edit form
app.get('/prospect/edit/:id',(req,res)=>{
    Prospect.findById(req.params.id,(err,prospect)=>{
        res.render('edit_prospect',{
            title: 'Edit Prospect',
            prospect: prospect
        });
    });
});

// Update submit POST route
app.post('/prospects/edit/:id',(req,res)=>{
    let prospect = {};
    prospect.name = req.body.name;
    prospect.surname = req.body.surname;
    prospect.age = req.body.age;
    prospect.soi = req.body.soi;
    prospect.assistant = req.body.assistant;

    let query = {_id:req.params.id};

    Prospect.update(query, prospect,(err)=>{
        if(err){
            console.log(err);
            return;
        }else{
            res.redirect('/');
        }
    });
});

app.delete('/prospect/:id',(req,res)=>{
    let query ={_id:req.params.id};

    Prospect.remove(query,(err)=>{
        if(err){
            console.log(err);
        }
        res.send('Success');
    });
});

// Start Server
app.listen(3000,()=>{
    console.log('Server started on port 3000');
});