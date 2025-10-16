const Guest = require('../models/guestModel');

exports.getGuests = async (req, res) => {
try {
const guests = await Guest.find();
res.json(guests);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

exports.getGuest = async (req, res) => {
try {
const guest = await Guest.findById(req.params.id);
if (!guest) return res.status(404).json({ error: 'Guest not found' });
res.json(guest);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

exports.createGuest = async (req, res) => {
try {
const newGuest = await Guest.create(req.body);
res.status(201).json(newGuest);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

exports.updateGuest = async (req, res) => {
try {
const updatedGuest = await Guest.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!updatedGuest) return res.status(404).json({ error: 'Guest not found' });
res.json(updatedGuest);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

exports.deleteGuest = async (req, res) => {
try {
const deleted = await Guest.findByIdAndDelete(req.params.id);
if (!deleted) return res.status(404).json({ error: 'Guest not found' });
res.json({ message: 'Guest deleted' });
} catch (err) {
res.status(500).json({ error: err.message });
}
};


