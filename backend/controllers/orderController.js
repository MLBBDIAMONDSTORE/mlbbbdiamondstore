const Order = require('../models/Order');
const validateMLBB = require('../utils/validateMLBB');

exports.createOrder = async (req, res) => {
  const { userId, zoneId, productId, diamonds, price } = req.body;

  const validation = await validateMLBB(userId, zoneId);
  if (!validation.valid) {
    return res.status(400).json({ message: validation.message });
  }

  try {
    const order = new Order({
      nickname: validation.nickname,
      userId,
      zoneId,
      productId,
      diamonds,
      price,
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};