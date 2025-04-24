const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    product: String,
    price: Number,
    gameId: String,
    zone: String,
    paymentProof: String,
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected', 'Refunded'],
      default: 'Pending',
    },
    refundCard: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
