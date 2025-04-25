


import React, { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import "../styles/ProductList.css";

const products = [
  { id: 1, name: '56', price: 0.81 },
  { id: 2, name: '86', price: 1.07 },
  { id: 3, name: '112', price: 1.63 },
  { id: 4, name: '172', price: 2.12 },
  { id: 5, name: '257', price: 3.07 },
  { id: 6, name: '706', price: 8.33 },
  { id: 7, name: '2195', price: 25.23 },
  { id: 8, name: '2398', price: 32.53 },
  { id: 9, name: '3688', price: 42.09 },
  { id: 10, name: '5532', price: 63.55 },
  { id: 11, name: '6042', price: 81.32 },
  { id: 12, name: '9288', price: 105.56 },
  { id: 13, name: 'Weekly Pass', price: 1.32 },
  { id: , name: 'Twilight Pass', price: 6.99 },
];

const ProductList = () => {
  const { addToOrder } = useContext(OrderContext);

  return (
    <div className="product-list-container">
      <h1 className="choose-title">Choose Your Product</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id} onClick={() => addToOrder(product)}>
            <div className="emoji">💎</div>
            <div className="product-name">{product.name}</div>
            <div className="product-price">${product.price.toFixed(2)}</div>
            <button className="add-button">ADD</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;