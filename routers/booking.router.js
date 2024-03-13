const router = require('express').Router();
const BookingController = require('../controllers/booking.controller');

router.get('/',BookingController.getBooking)

router.post('/',BookingController.postBooking)

module.exports = router