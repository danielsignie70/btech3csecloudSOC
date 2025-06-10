const express = require('express');
const router = express.Router();
const Reservation = require('C:\Users\danie\OneDrive\Desktop\SANDJONG SIGNIE DANIEL AUBIN\backend\Models\Reservation');

// Create a reservation (POST)
router.post('/', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json(reservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// List reservations by table (GET)
router.get('/table/:tableId', async (req, res) => {
  try {
    const reservations = await Reservation.find({ table: req.params.tableId }).populate('user').populate('table');
    res.json(reservations);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;