import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  price: Number,
  emoji: String,
}, {
  timestamps: true,
});

export default mongoose.model('Product', productSchema);