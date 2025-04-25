import React, { useState } from 'react';
import '../styles/OrderForm.css';

const OrderForm = ({ onNext, onBack }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (name && email) {
      onNext({ name, email });
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="order-form">
      <h2>Enter Your Details</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="form-buttons">
        <button onClick={onBack}>Back</button>
        <button onClick={handleSubmit}>Next</button>
      </div>
    </div>
  );
};

export default OrderForm;