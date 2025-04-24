import React, { useEffect, useState } from 'react';
import '../styles/AdminPanel.css';

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // TODO: backenddan buyurtmalarni olib kelish
    const fakeOrders = [
      {
        _id: '1',
        product: '706 diamonds',
        price: 8.33,
        gameId: '12345678',
        zone: '1234',
        paymentProof: 'TXN12345',
        status: 'Pending',
        refundCard: '',
      },
      {
        _id: '2',
        product: 'Twilight Pass',
        price: 6.99,
        gameId: '98765432',
        zone: '5678',
        paymentProof: 'TXN99999',
        status: 'Rejected',
        refundCard: '8600123456789012',
      },
    ];
    setOrders(fakeOrders);
  }, []);

  const handleApprove = (id) => {
    // TODO: backendga tasdiqlash so‘rovi yuborish
    console.log('Tasdiqlandi:', id);
    setOrders(prev =>
      prev.map(order =>
        order._id === id ? { ...order, status: 'Approved' } : order
      )
    );
  };

  const handleReject = (id) => {
    // TODO: backendga rad etish so‘rovi yuborish
    console.log('Bekor qilindi:', id);
    setOrders(prev =>
      prev.map(order =>
        order._id === id ? { ...order, status: 'Rejected' } : order
      )
    );
  };

  const handleRefundConfirm = (id) => {
    // TODO: backendga refund tasdiqlash so‘rovi yuborish
    console.log('Refund tasdiqlandi:', id);
    setOrders(prev =>
      prev.map(order =>
        order._id === id ? { ...order, status: 'Refunded' } : order
      )
    );
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel - Buyurtmalar</h2>
      {orders.map(order => (
        <div key={order._id} className="order-card">
          <p><strong>Mahsulot:</strong> {order.product}</p>
          <p><strong>Game ID:</strong> {order.gameId}</p>
          <p><strong>Zone:</strong> {order.zone}</p>
          <p><strong>Narxi:</strong> ${order.price}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>To‘lov cheki:</strong> {order.paymentProof}</p>
          {order.status === 'Pending' && (
            <>
              <button className="approve" onClick={() => handleApprove(order._id)}>Tasdiqlash</button>
              <button className="reject" onClick={() => handleReject(order._id)}>Bekor qilish</button>
            </>
          )}
          {order.status === 'Rejected' && order.refundCard && (
            <>
              <p><strong>Refund karta:</strong> {order.refundCard}</p>
              <button className="refund" onClick={() => handleRefundConfirm(order._id)}>Pulni qaytarish</button>
            </>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
