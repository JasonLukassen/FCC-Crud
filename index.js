const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', productRoute);

// Home route
app.get('/', (req, res) => {
    res.send("Hello from the API server!");
});


// Connect to MongoDB and start the server
mongoose.connect("mongodb+srv://admin:mbze6WIgJI81Z5i8@backenddb.7m5erey.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
        console.log("server is running on port 3000");
    });
})
.catch(() => {
    console.log("Connection failed!");
});