// import React, { useState, useEffect } from 'react';

// const UserForm = ({ user, onClose, onSave }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     disabled: false,
//     appRole: 'User'
//   });

//   useEffect(() => {
//     if (user) {
//       setFormData(user);
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl">
//         <div className="p-6">
//           <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
//             {user ? 'Edit User' : 'Add/Invite User'}
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="form-input"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="form-input"
//                   required
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="form-input"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                 E-Mail
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="form-input"
//                 required
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//                   App Role
//                 </label>
//                 <select
//                   name="appRole"
//                   value={formData.appRole}
//                   onChange={handleChange}
//                   className="form-input"
//                 >
//                   <option value="User">User</option>
//                   <option value="Administrator">Administrator</option>
//                 </select>
//               </div>

//               <div className="flex items-center">
//                 <input
//                   type="checkbox"
//                   name="disabled"
//                   checked={formData.disabled}
//                   onChange={handleChange}
//                   className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//                 />
//                 <label className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
//                   Disabled
//                 </label>
//               </div>
//             </div>

//             <div className="flex justify-end space-x-3 pt-4">
//               <button
//                 type="submit"
//                 className="btn-primary"
//               >
//                 Submit
//               </button>
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="btn-secondary"
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserForm;




















// import React, { useState, useEffect } from 'react';
// import './UserManagement.css';

// const UserForm = ({ user, onClose, onSave }) => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     disabled: false,
//     appRole: 'User',
//     customerName: '',
//     mobileNumber: '',
//     address: '',
//     systemCapacity: '',
//     daqLink: '',
//     invoice: {
//       totalFees: '',
//       pendingFees: '',
//       paidFees: '',
//       paymentDate: ''
//     }
//   });

//   useEffect(() => {
//     if (user) {
//       setFormData(user);
//     } else {
//       const defaultPassword = Math.random().toString(36).slice(-8);
//       setFormData(prev => ({
//         ...prev,
//         password: defaultPassword
//       }));
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
    
//     if (name.startsWith('invoice.')) {
//       const invoiceField = name.split('.')[1];
//       setFormData(prev => ({
//         ...prev,
//         invoice: {
//           ...prev.invoice,
//           [invoiceField]: value
//         }
//       }));
//     } else {
//       setFormData(prev => ({
//         ...prev,
//         [name]: type === 'checkbox' ? checked : value
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };

//   const copyToClipboard = (text) => {
//     navigator.clipboard.writeText(text);
//     alert('Copied to clipboard!');
//   };

//   return React.createElement('div', { className: 'modal-overlay' },
//     React.createElement('div', { className: 'modal-container' },
//       React.createElement('div', { className: 'modal-header' },
//         React.createElement('h2', { className: 'modal-title' }, user ? 'Edit User' : 'Add New User'),
//         React.createElement('button', {
//           className: 'close-btn',
//           onClick: onClose
//         }, '×')
//       ),
      
//       React.createElement('form', { onSubmit: handleSubmit, className: 'modal-form' },
//         // Customer Information
//         React.createElement('div', { className: 'form-section' },
//           React.createElement('h3', { className: 'section-title' }, 'Customer Information'),
          
//           React.createElement('div', { className: 'form-group' },
//             React.createElement('label', { className: 'form-label' }, 'Customer Name *'),
//             React.createElement('input', {
//               type: 'text',
//               name: 'customerName',
//               value: formData.customerName,
//               onChange: handleChange,
//               className: 'form-input',
//               required: true,
//               placeholder: 'Enter customer name'
//             })
//           ),
          
//           React.createElement('div', { className: 'form-group' },
//             React.createElement('label', { className: 'form-label' }, 'Mobile Number *'),
//             React.createElement('input', {
//               type: 'tel',
//               name: 'mobileNumber',
//               value: formData.mobileNumber,
//               onChange: handleChange,
//               className: 'form-input',
//               required: true,
//               placeholder: 'Enter mobile number'
//             })
//           ),
          
