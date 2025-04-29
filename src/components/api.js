// src/services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://chai-api-hikt.onrender.com/api',
});

export const getMenu = async () => {
  try {
    const response = await api.get('/menu');
    return response.data;
  } catch (error) {
    console.error('Error fetching menu:', error);
    throw error;
  }
};

export const getServices = async () => {
  try {
    const response = await api.get('/services');
    return response.data;
  } catch (error) {
    console.error('Error fetching services:', error);
    throw error;
  }
};
