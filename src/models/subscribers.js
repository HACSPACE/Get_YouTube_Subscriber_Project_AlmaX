// Importing Mongoose for MongoDB object modeling
const mongoose = require('mongoose'); 

// Defining the schema for a subscriber document
const subscriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // The name field is required
    },
    subscribedChannel: {
        type: String,
        required: true, // The subscribedChannel field is required
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now // The subscribedDate field is required and defaults to the current date/time
    }
});

// Exporting the Mongoose model for the 'Subscriber' collection with the defined schema
module.exports = mongoose.model('Subscriber', subscriberSchema); 
