const express = require('express');
const router = express.Router();
const roomCtrl = require('../controllers/roomController');

router.get('/rooms', roomCtrl.getRooms);
router.get('/rooms/:id', roomCtrl.getRoom);
router.post('/rooms', roomCtrl.createRoom);
router.put('/rooms/:id', roomCtrl.updateRoom);
router.delete('/rooms/:id', roomCtrl.deleteRoom);

module.exports = router;


