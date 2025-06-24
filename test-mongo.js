const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:mbze6WIgJI81Z5i8@backenddb.7m5erey.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
  .then(() => {
    console.log('Connected!');
    process.exit(0);
  })
  .catch(err => {
    console.error('Connection error:', err);
    process.exit(1);
  });