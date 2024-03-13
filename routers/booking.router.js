const router = require('express').Router();
const BookingController = require('../controllers/booking.controller');

router.get('/',BookingController.getBooking)

module.exports = router