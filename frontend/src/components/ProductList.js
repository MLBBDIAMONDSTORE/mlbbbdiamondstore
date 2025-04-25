import React, { useContext } from 'react';
import { OrderContext } from '../context/OrderContext';
import '../styles/OrderForm.css'; // yoki App.css

const products = [
  { name: '56', price: 0.81 },
  { name: '86', price: 1.07 },
  { name: '112', price: 1.63 },
  { name: '172', price: 2.12 },
  { name: '257', price: 3.07 },
  { name: '706', price: 8.33 },
  { name: '2195', price: 25.23 },
  { name: '2398', price: 32.53 },
  { name: '3688', price: 42.09 },
  { name: '5532', price: 63.55 },
  { name: '6042', price: 81.32 },
  { name: '9288', price: 105.56 },
  { name: 'Weekly Pass', price: 1.32 },
  { name: 'Twilight Pass', price: 6.99 },
];

const ProductList = () => {
  const { addToOrder, orderItems } = useContext(OrderContext);

  const handleAdd = (product) => {
    addToOrder({
      ...product,
      emoji: "💎", // agar emoji kerak bo'lsa
    });
  };

  return (
    <div className="order-form">
      <h1>Choose Your Product</h1>
      <div className="order-form-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="emoji">💎</div>
            <p>{product.name} Diamonds</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <button onClick={() => handleAdd(product)}>ADD</button>
          </div>
        ))}
      </div>

      {orderItems.length > 0 && (
        <button
          className="view-order-button"
          onClick={() => window.location.href = "/summary"}
        >
          VIEW ORDER
        </button>
      )}
    </div>
  );
};

export default ProductList;