const Order = require('../models/Order');

// Buyurtma yaratish
exports.createOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: 'Order creation failed' });
  }
};

// Buyurtma holatini olish
exports.getOrderStatus = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ error: 'Order not found' });
    res.json({ status: order.status });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// To‘lovlarni saqlash
exports.submitPayment = async (req, res) => {
  const { orderId, paymentMethod, cardNumber, paymentProof } = req.body;
  try {
    const order = await Order.findByIdAndUpdate(orderId, {
      paymentMethod,
      cardNumber,
      paymentProof
    }, { new: true });
    res.json(order);
  } catch (error) {
    res.status(400).json({ error: 'Payment failed' });
  }
};

// Admin buyurtmalarni ko‘rishi
exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
};

// Admin tasdiqlashi
exports.approveOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, { status: 'Approved' }, { new: true });
  res.json(order);
};

// Admin bekor qilishi
exports.rejectOrder = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, { status: 'Rejected' }, { new: true });
  res.json(order);
};

// Mijoz karta raqami yuboradi (refund uchun)
exports.submitRefundCard = async (req, res) => {
  const { refundCard } = req.body;
  const order = await Order.findByIdAndUpdate(req.params.id, { refundCard }, { new: true });
  res.json(order);
};

// Admin refundni tasdiqlaydi
exports.confirmRefund = async (req, res) => {
  const order = await Order.findByIdAndUpdate(req.params.id, { status: 'Refunded' }, { new: true });
  res.json(order);
};
