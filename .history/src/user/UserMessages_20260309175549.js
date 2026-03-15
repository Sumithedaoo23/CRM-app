
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import messageService from '../services/messageService';
// import { useAuth } from '../context/AuthContext';

// const UserMessages = () => {
//   const navigate = useNavigate();
//   const { userId: otherUserId } = useParams();
//   const { user } = useAuth();
  
//   const [conversations, setConversations] = useState([]);
//   const [messages, setMessages] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [messageText, setMessageText] = useState('');
//   const [attachments, setAttachments] = useState([]);
//   const [sendingMessage, setSendingMessage] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (user?._id) {
//       loadConversations();
//     }
//   }, [user]);

//   useEffect(() => {
//     if (otherUserId) {
//       loadMessages(otherUserId);
//     }
//   }, [otherUserId]);

//   const loadConversations = async () => {
//     try {
//       setLoading(true);
//       const response = await messageService.getConversations(user._id);
//       setConversations(response.data || []);
      
//       if (otherUserId) {
//         const conv = response.data.find(c => c.otherUser._id === otherUserId);
//         if (conv) {
//           setSelectedUser(conv.otherUser);
//         }
//       }
//     } catch (error) {
//       console.error('Failed to load conversations:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const loadMessages = async (otherId) => {
//     try {
//       const response = await messageService.getMessages(user._id, otherId);
//       setMessages(response.data || []);
//     } catch (error) {
//       console.error('Failed to load messages:', error);
//     }
//   };

//   const handleSelectConversation = (otherUser) => {
//     setSelectedUser(otherUser);
//     loadMessages(otherUser._id);
//     navigate(`/user/messages/${otherUser._id}`);
//   };

//   const handleFileChange = (e) => {
//     const files = Array.from(e.target.files);
//     setAttachments(prev => [...prev, ...files]);
//   };

//   const removeAttachment = (index) => {
//     setAttachments(prev => prev.filter((_, i) => i !== index));
//   };

//   const handleSendMessage = async () => {
//     if ((!messageText.trim() && attachments.length === 0) || !selectedUser) return;

//     setSendingMessage(true);
//     try {
//       const messageData = {
//         senderId: user._id,
//         senderName: `${user.firstName} ${user.lastName}`.trim() || user.name || 'User',
//         senderRole: 'user',
//         receiverId: selectedUser._id,
//         content: messageText
//       };

//       await messageService.sendMessage(messageData, attachments);
      
//       await loadMessages(selectedUser._id);
//       await loadConversations();
      
//       setMessageText('');
//       setAttachments([]);
      
//     } catch (err) {
//       alert('Failed to send message: ' + (err.error || err.message));
//     } finally {
//       setSendingMessage(false);
//     }
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
//     }, 'Loading messages...');
//   }

//   return React.createElement('div', {
//     style: {
//       display: 'flex',
//       height: 'calc(100vh - 70px)',
//       backgroundColor: '#f3f4f6'
//     }
//   },
//     // Conversations Sidebar
//     React.createElement('div', {
//       style: {
//         width: '320px',
//         backgroundColor: 'white',
//         borderRight: '1px solid #e5e7eb',
//         overflowY: 'auto'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           padding: '16px',
//           borderBottom: '1px solid #e5e7eb'
//         }
//       },
//         React.createElement('h2', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             margin: 0
//           }
//         }, 'Messages')
//       ),
      
