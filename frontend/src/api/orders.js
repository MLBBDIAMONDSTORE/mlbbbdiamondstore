import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const createOrder = (orderData) => {
  return axios.post(`${API_URL}/orders`, orderData);
};

export const getOrderStatus = (orderId) => {
  return axios.get(`${API_URL}/orders/${orderId}`);
};