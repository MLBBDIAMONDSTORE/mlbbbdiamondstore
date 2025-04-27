import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.id === product.id);
      if (found.quantity === 1) {
        return prev.filter((item) => item.id !== product.id);
      }
      return prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const getQuantity = (id) => {
    const found = cart.find((item) => item.id === id);
    return found ? found.quantity : 0;
  };

  return (
    <OrderContext.Provider value={{ cart, addToCart, removeFromCart, getQuantity }}>
      {children}
    </OrderContext.Provider>
  );
};