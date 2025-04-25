exports.validateCard = (cardNumber) => {
  return /^[0-9]{16}$/.test(cardNumber);
};
