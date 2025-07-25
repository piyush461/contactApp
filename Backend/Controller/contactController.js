const contactSchema = require('../Model/contactSchema');

exports.createContact = async(req, res)=>{
  let payload = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    location: req.body.location
  }

  await contactSchema.create(payload)
  res.json({success: true, message: 'Contact created successfully', data: payload});
}

exports.getContact = async(req, res)=>{
  let contacts = await contactSchema.find();
  res.send(contacts);
}