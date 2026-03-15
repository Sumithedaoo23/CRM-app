
// import axios from 'axios';

// const API_URL = 'http://localhost:5000/api';

// // Create axios instance with auth header
// const getAuthHeader = () => {
//   const user = JSON.parse(localStorage.getItem('crm-user'));
//   const token = user?.token;
//   return token ? { Authorization: `Bearer ${token}` } : {};
// };

// const ticketService = {
//   // Create a new ticket
//   createTicket: async (ticketData) => {
//     try {
//       const response = await axios.post(
//         `${API_URL}/tickets`,
//         ticketData,
//         { headers: getAuthHeader() }
//       );
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Get user's tickets
//   getUserTickets: async () => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/tickets/user`,
//         { headers: getAuthHeader() }
//       );
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Get single ticket
//   getTicket: async (ticketId) => {
//     try {
//       const response = await axios.get(
//         `${API_URL}/tickets/${ticketId}`,
//         { headers: getAuthHeader() }
//       );
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   },

//   // Add comment to ticket
//   addComment: async (ticketId, comment) => {
//     try {
//       const response = await axios.post(
//         `${API_URL}/tickets/${ticketId}/comments`,
//         { text: comment },
//         { headers: getAuthHeader() }
//       );
//       return response.data;
//     } catch (error) {
//       throw error.response?.data || error.message;
//     }
//   }
// };

// export default ticketService;













in this user cant create a ticket it was not save to databse also fixed this 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ticketService from '../../services/ticketService';

const GenerateTicket = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'general',
    priority: 'medium'
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await ticketService.createTicket(formData);
      alert('Ticket created successfully!');
      navigate('/user/ticket-status');
    } catch (error) {
      alert('Failed to create ticket');
    } finally {
      setLoading(false);
    }
  };

  return React.createElement('div', { style: { maxWidth: '600px', margin: '0 auto' } },
    React.createElement('h1', { style: { fontSize: '24px', marginBottom: '24px' } }, 'Generate New Ticket'),
    React.createElement('form', { onSubmit: handleSubmit, style: { backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } },
      React.createElement('div', { style: { marginBottom: '16px' } },
        React.createElement('label', { style: { display: 'block', marginBottom: '8px', fontWeight: '500' } }, 'Title *'),
        React.createElement('input', {
          type: 'text',
          value: formData.title,
          onChange: (e) => setFormData({ ...formData, title: e.target.value }),
          style: { width: '100%', padding: '10px', border: '1px solid #e5e7eb', borderRadius: '4px' },
          required: true
        })
      ),
      React.createElement('div', { style: { marginBottom: '16px' } },
        React.createElement('label', { style: { display: 'block', marginBottom: '8px', fontWeight: '500' } }, 'Description *'),
        React.createElement('textarea', {
          value: formData.description,
          onChange: (e) => setFormData({ ...formData, description: e.target.value }),
          rows: 5,
          style: { width: '100%', padding: '10px', border: '1px solid #e5e7eb', borderRadius: '4px' },
          required: true
        })
      ),
      React.createElement('div', { style: { marginBottom: '16px' } },
        React.createElement('label', { style: { display: 'block', marginBottom: '8px', fontWeight: '500' } }, 'Priority'),
        React.createElement('select', {
          value: formData.priority,
          onChange: (e) => setFormData({ ...formData, priority: e.target.value }),
          style: { width: '100%', padding: '10px', border: '1px solid #e5e7eb', borderRadius: '4px' }
        },
          React.createElement('option', { value: 'low' }, 'Low'),
          React.createElement('option', { value: 'medium' }, 'Medium'),
          React.createElement('option', { value: 'high' }, 'High')
        )
      ),
      React.createElement('button', {
        type: 'submit',
        disabled: loading,
        style: {
          padding: '12px 24px',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
          opacity: loading ? 0.7 : 1
        }
      }, loading ? 'Creating...' : 'Create Ticket')
    )
  );
};

