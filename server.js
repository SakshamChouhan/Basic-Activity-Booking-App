require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const activityRoutes = require('./routes/activities');
const bookingRoutes = require('./routes/bookings');
const app = express();

app.use(express.json());

// Welcome route (for home page)
app.get('/', (req, res) => {
  res.send('Welcome to the Basic Activity Booking API!');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/bookings', bookingRoutes);

// Error middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong', error: err.message });
});

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected successfully!');
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
  })
  .catch(err => console.error('MongoDB connection error:', err));