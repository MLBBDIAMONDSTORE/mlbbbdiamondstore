import React, { useState } from 'react';
import { useOrder } from '../context/OrderContext';
import { validateNickname } from '../utils/api';
import { useTranslation } from 'react-i18next';

const NicknameInput = () => {
  const { setNickname } = useOrder();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = await validateNickname(inputValue);
    if (isValid) {
      setNickname(inputValue);
      setError('');
    } else {
      setError(t('invalid_nickname'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="nickname-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={t('enter_nickname')}
        required
      />
      <button type="submit">{t('confirm')}</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default NicknameInput;