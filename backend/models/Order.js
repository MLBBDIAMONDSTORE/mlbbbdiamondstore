const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  mlbbId: String,
  zoneId: String,
  nickname: String,
  products: Array,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);