const mongoose = require('mongoose'); // Importing Mongoose for MongoDB interaction
const subscriberModel = require('./models/subscribers'); // Importing the Subscriber model
const data = require('./data'); // Importing data to be inserted into the database

// Configuration of dotenv
require('dotenv').config();

// Define the MongoDB connection URL, with a fallback to a default local URL if not provided in environment variables
const dbConnectionURL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/subscribers";

// Connecting to MongoDB using Mongoose
mongoose.connect(dbConnectionURL, { 
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true // Use the new server discovery and monitoring engine
});

const db = mongoose.connection; // Get the default connection

// If an error occurs during connection, handle and log the error
db.on('error', (err) => console.log(err));

// If the connection is successful, log a success message
db.once('open', () => console.log('Connected to MongoDB database...'));


// Function to refresh all connections
const refreshAll = async () => {
    // Deleting previous data from the 'subscribers' collection
    await subscriberModel.deleteMany({});
    // Inserting new data into the 'subscribers' collection
    await subscriberModel.insertMany(data);
    // Disconnecting from the MongoDB database
    await mongoose.disconnect();
}

refreshAll(); // Calling the refreshAll function to delete previous data, insert new data, and disconnect from the database
