// src/App.jsx
import React, { useState } from 'react';
import Menu from './components/Menu.jsx';
import OrderList from './components/OrderList.jsx';
import ThemeSwitcher from './components/ThemeSwitcher.jsx';
import ErrorBoundary from './components/ErrorBoundary';  
import './App.css';

function App() {
  const [order, setOrder] = useState([]);
  const [theme, setTheme] = useState('light');

  const addToOrder = (item) => {
    setOrder((prevOrder) => {
      const existingItem = prevOrder.find((i) => i.id === item.id);
      if (existingItem) {
        return prevOrder.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevOrder, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setOrder((prevOrder) =>
      prevOrder
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + delta } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal = () =>
    order.reduce((total, item) => total + item.price * item.quantity, 0);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme; // Apply the theme to the body
  };

  return (
    <ErrorBoundary>
      <div className="app">
        <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
        <Menu addToOrder={addToOrder} />
        <OrderList
          order={order}
          updateQuantity={updateQuantity}
          calculateTotal={calculateTotal}
        />
      </div>
    </ErrorBoundary>
  );
}

export default App;
