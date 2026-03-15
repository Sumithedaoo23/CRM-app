// import api from './api';

// const userService = {
//   // Create new user
//   createUser: async (userData) => {
//     try {
//       const response = await api.post('/users', userData);
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
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
//       throw error.response?.data || error.message;
//     }
//   },

//   // Get single user
//   getUser: async (id) => {
//     try {
//       const response = await api.get(`/users/${id}`);
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Update user
//   updateUser: async (id, userData) => {
//     try {
//       const response = await api.put(`/users/${id}`, userData);
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Delete user with confirmation
//   deleteUser: async (id, confirmFullName) => {
//     try {
//       const response = await api.delete(`/users/${id}`, {
//         data: { confirmFullName }
//       });
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Export all users to PDF
//   exportUsersPDF: async (filters = {}) => {
//     try {
//       const params = new URLSearchParams();
//       if (filters.role) params.append('role', filters.role);
//       if (filters.search) params.append('search', filters.search);
      
//       const response = await api.get(`/users/export/pdf?${params.toString()}`, {
//         responseType: 'blob'
//       });
      
//       // Create download link
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'users.pdf');
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
      
//       return true;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Export single user to PDF
//   exportUserPDF: async (id) => {
//     try {
//       const response = await api.get(`/users/${id}/export/pdf`, {
//         responseType: 'blob'
//       });
      
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', `user-${id}.pdf`);
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
      
//       return true;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Add note to user
//   addUserNote: async (id, content) => {
//     try {
//       const response = await api.post(`/users/${id}/notes`, { content });
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   }
// };

// export default userService;