export default GenerateTicket;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ticketService from '../../services/ticketService';

const TicketStatus = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await ticketService.getUserTickets();
      setTickets(response.data);
    } catch (error) {
      console.error('Failed to load tickets', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return React.createElement('div', { style: { textAlign: 'center', padding: '50px' } }, 'Loading...');
  }

  return React.createElement('div', null,
    React.createElement('h1', { style: { fontSize: '24px', marginBottom: '24px' } }, 'My Tickets'),
    tickets.length === 0
      ? React.createElement('div', { style: { textAlign: 'center', padding: '50px', backgroundColor: 'white', borderRadius: '8px' } },
          React.createElement('p', { style: { marginBottom: '20px' } }, 'No tickets found'),
          React.createElement('button', {
            onClick: () => navigate('/user/generate-ticket'),
            style: { padding: '10px 20px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
          }, 'Create Your First Ticket')
        )
      : React.createElement('div', { style: { display: 'grid', gap: '16px' } },
          tickets.map(ticket =>
            React.createElement('div', {
              key: ticket._id,
              style: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }
            },
              React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' } },
                React.createElement('h3', { style: { margin: 0, color: '#3b82f6' } }, ticket.ticketNumber || 'New Ticket'),
                React.createElement('span', {
                  style: {
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: ticket.status === 'pending' ? '#fef3c7' : ticket.status === 'resolved' ? '#d1fae5' : '#e5e7eb',
                    color: ticket.status === 'pending' ? '#d97706' : ticket.status === 'resolved' ? '#10b981' : '#6b7280'
                  }
                }, ticket.status)
              ),
              React.createElement('h4', { style: { margin: '10px 0' } }, ticket.title),
              React.createElement('p', { style: { color: '#6b7280' } }, ticket.description.substring(0, 100) + '...')
            )
          )
        )
  );
};

export default TicketStatus;

import React from 'react';

const UserTickets = () => {
  const tickets = [
    { id: 1, title: 'Cannot access dashboard', status: 'pending', priority: 'high', date: '2024-03-01' },
    { id: 2, title: 'Need help with permissions', status: 'in-progress', priority: 'medium', date: '2024-03-02' },
    { id: 3, title: 'Data export not working', status: 'resolved', priority: 'low', date: '2024-02-28' },
  ];

  const getStatusColor = (status) => {
    const colors = {
      'pending': '#f59e0b',
      'in-progress': '#3b82f6',
      'resolved': '#10b981'
    };
    return colors[status] || '#6b7280';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'high': '#ef4444',
      'medium': '#f59e0b',
      'low': '#6b7280'
    };
    return colors[priority] || '#6b7280';
  };

  return React.createElement('div', {
    style: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '24px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  },
    React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px'
      }
    },
      React.createElement('h1', {
        style: {
          fontSize: '24px',
          fontWeight: '700',
          color: '#111827',
          margin: 0
        }
      }, 'My Tickets'),
      
      React.createElement('a', {
        href: '/user/generate-ticket',
        style: {
          padding: '10px 20px',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          textDecoration: 'none'
        }
      }, '+ New Ticket')
    ),

    React.createElement('div', {
      style: {
        overflowX: 'auto'
      }
    },
      React.createElement('table', {
        style: {
          width: '100%',
          borderCollapse: 'collapse'
        }
      },
        React.createElement('thead', null,
          React.createElement('tr', {
            style: {
              borderBottom: '2px solid #e5e7eb'
            }
          },
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'ID'),
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'TITLE'),
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'STATUS'),
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'PRIORITY'),
            React.createElement('th', { style: { textAlign: 'left', padding: '12px 8px', color: '#6b7280', fontSize: '14px' } }, 'DATE')
          )
        ),
        
        React.createElement('tbody', null,
          tickets.map((ticket) =>
            React.createElement('tr', {
              key: ticket.id,
              style: {
                borderBottom: '1px solid #e5e7eb'
              }
            },
              React.createElement('td', { style: { padding: '16px 8px', fontWeight: '500' } }, `#${ticket.id}`),
              React.createElement('td', { style: { padding: '16px 8px' } }, ticket.title),
              React.createElement('td', { style: { padding: '16px 8px' } },
                React.createElement('span', {
                  style: {
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500',
                    backgroundColor: getStatusColor(ticket.status) + '20',
                    color: getStatusColor(ticket.status)
                  }
                }, ticket.status)
              ),
              React.createElement('td', { style: { padding: '16px 8px' } },
                React.createElement('span', {
                  style: {
                    padding: '4px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: '500',
                    backgroundColor: getPriorityColor(ticket.priority) + '20',
                    color: getPriorityColor(ticket.priority)
                  }
                }, ticket.priority)
              ),
              React.createElement('td', { style: { padding: '16px 8px', color: '#6b7280' } }, ticket.date)
            )
          )
        )
      )
    )
  );
};