//       conversations.length === 0 ?
//         React.createElement('div', {
//           style: {
//             padding: '40px',
//             textAlign: 'center',
//             color: '#6b7280'
//           }
//         }, 'No conversations yet') :
//       conversations.map((conv) =>
//         React.createElement('div', {
//           key: conv._id,
//           onClick: () => handleSelectConversation(conv.otherUser),
//           style: {
//             padding: '12px 16px',
//             cursor: 'pointer',
//             backgroundColor: selectedUser?._id === conv.otherUser._id ? '#f3f4f6' : 'white',
//             borderBottom: '1px solid #e5e7eb',
//             transition: 'background-color 0.2s'
//           },
//           onMouseEnter: (e) => {
//             if (selectedUser?._id !== conv.otherUser._id) {
//               e.currentTarget.style.backgroundColor = '#f9fafb';
//             }
//           },
//           onMouseLeave: (e) => {
//             if (selectedUser?._id !== conv.otherUser._id) {
//               e.currentTarget.style.backgroundColor = 'white';
//             }
//           }
//         },
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               alignItems: 'center',
//               gap: '12px'
//             }
//           },
//             React.createElement('div', {
//               style: {
//                 width: '40px',
//                 height: '40px',
//                 borderRadius: '50%',
//                 backgroundColor: '#3b82f6',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: 'white',
//                 fontWeight: '600',
//                 fontSize: '16px'
//               }
//             }, conv.otherUser.name?.charAt(0) || 'A'),
            
//             React.createElement('div', {
//               style: {
//                 flex: 1
//               }
//             },
//               React.createElement('div', {
//                 style: {
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center',
//                   marginBottom: '4px'
//                 }
//               },
//                 React.createElement('span', {
//                   style: {
//                     fontWeight: '600',
//                     fontSize: '14px',
//                     color: '#111827'
//                   }
//                 }, conv.otherUser.name),
                
//                 React.createElement('span', {
//                   style: {
//                     fontSize: '11px',
//                     color: '#9ca3af'
//                   }
//                 }, new Date(conv.updatedAt).toLocaleDateString())
//               ),
              
//               React.createElement('div', {
//                 style: {
//                   display: 'flex',
//                   justifyContent: 'space-between',
//                   alignItems: 'center'
//                 }
//               },
//                 React.createElement('span', {
//                   style: {
//                     fontSize: '13px',
//                     color: '#6b7280',
//                     whiteSpace: 'nowrap',
//                     overflow: 'hidden',
//                     textOverflow: 'ellipsis',
//                     maxWidth: '150px'
//                   }
//                 }, conv.lastMessage?.content || 'No messages'),
                
//                 conv.unreadCount > 0 && React.createElement('span', {
//                   style: {
//                     backgroundColor: '#ef4444',
//                     color: 'white',
//                     borderRadius: '12px',
//                     padding: '2px 8px',
//                     fontSize: '11px',
//                     fontWeight: '600'
//                   }
//                 }, conv.unreadCount)
//               )
//             )
//           )
//         )
//       )
//     ),

//     // Messages Area
//     React.createElement('div', {
//       style: {
//         flex: 1,
//         display: 'flex',
//         flexDirection: 'column',
//         backgroundColor: 'white'
//       }
//     },
//       selectedUser ?
//         React.createElement(React.Fragment, null,
//           // Header
//           React.createElement('div', {
//             style: {
//               padding: '16px 24px',
//               borderBottom: '1px solid #e5e7eb',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '12px'
//             }
//           },
//             React.createElement('div', {
//               style: {
//                 width: '40px',
//                 height: '40px',
//                 borderRadius: '50%',
//                 backgroundColor: '#3b82f6',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 color: 'white',
//                 fontWeight: '600'
//               }
//             }, selectedUser.name?.charAt(0) || 'A'),
            
//             React.createElement('div', null,
//               React.createElement('h3', {
//                 style: {
//                   fontSize: '16px',
//                   fontWeight: '600',
//                   color: '#111827',
//                   marginBottom: '2px'
//                 }
//               }, selectedUser.name),
              
//               React.createElement('p', {
//                 style: {
//                   fontSize: '12px',
//                   color: '#6b7280',
//                   margin: 0
//                 }
//               }, 'Admin')
//             )
//           ),

