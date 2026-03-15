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
import { useNavigate, useParams } from 'react-router-dom';
import userService from '../../services/userService';

const UserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    role: 'user',
    company: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: '',
      country: ''
    },
    isActive: true
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (isEditMode) {
      fetchUser();
    }
  }, [id]);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await userService.getUser(id);
      const user = response.data;
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        password: '',
        phone: user.phone || '',
        role: user.role || 'user',
        company: user.company || '',
        address: user.address || {
          street: '',
          city: '',
          state: '',
          zipCode: '',
          country: ''
        },
        isActive: user.isActive !== undefined ? user.isActive : true
      });
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to load user');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData({
        ...formData,
        [parent]: {
          ...formData[parent],
          [child]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      if (isEditMode) {
        await userService.updateUser(id, formData);
        setSuccess('User updated successfully!');
      } else {
        await userService.createUser(formData);
        setSuccess('User created successfully!');
        setTimeout(() => {
          navigate('/admin/users');
        }, 2000);
      }
    } catch (err) {
      setError(err.message || `Failed to ${isEditMode ? 'update' : 'create'} user`);
    } finally {
      setLoading(false);
    }
  };

  if (loading && isEditMode) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }
    }, 'Loading...');
  }

  // Fix: Move password section outside and use ternary
  const passwordSection = !isEditMode ? React.createElement('div', {
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
    }, 'Password *'),
    
    React.createElement('input', {
      type: 'password',
      name: 'password',
      value: formData.password,
      onChange: handleChange,
      required: !isEditMode,
      style: {
        width: '100%',
        padding: '10px',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        fontSize: '14px',
        boxSizing: 'border-box'
      }
    })
  ) : null;

  return React.createElement('div', {
    style: {
      padding: '24px',
      backgroundColor: '#f3f4f6',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }
  },
    React.createElement('div', {
      style: {
        maxWidth: '800px',
        margin: '0 auto'
      }
    },
      // Header
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
        }, isEditMode ? 'Edit User' : 'Add New User'),
        
        React.createElement('button', {
          onClick: () => navigate('/admin/users'),
          style: {
            padding: '8px 16px',
            backgroundColor: 'white',
            color: '#374151',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
            cursor: 'pointer'
          }
        }, '← Back to Users')
      ),

      // Messages
      error ? React.createElement('div', {
        style: {
          backgroundColor: '#fee2e2',
          color: '#dc2626',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '20px'
        }
      }, error) : null,

      success ? React.createElement('div', {
        style: {
          backgroundColor: '#d1fae5',
          color: '#065f46',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '20px'
        }
      }, success) : null,

      // Form
      React.createElement('form', {
        onSubmit: handleSubmit,
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '32px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }
      },
        // Personal Information
        React.createElement('h2', {
          style: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '20px',
            paddingBottom: '12px',
            borderBottom: '1px solid #e5e7eb'
          }
        }, 'Personal Information'),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '24px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'First Name *'),
            
            React.createElement('input', {
              type: 'text',
              name: 'firstName',
              value: formData.firstName,
              onChange: handleChange,
              required: true,
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Last Name *'),
            
            React.createElement('input', {
              type: 'text',
              name: 'lastName',
              value: formData.lastName,
              onChange: handleChange,
              required: true,
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          )
        ),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '24px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Email *'),
            
            React.createElement('input', {
              type: 'email',
              name: 'email',
              value: formData.email,
              onChange: handleChange,
              required: true,
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Phone Number'),
            
            React.createElement('input', {
              type: 'tel',
              name: 'phone',
              value: formData.phone,
              onChange: handleChange,
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          )
        ),

        // Password section - fixed
        passwordSection,

        // Company & Role
        React.createElement('h2', {
          style: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '20px',
            paddingBottom: '12px',
            borderBottom: '1px solid #e5e7eb'
          }
        }, 'Company & Role'),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px',
            marginBottom: '24px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Company'),
            
            React.createElement('input', {
              type: 'text',
              name: 'company',
              value: formData.company,
              onChange: handleChange,
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Role *'),
            
            React.createElement('select', {
              name: 'role',
              value: formData.role,
              onChange: handleChange,
              required: true,
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                backgroundColor: 'white'
              }
            },
              React.createElement('option', { value: 'user' }, 'User'),
              React.createElement('option', { value: 'admin' }, 'Admin')
            )
          )
        ),

        // Address
        React.createElement('h2', {
          style: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '20px',
            paddingBottom: '12px',
            borderBottom: '1px solid #e5e7eb'
          }
        }, 'Address'),

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
          }, 'Street Address'),
          
          React.createElement('input', {
            type: 'text',
            name: 'address.street',
            value={formData.address.street},
            onChange={handleChange},
            style: {
              width: '100%',
              padding: '10px',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }
          })
        ),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '16px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'City'),
            
            React.createElement('input', {
              type: 'text',
              name: 'address.city',
              value={formData.address.city},
              onChange={handleChange},
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'State'),
            
            React.createElement('input', {
              type: 'text',
              name: 'address.state',
              value={formData.address.state},
              onChange={handleChange},
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          )
        ),

        React.createElement('div', {
          style: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '24px'
          }
        },
          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Zip Code'),
            
            React.createElement('input', {
              type: 'text',
              name: 'address.zipCode',
              value={formData.address.zipCode},
              onChange={handleChange},
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          ),

          React.createElement('div', null,
            React.createElement('label', {
              style: {
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '6px'
              }
            }, 'Country'),
            
            React.createElement('input', {
              type: 'text',
              name: 'address.country',
              value={formData.address.country},
              onChange={handleChange},
              style: {
                width: '100%',
                padding: '10px',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }
            })
          )
        ),

        // Status
        React.createElement('div', {
          style: {
            marginBottom: '32px'
          }
        },
          React.createElement('label', {
            style: {
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer'
            }
          },
            React.createElement('input', {
              type: 'checkbox',
              name: 'isActive',
              checked={formData.isActive},
              onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })},
              style: {
                width: '16px',
                height: '16px',
                cursor: 'pointer'
              }
            }),
            
            React.createElement('span', {
              style: {
                fontSize: '14px',
                color: '#374151'
              }
            }, 'Active Account')
          )
        ),

        // Submit Button
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '12px',
            justifyContent: 'flex-end',
            borderTop: '1px solid #e5e7eb',
            paddingTop: '24px'
          }
        },
          React.createElement('button', {
            type: 'button',
            onClick: () => navigate('/admin/users'),
            style: {
              padding: '12px 24px',
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
            type: 'submit',
            disabled: loading,
            style: {
              padding: '12px 24px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1
            }
          }, loading ? 'Saving...' : (isEditMode ? 'Update User' : 'Create User'))
        )
      )
    )
  );
};

export default UserForm;