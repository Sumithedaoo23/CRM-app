

// import api from './api';

// const userService = {
//   // Create new user with FormData
//   createUser: async (userData) => {
//     try {
//       // If userData is FormData, send as is
//       const data = userData instanceof FormData ? userData : new URLSearchParams(userData);
      
//       const response = await api.post('/users', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
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

//   // Get single user (includes password for admin view)
//   getUser: async (id) => {
//     try {
//       const response = await api.get(`/users/${id}`);
//       return response.data;
//     } catch (error) {
//       console.error('Get user error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to load user' };
//     }
//   },

//   // Update user with FormData - FIXED VERSION
//   updateUser: async (id, userData) => {
//     try {
//       // Ensure we're sending FormData correctly
//       const data = userData instanceof FormData ? userData : new URLSearchParams(userData);
      
//       // Log what we're sending for debugging
//       if (userData instanceof FormData) {
//         console.log('Sending FormData with fields:');
//         for (let pair of userData.entries()) {
//           console.log(pair[0] + ': ' + (pair[0] === 'profilePhoto' ? 'File: ' + pair[1].name : pair[1]));
//         }
//       }
      
//       const response = await api.put(`/users/${id}`, data, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Update user error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to update user' };
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
//       console.error('Delete user error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to delete user' };
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
      
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', `users-${new Date().toISOString().slice(0,10)}.pdf`);
//       document.body.appendChild(link);
//       link.click();
//       link.remove();
//       window.URL.revokeObjectURL(url);
      
//       return true;
//     } catch (error) {
//       console.error('Export PDF error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to export PDF' };
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
//       window.URL.revokeObjectURL(url);
      
//       return true;
//     } catch (error) {
//       console.error('Export user PDF error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to export user PDF' };
//     }
//   }
// };

// export default userService;















// import api from './api';

// const userService = {
//   // Create new user with FormData (Admin only)
//   createUser: async (userData) => {
//     try {
//       const data = userData instanceof FormData ? userData : new URLSearchParams(userData);
      
//       const response = await api.post('/users', data, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
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
//       if (filters.approved !== undefined) params.append('approved', filters.approved);
      
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

//   // Update user with FormData
//   updateUser: async (id, userData) => {
//     try {
//       const data = userData instanceof FormData ? userData : new URLSearchParams(userData);
      
//       const response = await api.put(`/users/${id}`, data, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       return response.data;
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

//   // Delete user with confirmation
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
//   },

//   // Get pending approval count
//   getPendingApprovalCount: async () => {
//     try {
//       const response = await api.get('/users/stats/pending-approval');
//       return response.data;
//     } catch (error) {
//       console.error('Get pending count error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to get pending count' };
//     }
//   }
// };

// export default userService;