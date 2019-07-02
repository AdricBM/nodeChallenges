let mongoose = require('mongoose');

// Prospect Schema
let prospectSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    surname:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    date:{
        type: Date,
        default: Date(),
        required: true
    },
    soi:{
        type: String,
        required: true
    },
    assistant:{
        type: String,
        required: true
    }
});

let Prospect = module.exports = mongoose.model('Prospect',prospectSchema);

