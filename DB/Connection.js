const mongoose = require('mongoose');

// console.log("DEBUG: " + ENV['DATABASE_URL']);

const URI = ENV['DATABASE_URL'];

const connectDB = async () => {
  await mongoose.connect(URI, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
  });
  console.log("db connected, dude...")
}

module.exports = connectDB;
