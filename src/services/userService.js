
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const userService = {
  // User login with email and phone
  userLogin: async (email, phone) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email,
        phone
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Login failed' };
    }
  },

  // Admin login
  adminLogin: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/auth/admin-login`, {
        email,
        password
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: 'Login failed' };
    }
  },

  // Create new user (Admin only)
  createUser: async (userData) => {
    try {
      const response = await api.post('/users', userData);
      return response.data;
    } catch (error) {
      console.error('Create user error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to create user' };
    }
  },

  // Get all users with filters
  getUsers: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.role) params.append('role', filters.role);
      if (filters.search) params.append('search', filters.search);
      if (filters.page) params.append('page', filters.page);
      if (filters.limit) params.append('limit', filters.limit);
      
      const response = await api.get(`/users?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Get users error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to load users' };
    }
  },

  // Get single user
  getUser: async (id) => {
    try {
      const response = await api.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error('Get user error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to load user' };
    }
  },

  // Update user
  updateUser: async (id, userData) => {
    try {
      const response = await api.put(`/users/${id}`, userData);
      return response.data;
    } catch (error) {
      console.error('Update user error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to update user' };
    }
  },

  // Approve user
  approveUser: async (id) => {
    try {
      const response = await api.put(`/users/approve/${id}`);
      return response.data;
    } catch (error) {
      console.error('Approve user error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to approve user' };
    }
  },

  // Reject/Block user
  rejectUser: async (id) => {
    try {
      const response = await api.put(`/users/reject/${id}`);
      return response.data;
    } catch (error) {
      console.error('Reject user error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to reject user' };
    }
  },

  // Delete user
  deleteUser: async (id, confirmFullName) => {
    try {
      const response = await api.delete(`/users/${id}`, {
        data: { confirmFullName }
      });
      return response.data;
    } catch (error) {
      console.error('Delete user error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to delete user' };
    }
  }
};

export default userService;














// import axios from 'axios';

// const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// const api = axios.create({
//   baseURL: API_URL,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

// // Add token to requests if available
// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// const userService = {
//   // User login with email and phone
//   userLogin: async (email, phone) => {
//     try {
//       const response = await axios.post(`${API_URL}/auth/login`, {
//         email,
//         phone
//       });
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || { error: 'Login failed' };
//     }
//   },

//   // Admin login
//   adminLogin: async (email, password) => {
//     try {
//       const response = await axios.post(`${API_URL}/auth/admin-login`, {
//         email,
//         password
//       });
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || { error: 'Login failed' };
//     }
//   },

//   // Create new user (Admin only)
//   createUser: async (userData) => {
//     try {
//       // If it's FormData, let browser set content-type with boundary
//       const config = userData instanceof FormData 
//         ? { headers: { 'Content-Type': 'multipart/form-data' } }
//         : { headers: { 'Content-Type': 'application/json' } };
      
//       const response = await api.post('/users', userData, config);
//       return response.data;
//     } catch (error) {
//       console.error('Create user error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to create user' };
//     }
//   },

//   // Get all users with filters
//   getUsers: async (filters = {}) => {
//     try {
//       const params = new URLSearchParams();
//       if (filters.role) params.append('role', filters.role);
//       if (filters.search) params.append('search', filters.search);
//       if (filters.page) params.append('page', filters.page);
//       if (filters.limit) params.append('limit', filters.limit);
      
//       const response = await api.get(`/users?${params.toString()}`);
//       return response.data;
//     } catch (error) {
//       console.error('Get users error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to load users' };
//     }
//   },

//   // Get single user
//   getUser: async (id) => {
//     try {
//       const response = await api.get(`/users/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error('Get user error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to load user' };
//     }
//   },

//   // Update user - FIXED version
//   updateUser: async (id, userData) => {
//     try {
//       console.log('Updating user with ID:', id);
      
//       // Check if userData is FormData
//       const isFormData = userData instanceof FormData;
      
//       if (isFormData) {
//         // Log FormData contents for debugging
//         console.log('FormData contents:');
//         for (let pair of userData.entries()) {
//           if (pair[0] === 'profilePhoto') {
//             console.log(pair[0] + ': [File] ' + (pair[1]?.name || 'unknown'));
//           } else if (pair[0] === 'location') {
//             console.log(pair[0] + ': ' + pair[1]);
//           } else {
//             console.log(pair[0] + ': ' + pair[1]);
//           }
//         }
        
//         // For FormData, don't set Content-Type (browser will set it with boundary)
//         const response = await api.put(`/users/${id}`, userData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//         return response.data;
//       } else {
//         // For JSON data
//         const response = await api.put(`/users/${id}`, userData);
//         return response.data;
//       }
//     } catch (error) {
//       console.error('Update user error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to update user' };
//     }
//   },

//   // Approve user
//   approveUser: async (id) => {
//     try {
//       const response = await api.put(`/users/approve/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error('Approve user error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to approve user' };
//     }
//   },

//   // Reject/Block user
//   rejectUser: async (id) => {
//     try {
//       const response = await api.put(`/users/reject/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error('Reject user error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to reject user' };
//     }
//   },

//   // Delete user
//   deleteUser: async (id, confirmFullName) => {
//     try {
//       const response = await api.delete(`/users/${id}`, {
//         data: { confirmFullName }
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Delete user error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to delete user' };
//     }
//   }
// };

// export default userService;