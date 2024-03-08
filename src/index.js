// Import required modules
const express = require('express'); // Importing Express.js framework
const app = require('./app.js'); 
const mongoose = require('mongoose'); 
const path = require('path'); 
const dotenv = require('dotenv'); 

// Load environment variables from .env file
dotenv.config();

// Set up static file serving from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define port
const port = process.env.PORT || 3000; // Use the provided PORT environment variable or default to 3000

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to the database
const dbConnectionURL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017/subscribers"; // Use DATABASE_URL environment variable or default to local MongoDB URL
mongoose.connect(dbConnectionURL, { useNewUrlParser: true, useUnifiedTopology: true }); // Connect to MongoDB using Mongoose
const db = mongoose.connection;
db.on('error', (err) => console.error(err)); // Log any connection errors
db.once('open', () => console.log('Connected to the database')); // Log successful database connection

// Start the server
module.exports = app.listen(port, () => console.log(`App listening on port ${port}!`)); 
// Start the server and log the port it's listening on
