const mongoose = require('mongoose'); // Importing Mongoose for MongoDB object modeling

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

module.exports = mongoose.model('Subscriber', subscriberSchema); // Exporting the Mongoose model for the 'Subscriber' collection with the defined schema
