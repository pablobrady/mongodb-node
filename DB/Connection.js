const mongoose = require('mongoose');

const URI = process.env.DATABASE_URL || null;
if( !URI ) {
  console.error("Error: A database was not specified."); 
  return;
}

const connectDB = async () => {
  await mongoose.connect(URI, { 
    useUnifiedTopology: true, 
    useNewUrlParser: true 
  });
  console.log("db connected, dude...")
}

module.exports = connectDB;
