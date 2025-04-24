const express = require('express');
const router = express.Router();
const {
  createOrder,
  getAllOrders,
  updateOrderStatus,
  cancelOrder,
  setRefundCard,
  confirmRefund
} = require('../controllers/orderController');

router.post('/', createOrder);
router.get('/', getAllOrders);
router.patch('/:id', updateOrderStatus);
router.delete('/:id', cancelOrder);
router.post('/refund/:id', setRefundCard);
router.post('/refund/confirm/:id', confirmRefund);

module.exports = router;