//           // Messages
//           React.createElement('div', {
//             style: {
//               flex: 1,
//               padding: '24px',
//               overflowY: 'auto',
//               display: 'flex',
//               flexDirection: 'column',
//               gap: '16px',
//               backgroundColor: '#f9fafb'
//             }
//           },
//             messages.length === 0 ?
//               React.createElement('p', {
//                 style: {
//                   textAlign: 'center',
//                   color: '#9ca3af',
//                   padding: '40px'
//                 }
//               }, 'No messages yet. Start the conversation!') :
//               messages.map((msg, index) => {
//                 const isMe = msg.senderId === user._id;
//                 return React.createElement('div', {
//                   key: index,
//                   style: {
//                     display: 'flex',
//                     justifyContent: isMe ? 'flex-end' : 'flex-start',
//                     marginBottom: '8px'
//                   }
//                 },
//                   React.createElement('div', {
//                     style: {
//                       maxWidth: '70%',
//                       padding: '12px 16px',
//                       borderRadius: isMe ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
//                       backgroundColor: isMe ? '#3b82f6' : 'white',
//                       color: isMe ? 'white' : '#111827',
//                       boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
//                     }
//                   },
//                     React.createElement('p', {
//                       style: {
//                         margin: 0,
//                         fontSize: '14px',
//                         lineHeight: '1.5',
//                         wordBreak: 'break-word'
//                       }
//                     }, msg.content),
                    
//                     msg.attachments && msg.attachments.length > 0 && React.createElement('div', {
//                       style: {
//                         marginTop: '8px',
//                         paddingTop: '8px',
//                         borderTop: `1px solid ${isMe ? 'rgba(255,255,255,0.2)' : '#e5e7eb'}`
//                       }
//                     },
//                       msg.attachments.map((file, i) =>
//                         React.createElement('div', {
//                           key: i,
//                           style: {
//                             display: 'flex',
//                             alignItems: 'center',
//                             gap: '4px',
//                             fontSize: '12px',
//                             color: isMe ? 'rgba(255,255,255,0.9)' : '#6b7280'
//                           }
//                         },
//                           React.createElement('span', null, '📎'),
//                           React.createElement('span', null, file.filename || 'Attachment')
//                         )
//                       )
//                     ),
                    
//                     React.createElement('div', {
//                       style: {
//                         fontSize: '10px',
//                         marginTop: '4px',
//                         textAlign: 'right',
//                         color: isMe ? 'rgba(255,255,255,0.7)' : '#9ca3af'
//                       }
//                     }, new Date(msg.createdAt).toLocaleTimeString())
//                   )
//                 );
//               })
//           ),

//           // Input Area
//           React.createElement('div', {
//             style: {
//               padding: '20px 24px',
//               borderTop: '1px solid #e5e7eb',
//               backgroundColor: 'white'
//             }
//           },
//             // Attachment preview
//             attachments.length > 0 && React.createElement('div', {
//               style: {
//                 padding: '8px',
//                 backgroundColor: '#f9fafb',
//                 borderRadius: '6px',
//                 marginBottom: '12px'
//               }
//             },
//               attachments.map((file, index) =>
//                 React.createElement('div', {
//                   key: index,
//                   style: {
//                     display: 'flex',
//                     justifyContent: 'space-between',
//                     alignItems: 'center',
//                     padding: '4px 8px',
//                     backgroundColor: 'white',
//                     borderRadius: '4px',
//                     marginBottom: '4px'
//                   }
//                 },
//                   React.createElement('span', {
//                     style: {
//                       fontSize: '12px',
//                       color: '#374151'
//                     }
//                   }, `📎 ${file.name}`),
                  
//                   React.createElement('button', {
//                     onClick: () => removeAttachment(index),
//                     style: {
//                       background: 'none',
//                       border: 'none',
//                       color: '#ef4444',
//                       cursor: 'pointer',
//                       fontSize: '14px'
//                     }
//                   }, '×')
//                 )
//               )
//             ),

