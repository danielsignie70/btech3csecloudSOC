const mongoose = require('mongoose');
const TableSchema = new mongoose.Schema({
  number: Number,
  seats: Number
});
module.exports = mongoose.model('Table', TableSchema);