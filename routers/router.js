const router = require('express').Router(); 
const HomeRouter = require('./home.router')
const MenuRouter = require('./menu.router')
const BookingRouter = require('./booking.router')

router.use('/',HomeRouter)
router.use('/menu',MenuRouter)
router.use('/booking',BookingRouter)

module.exports = router;