export default UserTickets;

import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance with auth header
const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('crm-user'));
  const token = user?.token;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const ticketService = {
  // Create a new ticket
  createTicket: async (ticketData) => {
    try {
      const response = await axios.post(
        `${API_URL}/tickets`,
        ticketData,
        { headers: getAuthHeader() }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get user's tickets
  getUserTickets: async () => {
    try {
      const response = await axios.get(
        `${API_URL}/tickets/user`,
        { headers: getAuthHeader() }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Get single ticket
  getTicket: async (ticketId) => {
    try {
      const response = await axios.get(
        `${API_URL}/tickets/${ticketId}`,
        { headers: getAuthHeader() }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  // Add comment to ticket
  addComment: async (ticketId, comment) => {
    try {
      const response = await axios.post(
        `${API_URL}/tickets/${ticketId}/comments`,
        { text: comment },
        { headers: getAuthHeader() }
      );
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default ticketService;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import dashboardService from '../services/dashboardService';
import ticketService from '../services/ticketService';

const UserDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalTickets: 0,
    ticketStats: {
      pending: 0,
      'in-progress': 0,
      resolved: 0,
      closed: 0,
      rejected: 0
    },
    recentTickets: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      const response = await dashboardService.getUserStats();
      setStats({
        ...response.data,
        loading: false,
        error: null
      });
    } catch (error) {
      setStats(prev => ({
        ...prev,
        loading: false,
        error: error.message || 'Failed to load dashboard stats'
      }));
    }
  };

  const handleCreateTicket = () => {
    navigate('/user/generate-ticket');
  };

  const handleViewTicket = (id) => {
    navigate(`/user/ticket-status?id=${id}`);
  };

  if (stats.loading) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }
    }, 'Loading...');
  }

  return React.createElement('div', {
    style: {
      padding: '24px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    // Welcome Header
    React.createElement('div', {
      style: {
        marginBottom: '32px'
      }
    },
      React.createElement('h1', {
        style: {
          fontSize: '28px',
          fontWeight: '700',
          color: '#111827',
          marginBottom: '8px'
        }
      }, 'My Dashboard'),
      
      React.createElement('p', {
        style: {
          fontSize: '16px',
          color: '#6b7280'
        }
      }, `Welcome back, ${user?.firstName || 'User'}!`)
    ),

    // Quick Actions
    React.createElement('div', {
      style: {
        marginBottom: '32px'
      }
    },
      React.createElement('button', {
        onClick: handleCreateTicket,
        style: {
          padding: '14px 28px',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          fontWeight: '600',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(16, 185, 129, 0.2)'
        }
      }, '➕ Create New Ticket')
    ),

    // Stats Cards
    React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '20px',
        marginBottom: '32px'
      }
    },
      // Total Tickets
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('div', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '8px'
          }
        }, 'Total Tickets'),
        
        React.createElement('div', {
          style: {
            fontSize: '36px',
            fontWeight: '700',
            color: '#3b82f6'
          }
        }, stats.totalTickets)
      ),

      // Pending Tickets
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('div', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '8px'
          }
        }, 'Pending'),
        
        React.createElement('div', {
          style: {
            fontSize: '36px',
            fontWeight: '700',
            color: '#f59e0b'
          }
        }, stats.ticketStats.pending)
      ),

      // In Progress
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('div', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '8px'
          }
        }, 'In Progress'),
        
        React.createElement('div', {
          style: {
            fontSize: '36px',
            fontWeight: '700',
            color: '#3b82f6'
          }
        }, stats.ticketStats['in-progress'])
      ),

      // Resolved
      React.createElement('div', {
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        React.createElement('div', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '8px'
          }
        }, 'Resolved'),
        
        React.createElement('div', {
          style: {
            fontSize: '36px',
            fontWeight: '700',
            color: '#10b981'
          }
        }, stats.ticketStats.resolved)
      )
    ),

    // Recent Tickets
    stats.recentTickets.length > 0 && React.createElement('div', {
      style: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }
    },
      React.createElement('h2', {
        style: {
          fontSize: '18px',
          fontWeight: '600',
          color: '#111827',
          marginBottom: '20px'
        }
      }, 'Recent Tickets'),
      
      stats.recentTickets.map((ticket, index) =>
        React.createElement('div', {
          key: index,
          style: {
            padding: '16px',
            borderBottom: index < stats.recentTickets.length - 1 ? '1px solid #e5e7eb' : 'none',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          },
          onClick: () => handleViewTicket(ticket._id),
          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
        },
          React.createElement('div', {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px'
            }
          },
            React.createElement('span', {
              style: {
                fontWeight: '600',
                color: '#3b82f6'
              }
            }, ticket.ticketNumber),
            
            React.createElement('span', {
              style: {
                padding: '2px 8px',
                borderRadius: '12px',
                fontSize: '11px',
                fontWeight: '500',
                backgroundColor: getStatusColor(ticket.status) + '20',
                color: getStatusColor(ticket.status)
              }
            }, ticket.status)
          ),
          
          React.createElement('p', {
            style: {
              fontSize: '14px',
              color: '#111827',
              marginBottom: '4px'
            }
          }, ticket.title),
          
          React.createElement('div', {
            style: {
              fontSize: '12px',
              color: '#9ca3af'
            }
          }, new Date(ticket.createdAt).toLocaleDateString())
        )
      )
    )
  );
};

