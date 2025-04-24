const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  product: String,
  price: Number,
  gameId: String,
  zoneId: String,
  nickname: String,
  cardType: String,        // Humo yoki Uzcard
  cardNumber: String,
  transitCard: Boolean,    // True - tranzit, False - oddiy
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected', 'Refunded'],
    default: 'Pending'
  },
  receipt: String,          // To‘lov cheki
  refundCard: String        // Pulni qaytarish uchun karta raqami
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
