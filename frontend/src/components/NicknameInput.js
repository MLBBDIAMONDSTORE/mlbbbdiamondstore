import React, { useContext, useState } from 'react';
import axios from 'axios';
import { OrderContext } from '../context/OrderContext';
import { useTranslation } from 'react-i18next';

const NicknameInput = () => {
  const { setNickname, setUserInfo } = useContext(OrderContext);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const { t } = useTranslation();

  const handleCheck = async () => {
    try {
      const res = await axios.get(`https://api.isan.eu.org/nickname/ml?id=${input}`);
      if (res.data?.username) {
        setNickname(res.data.username);
        setUserInfo(res.data);
        setError('');
      } else {
        setError(t('invalid_id'));
      }
    } catch {
      setError(t('invalid_id'));
    }
  };

  return (
    <div className="nickname-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={t('enter_id')}
      />
      <button onClick={handleCheck}>{t('check')}</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default NicknameInput;