// Helper function for status colors
const getStatusColor = (status) => {
  const colors = {
    'pending': '#f59e0b',
    'in-progress': '#3b82f6',
    'resolved': '#10b981',
    'closed': '#6b7280',
    'rejected': '#ef4444'
  };
  return colors[status] || '#6b7280';
};

export default UserDashboard;

const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ticketNumber: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a description']
  },
  category: {
    type: String,
    enum: ['general', 'technical', 'billing', 'feature'],
    default: 'general'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'resolved', 'closed'],
    default: 'pending'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  attachments: [{
    filename: String,
    path: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    text: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  resolvedAt: Date,
  closedAt: Date
}, {
  timestamps: true
});

// Generate ticket number before saving
ticketSchema.pre('save', async function(next) {
  if (!this.ticketNumber) {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const count = await mongoose.model('Ticket').countDocuments();
    this.ticketNumber = `TICKET-${year}${month}-${(count + 1).toString().padStart(4, '0')}`;
  }
  next();
});

module.exports = mongoose.model('Ticket', ticketSchema);

const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');
const { protect, admin } = require('../middleware/authMiddleware');

// @desc    Create new ticket
// @route   POST /api/tickets
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const { title, description, category, priority } = req.body;

    const ticket = await Ticket.create({
      title,
      description,
      category,
      priority,
      createdBy: req.user.id
    });

    res.status(201).json({
      success: true,
      data: ticket
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Get user tickets
// @route   GET /api/tickets/user
// @access  Private
router.get('/user', protect, async (req, res) => {
  try {
    const tickets = await Ticket.find({ createdBy: req.user.id })
      .sort('-createdAt');
    
    res.json({
      success: true,
      count: tickets.length,
      data: tickets
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Get all tickets (admin)
// @route   GET /api/tickets/admin
// @access  Private/Admin
router.get('/admin', protect, admin, async (req, res) => {
  try {
    const tickets = await Ticket.find()
      .populate('createdBy', 'name email')
      .populate('assignedTo', 'name email')
      .sort('-createdAt');
    
    res.json({
      success: true,
      count: tickets.length,
      data: tickets
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Get single ticket
// @route   GET /api/tickets/:id
// @access  Private
router.get('/:id', protect, async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id)
      .populate('createdBy', 'name email')
      .populate('assignedTo', 'name email')
      .populate('comments.user', 'name email');

    if (!ticket) {
      return res.status(404).json({
        success: false,
        error: 'Ticket not found'
      });
    }

    // Check authorization
    if (ticket.createdBy._id.toString() !== req.user.id && !req.user.isAdmin) {
      return res.status(403).json({
        success: false,
        error: 'Not authorized'
      });
    }

    res.json({
      success: true,
      data: ticket
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Update ticket status
// @route   PUT /api/tickets/:id/status
// @access  Private/Admin
router.put('/:id/status', protect, admin, async (req, res) => {
  try {
    const { status } = req.body;
    
    const ticket = await Ticket.findById(req.params.id);
    
    if (!ticket) {
      return res.status(404).json({
        success: false,
        error: 'Ticket not found'
      });
    }

    ticket.status = status;
    
    if (status === 'resolved') {
      ticket.resolvedAt = Date.now();
    } else if (status === 'closed') {
      ticket.closedAt = Date.now();
    }

    await ticket.save();

    res.json({
      success: true,
      data: ticket
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Assign ticket
// @route   PUT /api/tickets/:id/assign
// @access  Private/Admin
router.put('/:id/assign', protect, admin, async (req, res) => {
  try {
    const { adminId } = req.body;
    
    const ticket = await Ticket.findById(req.params.id);
    
    if (!ticket) {
      return res.status(404).json({
        success: false,
        error: 'Ticket not found'
      });
    }

    ticket.assignedTo = adminId;
    ticket.status = 'in-progress';
    await ticket.save();

    res.json({
      success: true,
      data: ticket
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Add comment
// @route   POST /api/tickets/:id/comments
// @access  Private
router.post('/:id/comments', protect, async (req, res) => {
  try {
    const { text } = req.body;
    
    const ticket = await Ticket.findById(req.params.id);
    
    if (!ticket) {
      return res.status(404).json({
        success: false,
        error: 'Ticket not found'
      });
    }

    ticket.comments.push({
      user: req.user.id,
      text
    });

    await ticket.save();

    res.json({
      success: true,
      data: ticket
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router; i want just user generae ticket it store in databse and all the connection update delete from ticket 




const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

// Route imports
const ticketRoutes = require('./routes/ticketRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
// Add other routes as needed...

const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// Mount routes - FIXED: Make sure all these files exist
app.use('/api/tickets', ticketRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
// Comment out routes that don't exist yet
// app.use('/api/contacts', contactRoutes);
// app.use('/api/leads', leadRoutes);
// app.use('/api/roles', roleRoutes);
// app.use('/api/permissions', permissionRoutes);
// app.use('/api/admin', adminRoutes);
// app.use('/api/dashboard', dashboardRoutes);
// app.use('/api/hyperlinks', hyperlinkRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'CRM API is running...' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Server Error'
  });
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`❌ Error: ${err.message}`);
  server.close(() => process.exit(1));
});