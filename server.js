const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./src/config/db'); // add 'src'
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
const roomsRoutes = require('./src/routes/rooms');   // add 'src'
const guestsRoutes = require('./src/routes/guests');
const bookingsRoutes = require('./src/routes/bookings');

app.use('/api/rooms', roomsRoutes);
app.use('/api/guests', guestsRoutes);
app.use('/api/bookings', bookingsRoutes);

app.get('/', (req, res) => {
  res.send('🏨 Hotel Management API is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
