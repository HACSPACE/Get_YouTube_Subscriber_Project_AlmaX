// Importing required modules and files
const chai = require('chai'); 
const app = require('../src/index.js'); 
const chaiHttp = require('chai-http'); 

const expect = chai.expect; // Setting up Chai's expect function
chai.use(chaiHttp); // Adding Chai HTTP plugin to Chai

// Describing the API testing suite
describe('API Testing', () => {
    
    // Test suite for GET /
    describe('GET /', () => {
        // Test case for rendering admin dashboard
        it('should render admin dashboard', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    if (err) return done(err); 
                    expect(res).to.have.status(200); // Expecting a successful response status
                    expect(res.text).to.include('admin'); 
                    done(); // Indicating completion of this test case
                });
        });
    });

    // Test suite for GET /start-now
    describe('GET /start-now', () => {
        // Test case for rendering startNow page
        it('should render startNow page', (done) => {
            chai.request(app)
                .get('/start-now')
                .end((err, res) => {
                    if (err) return done(err); 
                    expect(res).to.have.status(200); // Expecting a successful response status
                    expect(res.text).to.include('Start Now'); 
                    done(); // Indicating completion of this test case
                });
        });
    });

    // Test suite for GET /subscribers
    describe('GET /subscribers', () => {
        // Test case for getting data of all subscribers
        it('should get data of all subscribers', (done) => {
            chai.request(app)
                .get('/subscribers')
                .end((err, res) => {
                    if (err) return done(err); 
                    expect(res).to.have.status(200); // Expecting a successful response status
                    expect(res.body).to.be.an('array'); // Expecting the response body to be an array
                    done(); 
                });
        });
    });

    // Test suite for GET /subscribers/names
    describe('GET /subscribers/names', () => {
        // Test case for getting names and subscribedChannel of all subscribers
        it('should get names and subscribedChannel of all subscribers', (done) => {
            chai.request(app)
                .get('/subscribers/names')
                .end((err, res) => {
                    if (err) return done(err); // Handling errors
                    expect(res).to.have.status(200); // Expecting a successful response status
                    expect(res.body).to.be.an('array'); // Expecting the response body to be an array
                    done(); 
                });
        });
    });

    // Test suite for GET /subscribers/:id
    describe('GET /subscribers/:id', () => {
        
        // Test case for getting a single subscriber by ID
        it('should get a single subscriber by ID', (done) => {
            const subscriberId = '65e9612eee0c7430581de5cc'; // Sample subscriber ID
            chai.request(app)
                .get(`/subscribers/${subscriberId}`)
                .end((err, res) => {
                    if (err) return done(err); // Handling errors
                    expect(res).to.have.status(200); // Expecting a successful response status
                    expect(res.body).to.be.an('object'); // Expecting the response body to be an object
                    done(); 
                });
        });

        // Test case for handling invalid subscriber ID
        it('should handle invalid subscriber ID', (done) => {
            const invalidSubscriberId = 'invalid_id'; // Invalid subscriber ID
            chai.request(app)
                .get(`/subscribers/${invalidSubscriberId}`)
                .end((err, res) => {
                    if (err) return done(err); // Handling errors
                    expect(res).to.have.status(400); // Expecting a bad request response status
                    expect(res.body).to.have.property('Error_message'); // Expecting the response body to have 'Error_message' property
                    done(); // Indicating completion of this test case
                });
        });
    });
});
