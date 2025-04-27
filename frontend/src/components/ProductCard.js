import React from 'react';
import CartButton from './CartButton';

const ProductCard = ({ product, quantity, onAdd, onRemove }) => {
  return (
    <div style={styles.card}>
      <div style={styles.emoji}>{product.emoji}</div>
      <div style={styles.name}>{product.name}</div>
      <div style={styles.price}>{product.price.toLocaleString()} UZS</div>
      <CartButton quantity={quantity} onAdd={onAdd} onRemove={onRemove} />
    </div>
  );
};

const styles = {
  card: {
    width: '120px',
    padding: '15px',
    margin: '10px',
    borderRadius: '15px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  },
  emoji: {
    fontSize: '40px',
    marginBottom: '10px',
  },
  name: {
    fontWeight: 'bold',
    fontSize: '16px',
    marginBottom: '5px',
    textAlign: 'center',
  },
  price: {
    fontSize: '14px',
    color: '#555',
    marginBottom: '10px',
    textAlign: 'center',
  },
};

export default ProductCard;