//             // Input
//             React.createElement('div', {
//               style: {
//                 display: 'flex',
//                 gap: '8px',
//                 alignItems: 'flex-end'
//               }
//             },
//               React.createElement('div', {
//                 style: {
//                   flex: 1,
//                   position: 'relative'
//                 }
//               },
//                 React.createElement('textarea', {
//                   value: messageText,
//                   onChange: (e) => setMessageText(e.target.value),
//                   placeholder: 'Type your message...',
//                   rows: 3,
//                   style: {
//                     width: '100%',
//                     padding: '12px',
//                     border: '2px solid #e5e7eb',
//                     borderRadius: '8px',
//                     fontSize: '14px',
//                     resize: 'none',
//                     boxSizing: 'border-box',
//                     fontFamily: 'inherit'
//                   },
//                   onKeyPress: (e) => {
//                     if (e.key === 'Enter' && !e.shiftKey) {
//                       e.preventDefault();
//                       handleSendMessage();
//                     }
//                   }
//                 })
//               ),
              
//               React.createElement('div', {
//                 style: {
//                   display: 'flex',
//                   flexDirection: 'column',
//                   gap: '8px'
//                 }
//               },
//                 React.createElement('label', {
//                   style: {
//                     padding: '10px',
//                     backgroundColor: '#f3f4f6',
//                     borderRadius: '8px',
//                     cursor: 'pointer',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '20px',
//                     transition: 'background-color 0.2s'
//                   },
//                   onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
//                   onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
//                 },
//                   React.createElement('input', {
//                     type: 'file',
//                     multiple: true,
//                     onChange: handleFileChange,
//                     style: { display: 'none' }
//                   }),
//                   '📎'
//                 ),
                
//                 React.createElement('button', {
//                   onClick: handleSendMessage,
//                   disabled: (!messageText.trim() && attachments.length === 0) || sendingMessage,
//                   style: {
//                     padding: '10px 20px',
//                     backgroundColor: (!messageText.trim() && attachments.length === 0) || sendingMessage ? '#9ca3af' : '#3b82f6',
//                     color: 'white',
//                     border: 'none',
//                     borderRadius: '8px',
//                     fontSize: '14px',
//                     fontWeight: '500',
//                     cursor: (!messageText.trim() && attachments.length === 0) || sendingMessage ? 'not-allowed' : 'pointer',
//                     transition: 'background-color 0.2s'
//                   }
//                 }, sendingMessage ? 'Sending...' : 'Send')
//               )
//             )
//           )
//         ) :
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             height: '100%',
//             color: '#9ca3af'
//           }
//         }, 'Select a conversation to start messaging')
//     )
//   );
// };

// export default UserMessages;















import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import messageService from '../services/messageService';
import userService from '../services/userService';
import { useAuth } from '../context/AuthContext';

