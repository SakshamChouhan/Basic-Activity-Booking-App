const express = require('express');
const { listActivities } = require('../controllers/activityController');
const router = express.Router();

router.get('/', listActivities);

// Add this above module.exports (remove after seeding!)
router.post('/seed', async (req, res) => {
    const Activity = require('../models/Activity');
    const sampleActivities = [
      {
        title: "Cricket Match",
        description: "Local tournament",
        location: "Stadium A",
        datetime: new Date("2024-07-01T10:00:00Z")
      },
      {
        title: "Movie Night",
        description: "Watching the latest hits",
        location: "Cinema B",
        datetime: new Date("2024-07-03T20:00:00Z")
      }
    ];
    await Activity.deleteMany({});
    await Activity.insertMany(sampleActivities);
    res.json({ status: "seeded" });
  });

module.exports = router;