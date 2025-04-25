import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [nickname, setNickname] = useState('');
  const [zone, setZone] = useState('');
  const [products] = useState([
    { id: 1, name: '86 Diamonds', price: 15000, emoji: '💎' },
    { id: 2, name: '172 Diamonds', price: 30000, emoji: '💠' },
    { id: 3, name: '257 Diamonds', price: 45000, emoji: '🔷' },
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <OrderContext.Provider
      value={{
        nickname,
        setNickname,
        zone,
        setZone,
        products,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);