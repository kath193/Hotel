const Booking = require('../models/Booking');
const Room = require('../models/Room');

// CREATE
exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);
    await Room.findByIdAndUpdate(req.body.roomId, { status: 'occupied' });
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// READ all
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('guestId roomId');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// READ one
exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id).populate('guestId roomId');
    if (!booking) return res.status(404).json({ error: 'Booking not found' });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateBooking = async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (booking) {
      await Room.findByIdAndUpdate(booking.roomId, { status: 'available' });
      await Booking.findByIdAndDelete(req.params.id);
    }
    res.json({ message: 'Booking deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
