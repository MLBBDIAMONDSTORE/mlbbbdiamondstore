export const verifyNickname = async (gameId, zoneId) => {
  const res = await fetch(`https://api.isan.eu.org/nickname/ml?id=${gameId}&zone=${zoneId}`);
  const data = await res.json();
  if (data.status === 'error') {
    throw new Error('Invalid');
  }
  return data.nickname;
};

export const getProducts = () => [
  { id: 1, name: '86 Diamonds', price: 17000, emoji: '💎' },
  { id: 2, name: '172 Diamonds', price: 34000, emoji: '✨' },
  { id: 3, name: '257 Diamonds', price: 51000, emoji: '⚡' },
];