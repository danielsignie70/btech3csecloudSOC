const mongoose = require('mongoose');
const ReservationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  table: { type: mongoose.Schema.Types.ObjectId, ref: 'Table' },
  date: Date,
  time: String
});
module.exports = mongoose.model('Reservation', ReservationSchema);