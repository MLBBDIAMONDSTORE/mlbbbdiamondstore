import React, { createContext, useContext, useState } from 'react';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [nickname, setNickname] = useState('');
  const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, product]);
  };

  const clearOrder = () => {
    setProducts([]);
  };

  return (
    <OrderContext.Provider value={{ nickname, setNickname, products, addProduct, clearOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);