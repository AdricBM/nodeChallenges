const mongoose = require('mongoose');

const ProspectSchema = mongoose.Schema
(
    {
        name: 
        {
            type: String,
            required: true
        },
        surname: 
        {
            type: String,
            required: true
        },
        age: 
        {
            type: Number,
            required: true
        },
        date: 
        {
            type: Date,
            default: Date.now
        },
        inquiry: 
        {
            type: String,
            required: true
        },
        assistor: 
        {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('Prospects', ProspectSchema);