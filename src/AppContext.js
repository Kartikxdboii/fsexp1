import React, { createContext, useContext, useState, useMemo } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  
  const value = useMemo(() => ({
    count,
    increment: () => setCount(prev => prev + 1),
    decrement: () => setCount(prev => prev - 1)
  }), [count]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);