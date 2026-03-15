import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import messageService from '../../services/messageService';
import userService from '../../services/userService';

const AdminMessages = () => {
  const navigate = useNavigate();
  const { userId: selectedUserId } = useParams();
  const adminUser = JSON.parse(localStorage.getItem('crm-user') || '{}');
  
  const [users, setUsers] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messageText, setMessageText] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    loadUsers();
    loadConversations();
  }, []);

  useEffect(() => {
    if (selectedUserId) {
      loadMessages(selectedUserId);
      // Find and set selected user
      const user = users.find(u => u._id === selectedUserId);
      if (user) {
        setSelectedUser(user);
      }
    }
  }, [selectedUserId, users]);

  const loadUsers = async () => {
    try {
      const response = await userService.getUsers({ limit: 100 });
      setUsers(response.data || []);
    } catch (error) {
      console.error('Failed to load users:', error);
    }
  };

  const loadConversations = async () => {
    try {
      setLoading(true);
      const response = await messageService.getConversations(adminUser._id);
      setConversations(response.data || []);
    } catch (error) {
      console.error('Failed to load conversations:', error);
    } finally {
      setLoading(false);
    }
  };

  const loadMessages = async (otherUserId) => {
    try {
      const response = await messageService.getMessages(adminUser._id, otherUserId);
      setMessages(response.data || []);
    } catch (error) {
      console.error('Failed to load messages:', error);
    }
  };

  const handleSelectUser = (user) => {
    setSelectedUser(user);
    loadMessages(user._id);
    navigate(`/admin/messages/${user._id}`);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setAttachments(prev => [...prev, ...files]);
  };

  const removeAttachment = (index) => {
    setAttachments(prev => prev.filter((_, i) => i !== index));
  };

  const handleSendMessage = async () => {
    if ((!messageText.trim() && attachments.length === 0) || !selectedUser) return;

    setSendingMessage(true);
    try {
      const messageData = {
        senderId: adminUser._id,
        senderName: adminUser.name || 'Admin User',
        senderRole: 'admin',
        receiverId: selectedUser._id,
        content: messageText
      };

      await messageService.sendMessage(messageData, attachments);
      
      // Reload messages
      await loadMessages(selectedUser._id);
      // Reload conversations to update last message
      await loadConversations();
      
      // Clear input
      setMessageText('');
      setAttachments([]);
      
    } catch (err) {
      alert('Failed to send message: ' + (err.error || err.message));
    } finally {
      setSendingMessage(false);
    }
  };

  const filteredUsers = users.filter(user => 
    user._id !== adminUser._id && 
    (user.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     user.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
     user.email?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return React.createElement('div', {
    style: {
      display: 'flex',
      height: 'calc(100vh - 70px)',
      backgroundColor: '#f3f4f6'
    }
  },
    // Left Sidebar - Users and Conversations
    React.createElement('div', {
      style: {
        width: '320px',
        backgroundColor: 'white',
        borderRight: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column'
      }
    },
      // Search
      React.createElement('div', {
        style: {
          padding: '16px',
          borderBottom: '1px solid #e5e7eb'
        }
      },
        React.createElement('input', {
          type: 'text',
          placeholder: 'Search users...',
          value: searchTerm,
          onChange: (e) => setSearchTerm(e.target.value),
          style: {
            width: '100%',
            padding: '10px 14px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
            boxSizing: 'border-box'
          }
        })
      ),

      // Conversations List
      React.createElement('div', {
        style: {
          flex: 1,
          overflowY: 'auto'
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
        searchTerm ? (
          // Show search results
          filteredUsers.map((user) => {
            const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
            return React.createElement('div', {
              key: user._id,
              onClick: () => handleSelectUser(user),
              style: {
                padding: '12px 16px',
                cursor: 'pointer',
                backgroundColor: selectedUser?._id === user._id ? '#f3f4f6' : 'white',
                borderBottom: '1px solid #e5e7eb'
              }
            },
              React.createElement('div', {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }
              },
                React.createElement('div', {
                  style: {
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#3b82f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: '16px'
                  }
                }, fullName.charAt(0) || 'U'),
                
                React.createElement('div', null,
                  React.createElement('div', {
                    style: {
                      fontWeight: '600',
                      fontSize: '14px',
                      color: '#111827',
                      marginBottom: '2px'
                    }
                  }, fullName || 'Unknown User'),
                  
                  React.createElement('div', {
                    style: {
                      fontSize: '12px',
                      color: '#6b7280'
                    }
                  }, user.email || 'No email')
                )
              )
            );
          })
        ) : (
          // Show conversations
          conversations.length === 0 ?
            React.createElement('div', {
              style: {
                padding: '40px',
                textAlign: 'center',
                color: '#6b7280'
              }
            }, 'No conversations yet. Search for users to start messaging.') :
          conversations.map((conv) =>
            React.createElement('div', {
              key: conv._id,
              onClick: () => handleSelectUser(conv.otherUser),
              style: {
                padding: '12px 16px',
                cursor: 'pointer',
                backgroundColor: selectedUser?._id === conv.otherUser._id ? '#f3f4f6' : 'white',
                borderBottom: '1px solid #e5e7eb'
              }
            },
              React.createElement('div', {
                style: {
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }
              },
                React.createElement('div', {
                  style: {
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: '#3b82f6',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: '600',
                    fontSize: '16px'
                  }
                }, conv.otherUser.name?.charAt(0) || 'U'),
                
                React.createElement('div', {
                  style: {
                    flex: 1
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
                    }, conv.otherUser.name),
                    
                    React.createElement('span', {
                      style: {
                        fontSize: '11px',
                        color: '#9ca3af'
                      }
                    }, new Date(conv.updatedAt).toLocaleDateString())
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
                        fontWeight: '600'
                      }
                    }, conv.unreadCount)
                  )
                )
              )
            )
          )
        )
      )
    ),

    // Right Side - Messages Area
    React.createElement('div', {
      style: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white'
      }
    },
      selectedUser ?
        React.createElement(React.Fragment, null,
          // Header
          React.createElement('div', {
            style: {
              padding: '16px 24px',
              borderBottom: '1px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }
          },
            React.createElement('div', {
              style: {
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: '#3b82f6',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '600'
              }
            }, `${(selectedUser.firstName || '').charAt(0)}${(selectedUser.lastName || '').charAt(0)}`),
            
            React.createElement('div', null,
              React.createElement('h3', {
                style: {
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '2px'
                }
              }, `${selectedUser.firstName || ''} ${selectedUser.lastName || ''}`.trim()),
              
              React.createElement('p', {
                style: {
                  fontSize: '12px',
                  color: '#6b7280',
                  margin: 0
                }
              }, selectedUser.email || 'No email')
            )
          ),

          // Messages
          React.createElement('div', {
            style: {
              flex: 1,
              padding: '24px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              backgroundColor: '#f9fafb'
            }
          },
            messages.length === 0 ?
              React.createElement('p', {
                style: {
                  textAlign: 'center',
                  color: '#9ca3af',
                  padding: '40px'
                }
              }, 'No messages yet. Say hello!') :
              messages.map((msg, index) => {
                const isMe = msg.senderId === adminUser._id;
                return React.createElement('div', {
                  key: index,
                  style: {
                    display: 'flex',
                    justifyContent: isMe ? 'flex-end' : 'flex-start',
                    marginBottom: '8px'
                  }
                },
                  React.createElement('div', {
                    style: {
                      maxWidth: '70%',
                      padding: '12px 16px',
                      borderRadius: isMe ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      backgroundColor: isMe ? '#3b82f6' : 'white',
                      color: isMe ? 'white' : '#111827',
                      boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
                    }
                  },
                    React.createElement('p', {
                      style: {
                        margin: 0,
                        fontSize: '14px',
                        lineHeight: '1.5',
                        wordBreak: 'break-word'
                      }
                    }, msg.content),
                    
                    msg.attachments && msg.attachments.length > 0 && React.createElement('div', {
                      style: {
                        marginTop: '8px',
                        paddingTop: '8px',
                        borderTop: `1px solid ${isMe ? 'rgba(255,255,255,0.2)' : '#e5e7eb'}`
                      }
                    },
                      msg.attachments.map((file, i) =>
                        React.createElement('div', {
                          key: i,
                          style: {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px',
                            fontSize: '12px',
                            color: isMe ? 'rgba(255,255,255,0.9)' : '#6b7280'
                          }
                        },
                          React.createElement('span', null, '📎'),
                          React.createElement('span', null, file.filename || 'Attachment')
                        )
                      )
                    ),
                    
                    React.createElement('div', {
                      style: {
                        fontSize: '10px',
                        marginTop: '4px',
                        textAlign: 'right',
                        color: isMe ? 'rgba(255,255,255,0.7)' : '#9ca3af'
                      }
                    }, new Date(msg.createdAt).toLocaleTimeString())
                  )
                );
              })
          ),

          // Input Area
          React.createElement('div', {
            style: {
              padding: '20px 24px',
              borderTop: '1px solid #e5e7eb',
              backgroundColor: 'white'
            }
          },
            // Attachment preview
            attachments.length > 0 && React.createElement('div', {
              style: {
                padding: '8px',
                backgroundColor: '#f9fafb',
                borderRadius: '6px',
                marginBottom: '12px'
              }
            },
              attachments.map((file, index) =>
                React.createElement('div', {
                  key: index,
                  style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '4px 8px',
                    backgroundColor: 'white',
                    borderRadius: '4px',
                    marginBottom: '4px'
                  }
                },
                  React.createElement('span', {
                    style: {
                      fontSize: '12px',
                      color: '#374151'
                    }
                  }, `📎 ${file.name}`),
                  
                  React.createElement('button', {
                    onClick: () => removeAttachment(index),
                    style: {
                      background: 'none',
                      border: 'none',
                      color: '#ef4444',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }
                  }, '×')
                )
              )
            ),

            // Input
            React.createElement('div', {
              style: {
                display: 'flex',
                gap: '8px',
                alignItems: 'flex-end'
              }
            },
              React.createElement('div', {
                style: {
                  flex: 1,
                  position: 'relative'
                }
              },
                React.createElement('textarea', {
                  value: messageText,
                  onChange: (e) => setMessageText(e.target.value),
                  placeholder: 'Type your message...',
                  rows: 3,
                  style: {
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #e5e7eb',
                    borderRadius: '8px',
                    fontSize: '14px',
                    resize: 'none',
                    boxSizing: 'border-box'
                  },
                  onKeyPress: (e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }
                })
              ),
              
              React.createElement('div', {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }
              },
                React.createElement('label', {
                  style: {
                    padding: '10px',
                    backgroundColor: '#f3f4f6',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px'
                  }
                },
                  React.createElement('input', {
                    type: 'file',
                    multiple: true,
                    onChange: handleFileChange,
                    style: { display: 'none' }
                  }),
                  '📎'
                ),
                
                React.createElement('button', {
                  onClick: handleSendMessage,
                  disabled: (!messageText.trim() && attachments.length === 0) || sendingMessage,
                  style: {
                    padding: '10px 20px',
                    backgroundColor: (!messageText.trim() && attachments.length === 0) || sendingMessage ? '#9ca3af' : '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: (!messageText.trim() && attachments.length === 0) || sendingMessage ? 'not-allowed' : 'pointer'
                  }
                }, sendingMessage ? 'Sending...' : 'Send')
              )
            )
          )
        ) :
        React.createElement('div', {
          style: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: '#9ca3af'
          }
        }, 'Select a user to start messaging')
    )
  );
};

export default AdminMessages;