const express = require('express');
const app = express();
require('dotenv').config();
const {connectionDb} = require('./config/db.js')
const router = require('./Routes/contactRoute.js')
const cors = require('cors');

connectionDb();


app.use(cors());


app.use(express.json());

app.use('/api', router)

app.get('/', (req,res)=>{
  res.send('Contact Application')
})

const PORT = process.env.PORT;

app.listen(PORT, err=>{
  err ? console.log(err) : console.log(`server is running on http://localhost:${PORT}`)
})