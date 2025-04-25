import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState({
    items: [],
    gameId: '',
    userId: '',
    paymentMethod: '',
    totalAmount: 0,
  });

  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};