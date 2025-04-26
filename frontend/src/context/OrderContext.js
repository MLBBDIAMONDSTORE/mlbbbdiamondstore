import React, { createContext, useState } from 'react';

export const OrderContext = createContext();

export function OrderProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [gameId, setGameId] = useState('');
  const [zoneId, setZoneId] = useState('');
  const [nickname, setNickname] = useState('');

  return (
    <OrderContext.Provider
      value={{
        cart,
        setCart,
        gameId,
        setGameId,
        zoneId,
        setZoneId,
        nickname,
        setNickname,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}