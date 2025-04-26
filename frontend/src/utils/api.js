export async function validateMLBB(gameId, zoneId) {
  const res = await fetch(`https://api.isan.eu.org/nickname/ml?id=${gameId}&zone=${zoneId}`);
  if (!res.ok) throw new Error('Invalid credentials');
  const data = await res.json();
  return data.nickname;
}

export function getProducts() {
  return [
    { id: '56', name: '56 Diamonds', price: 0.81 },
    { id: '86', name: '86 Diamonds', price: 1.07 },
    { id: '112', name: '112 Diamonds', price: 1.63 },
    { id: '172', name: '172 Diamonds', price: 2.12 },
    { id: '257', name: '257 Diamonds', price: 3.07 },
    { id: '706', name: '706 Diamonds', price: 8.33 },
    { id: '2195', name: '2195 Diamonds', price: 25.23 }
  ];
}
