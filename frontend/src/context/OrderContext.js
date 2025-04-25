import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (product) => {
    setOrderItems((prevItems) => {
      const existing = prevItems.find((item) => item.name === product.name);
      if (existing) {
        return prevItems.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromOrder = (productName) => {
    setOrderItems((prevItems) =>
      prevItems.filter((item) => item.name !== productName)
    );
  };

  const clearOrder = () => {
    setOrderItems([]);
  };

  return (
    <OrderContext.Provider value={{ orderItems, addToOrder, removeFromOrder, clearOrder }}>
      {children}
    </OrderContext.Provider>
  );
};