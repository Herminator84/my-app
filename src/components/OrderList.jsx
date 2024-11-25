// src/components/OrderList.jsx
import React from 'react';

function OrderList({ order, updateQuantity, calculateTotal }) {
  return (
    <div className="order-list">
      <h2>Your Order</h2>
      {order.length === 0 ? (
        <p>No items in your order.</p>
      ) : (
        <ul>
          {order.map((item) => (
            <li key={item.id}>
              {item.name} x {item.quantity}
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
            </li>
          ))}
        </ul>
      )}
      <div className="total">
        <strong>Total: ${calculateTotal().toFixed(2)}</strong>
      </div>
    </div>
  );
}

export default OrderList;  // Make sure to export the component
