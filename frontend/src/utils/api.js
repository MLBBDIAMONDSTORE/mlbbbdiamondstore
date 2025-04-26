// src/utils/api.js

export async function verifyNickname(mlbbId, mlbbZone) {
  try {
    const response = await fetch(`https://api.isan.eu.org/nickname/ml?id=${mlbbId}&zone=${mlbbZone}`);
    if (!response.ok) {
      throw new Error('Failed to fetch nickname');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}