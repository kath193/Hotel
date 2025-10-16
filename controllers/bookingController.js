const Booking = require('../models/bookingModel');
const Room = require('../models/roomModel');

exports.getBookings = async (req, res) => {
try {
const bookings = await Booking.find().populate('guestId').populate('roomId');
res.json(bookings);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

exports.getBooking = async (req, res) => {
try {
const booking = await Booking.findById(req.params.id).populate('guestId').populate('roomId');
if (!booking) return res.status(404).json({ error: 'Booking not found' });
res.json(booking);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

exports.createBooking = async (req, res) => {
try {
const { guestId, roomId, checkIn, checkOut, status } = req.body;
const room = await Room.findById(roomId);
if (!room) return res.status(404).json({ error: 'Room not found' });
if (room.status !== 'available') return res.status(400).json({ error: 'Room is not available' });

const newBooking = await Booking.create({ guestId, roomId, checkIn, checkOut, status });
room.status = 'occupied';
await room.save();
res.status(201).json(newBooking);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

exports.updateBooking = async (req, res) => {
try {
const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!updatedBooking) return res.status(404).json({ error: 'Booking not found' });
res.json(updatedBooking);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

exports.deleteBooking = async (req, res) => {
try {
const booking = await Booking.findByIdAndDelete(req.params.id);
if (!booking) return res.status(404).json({ error: 'Booking not found' });
// if a booking is deleted, optionally free the room
const room = await Room.findById(booking.roomId);
if (room) {
room.status = 'available';
await room.save();
}
res.json({ message: 'Booking deleted' });
} catch (err) {
res.status(500).json({ error: err.message });
}
};


