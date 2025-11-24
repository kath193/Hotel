const mongoose = require('mongoose');
require('dotenv').config();
const Room = require('./models/Room');
const Guest = require('./models/Guest');
const Booking = require('./models/Booking');

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to MongoDB for seeding...');

    // Clear old data
    await Room.deleteMany();
    await Guest.deleteMany();
    await Booking.deleteMany();

    // Seed rooms
    const rooms = await Room.insertMany([
      { number: 101, type: 'Single', price: 80 },
      { number: 102, type: 'Double', price: 120 },
      { number: 201, type: 'Suite', price: 250 }
    ]);

    // Seed guests
    const guests = await Guest.insertMany([
      { name: 'Alice Johnson', email: 'alice@mail.com', phone: '111-222-3333' },
      { name: 'Bob Smith', email: 'bob@mail.com', phone: '444-555-6666' }
    ]);

    // Seed booking
    await Booking.create({
      guestId: guests[0]._id,
      roomId: rooms[0]._id,
      checkIn: new Date(),
      checkOut: new Date(Date.now() + 3 * 86400000),
      status: 'active'
    });

    console.log('✅ Database seeded successfully!');
    process.exit();
  } catch (err) {
    console.error('❌ Seeding error:', err);
    process.exit(1);
  }
};

seedData();
