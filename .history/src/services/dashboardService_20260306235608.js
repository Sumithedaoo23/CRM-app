// import api from './api';

// const dashboardService = {
//   // Get admin dashboard stats
//   getAdminStats: async () => {
//     try {
//       const response = await api.get('/dashboard/admin');
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Get user dashboard stats
//   getUserStats: async () => {
//     try {
//       const response = await api.get('/dashboard/user');
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   }
// };

// export default dashboardService;











// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// const dashboardService = {
//   // Get admin dashboard stats
//   getAdminStats: async () => {
//     try {
//       const response = await axios.get(`${API_URL}/dashboard/admin`);
//       console.log('Admin dashboard response:', response.data);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching admin stats:', error.response?.data || error.message);
//       throw error.response?.data || { error: 'Failed to load dashboard stats' };
//     }
//   },

//   // Get user dashboard stats
//   getUserStats: async (userId) => {
//     try {
//       const response = await axios.get(`${API_URL}/dashboard/user/${userId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Error fetching user stats:', error.response?.data || error.message);
//       throw error.response?.data || { error: 'Failed to load dashboard stats' };
//     }
//   }
// };

// export default dashboardService;








import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const dashboardService = {
  // Get admin dashboard stats
  getAdminStats: async () => {
    try {
      console.log('Fetching admin dashboard stats from:', `${API_URL}/dashboard/admin`);
      const response = await axios.get(`${API_URL}/dashboard/admin`);
      console.log('Admin dashboard response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error fetching admin stats:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status
      });
      throw error.response?.data || { error: 'Failed to load dashboard stats' };
    }
  },

  // Get user dashboard stats
  getUserStats: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/dashboard/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching user stats:', error.response?.data || error.message);
      throw error.response?.data || { error: 'Failed to load dashboard stats' };
    }
  }
};

export default dashboardService;