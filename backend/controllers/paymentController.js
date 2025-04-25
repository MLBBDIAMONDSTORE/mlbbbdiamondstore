exports.processPayment = async (req, res) => {
  const { cardNumber, amount } = req.body;

  if (!cardNumber || !amount) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  return res.json({ message: 'Payment processed successfully' });
};