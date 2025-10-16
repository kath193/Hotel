const Room = require('../models/roomModel');

exports.getRooms = async (req, res) => {
try {
const rooms = await Room.find();
res.json(rooms);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

exports.getRoom = async (req, res) => {
try {
const room = await Room.findById(req.params.id);
if (!room) return res.status(404).json({ error: 'Room not found' });
res.json(room);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

exports.createRoom = async (req, res) => {
try {
const newRoom = await Room.create(req.body);
res.status(201).json(newRoom);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

exports.updateRoom = async (req, res) => {
try {
const updatedRoom = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true });
if (!updatedRoom) return res.status(404).json({ error: 'Room not found' });
res.json(updatedRoom);
} catch (err) {
res.status(500).json({ error: err.message });
}
};

exports.deleteRoom = async (req, res) => {
try {
const deleted = await Room.findByIdAndDelete(req.params.id);
if (!deleted) return res.status(404).json({ error: 'Room not found' });
res.json({ message: 'Room deleted' });
} catch (err) {
res.status(500).json({ error: err.message });
}
};


