const express = require('express');
const router = express.Router();
const { submitPayment } = require('../controllers/orderController');

router.post('/click', submitPayment);
router.post('/globalpay', submitPayment);

module.exports = router;
