
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import ticketService from '../services/ticketService';
// import messageService from '../services/messageService';
// import { useAuth } from '../context/AuthContext';

// const UserDashboard = () => {
//   const [ticketCount, setTicketCount] = useState(0);
//   const [recentTickets, setRecentTickets] = useState([]);
//   const [unreadMessages, setUnreadMessages] = useState(0);
//   const [recentMessages, setRecentMessages] = useState([]);
//   const [conversations, setConversations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   useEffect(() => {
//     if (user?._id) {
//       loadDashboardData();
//       loadMessageData();
//     }
//   }, [user]);

//   const loadDashboardData = async () => {
//     try {
//       const response = await ticketService.getUserTickets();
//       const tickets = response.data || [];
//       setTicketCount(tickets.length);
//       setRecentTickets(tickets.slice(0, 3));
//     } catch (error) {
//       console.error('Failed to load dashboard:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const loadMessageData = async () => {
//     try {
//       // Get unread count
//       const unreadResponse = await messageService.getUnreadCount(user._id);
//       setUnreadMessages(unreadResponse.data?.unreadCount || 0);

//       // Get conversations
//       const convResponse = await messageService.getConversations(user._id);
//       setConversations(convResponse.data || []);
      
//       // Get recent messages (last 3)
//       setRecentMessages((convResponse.data || []).slice(0, 3));
//     } catch (error) {
//       console.error('Failed to load messages:', error);
//     }
//   };

//   const handleViewConversation = (otherUserId) => {
//     navigate(`/user/messages/${otherUserId}`);
//   };

//   if (loading) {
//     return React.createElement('div', {
//       style: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         fontSize: '18px',
//         color: '#6b7280'
//       }
//     }, 'Loading your dashboard...');
//   }

//   return React.createElement('div', { 
//     style: { 
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh'
//     } 
//   },
//     // Welcome Header
//     React.createElement('div', {
//       style: {
//         marginBottom: '24px'
//       }
//     },
//       React.createElement('h1', { 
//         style: { 
//           fontSize: '28px', 
//           fontWeight: '700',
//           color: '#111827',
//           marginBottom: '8px'
//         } 
//       }, `Welcome back, ${user?.firstName || 'User'}!`),
      
//       React.createElement('p', {
//         style: {
//           fontSize: '16px',
//           color: '#6b7280'
//         }
//       }, 'Here\'s what\'s happening with your account today.')
//     ),

//     // Stats Cards
//     React.createElement('div', {
//       style: {
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//         gap: '20px',
//         marginBottom: '30px'
//       }
//     },
//       // Ticket Stats Card
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           padding: '24px',
//           borderRadius: '12px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//           cursor: 'pointer',
//           transition: 'transform 0.2s'
//         },
//         onClick: () => navigate('/user/tickets'),
//         onMouseEnter: (e) => e.currentTarget.style.transform = 'translateY(-2px)',
//         onMouseLeave: (e) => e.currentTarget.style.transform = 'translateY(0)'
//       },
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '16px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               width: '48px',
//               height: '48px',
//               backgroundColor: '#3b82f6',
//               borderRadius: '12px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '24px',
//               color: 'white'
//             }
//           }, '🎫'),
          
//           React.createElement('div', null,
//             React.createElement('h3', {
//               style: {
//                 fontSize: '14px',
//                 color: '#6b7280',
//                 marginBottom: '4px'
//               }
//             }, 'Total Tickets'),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '28px',
//                 fontWeight: '700',
//                 color: '#111827'
//               }
//             }, ticketCount)
//           )
//         )
//       ),

//       // Message Stats Card
//       React.createElement('div', {
//         style: {
//           backgroundColor: 'white',
//           padding: '24px',
//           borderRadius: '12px',
//           boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//           cursor: 'pointer',
//           position: 'relative',
//           transition: 'transform 0.2s'
//         },
//         onClick: () => navigate('/user/messages'),
//         onMouseEnter: (e) => e.currentTarget.style.transform = 'translateY(-2px)',
//         onMouseLeave: (e) => e.currentTarget.style.transform = 'translateY(0)'
//       },
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '16px'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               width: '48px',
//               height: '48px',
//               backgroundColor: '#10b981',
//               borderRadius: '12px',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               fontSize: '24px',
//               color: 'white',
//               position: 'relative'
//             }
//           }, '💬'),
          
//           React.createElement('div', null,
//             React.createElement('h3', {
//               style: {
//                 fontSize: '14px',
//                 color: '#6b7280',
//                 marginBottom: '4px'
//               }
//             }, 'Conversations'),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '28px',
//                 fontWeight: '700',
//                 color: '#111827'
//               }
//             }, conversations.length)
//           )
//         ),
        
//         unreadMessages > 0 && React.createElement('div', {
//           style: {
//             position: 'absolute',
//             top: '16px',
//             right: '16px',
//             backgroundColor: '#ef4444',
//             color: 'white',
//             borderRadius: '20px',
//             padding: '4px 12px',
//             fontSize: '12px',
//             fontWeight: '600'
//           }
//         }, `${unreadMessages} unread`)
//       )
//     ),

//     // Quick Actions
//     React.createElement('div', {
//       style: {
//         display: 'flex',
//         gap: '12px',
//         marginBottom: '30px',
//         flexWrap: 'wrap'
//       }
//     },
//       React.createElement('button', {
//         onClick: () => navigate('/user/generate-ticket'),
//         style: {
//           padding: '12px 24px',
//           backgroundColor: '#3b82f6',
//           color: 'white',
//           border: 'none',
//           borderRadius: '8px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer',
//           transition: 'background-color 0.2s'
//         },
//         onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
//         onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
//       }, '➕ Create New Ticket'),
      
