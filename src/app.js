// Importing required modules and files
const express = require('express');
const Subscriber = require('./models/subscribers');
const path = require('path');
const cors = require('cors');

// Creating an Express application
const app = express();

// Setting the view engine to EJS and specifying the views directory
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));

// Middleware setup
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Route for rendering admin page
app.get('/', async(req, res)=>{
     res.render('admin');
     res.status(200).sendFile(path.join(__dirname, 'views'));
    });

// Route for rendering start now page  
app.get('/start-now', async(req, res) => {
    res.render('startNow');
    res.status(200).sendFile(path.join(__dirname, 'views'));
});
 
// Route for getting all subscribers
app.get('/subscribers',async (req, res)=>{
    try {
        let subscribers = await Subscriber.find();
        res.status(200).send(subscribers);
    }
    catch(err) {
        res.status(500).send(err);
    }
});

// Route for getting subscriber names and subscribed channels
app.get('/subscribers/names',async (req, res)=>{
    try{
        let subscribers = await Subscriber.find(
            {}, 
            { name: 1, subscribedChannel: 1, _id: 0 }
        );
        res.status(200).send(subscribers);    
    }
    catch(err) {
        res.status(500).send(err);
    }
});

// Route for getting a subscriber by ID
app.get('/subscribers/:id',async (req, res)=>{
    try{
        let subscriber = await Subscriber.findById(req.params.id);
      
        res.status(200).send(subscriber); // Sending the subscriber as a response
    }
    catch(err) {
        res.status(400).send({Error_message : "No Subscriber found related to this id"});
    }
});

module.exports = app;