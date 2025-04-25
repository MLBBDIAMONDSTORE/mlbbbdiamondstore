export const validateMLBB = async (mlbbId, zoneId) => {
  const param = encodeURIComponent(`${mlbbId}(${zoneId})`);
  try {
    const res = await fetch(
      `https://api.isan.eu.org/nickname/ml?id=${param}`
    );
    const data = await res.json();
    return data.username || null;
  } catch {
    return null;
  }
};