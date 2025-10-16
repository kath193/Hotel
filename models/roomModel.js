const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
number: { type: Number, required: true, unique: true },
type: { type: String, required: true },
price: { type: Number, required: true, min: 0 },
status: { type: String, enum: ['available', 'occupied'], default: 'available', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);


