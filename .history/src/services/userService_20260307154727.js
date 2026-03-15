

// import api from './api';

// const userService = {
//   // Create new user
//   createUser: async (userData) => {
//     try {
//       const response = await api.post('/users', userData);
//       return response.data;
//     } catch (error) {
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
//       throw error.response?.data || { error: 'Failed to load users' };
//     }
//   },

//   // Get single user
//   getUser: async (id) => {
//     try {
//       const response = await api.get(`/users/${id}`);
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || { error: 'Failed to load user' };
//     }
//   },

//   // Update user
//   updateUser: async (id, userData) => {
//     try {
//       const response = await api.put(`/users/${id}`, userData);
//       return response.data;
//     } catch (error) {
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
      
//       // Create download link
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
//       throw error.response?.data || { error: 'Failed to export user PDF' };
//     }
//   }
// };

// export default userService;

















const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zipCode: String,
  country: String
});

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    default: ''
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  userHyperlink: {
    type: String,
    default: ''
  },
  profilePhoto: {
    type: String,
    default: ''
  },
  location: addressSchema,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.updatedAt = Date.now();
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Update timestamp on update
userSchema.pre('findOneAndUpdate', function() {
  this.set({ updatedAt: Date.now() });
});

module.exports = mongoose.model('User', userSchema);