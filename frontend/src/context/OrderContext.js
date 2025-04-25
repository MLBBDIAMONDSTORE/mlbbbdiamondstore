import React, { createContext, useState, useContext } from 'react';

const OrderContext = createContext();

export const useOrder = () => useContext(OrderContext);

export const OrderProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [mlbbId, setMlbbId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [nickname, setNickname] = useState('');

  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const clearCart = () => setCart([]);

  return (
    <OrderContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
        mlbbId,
        setMlbbId,
        zoneId,
        setZoneId,
        nickname,
        setNickname,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};