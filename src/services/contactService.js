import api from './api';

const contactService = {
  // Get all contacts with filters
  getContacts: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.status) params.append('status', filters.status);
      if (filters.search) params.append('search', filters.search);
      if (filters.page) params.append('page', filters.page);
      if (filters.limit) params.append('limit', filters.limit);
      
      const response = await api.get(`/contacts?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Get contacts error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to load contacts' };
    }
  },

  // Get single contact
  getContact: async (id) => {
    try {
      const response = await api.get(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      console.error('Get contact error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to load contact' };
    }
  },

  // Create new contact
  createContact: async (contactData) => {
    try {
      const response = await api.post('/contacts', contactData);
      return response.data;
    } catch (error) {
      console.error('Create contact error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to create contact' };
    }
  },

  // Update contact
  updateContact: async (id, contactData) => {
    try {
      const response = await api.put(`/contacts/${id}`, contactData);
      return response.data;
    } catch (error) {
      console.error('Update contact error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to update contact' };
    }
  },

  // Delete contact
  deleteContact: async (id) => {
    try {
      const response = await api.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      console.error('Delete contact error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to delete contact' };
    }
  },

  // Export contacts to PDF
  exportContactsPDF: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.status) params.append('status', filters.status);
      if (filters.search) params.append('search', filters.search);
      
      const response = await api.get(`/contacts/export/pdf?${params.toString()}`, {
        responseType: 'blob'
      });
      
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `contacts-${new Date().toISOString().slice(0,10)}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      
      return true;
    } catch (error) {
      console.error('Export PDF error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to export PDF' };
    }
  }
};

export default contactService;