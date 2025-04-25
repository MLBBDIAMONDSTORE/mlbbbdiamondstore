import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (product) => {
    setOrderItems((prevItems) => [...prevItems, product]);
  };

  return (
    <OrderContext.Provider value={{ orderItems, addToOrder }}>
      {children}
    </OrderContext.Provider>
  );
};