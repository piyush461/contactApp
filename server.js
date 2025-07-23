const express = require('express');
const app = express();
require('dotenv').config();
const {connectionDb} = require('./config/db.js')
const {model} = require('./Model/contactSchema.js')

connectionDb();



app.get('/', (req,res)=>{
  res.send('Contact Application')
})

const PORT = process.env.PORT;

app.listen(PORT, err=>{
  err ? console.log(err) : console.log(`server is running on http://localhost:${PORT}`)
})