import React, { memo } from 'react';
import { AppProvider, useAppContext } from './AppContext';

const ContextCounter = memo(() => {
  const { count, increment, decrement } = useAppContext();
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Simple Counter App</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
});

const App = () => (
  <AppProvider>
    <ContextCounter />
  </AppProvider>
);

export default App;