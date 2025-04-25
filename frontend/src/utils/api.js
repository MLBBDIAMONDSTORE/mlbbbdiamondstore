import axios from 'axios';

export const createOrder = async (orderData) => {
  try {
    const response = await axios.post('/api/orders', orderData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};