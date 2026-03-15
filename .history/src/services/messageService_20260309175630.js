


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

// const messageService = {
//   // Send a message
//   sendMessage: async (receiverId, content) => {
//     try {
//       console.log('Sending message to:', receiverId, 'Content:', content);
      
//       const response = await api.post('/messages', {
//         receiverId,
//         content
//       });
//       return response.data;
//     } catch (error) {
//       console.error('Send message error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to send message' };
//     }
//   },

//   // Get conversations for current user
//   getConversations: async () => {
//     try {
//       const response = await api.get('/messages/conversations');
//       return response.data;
//     } catch (error) {
//       console.error('Get conversations error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to load conversations' };
//     }
//   },

//   // Get messages between current user and another user
//   getMessages: async (userId) => {
//     try {
//       const response = await api.get(`/messages/${userId}`);
//       return response.data;
//     } catch (error) {
//       console.error('Get messages error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to load messages' };
//     }
//   },

//   // Get unread message count
//   getUnreadCount: async () => {
//     try {
//       const response = await api.get('/messages/unread/count');
//       return response.data;
//     } catch (error) {
//       console.error('Get unread count error:', error.response?.data || error);
//       throw error.response?.data || { error: 'Failed to get unread count' };
//     }
//   }
// };

// export default messageService;
















