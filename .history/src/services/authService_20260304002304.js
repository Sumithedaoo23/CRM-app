// import api from './api';

// const authService = {
//   // Admin login
//   loginAdmin: async (email, password) => {
//     try {
//       const response = await api.post('/auth/login-admin', { email, password });
//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('user', JSON.stringify(response.data.user));
//       }
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // User login
//   loginUser: async (email, password) => {
//     try {
//       const response = await api.post('/auth/login-user', { email, password });
//       if (response.data.token) {
//         localStorage.setItem('token', response.data.token);
//         localStorage.setItem('user', JSON.stringify(response.data.user));
//       }
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Register admin (first time setup)
//   registerAdmin: async (userData) => {
//     try {
//       const response = await api.post('/auth/register-admin', userData);
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Get current user
//   getCurrentUser: async () => {
//     try {
//       const response = await api.get('/auth/me');
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Logout
//   logout: () => {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//   },

//   // Get stored user
//   getStoredUser: () => {
//     const user = localStorage.getItem('user');
//     return user ? JSON.parse(user) : null;
//   },

//   // Get token
//   getToken: () => {
//     return localStorage.getItem('token');
//   },

//   // Check if authenticated
//   isAuthenticated: () => {
//     return !!localStorage.getItem('token');
//   },

//   // Check if admin
//   isAdmin: () => {
//     const user = authService.getStoredUser();
//     return user?.role === 'admin';
//   }
// };

// export default authService;
















