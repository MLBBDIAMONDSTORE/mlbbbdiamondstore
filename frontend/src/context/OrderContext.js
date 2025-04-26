import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [nickname, setNickname] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const resetCart = () => {
    setCartItems([]);
    setNickname('');
  };

  return (
    <CartContext.Provider
      value={{
        nickname,
        setNickname,
        cartItems,
        addToCart,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};