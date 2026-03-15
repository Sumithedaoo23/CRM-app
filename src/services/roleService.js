import api from './api';

const roleService = {
  // Get all roles
  getRoles: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.page) params.append('page', filters.page);
      if (filters.limit) params.append('limit', filters.limit);
      if (filters.search) params.append('search', filters.search);
      
      const response = await api.get(`/roles?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Get roles error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to load roles' };
    }
  },

  // Get single role
  getRole: async (id) => {
    try {
      const response = await api.get(`/roles/${id}`);
      return response.data;
    } catch (error) {
      console.error('Get role error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to load role' };
    }
  },

  // Create new role
  createRole: async (roleData) => {
    try {
      const response = await api.post('/roles', roleData);
      return response.data;
    } catch (error) {
      console.error('Create role error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to create role' };
    }
  },

  // Update role
  updateRole: async (id, roleData) => {
    try {
      const response = await api.put(`/roles/${id}`, roleData);
      return response.data;
    } catch (error) {
      console.error('Update role error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to update role' };
    }
  },

  // Delete role
  deleteRole: async (id) => {
    try {
      const response = await api.delete(`/roles/${id}`);
      return response.data;
    } catch (error) {
      console.error('Delete role error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to delete role' };
    }
  },

  // Get permissions list
  getPermissions: async () => {
    try {
      const response = await api.get('/roles/permissions/list');
      return response.data;
    } catch (error) {
      console.error('Get permissions error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to load permissions' };
    }
  }
};

export default roleService;