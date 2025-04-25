const fetch = require('node-fetch'); // npm install node-fetch@2

module.exports = async (mlbbId, zoneId) => {
  try {
    const param = encodeURIComponent(`${mlbbId}(${zoneId})`);
    const res = await fetch(`https://api.isan.eu.org/nickname/ml?id=${param}`);
    const data = await res.json();
    return !!data.username;
  } catch {
    return false;
  }
};