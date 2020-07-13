const express = require('express');
// const connectDB = require('./DB/Connection')
const app = express();

// connectDB();

// app.use(express.static('public'));

app.use(express.json({ extended:false }));
// app.use('/api/userModel', require('./API/User'));
const PORT = process.env.Port || 3000;


app.get('/', function (req, res) {
  res.send('Hello World -- Mongo is here!')
})

app.listen(PORT,() => console.log("Server started"));
