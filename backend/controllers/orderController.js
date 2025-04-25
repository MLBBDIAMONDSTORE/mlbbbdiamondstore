const Order = require('../models/Order');
const validateMLBB = require('../utils/validateMLBB');

exports.createOrder = async (req, res) => {
  const { mlbbId, zoneId, nickname, products } = req.body;
  const valid = await validateMLBB(mlbbId, zoneId);
  if (!valid) {
    return res.status(400).json({ error: 'Invalid MLBB ID or Zone' });
  }
  const order = new Order({ mlbbId, zoneId, nickname, products });
  await order.save();
  res.status(201).json(order);
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
};