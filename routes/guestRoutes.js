const express = require('express');
const router = express.Router();
const guestCtrl = require('../controllers/guestController');

router.get('/guests', guestCtrl.getGuests);
router.get('/guests/:id', guestCtrl.getGuest);
router.post('/guests', guestCtrl.createGuest);
router.put('/guests/:id', guestCtrl.updateGuest);
router.delete('/guests/:id', guestCtrl.deleteGuest);

module.exports = router;


