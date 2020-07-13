const express = require('express');
const connectDB = require('./DB/Connection')
const app = express();
const PORT = process.env.Port || 3000;

connectDB();

app.use(express.json({ extended:false }));
app.use('/api/userModel', require('./API/User'));



app.get('/', function (req, res) {
  res.send('Hello World - .O*')
})

app.listen(PORT, () => console.log("Server started"));
