const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI;


exports.connectionDb = async()=>{
  await mongoose.connect(MONGODB_URI);
  console.log('Database conneted successfully!')
}
