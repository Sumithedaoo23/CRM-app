

// import api from './api';

// const messageService = {
//   // Send a new message
//   sendMessage: async (messageData, attachments = []) => {
//     try {
//       const formData = new FormData();
      
//       formData.append('senderId', messageData.senderId);
//       formData.append('senderName', messageData.senderName);
//       formData.append('senderRole', messageData.senderRole);
//       formData.append('receiverId', messageData.receiverId);
//       formData.append('content', messageData.content);
      
//       if (attachments && attachments.length > 0) {
//         attachments.forEach(file => {
//           formData.append('attachments', file);
//         });
//       }

//       const response = await api.post('/messages/send', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
      
//       return response.data;
//     } catch (error) {
//       console.error('Send message error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to send message' };
//     }
//   },

//   // Get conversations for a user
//   getConversations: async (userId) => {
//     try {
//       const response = await api.get(`/messages/conversations/${userId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Get conversations error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to load conversations' };
//     }
//   },

//   // Get messages between two users
//   getMessages: async (userId, otherUserId, page = 1) => {
//     try {
//       const response = await api.get(`/messages/${userId}/${otherUserId}?page=${page}`);
//       return response.data;
//     } catch (error) {
//       console.error('Get messages error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to load messages' };
//     }
//   },

//   // Get unread count for a user
//   getUnreadCount: async (userId) => {
//     try {
//       const response = await api.get(`/messages/unread/${userId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Get unread count error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to get unread count' };
//     }
//   },

//   // Mark message as read
//   markAsRead: async (messageId) => {
//     try {
//       const response = await api.put(`/messages/read/${messageId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Mark as read error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to mark as read' };
//     }
//   }
// };

// export default messageService;


















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

const messageService = {
  // Send a message
  sendMessage: async (receiverId, content) => {
    try {
      console.log('Sending message to:', receiverId, 'Content:', content);
      
      const response = await api.post('/messages', {
        receiverId,
        content
      });
      return response.data;
    } catch (error) {
      console.error('Send message error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to send message' };
    }
  },

  // Get conversations for current user
  getConversations: async () => {
    try {
      const response = await api.get('/messages/conversations');
      return response.data;
    } catch (error) {
      console.error('Get conversations error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to load conversations' };
    }
  },

  // Get messages between current user and another user
  getMessages: async (userId) => {
    try {
      const response = await api.get(`/messages/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Get messages error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to load messages' };
    }
  },

  // Get unread message count
  getUnreadCount: async () => {
    try {
      const response = await api.get('/messages/unread/count');
      return response.data;
    } catch (error) {
      console.error('Get unread count error:', error.response?.data || error);
      throw error.response?.data || { error: 'Failed to get unread count' };
    }
  }
};

export default messageService;