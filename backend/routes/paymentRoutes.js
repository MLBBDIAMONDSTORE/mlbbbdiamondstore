const express = require('express');
const router = express.Router();
const { verifyNickname, makePayment } = require('../controllers/paymentController');

router.post('/verify', verifyNickname);
router.post('/', makePayment);

module.exports = router;
