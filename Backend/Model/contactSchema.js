const {Schema, model} = require('mongoose')

let contactSchema = new Schema({
  firstName:{
    type: 'string',
    required: true
  },
  lastName:{
    type: 'string',
    required: true
  }, 
  phone:{
    type: 'number',
    required: true
  }, 
  location:{
    type: 'string',
    required: true,
    enum: ['mobile', 'sim', 'email']
  }
})

module.exports = model('contact', contactSchema, 'contact')