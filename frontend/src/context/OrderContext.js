import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [cart, setCart]         = useState([]);
  const [mlbbId, setMlbbId]     = useState('');
  const [zone, setZone]         = useState('');
  const [nickname, setNickname] = useState('');

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const clearCart = () => setCart([]);

  return (
    <OrderContext.Provider value={{
      cart, addToCart, clearCart,
      mlbbId, setMlbbId, zone, setZone,
      nickname, setNickname
    }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);