//           React.createElement('div', { className: 'form-row' },
//             React.createElement('div', { className: 'form-group' },
//               React.createElement('label', { className: 'form-label' }, 'First Name *'),
//               React.createElement('input', {
//                 type: 'text',
//                 name: 'firstName',
//                 value: formData.firstName,
//                 onChange: handleChange,
//                 className: 'form-input',
//                 required: true
//               })
//             ),
//             React.createElement('div', { className: 'form-group' },
//               React.createElement('label', { className: 'form-label' }, 'Last Name *'),
//               React.createElement('input', {
//                 type: 'text',
//                 name: 'lastName',
//                 value: formData.lastName,
//                 onChange: handleChange,
//                 className: 'form-input',
//                 required: true
//               })
//             )
//           ),
          
//           React.createElement('div', { className: 'form-group' },
//             React.createElement('label', { className: 'form-label' }, 'Address *'),
//             React.createElement('textarea', {
//               name: 'address',
//               value: formData.address,
//               onChange: handleChange,
//               className: 'form-input textarea',
//               required: true,
//               placeholder: 'Enter complete address',
//               rows: 3
//             })
//           )
//         ),
        
//         // System Information
//         React.createElement('div', { className: 'form-section' },
//           React.createElement('h3', { className: 'section-title' }, 'System Information'),
          
//           React.createElement('div', { className: 'form-group' },
//             React.createElement('label', { className: 'form-label' }, 'System Capacity (kW) *'),
//             React.createElement('input', {
//               type: 'number',
//               name: 'systemCapacity',
//               value: formData.systemCapacity,
//               onChange: handleChange,
//               className: 'form-input',
//               required: true,
//               placeholder: 'Enter capacity',
//               step: '0.01',
//               min: '0'
//             })
//           ),
          
//           React.createElement('div', { className: 'form-group' },
//             React.createElement('label', { className: 'form-label' }, 'Data Acquisition Link'),
//             React.createElement('input', {
//               type: 'url',
//               name: 'daqLink',
//               value: formData.daqLink,
//               onChange: handleChange,
//               className: 'form-input',
//               placeholder: 'https://example.com/daq'
//             })
//           )
//         ),
        
//         // Account Information
//         React.createElement('div', { className: 'form-section' },
//           React.createElement('h3', { className: 'section-title' }, 'Account Information'),
          
//           React.createElement('div', { className: 'form-group' },
//             React.createElement('label', { className: 'form-label' }, 'Email *'),
//             React.createElement('input', {
//               type: 'email',
//               name: 'email',
//               value: formData.email,
//               onChange: handleChange,
//               className: 'form-input',
//               required: true
//             })
//           ),
          
//           React.createElement('div', { className: 'form-group' },
//             React.createElement('label', { className: 'form-label' }, 'Password *'),
//             React.createElement('div', { className: 'password-group' },
//               React.createElement('input', {
//                 type: 'text',
//                 name: 'password',
//                 value: formData.password,
//                 onChange: handleChange,
//                 className: 'form-input',
//                 required: true,
//                 readOnly: true
//               }),
//               React.createElement('button', {
//                 type: 'button',
//                 onClick: () => copyToClipboard(formData.password),
//                 className: 'copy-btn'
//               }, 'Copy')
//             )
//           ),
          
//           React.createElement('div', { className: 'form-row' },
//             React.createElement('div', { className: 'form-group' },
//               React.createElement('label', { className: 'form-label' }, 'App Role'),
//               React.createElement('select', {
//                 name: 'appRole',
//                 value: formData.appRole,
//                 onChange: handleChange,
//                 className: 'form-input'
//               },
//                 React.createElement('option', { value: 'User' }, 'User'),
//                 React.createElement('option', { value: 'Administrator' }, 'Administrator')
//               )
//             ),
//             React.createElement('div', { className: 'form-group checkbox-group' },
//               React.createElement('label', { className: 'checkbox-label' },
//                 React.createElement('input', {
//                   type: 'checkbox',
//                   name: 'disabled',
//                   checked: formData.disabled,
//                   onChange: handleChange,
//                   className: 'checkbox-input'
//                 }),
//                 'Disabled'
//               )
//             )
//           ),
          
