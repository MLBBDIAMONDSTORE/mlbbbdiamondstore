// src/context/OrderContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const OrderProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [nickname, setNickname] = useState('');
  const [userInfo, setUserInfo] = useState({
    id: '',
    zone: '',
  });

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const setUserDetails = (id, zone) => {
    setUserInfo({ id, zone });
  };

  const setUserNickname = (name) => {
    setNickname(name);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        clearCart,
        userInfo,
        setUserDetails,
        nickname,
        setUserNickname,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};