const express = require('express');
const router = express.Router();
const bookingCtrl = require('../controllers/bookingController');

router.get('/bookings', bookingCtrl.getBookings);
router.get('/bookings/:id', bookingCtrl.getBooking);
router.post('/bookings', bookingCtrl.createBooking);
router.put('/bookings/:id', bookingCtrl.updateBooking);
router.delete('/bookings/:id', bookingCtrl.deleteBooking);

module.exports = router;


