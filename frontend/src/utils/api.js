export const validateNickname = async (nickname) => {
  try {
    const response = await fetch(`https://api.isan.eu.org/nickname/ml?id=${nickname}`);
    const data = await response.json();
    return data.status === true;
  } catch (error) {
    return false;
  }
};