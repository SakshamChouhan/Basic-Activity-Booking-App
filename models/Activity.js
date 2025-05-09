const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  datetime: { type: Date, required: true },
});

module.exports = mongoose.model('Activity', activitySchema);