const express = require('express');
const router = express.Router();
const {
  createOrder,
  getOrderStatus,
  getAllOrders,
  approveOrder,
  rejectOrder,
  submitRefundCard,
  confirmRefund
} = require('../controllers/orderController');

// Public
router.post('/', createOrder);
router.get('/:id/status', getOrderStatus);

// Admin
router.get('/', getAllOrders);
router.patch('/:id/approve', approveOrder);
router.patch('/:id/reject', rejectOrder);
router.post('/:id/refund-card', submitRefundCard);
router.patch('/:id/refund-confirm', confirmRefund);

module.exports = router;
