import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    setCart((prev) => ({
      ...prev,
      [product.id]: (prev[product.id] || 0) + 1,
    }));
  };

  const removeFromCart = (product) => {
    setCart((prev) => {
      if (!prev[product.id]) return prev;
      const updated = { ...prev };
      updated[product.id] -= 1;
      if (updated[product.id] <= 0) {
        delete updated[product.id];
      }
      return updated;
    });
  };

  const getQuantity = (id) => cart[id] || 0;

  return (
    <OrderContext.Provider value={{ cart, addToCart, removeFromCart, getQuantity }}>
      {children}
    </OrderContext.Provider>
  );
};