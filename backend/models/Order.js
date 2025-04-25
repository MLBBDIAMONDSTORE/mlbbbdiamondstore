const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  nickname: { type: String, required: true },
  userId: { type: String, required: true },
  zoneId: { type: String, required: true },
  productId: { type: String, required: true },
  diamonds: { type: Number, required: true },
  price: { type: Number, required: true },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);