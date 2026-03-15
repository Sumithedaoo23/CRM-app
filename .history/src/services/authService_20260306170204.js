
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const authService = {
  login: async (email, password, isAdmin = false) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        password,
        isAdmin
      });
      
      if (response.data.token) {
        localStorage.setItem('crm-user', JSON.stringify({
          ...response.data.user,
          token: response.data.token
        }));
      }
      
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  register: async (userData) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  logout: () => {
    localStorage.removeItem('crm-user');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('crm-user'));
  }
};

export default authService;