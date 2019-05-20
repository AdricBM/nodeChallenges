const mongoose = require('mongoose');

const ProspectSchema = new mongoose.Schema
({
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
});

module.exports = mongoose.model('Prospect', ProspectSchema);

/**
 * {
	"name": "Adric",
	"surname": "Maplanka",
	"age": "22",
	"inquiry": "WebDev",
	"assistor": "Thandiwe"
}
 */