const UserMessages = () => {
  const navigate = useNavigate();
  const { user: currentUser, logout } = useAuth();
  
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [messageText, setMessageText] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (!currentUser?._id) {
      navigate('/login');
      return;
    }
    loadConversations();
    findAdminContact();
  }, [currentUser]);

  useEffect(() => {
    if (selectedAdmin?._id) {
      loadMessages(selectedAdmin._id);
    }
  }, [selectedAdmin]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadConversations = async () => {
    try {
      setLoading(true);
      console.log('Loading conversations for user:', currentUser?._id);
      const response = await messageService.getConversations();
      console.log('Conversations loaded:', response.data);
      setConversations(response.data || []);
    } catch (error) {
      console.error('Failed to load conversations:', error);
    } finally {
      setLoading(false);
    }
  };

  const findAdminContact = async () => {
    try {
      console.log('Finding admin contacts...');
      // Find admin users to message
      const response = await userService.getUsers({ role: 'admin' });
      console.log('Admins found:', response.data);
      const admins = response.data || [];
      
      if (admins.length > 0 && !selectedAdmin) {
        // Check if there's a conversation with any admin
        const conversationsResponse = await messageService.getConversations();
        const existingConversations = conversationsResponse.data || [];
        
        // Find if we already have a conversation with any admin
        let foundAdmin = null;
        for (const admin of admins) {
          const hasConversation = existingConversations.some(
            conv => conv._id === admin._id
          );
          if (hasConversation) {
            foundAdmin = admin;
            break;
          }
        }
        
        // If found existing conversation, select that admin
        if (foundAdmin) {
          setSelectedAdmin(foundAdmin);
        } else {
          // Otherwise select the first admin
          setSelectedAdmin(admins[0]);
        }
      }
    } catch (error) {
      console.error('Error finding admin:', error);
    }
  };

  const loadMessages = async (adminId) => {
    try {
      setLoadingMessages(true);
      console.log('Loading messages with admin:', adminId);
      const response = await messageService.getMessages(adminId);
      console.log('Messages loaded:', response.data);
      setMessages(response.data || []);
    } catch (error) {
      console.error('Failed to load messages:', error);
      setError('Failed to load messages');
      setTimeout(() => setError(''), 3000);
    } finally {
      setLoadingMessages(false);
    }
  };

  const handleSendMessage = async () => {
    if (!messageText.trim() || !selectedAdmin || !currentUser) {
      setError('Please enter a message');
      setTimeout(() => setError(''), 3000);
      return;
    }

    setSendingMessage(true);
    setError('');

    try {
      console.log('Sending message to admin:', selectedAdmin._id);
      console.log('Current user:', currentUser);

      const response = await messageService.sendMessage(
        selectedAdmin._id,
        messageText.trim()
      );

      console.log('Message sent response:', response);

      if (response.success) {
        setMessages([...messages, response.data]);
        setMessageText('');
        
        // Refresh conversations to update last message
        const convResponse = await messageService.getConversations();
        setConversations(convResponse.data || []);
      }
    } catch (err) {
      console.error('Error sending message:', err);
      setError(err.error || 'Failed to send message');
    } finally {
      setSendingMessage(false);
    }
  };

  const handleLogout = () => {
    if (logout) {
      logout();
    }
    navigate('/login');
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    if (diff < 24 * 60 * 60 * 1000) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diff < 7 * 24 * 60 * 60 * 1000) {
      return date.toLocaleDateString([], { weekday: 'short' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  return React.createElement('div', {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      backgroundColor: '#f3f4f6'
    }
  },
    // Header
    React.createElement('div', {
      style: {
        backgroundColor: 'white',
        padding: '16px 24px',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }
    },
      React.createElement('h1', {
        style: {
          fontSize: '24px',
          fontWeight: '700',
          color: '#111827',
          margin: 0
        }
      }, 'Messages'),
      
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '12px'
        }
      },
        React.createElement('button', {
          onClick: () => handleNavigate('/user/dashboard'),
          style: {
            padding: '8px 16px',
            backgroundColor: '#f3f4f6',
            color: '#374151',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }
        }, 'Dashboard'),
        
        React.createElement('button', {
          onClick: handleLogout,
          style: {
            padding: '8px 16px',
            backgroundColor: '#ef4444',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }
        }, 'Logout')
      )
    ),

    // Main Content
    React.createElement('div', {
      style: {
        display: 'flex',
        flex: 1,
        overflow: 'hidden'
      }
    },
      // Conversations Sidebar
      React.createElement('div', {
        style: {
          width: '320px',
          backgroundColor: 'white',
          borderRight: '1px solid #e5e7eb',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column'
        }
      },
        React.createElement('div', {
          style: {
            padding: '16px',
            borderBottom: '1px solid #e5e7eb'
          }
        },
          React.createElement('h2', {
            style: {
              fontSize: '16px',
              fontWeight: '600',
              color: '#374151',
              margin: 0
            }
          }, 'Conversations')
        ),
        
        React.createElement('div', {
          style: {
            flex: 1,
            padding: '8px'
          }
        },
          loading ?
            React.createElement('div', {
              style: {
                padding: '40px',
                textAlign: 'center',
                color: '#6b7280'
              }
            }, 'Loading...') :
          conversations.length === 0 ?
            React.createElement('div', {
              style: {
                padding: '40px',
                textAlign: 'center',
                color: '#6b7280',
                fontSize: '14px'
              }
            }, 'No conversations yet') :
          conversations.map((conv) => {
            const fullName = `${conv.firstName || ''} ${conv.lastName || ''}`.trim() || 'Admin';
            return React.createElement('div', {
              key: conv._id,
              onClick: () => setSelectedAdmin(conv),
              style: {
                padding: '12px',
                borderRadius: '8px',
                cursor: 'pointer',
                backgroundColor: selectedAdmin?._id === conv._id ? '#f3f4f6' : 'white',
                marginBottom: '4px',
                transition: 'background-color 0.2s'
              },
              onMouseEnter: (e) => {
                if (selectedAdmin?._id !== conv._id) {
                  e.currentTarget.style.backgroundColor = '#f9fafb';
                }
              },
              onMouseLeave: (e) => {
                if (selectedAdmin?._id !== conv._id) {
                  e.currentTarget.style.backgroundColor = 'white';
                }
              }
            },
              React.createElement('div', {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }
              },
                conv.profilePhoto
                  ? React.createElement('img', {
                      src: conv.profilePhoto,
                      alt: 'Profile',
                      style: {
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }
                    })
                  : React.createElement('div', {
                      style: {
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        backgroundColor: '#3b82f6',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: '600'
                      }
                    }, fullName.charAt(0) || 'A'),
                
                React.createElement('div', {
                  style: {
                    flex: 1,
                    minWidth: 0
                  }
                },
                  React.createElement('div', {
                    style: {
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '4px'
                    }
                  },
                    React.createElement('span', {
                      style: {
                        fontWeight: '600',
                        fontSize: '14px',
                        color: '#111827'
                      }
                    }, fullName),
                    
                    conv.lastMessage && React.createElement('span', {
                      style: {
                        fontSize: '11px',
                        color: '#9ca3af'
                      }
                    }, formatTime(conv.lastMessage.createdAt))
                  ),
                  
                  React.createElement('div', {
                    style: {
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }
                  },
                    React.createElement('span', {
                      style: {
                        fontSize: '13px',
                        color: '#6b7280',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: '150px'
                      }
                    }, conv.lastMessage?.content || 'No messages'),
                    
                    conv.unreadCount > 0 && React.createElement('span', {
                      style: {
                        backgroundColor: '#ef4444',
                        color: 'white',
                        borderRadius: '12px',
                        padding: '2px 8px',
                        fontSize: '11px',
                        fontWeight: '600',
                        marginLeft: '8px'
                      }
                    }, conv.unreadCount)
                  )
                )
              )
            );
          })
        )
      ),

      // Messages Area
      React.createElement('div', {
        style: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'white'
        }
      },
        !selectedAdmin ?
          React.createElement('div', {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: '#9ca3af',
              fontSize: '16px'
            }
          }, 'Select a conversation to start messaging') :
        React.createElement(React.Fragment, null,
          // Header
          React.createElement('div', {
            style: {
              padding: '16px 24px',
              borderBottom: '1px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: '#f9fafb'
            }
          },
            selectedAdmin.profilePhoto
              ? React.createElement('img', {
                  src: selectedAdmin.profilePhoto,
                  alt: 'Profile',
                  style: {
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }
                })
              : React.createElement('div', {
                  style: {
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#3b82f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '600'
                  }
                }, `${(selectedAdmin.firstName || '').charAt(0)}${(selectedAdmin.lastName || '').charAt(0)}` || 'A'),
            
            React.createElement('div', null,
              React.createElement('h3', {
                style: {
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '2px'
                }
              }, `${selectedAdmin.firstName || ''} ${selectedAdmin.lastName || ''}`.trim() || 'Admin'),
              
              React.createElement('p', {
                style: {
                  fontSize: '12px',
                  color: '#6b7280',
                  margin: 0
                }
              }, 'Administrator')
            )
          ),

          // Error message
          error && React.createElement('div', {
            style: {
              padding: '10px',
              backgroundColor: '#fee2e2',
              color: '#dc2626',
              textAlign: 'center',
              fontSize: '14px',
              borderBottom: '1px solid #fecaca'
            }
          }, error),

          // Messages
          React.createElement('div', {
            style: {
              flex: 1,
              padding: '24px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              backgroundColor: '#f9fafb'
            }
          },
            loadingMessages ?
              React.createElement('div', {
                style: {
                  textAlign: 'center',
                  padding: '40px',
                  color: '#6b7280'
                }
              }, 'Loading messages...') :
            messages.length === 0 ?
              React.createElement('p', {
                style: {
                  textAlign: 'center',
                  color: '#9ca3af',
                  padding: '40px',
                  fontSize: '14px'
                }
              }, 'No messages yet. Start the conversation!') :
            messages.map((msg, index) => {
              const isMe = msg.senderId?._id === currentUser?._id || msg.senderId === currentUser?._id;
              
              return React.createElement('div', {
                key: msg._id || index,
                style: {
                  display: 'flex',
                  justifyContent: isMe ? 'flex-end' : 'flex-start',
                  marginBottom: '4px'
                }
              },
                React.createElement('div', {
                  style: {
                    maxWidth: '70%',
                    padding: '12px 16px',
                    borderRadius: isMe ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                    backgroundColor: isMe ? '#3b82f6' : 'white',
                    color: isMe ? 'white' : '#111827',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                    wordBreak: 'break-word'
                  }
                },
                  React.createElement('p', {
                    style: {
                      margin: 0,
                      fontSize: '14px',
                      lineHeight: '1.5'
                    }
                  }, msg.content || ''),
                  
                  React.createElement('div', {
                    style: {
                      fontSize: '10px',
                      marginTop: '4px',
                      textAlign: 'right',
                      color: isMe ? 'rgba(255,255,255,0.7)' : '#9ca3af'
                    }
                  }, msg.createdAt ? formatTime(msg.createdAt) : 'Just now')
                )
              );
            }),
          React.createElement('div', { ref: messagesEndRef })
        ),

        // Input Area (only show when admin is selected)
        selectedAdmin && React.createElement('div', {
          style: {
            padding: '20px 24px',
            borderTop: '1px solid #e5e7eb',
            backgroundColor: 'white'
          }
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-end'
            }
          },
            React.createElement('textarea', {
              value: messageText,
              onChange: (e) => setMessageText(e.target.value),
              onKeyPress: (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              },
              placeholder: 'Type your message...',
              rows: 2,
              style: {
                flex: 1,
                padding: '12px 16px',
                border: '2px solid #e5e7eb',
                borderRadius: '12px',
                fontSize: '14px',
                resize: 'none',
                fontFamily: 'inherit',
                outline: 'none',
                transition: 'border-color 0.2s'
              },
              onFocus: (e) => e.target.style.borderColor = '#3b82f6',
              onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
            }),
            
            React.createElement('button', {
              onClick: handleSendMessage,
              disabled: !messageText.trim() || sendingMessage,
              style: {
                padding: '12px 28px',
                backgroundColor: (!messageText.trim() || sendingMessage) ? '#9ca3af' : '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: (!messageText.trim() || sendingMessage) ? 'not-allowed' : 'pointer',
                transition: 'background-color 0.2s',
                marginBottom: '4px'
              },
              onMouseEnter: (e) => {
                if (!sendingMessage && messageText.trim()) {
                  e.currentTarget.style.backgroundColor = '#2563eb';
                }
              },
              onMouseLeave: (e) => {
                if (!sendingMessage && messageText.trim()) {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                }
              }
            }, sendingMessage ? 'Sending...' : 'Send')
          )
        )
      )
    )
  )
};

export default UserMessages;
