export const verifyNickname = async (gameId, zoneId) => {
  const res = await fetch(`https://api.isan.eu.org/nickname/ml?id=${gameId}&zone=${zoneId}`);
  const data = await res.json();
  if (data.status === 'error') {
    throw new Error('Invalid');
  }
  return data.nickname;
};

export const getProducts = () => [
  { id: 1, name: '86 Diamonds', price: 00000, emoji: '💎' },
  { id: 2, name: '172 Diamonds', price: 00000, emoji: '💎' },
  { id: 3, name: '257 Diamonds', price: 00000, emoji: '💎' },
  { id: 4, name: '706 Diamonds', price: 00000, emoji: '💎' },
  { id: 5, name: '2195 Diamonds', price: 00000, emoji: '💎' },
  { id: 6, name: '2398 Diamonds', price: 00000, emoji: '💎' },
  { id: 7, name: '3688 Diamonds', price: 00000, emoji: '💎' },
  { id: 8, name: '5532 Diamonds', price: 00000, emoji: '💎' },
  { id: 9, name: '6042 Diamonds', price: 00000, emoji: '💎' },
  { id: 10, name: '9288 Diamonds', price: 00000, emoji: '💎' },
  { id: 11, name: 'Weekly Pass', price: 00000, emoji: '💎' },
  { id: 12, name: 'Twilight Pass', price: 00000, emoji: '💎' },
];