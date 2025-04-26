import React, { useContext, useState } from 'react';
import { CartContext } from '../context/OrderContext';
import { verifyNickname } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

const VerifyPage = () => {
  const { setNickname, setLoading } = useContext(CartContext);
  const [id, setId] = useState('');
  const [zone, setZone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleVerify = async () => {
    setLoading(true);
    setError('');
    const data = await verifyNickname(id, zone);
    setLoading(false);

    if (data && data.nickname) {
      setNickname(data.nickname);
      navigate('/order');
    } else {
      setError('ID yoki Zone ID xato!');
    }
  };

  return (
    <div className="page-container">
      <h2 className="page-title">ID va Zone ID ni kiriting</h2>
      <div className="verify-form">
        <input
          type="text"
          placeholder="Game ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="verify-input"
        />
        <input
          type="text"
          placeholder="Zone ID"
          value={zone}
          onChange={(e) => setZone(e.target.value)}
          className="verify-input"
        />
        <button onClick={handleVerify} className="verify-button">
          Tekshirish
        </button>
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default VerifyPage;