//       React.createElement('button', {
//         onClick: () => navigate('/user/messages'),
//         style: {
//           padding: '12px 24px',
//           backgroundColor: '#10b981',
//           color: 'white',
//           border: 'none',
//           borderRadius: '8px',
//           fontSize: '14px',
//           fontWeight: '500',
//           cursor: 'pointer',
//           transition: 'background-color 0.2s'
//         },
//         onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
//         onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
//       }, '💬 Messages')
//     ),

//     // Recent Messages Section
//     recentMessages.length > 0 && React.createElement('div', {
//       style: {
//         backgroundColor: 'white',
//         borderRadius: '12px',
//         padding: '20px',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
//         marginBottom: '30px'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '16px'
//         }
//       },
//         React.createElement('h3', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             margin: 0
//           }
//         }, 'Recent Messages'),
        
//         React.createElement('span', {
//           style: {
//             fontSize: '13px',
//             color: '#3b82f6',
//             cursor: 'pointer'
//           },
//           onClick: () => navigate('/user/messages')
//         }, 'View all →')
//       ),
      
//       recentMessages.map((conv, index) =>
//         React.createElement('div', {
//           key: index,
//           style: {
//             padding: '12px',
//             borderBottom: index < recentMessages.length - 1 ? '1px solid #e5e7eb' : 'none',
//             cursor: 'pointer',
//             backgroundColor: conv.unreadCount > 0 ? '#f0f9ff' : 'transparent',
//             transition: 'background-color 0.2s'
//           },
//           onClick: () => handleViewConversation(conv.otherUser._id),
//           onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6',
//           onMouseLeave: (e) => {
//             if (conv.unreadCount > 0) {
//               e.currentTarget.style.backgroundColor = '#f0f9ff';
//             } else {
//               e.currentTarget.style.backgroundColor = 'transparent';
//             }
//           }
//         },
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: '4px'
//             }
//           },
//             React.createElement('div', {
//               style: {
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '8px'
//               }
//             },
//               React.createElement('span', {
//                 style: {
//                   fontWeight: '600',
//                   color: '#111827'
//                 }
//               }, conv.otherUser.name),
              
//               conv.unreadCount > 0 && React.createElement('span', {
//                 style: {
//                   backgroundColor: '#ef4444',
//                   color: 'white',
//                   borderRadius: '12px',
//                   padding: '2px 8px',
//                   fontSize: '11px',
//                   fontWeight: '600'
//                 }
//               }, conv.unreadCount)
//             ),
            
//             React.createElement('span', {
//               style: {
//                 fontSize: '11px',
//                 color: '#9ca3af'
//               }
//             }, new Date(conv.updatedAt).toLocaleDateString())
//           ),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '13px',
//               color: '#6b7280',
//               margin: 0,
//               whiteSpace: 'nowrap',
//               overflow: 'hidden',
//               textOverflow: 'ellipsis'
//             }
//           }, conv.lastMessage?.content || 'No messages')
//         )
//       )
//     ),

//     // Recent Tickets
//     recentTickets.length > 0 && React.createElement('div', {
//       style: {
//         backgroundColor: 'white',
//         borderRadius: '12px',
//         padding: '20px',
//         boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '16px'
//         }
//       },
//         React.createElement('h3', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             margin: 0
//           }
//         }, 'Recent Tickets'),
        
//         React.createElement('span', {
//           style: {
//             fontSize: '13px',
//             color: '#3b82f6',
//             cursor: 'pointer'
//           },
//           onClick: () => navigate('/user/tickets')
//         }, 'View all →')
//       ),
      
//       recentTickets.map((ticket, index) =>
//         React.createElement('div', {
//           key: ticket._id,
//           style: {
//             padding: '12px',
//             borderBottom: index < recentTickets.length - 1 ? '1px solid #e5e7eb' : 'none',
//             cursor: 'pointer',
//             transition: 'background-color 0.2s'
//           },
//           onClick: () => navigate(`/user/ticket-status?id=${ticket._id}`),
//           onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
//           onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
//         },
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: '4px'
//             }
//           },
//             React.createElement('h4', { 
//               style: { 
//                 margin: 0,
//                 fontSize: '15px',
//                 fontWeight: '500',
//                 color: '#111827'
//               } 
//             }, ticket.title),
            
//             React.createElement('span', {
//               style: {
//                 padding: '2px 8px',
//                 borderRadius: '12px',
//                 fontSize: '11px',
//                 fontWeight: '500',
//                 backgroundColor: getStatusColor(ticket.status).bg,
//                 color: getStatusColor(ticket.status).text
//               }
//             }, ticket.status)
//           ),
          
//           React.createElement('p', { 
//             style: { 
//               color: '#6b7280', 
//               fontSize: '13px',
//               margin: 0
//             } 
//           }, (ticket.description || '').substring(0, 100) + '...')
//         )
//       )
//     )
//   );
// };

// // Helper function for status colors
// const getStatusColor = (status) => {
//   const colors = {
//     'pending': { bg: '#fef3c7', text: '#d97706' },
//     'in-progress': { bg: '#dbeafe', text: '#2563eb' },
//     'resolved': { bg: '#d1fae5', text: '#10b981' },
//     'closed': { bg: '#e5e7eb', text: '#6b7280' },
//     'rejected': { bg: '#fee2e2', text: '#dc2626' }
//   };
//   return colors[status] || { bg: '#e5e7eb', text: '#6b7280' };
// };

// export default UserDashboard;