const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Barcha buyurtmalarni olish
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Buyurtmani tasdiqlash
router.patch('/orders/:id/approve', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: 'Approved' },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Buyurtmani rad etish
router.patch('/orders/:id/reject', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: 'Rejected' },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Refund karta raqamini saqlash
router.post('/orders/:id/refund-card', async (req, res) => {
  const { refundCard } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { refundCard },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Pul qaytarishni tasdiqlash
router.patch('/orders/:id/refund-confirm', async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status: 'Refunded' },
      { new: true }
    );
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
