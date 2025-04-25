import React, { useEffect, useState } from 'react';
import { getAllOrders } from '../api/orders';

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getAllOrders().then((res) => setOrders(res.data));
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>{order.userId} - {order.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;