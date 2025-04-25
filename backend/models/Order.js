const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  gameId: String,
  userId: String,
  amount: Number,
  paymentMethod: String,
  status: {
    type: String,
    enum: ['pending', 'paid', 'completed'],
    default: 'pending',
  },
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);