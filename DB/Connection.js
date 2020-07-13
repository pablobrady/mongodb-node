const mongoose = require('mongoose');
///const config = require('../config');

// console.log("DEBUG: ")

const URI = `mongodb+srv://${config.dbUser}:${config.dbPass}@cluster0.uvtjq.mongodb.net/${config.dbName}?retryWrites=true&w=majority`;

const connectDB = async () => {
  await mongoose.connect(URI, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
  });
  console.log("db connected, dude...")
}

module.exports = connectDB;
