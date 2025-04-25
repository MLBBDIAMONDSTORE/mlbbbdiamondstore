import { useState } from 'react';

const NicknameInput = ({ onValidate }) => {
  const [userId, setUserId] = useState('');
  const [zoneId, setZoneId] = useState('');

  const handleValidate = () => {
    onValidate(userId, zoneId);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Zone ID"
        value={zoneId}
        onChange={(e) => setZoneId(e.target.value)}
      />
      <button onClick={handleValidate}>Validate</button>
    </div>
  );
};

export default NicknameInput;