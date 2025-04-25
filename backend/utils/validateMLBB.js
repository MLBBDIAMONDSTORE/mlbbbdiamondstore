const axios = require('axios');

const validateMLBB = async (userId, zoneId) => {
  try {
    const response = await axios.get(`https://api.isan.eu.org/nickname/ml?id=${userId}&zone=${zoneId}`);
    if (response.data && response.data.nickname) {
      return { valid: true, nickname: response.data.nickname };
    } else {
      return { valid: false, message: 'Nickname not found' };
    }
  } catch (error) {
    return { valid: false, message: 'Validation error' };
  }
};

module.exports = validateMLBB;