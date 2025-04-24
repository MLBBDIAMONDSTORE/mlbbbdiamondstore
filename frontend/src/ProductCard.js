import React from 'react';

const ProductCard = ({ product, onAdd }) => {
  return (
    <div style={styles.card}>
      <div style={styles.image}>{product.emoji}</div>
      <div style={styles.name}>{product.name}</div>
      <div style={styles.price}>${product.price.toFixed(2)}</div>
      <button style={styles.button} onClick={() => onAdd(product)}>
        ADD
      </button>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
  },
  image: {
    fontSize: '48px',
    marginBottom: '10px',
  },
  name: {
    fontSize: '16px',
    marginBottom: '5px',
  },
  price: {
    fontSize: '14px',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#ffcc00',
    color: '#000',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default ProductCard;
