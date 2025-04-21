// src/pages/Order.jsx
import React, { useEffect, useState } from 'react';

const Orders = ( props ) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Previous Orders</h2>
      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index}>
              <strong>Name:</strong> {order.name} <br />
              <strong>Address:</strong> {order.address} <br />
              <strong>ZIP:</strong> {order.zip} <br />
              <strong>Country:</strong> {order.country} <br />
              <p><strong>Ingredients:</strong></p>
              <p>Salad: {order.ingredients?.salad}</p>
              <p>Bacon: {order.ingredients?.bacon}</p>
              <p>Cheese: {order.ingredients?.cheese}</p>
              <p>Meat: {order.ingredients?.meat}</p>
              <p>
                Price: <strong>{order.price}$</strong>
              </p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