//           // Copy Credentials
//           React.createElement('div', { className: 'credentials-section' },
//             React.createElement('p', { className: 'credentials-text' }, 'Copy Credentials'),
//             React.createElement('div', { className: 'credentials-buttons' },
//               React.createElement('button', {
//                 type: 'button',
//                 onClick: () => copyToClipboard(formData.email),
//                 className: 'secondary-btn'
//               }, 'Copy Email'),
//               React.createElement('button', {
//                 type: 'button',
//                 onClick: () => copyToClipboard(formData.password),
//                 className: 'primary-btn'
//               }, 'Copy Password')
//             )
//           )
//         ),
        
//         // Invoice Information
//         React.createElement('div', { className: 'form-section' },
//           React.createElement('h3', { className: 'section-title' }, 'Invoice Information'),
          
//           React.createElement('div', { className: 'form-row' },
//             React.createElement('div', { className: 'form-group' },
//               React.createElement('label', { className: 'form-label' }, 'Total Fees ($)'),
//               React.createElement('input', {
//                 type: 'number',
//                 name: 'invoice.totalFees',
//                 value: formData.invoice.totalFees,
//                 onChange: handleChange,
//                 className: 'form-input',
//                 placeholder: '0.00',
//                 step: '0.01',
//                 min: '0'
//               })
//             ),
//             React.createElement('div', { className: 'form-group' },
//               React.createElement('label', { className: 'form-label' }, 'Pending Fees ($)'),
//               React.createElement('input', {
//                 type: 'number',
//                 name: 'invoice.pendingFees',
//                 value: formData.invoice.pendingFees,
//                 onChange: handleChange,
//                 className: 'form-input',
//                 placeholder: '0.00',
//                 step: '0.01',
//                 min: '0'
//               })
//             )
//           ),
          
//           React.createElement('div', { className: 'form-row' },
//             React.createElement('div', { className: 'form-group' },
//               React.createElement('label', { className: 'form-label' }, 'Paid Fees ($)'),
//               React.createElement('input', {
//                 type: 'number',
//                 name: 'invoice.paidFees',
//                 value: formData.invoice.paidFees,
//                 onChange: handleChange,
//                 className: 'form-input',
//                 placeholder: '0.00',
//                 step: '0.01',
//                 min: '0'
//               })
//             ),
//             React.createElement('div', { className: 'form-group' },
//               React.createElement('label', { className: 'form-label' }, 'Date of Payment'),
//               React.createElement('input', {
//                 type: 'date',
//                 name: 'invoice.paymentDate',
//                 value: formData.invoice.paymentDate,
//                 onChange: handleChange,
//                 className: 'form-input'
//               })
//             )
//           )
//         ),
        
//         // Form Actions
//         React.createElement('div', { className: 'form-actions' },
//           React.createElement('button', {
//             type: 'button',
//             onClick: onClose,
//             className: 'secondary-btn'
//           }, 'Cancel'),
//           React.createElement('button', {
//             type: 'submit',
//             className: 'primary-btn'
//           }, user ? 'Update User' : 'Add User')
//         )
//       )
//     )
//   );
// };

// export default UserForm;














import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ticketService from '../../services/ticketService';

