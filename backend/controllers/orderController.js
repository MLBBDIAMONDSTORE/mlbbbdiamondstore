const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { product, price, userId } = req.body;
    const order = new Order({ product, price, userId });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Order creation failed', error: error.message });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Fetching orders failed', error: error.message });
  }
};