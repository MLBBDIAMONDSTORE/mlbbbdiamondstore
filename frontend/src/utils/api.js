export const verifyMLBBId = async (id, zone) => {
  try {
    const response = await fetch(`https://api.isan.eu.org/nickname/ml?id=${id}&zone=${zone}`);
    if (!response.ok) {
      throw new Error('Tarmoqqa ulanishda xatolik');
    }
    const data = await response.json();
    if (data.error) {
      throw new Error('ID yoki Zone noto‘g‘ri');
    }
    return data;
  } catch (error) {
    throw error;
  }
};