const AdminTickets = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    status: '',
    priority: '',
    page: 1
  });
  const [pagination, setPagination] = useState({
    total: 0,
    pages: 0
  });
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [statusUpdate, setStatusUpdate] = useState({
    status: '',
    resolution: ''
  });

  useEffect(() => {
    fetchTickets();
  }, [filters.page, filters.status, filters.priority]);

  const fetchTickets = async () => {
    try {
      setLoading(true);
      const response = await ticketService.getTickets(filters);
      setTickets(response.data);
      setPagination(response.pagination);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to load tickets');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusClick = (ticket) => {
    setSelectedTicket(ticket);
    setStatusUpdate({
      status: ticket.status,
      resolution: ticket.resolution || ''
    });
    setShowStatusModal(true);
  };

  const handleStatusUpdate = async () => {
    if (!selectedTicket) return;

    try {
      await ticketService.updateTicketStatus(
        selectedTicket._id,
        statusUpdate.status,
        statusUpdate.resolution
      );
      setShowStatusModal(false);
      fetchTickets();
    } catch (err) {
      alert('Failed to update ticket status: ' + err.message);
    }
  };

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

  const getPriorityColor = (priority) => {
    const colors = {
      'low': '#6b7280',
      'medium': '#f59e0b',
      'high': '#ef4444',
      'critical': '#dc2626'
    };
    return colors[priority] || '#6b7280';
  };

  if (loading && tickets.length === 0) {
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
    // Header
    React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '24px',
        flexWrap: 'wrap',
        gap: '16px'
      }
    },
      React.createElement('h1', {
        style: {
          fontSize: '28px',
          fontWeight: '700',
          color: '#111827',
          margin: 0
        }
      }, 'Ticket Management'),
      
      React.createElement('div', {
        style: {
          display: 'flex',
          gap: '12px'
        }
      },
        React.createElement('select', {
          value: filters.status,
          onChange: (e) => setFilters({ ...filters, status: e.target.value, page: 1 }),
          style: {
            padding: '10px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
            backgroundColor: 'white'
          }
        },
          React.createElement('option', { value: '' }, 'All Status'),
          React.createElement('option', { value: 'pending' }, 'Pending'),
          React.createElement('option', { value: 'in-progress' }, 'In Progress'),
          React.createElement('option', { value: 'resolved' }, 'Resolved'),
          React.createElement('option', { value: 'closed' }, 'Closed'),
          React.createElement('option', { value: 'rejected' }, 'Rejected')
        ),
        
        React.createElement('select', {
          value: filters.priority,
          onChange: (e) => setFilters({ ...filters, priority: e.target.value, page: 1 }),
          style: {
            padding: '10px',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
            backgroundColor: 'white'
          }
        },
          React.createElement('option', { value: '' }, 'All Priority'),
          React.createElement('option', { value: 'low' }, 'Low'),
          React.createElement('option', { value: 'medium' }, 'Medium'),
          React.createElement('option', { value: 'high' }, 'High'),
          React.createElement('option', { value: 'critical' }, 'Critical')
        )
      )
    ),

    // Tickets Table
    React.createElement('div', {
      style: {
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
        overflowX: 'auto'
      }
    },
      React.createElement('table', {
        style: {
          width: '100%',
          borderCollapse: 'collapse',
          minWidth: '1000px'
        }
      },
        React.createElement('thead', null,
          React.createElement('tr', {
            style: {
              borderBottom: '2px solid #e5e7eb'
            }
          },
            React.createElement('th', {
              style: {
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }
            }, 'Ticket #'),
            
            React.createElement('th', {
              style: {
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }
            }, 'Title'),
            
            React.createElement('th', {
              style: {
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }
            }, 'User'),
            
            React.createElement('th', {
              style: {
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }
            }, 'Status'),
            
            React.createElement('th', {
              style: {
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }
            }, 'Priority'),
            
            React.createElement('th', {
              style: {
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }
            }, 'Created'),
            
            React.createElement('th', {
              style: {
                textAlign: 'left',
                padding: '12px 8px',
                fontSize: '12px',
                fontWeight: '600',
                color: '#6b7280',
                textTransform: 'uppercase'
              }
            }, 'Actions')
          )
        ),
        
        React.createElement('tbody', null,
          tickets.map((ticket) =>
            React.createElement('tr', {
              key: ticket._id,
              style: {
                borderBottom: '1px solid #e5e7eb',
                transition: 'background-color 0.2s'
              },
              onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f9fafb',
              onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'transparent'
            },
              React.createElement('td', {
                style: {
                  padding: '16px 8px',
                  fontWeight: '500',
                  color: '#3b82f6'
                }
              }, ticket.ticketNumber),
              
              React.createElement('td', {
                style: {
                  padding: '16px 8px',
                  maxWidth: '200px'
                }
              }, ticket.title),
              
              React.createElement('td', {
                style: {
                  padding: '16px 8px'
                }
              }, ticket.createdByDetails?.name || 'N/A'),
              
              React.createElement('td', {
                style: {
                  padding: '16px 8px'
                }
              },
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
              
              React.createElement('td', {
                style: {
                  padding: '16px 8px'
                }
              },
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
              
              React.createElement('td', {
                style: {
                  padding: '16px 8px',
                  fontSize: '13px',
                  color: '#6b7280'
                }
              }, new Date(ticket.createdAt).toLocaleDateString()),
              
              React.createElement('td', {
                style: {
                  padding: '16px 8px'
                }
              },
                React.createElement('div', {
                  style: {
                    display: 'flex',
                    gap: '8px'
                  }
                },
                  React.createElement('button', {
                    onClick: () => navigate(`/admin/tickets/${ticket._id}`),
                    style: {
                      padding: '6px 12px',
                      backgroundColor: '#f3f4f6',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      color: '#3b82f6'
                    }
                  }, 'View'),
                  
                  React.createElement('button', {
                    onClick: () => handleStatusClick(ticket),
                    style: {
                      padding: '6px 12px',
                      backgroundColor: '#f3f4f6',
                      border: 'none',
                      borderRadius: '6px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      color: '#10b981'
                    }
                  }, 'Update Status')
                )
              )
            )
          )
        )
      )
    ),

    // Pagination
    pagination.pages > 1 && React.createElement('div', {
      style: {
        marginTop: '24px',
        display: 'flex',
        justifyContent: 'center',
        gap: '8px'
      }
    },
      Array.from({ length: pagination.pages }, (_, i) => i + 1).map((page) =>
        React.createElement('button', {
          key: page,
          onClick: () => setFilters({ ...filters, page }),
          style: {
            padding: '8px 12px',
            backgroundColor: page === filters.page ? '#3b82f6' : 'white',
            color: page === filters.page ? 'white' : '#374151',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }
        }, page)
      )
    ),

    // Status Update Modal
    showStatusModal && React.createElement('div', {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000
      }
    },
      React.createElement('div', {
        style: {
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '400px',
          width: '90%',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }
      },
        React.createElement('h2', {
          style: {
            fontSize: '20px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '16px'
          }
        }, 'Update Ticket Status'),
        
        React.createElement('p', {
          style: {
            fontSize: '14px',
            color: '#6b7280',
            marginBottom: '20px'
          }
        }, `Ticket: ${selectedTicket?.ticketNumber}`),
        
        React.createElement('div', {
          style: {
            marginBottom: '16px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'Status'),
          
          React.createElement('select', {
            value: statusUpdate.status,
            onChange: (e) => setStatusUpdate({ ...statusUpdate, status: e.target.value }),
            style: {
              width: '100%',
              padding: '10px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              backgroundColor: 'white'
            }
          },
            React.createElement('option', { value: 'pending' }, 'Pending'),
            React.createElement('option', { value: 'in-progress' }, 'In Progress'),
            React.createElement('option', { value: 'resolved' }, 'Resolved'),
            React.createElement('option', { value: 'closed' }, 'Closed'),
            React.createElement('option', { value: 'rejected' }, 'Rejected')
          )
        ),
        
        {statusUpdate.status === 'resolved' && React.createElement('div', {
          style: {
            marginBottom: '24px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '6px'
            }
          }, 'Resolution Notes'),
          
          React.createElement('textarea', {
            value: statusUpdate.resolution,
            onChange: (e) => setStatusUpdate({ ...statusUpdate, resolution: e.target.value }),
            rows: 4,
            style: {
              width: '100%',
              padding: '10px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              resize: 'vertical',
              boxSizing: 'border-box'
            }
          })
        )},
        
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end'
          }
        },
          React.createElement('button', {
            onClick: () => setShowStatusModal(false),
            style: {
              padding: '10px 20px',
              backgroundColor: 'white',
              color: '#374151',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }
          }, 'Cancel'),
          
          React.createElement('button', {
            onClick: handleStatusUpdate,
            style: {
              padding: '10px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer'
            }
          }, 'Update Status')
        )
      )
    )
  );
};

export default AdminTickets;