export const formatPrice = (price, language) => {
    if (language === 'uz') {
      return (price * 12000).toFixed(0) + ' UZS';
    } else {
      return '$' + price.toFixed(2);
    }
  };