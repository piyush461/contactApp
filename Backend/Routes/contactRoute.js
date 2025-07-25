const { Router } = require("express")
const {createContact, getContact} = require('../Controller/contactController')
const router = Router()

router.post('/contact', createContact)
router.get('/contact', getContact)

module.exports = router;