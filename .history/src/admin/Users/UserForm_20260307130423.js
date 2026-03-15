
// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import userService from '../../services/userService';

// const UserForm = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const isEditMode = !!id;

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     phone: '',
//     role: 'user',
//     company: '',
//     address: {
//       street: '',
//       city: '',
//       state: '',
//       zipCode: '',
//       country: ''
//     },
//     isActive: true
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   useEffect(() => {
//     if (isEditMode) {
//       fetchUser();
//     }
//   }, [id]);

//   const fetchUser = async () => {
//     try {
//       setLoading(true);
//       const response = await userService.getUser(id);
//       const user = response.data;
//       setFormData({
//         firstName: user.firstName || '',
//         lastName: user.lastName || '',
//         email: user.email || '',
//         password: '',
//         phone: user.phone || '',
//         role: user.role || 'user',
//         company: user.company || '',
//         address: user.address || {
//           street: '',
//           city: '',
//           state: '',
//           zipCode: '',
//           country: ''
//         },
//         isActive: user.isActive !== undefined ? user.isActive : true
//       });
//       setError(null);
//     } catch (err) {
//       setError(err.message || 'Failed to load user');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.includes('.')) {
//       const [parent, child] = name.split('.');
//       setFormData({
//         ...formData,
//         [parent]: {
//           ...formData[parent],
//           [child]: value
//         }
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);
//     setLoading(true);

//     try {
//       if (isEditMode) {
//         await userService.updateUser(id, formData);
//         setSuccess('User updated successfully!');
//       } else {
//         await userService.createUser(formData);
//         setSuccess('User created successfully!');
//         setTimeout(() => {
//           navigate('/admin/users');
//         }, 2000);
//       }
//     } catch (err) {
//       setError(err.message || `Failed to ${isEditMode ? 'update' : 'create'} user`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading && isEditMode) {
//     return React.createElement('div', {
//       style: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh'
//       }
//     }, 'Loading...');
//   }

//   // Password section for new users only
//   const passwordSection = !isEditMode ? React.createElement('div', {
//     style: {
//       marginBottom: '24px'
//     }
//   },
//     React.createElement('label', {
//       style: {
//         display: 'block',
//         fontSize: '14px',
//         fontWeight: '500',
//         color: '#374151',
//         marginBottom: '6px'
//       }
//     }, 'Password *'),
    
//     React.createElement('input', {
//       type: 'password',
//       name: 'password',
//       value: formData.password,
//       onChange: handleChange,
//       required: !isEditMode,
//       style: {
//         width: '100%',
//         padding: '10px',
//         border: '1px solid #e5e7eb',
//         borderRadius: '8px',
//         fontSize: '14px',
//         boxSizing: 'border-box'
//       }
//     })
//   ) : null;

//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     React.createElement('div', {
//       style: {
//         maxWidth: '800px',
//         margin: '0 auto'
//       }
//     },
//       // Header
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '24px'
//         }
//       },
//         React.createElement('h1', {
//           style: {
//             fontSize: '24px',
//             fontWeight: '700',
//             color: '#111827',
//             margin: 0
//           }
//         }, isEditMode ? 'Edit User' : 'Add New User'),
        
//         React.createElement('button', {
//           onClick: () => navigate('/admin/users'),
//           style: {
//             padding: '8px 16px',
//             backgroundColor: 'white',
//             color: '#374151',
//             border: '1px solid #e5e7eb',
//             borderRadius: '8px',
//             fontSize: '14px',
//             cursor: 'pointer'
//           }
//         }, '← Back to Users')
//       ),

//       // Messages
//       error ? React.createElement('div', {
//         style: {
//           backgroundColor: '#fee2e2',
//           color: '#dc2626',
//           padding: '12px',
//           borderRadius: '8px',
//           marginBottom: '20px'
//         }
//       }, error) : null,

//       success ? React.createElement('div', {
//         style: {
//           backgroundColor: '#d1fae5',
//           color: '#065f46',
//           padding: '12px',
//           borderRadius: '8px',
//           marginBottom: '20px'
//         }
//       }, success) : null,

//       // Form
//       React.createElement('form', {
//         onSubmit: handleSubmit,
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '12px',
//           padding: '32px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
//         }
//       },
//         // Personal Information
//         React.createElement('h2', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '20px',
//             paddingBottom: '12px',
//             borderBottom: '1px solid #e5e7eb'
//           }
//         }, 'Personal Information'),

//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '20px',
//             marginBottom: '24px'
//           }
//         },
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'First Name *'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'firstName',
//               value: formData.firstName,
//               onChange: handleChange,
//               required: true,
//               style: {
//                 width: '100%',
//                 padding: '10px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           ),

//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Last Name *'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'lastName',
//               value: formData.lastName,
//               onChange: handleChange,
//               required: true,
//               style: {
//                 width: '100%',
//                 padding: '10px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           )
//         ),

//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '20px',
//             marginBottom: '24px'
//           }
//         },
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Email *'),
            
//             React.createElement('input', {
//               type: 'email',
//               name: 'email',
//               value: formData.email,
//               onChange: handleChange,
//               required: true,
//               style: {
//                 width: '100%',
//                 padding: '10px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           ),

//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Phone Number'),
            
//             React.createElement('input', {
//               type: 'tel',
//               name: 'phone',
//               value: formData.phone,
//               onChange: handleChange,
//               style: {
//                 width: '100%',
//                 padding: '10px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           )
//         ),

//         // Password section
//         passwordSection,

//         // Company & Role
//         React.createElement('h2', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '20px',
//             paddingBottom: '12px',
//             borderBottom: '1px solid #e5e7eb'
//           }
//         }, 'Company & Role'),

//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '20px',
//             marginBottom: '24px'
//           }
//         },
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Company'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'company',
//               value: formData.company,
//               onChange: handleChange,
//               style: {
//                 width: '100%',
//                 padding: '10px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           ),

//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Role *'),
            
//             React.createElement('select', {
//               name: 'role',
//               value: formData.role,
//               onChange: handleChange,
//               required: true,
//               style: {
//                 width: '100%',
//                 padding: '10px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 backgroundColor: 'white'
//               }
//             },
//               React.createElement('option', { value: 'user' }, 'User'),
//               React.createElement('option', { value: 'admin' }, 'Admin')
//             )
//           )
//         ),

//         // Address
//         React.createElement('h2', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '20px',
//             paddingBottom: '12px',
//             borderBottom: '1px solid #e5e7eb'
//           }
//         }, 'Address'),

//         React.createElement('div', {
//           style: {
//             marginBottom: '16px'
//           }
//         },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: '#374151',
//               marginBottom: '6px'
//             }
//           }, 'Street Address'),
          
//           React.createElement('input', {
//             type: 'text',
//             name: 'address.street',
//             value: formData.address.street,  // Fixed: removed curly braces
//             onChange: handleChange,
//             style: {
//               width: '100%',
//               padding: '10px',
//               border: '1px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               boxSizing: 'border-box'
//             }
//           })
//         ),

//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '16px',
//             marginBottom: '16px'
//           }
//         },
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'City'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'address.city',
//               value: formData.address.city,  // Fixed: removed curly braces
//               onChange: handleChange,
//               style: {
//                 width: '100%',
//                 padding: '10px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           ),

//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'State'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'address.state',
//               value: formData.address.state,  // Fixed: removed curly braces
//               onChange: handleChange,
//               style: {
//                 width: '100%',
//                 padding: '10px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           )
//         ),

//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '16px',
//             marginBottom: '24px'
//           }
//         },
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Zip Code'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'address.zipCode',
//               value: formData.address.zipCode,  // Fixed: removed curly braces
//               onChange: handleChange,
//               style: {
//                 width: '100%',
//                 padding: '10px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           ),

//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Country'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'address.country',
//               value: formData.address.country,  // Fixed: removed curly braces
//               onChange: handleChange,
//               style: {
//                 width: '100%',
//                 padding: '10px',
//                 border: '1px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           )
//         ),

//         // Status
//         React.createElement('div', {
//           style: {
//             marginBottom: '32px'
//           }
//         },
//           React.createElement('label', {
//             style: {
//               display: 'flex',
//               alignItems: 'center',
//               gap: '8px',
//               cursor: 'pointer'
//             }
//           },
//             React.createElement('input', {
//               type: 'checkbox',
//               name: 'isActive',
//               checked: formData.isActive,
//               onChange: (e) => setFormData({ ...formData, isActive: e.target.checked }),
//               style: {
//                 width: '16px',
//                 height: '16px',
//                 cursor: 'pointer'
//               }
//             }),
            
//             React.createElement('span', {
//               style: {
//                 fontSize: '14px',
//                 color: '#374151'
//               }
//             }, 'Active Account')
//           )
//         ),

//         // Submit Button
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '12px',
//             justifyContent: 'flex-end',
//             borderTop: '1px solid #e5e7eb',
//             paddingTop: '24px'
//           }
//         },
//           React.createElement('button', {
//             type: 'button',
//             onClick: () => navigate('/admin/users'),
//             style: {
//               padding: '12px 24px',
//               backgroundColor: 'white',
//               color: '#374151',
//               border: '1px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: 'pointer'
//             }
//           }, 'Cancel'),
          
//           React.createElement('button', {
//             type: 'submit',
//             disabled: loading,
//             style: {
//               padding: '12px 24px',
//               backgroundColor: '#3b82f6',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '14px',
//               fontWeight: '500',
//               cursor: loading ? 'not-allowed' : 'pointer',
//               opacity: loading ? 0.7 : 1
//             }
//           }, loading ? 'Saving...' : (isEditMode ? 'Update User' : 'Create User'))
//         )
//       )
//     )
//   );
// };

// export default UserForm;

















// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import userService from '../../services/userService';

// const UserForm = () => {
//   const navigate = useNavigate();
//   const { id } = useParams();
//   const isEditMode = !!id;

//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     phone: '',
//     role: 'user',
//     company: '',
//     address: {
//       street: '',
//       city: '',
//       state: '',
//       zipCode: '',
//       country: ''
//     },
//     isActive: true
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [copySuccess, setCopySuccess] = useState('');
//   const [generatedPassword, setGeneratedPassword] = useState('');

//   useEffect(() => {
//     if (isEditMode) {
//       fetchUser();
//     } else {
//       generateDefaultCredentials();
//     }
//   }, [id]);

//   const generateRandomPassword = () => {
//     const length = 12;
//     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
//     let password = "";
//     for (let i = 0; i < length; i++) {
//       password += charset.charAt(Math.floor(Math.random() * charset.length));
//     }
//     return password;
//   };

//   const generateDefaultCredentials = () => {
//     const randomNum = Math.floor(Math.random() * 10000);
//     const defaultEmail = `user${randomNum}@crm.com`;
//     const defaultPassword = generateRandomPassword();
    
//     setFormData(prev => ({
//       ...prev,
//       email: defaultEmail,
//       password: defaultPassword
//     }));
//     setGeneratedPassword(defaultPassword);
//   };

//   const fetchUser = async () => {
//     try {
//       setLoading(true);
//       const response = await userService.getUser(id);
//       const user = response.data;
//       setFormData({
//         firstName: user.firstName || '',
//         lastName: user.lastName || '',
//         email: user.email || '',
//         password: '',
//         phone: user.phone || '',
//         role: user.role || 'user',
//         company: user.company || '',
//         address: user.address || {
//           street: '',
//           city: '',
//           state: '',
//           zipCode: '',
//           country: ''
//         },
//         isActive: user.isActive !== undefined ? user.isActive : true
//       });
//       setError(null);
//     } catch (err) {
//       setError(err.message || 'Failed to load user');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name.includes('.')) {
//       const [parent, child] = name.split('.');
//       setFormData({
//         ...formData,
//         [parent]: {
//           ...formData[parent],
//           [child]: value
//         }
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };

//   const handleCopyPassword = () => {
//     navigator.clipboard.writeText(formData.password).then(() => {
//       setCopySuccess('✅ Password copied to clipboard!');
//       setTimeout(() => setCopySuccess(''), 3000);
//     }).catch(() => {
//       setCopySuccess('❌ Failed to copy password');
//       setTimeout(() => setCopySuccess(''), 3000);
//     });
//   };

//   const handleRegeneratePassword = () => {
//     const newPassword = generateRandomPassword();
//     setFormData({
//       ...formData,
//       password: newPassword
//     });
//     setGeneratedPassword(newPassword);
//     setCopySuccess('🔄 New password generated!');
//     setTimeout(() => setCopySuccess(''), 3000);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);
//     setLoading(true);

//     try {
//       if (isEditMode) {
//         await userService.updateUser(id, formData);
//         setSuccess('✅ User updated successfully!');
//       } else {
//         await userService.createUser(formData);
//         setSuccess('✅ User created successfully!');
//       }
      
//       // Navigate back to users list after 2 seconds
//       setTimeout(() => {
//         navigate('/admin/users');
//       }, 2000);
//     } catch (err) {
//       setError(err.error || `Failed to ${isEditMode ? 'update' : 'create'} user`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading && isEditMode) {
//     return React.createElement('div', {
//       style: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         fontSize: '18px',
//         color: '#6b7280'
//       }
//     }, 'Loading user data...');
//   }

//   return React.createElement('div', {
//     style: {
//       padding: '24px',
//       backgroundColor: '#f3f4f6',
//       minHeight: '100vh',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     React.createElement('div', {
//       style: {
//         maxWidth: '800px',
//         margin: '0 auto'
//       }
//     },
//       // Header
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           marginBottom: '24px'
//         }
//       },
//         React.createElement('h1', {
//           style: {
//             fontSize: '32px',
//             fontWeight: '700',
//             background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//             WebkitBackgroundClip: 'text',
//             WebkitTextFillColor: 'transparent',
//             margin: 0
//           }
//         }, isEditMode ? '✏️ Edit User' : '➕ Create New User'),
        
//         React.createElement('button', {
//           onClick: () => navigate('/admin/users'),
//           style: {
//             padding: '10px 20px',
//             backgroundColor: 'white',
//             color: '#374151',
//             border: '1px solid #e5e7eb',
//             borderRadius: '8px',
//             fontSize: '14px',
//             fontWeight: '500',
//             cursor: 'pointer',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '4px'
//           }
//         }, '← Back to Users')
//       ),

//       // Messages
//       error && React.createElement('div', {
//         style: {
//           backgroundColor: '#fee2e2',
//           color: '#dc2626',
//           padding: '12px',
//           borderRadius: '8px',
//           marginBottom: '20px',
//           border: '1px solid #fecaca'
//         }
//       }, error),

//       success && React.createElement('div', {
//         style: {
//           backgroundColor: '#d1fae5',
//           color: '#065f46',
//           padding: '12px',
//           borderRadius: '8px',
//           marginBottom: '20px',
//           border: '1px solid #a7f3d0',
//           textAlign: 'center',
//           fontWeight: '500',
//           fontSize: '16px'
//         }
//       }, success),

//       // Form
//       React.createElement('form', {
//         onSubmit: handleSubmit,
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '16px',
//           padding: '32px',
//           boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
//         }
//       },
//         // Auto-generated credentials section (only for new users)
//         !isEditMode && React.createElement('div', {
//           style: {
//             marginBottom: '24px',
//             padding: '20px',
//             background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
//             borderRadius: '12px',
//             border: '2px solid #bae6fd'
//           }
//         },
//           React.createElement('h3', {
//             style: {
//               fontSize: '18px',
//               fontWeight: '600',
//               color: '#0369a1',
//               marginBottom: '16px',
//               display: 'flex',
//               alignItems: 'center',
//               gap: '8px'
//             }
//           }, '🔐 Auto-generated Credentials'),

//           // Email
//           React.createElement('div', {
//             style: {
//               marginBottom: '16px'
//             }
//           },
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#0369a1',
//                 marginBottom: '6px'
//               }
//             }, '📧 Email Address'),
            
//             React.createElement('div', {
//               style: {
//                 display: 'flex',
//                 gap: '8px'
//               }
//             },
//               React.createElement('input', {
//                 type: 'email',
//                 name: 'email',
//                 value: formData.email,
//                 onChange: handleChange,
//                 required: true,
//                 style: {
//                   flex: 1,
//                   padding: '12px',
//                   border: '2px solid #bae6fd',
//                   borderRadius: '8px',
//                   fontSize: '14px',
//                   boxSizing: 'border-box',
//                   backgroundColor: 'white'
//                 }
//               })
//             )
//           ),

//           // Password
//           React.createElement('div', {
//             style: {
//               marginBottom: '12px'
//             }
//           },
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#0369a1',
//                 marginBottom: '6px'
//               }
//             }, '🔑 Generated Password'),
            
//             React.createElement('div', {
//               style: {
//                 display: 'flex',
//                 gap: '8px',
//                 alignItems: 'center'
//               }
//             },
//               React.createElement('div', {
//                 style: {
//                   flex: 1,
//                   position: 'relative'
//                 }
//               },
//                 React.createElement('input', {
//                   type: showPassword ? 'text' : 'password',
//                   name: 'password',
//                   value: formData.password,
//                   onChange: handleChange,
//                   required: true,
//                   style: {
//                     width: '100%',
//                     padding: '12px',
//                     paddingRight: '40px',
//                     border: '2px solid #bae6fd',
//                     borderRadius: '8px',
//                     fontSize: '14px',
//                     backgroundColor: 'white',
//                     fontFamily: 'monospace'
//                   }
//                 }),
                
//                 React.createElement('button', {
//                   type: 'button',
//                   onClick: () => setShowPassword(!showPassword),
//                   style: {
//                     position: 'absolute',
//                     right: '8px',
//                     top: '50%',
//                     transform: 'translateY(-50%)',
//                     background: 'none',
//                     border: 'none',
//                     cursor: 'pointer',
//                     fontSize: '18px',
//                     color: '#6b7280'
//                   }
//                 }, showPassword ? '👁️' : '👁️‍🗨️')
//               ),
              
//               React.createElement('button', {
//                 type: 'button',
//                 onClick: handleCopyPassword,
//                 style: {
//                   padding: '12px 20px',
//                   backgroundColor: '#0369a1',
//                   color: 'white',
//                   border: 'none',
//                   borderRadius: '8px',
//                   fontSize: '14px',
//                   fontWeight: '500',
//                   cursor: 'pointer',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '4px'
//                 }
//               }, '📋 Copy')
//             )
//           ),

//           // Copy success message
//           copySuccess && React.createElement('div', {
//             style: {
//               marginTop: '8px',
//               padding: '8px',
//               backgroundColor: copySuccess.includes('✅') ? '#d1fae5' : '#fee2e2',
//               color: copySuccess.includes('✅') ? '#065f46' : '#991b1b',
//               borderRadius: '6px',
//               fontSize: '13px',
//               textAlign: 'center'
//             }
//           }, copySuccess),

//           // Regenerate button
//           React.createElement('button', {
//             type: 'button',
//             onClick: handleRegeneratePassword,
//             style: {
//               marginTop: '12px',
//               padding: '8px 16px',
//               backgroundColor: 'white',
//               color: '#0369a1',
//               border: '2px solid #0369a1',
//               borderRadius: '6px',
//               fontSize: '13px',
//               fontWeight: '500',
//               cursor: 'pointer',
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: '4px'
//             }
//           }, '🔄 Regenerate Password'),

//           // Note
//           React.createElement('p', {
//             style: {
//               marginTop: '12px',
//               fontSize: '12px',
//               color: '#6b7280',
//               fontStyle: 'italic'
//             }
//           }, '💡 Save these credentials. They will be shown only once.')
//         ),

//         // Personal Information
//         React.createElement('h2', {
//           style: {
//             fontSize: '20px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '20px',
//             paddingBottom: '12px',
//             borderBottom: '2px solid #e5e7eb',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px'
//           }
//         }, '👤 Personal Information'),

//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '20px',
//             marginBottom: '24px'
//           }
//         },
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'First Name *'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'firstName',
//               value: formData.firstName,
//               onChange: handleChange,
//               required: true,
//               style: {
//                 width: '100%',
//                 padding: '12px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box',
//                 transition: 'border-color 0.2s'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Last Name *'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'lastName',
//               value: formData.lastName,
//               onChange: handleChange,
//               required: true,
//               style: {
//                 width: '100%',
//                 padding: '12px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box',
//                 transition: 'border-color 0.2s'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           )
//         ),

//         // Contact Information
//         React.createElement('h2', {
//           style: {
//             fontSize: '20px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '20px',
//             paddingBottom: '12px',
//             borderBottom: '2px solid #e5e7eb',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px'
//           }
//         }, '📞 Contact Information'),

//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '20px',
//             marginBottom: '24px'
//           }
//         },
//           // Email (read-only in edit mode)
//           isEditMode ? React.createElement('div', {
//             style: {
//               gridColumn: 'span 2'
//             }
//           },
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Email'),
            
//             React.createElement('input', {
//               type: 'email',
//               name: 'email',
//               value: formData.email,
//               readOnly: true,
//               style: {
//                 width: '100%',
//                 padding: '12px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box',
//                 backgroundColor: '#f9fafb',
//                 color: '#6b7280'
//               }
//             })
//           ) : null,

//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Phone Number'),
            
//             React.createElement('input', {
//               type: 'tel',
//               name: 'phone',
//               value: formData.phone,
//               onChange: handleChange,
//               placeholder: '+1 234 567 8900',
//               style: {
//                 width: '100%',
//                 padding: '12px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           ),

//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Company'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'company',
//               value: formData.company,
//               onChange: handleChange,
//               placeholder: 'Company name',
//               style: {
//                 width: '100%',
//                 padding: '12px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           )
//         ),

//         // Role & Status
//         React.createElement('h2', {
//           style: {
//             fontSize: '20px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '20px',
//             paddingBottom: '12px',
//             borderBottom: '2px solid #e5e7eb',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px'
//           }
//         }, '⚙️ Role & Status'),

//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '20px',
//             marginBottom: '24px'
//           }
//         },
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Role *'),
            
//             React.createElement('select', {
//               name: 'role',
//               value: formData.role,
//               onChange: handleChange,
//               required: true,
//               style: {
//                 width: '100%',
//                 padding: '12px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 backgroundColor: 'white',
//                 cursor: 'pointer'
//               }
//             },
//               React.createElement('option', { value: 'user' }, '👤 User'),
//               React.createElement('option', { value: 'admin' }, '👑 Admin')
//             )
//           ),

//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Status'),
            
//             React.createElement('div', {
//               style: {
//                 padding: '12px 0'
//               }
//             },
//               React.createElement('label', {
//                 style: {
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '8px',
//                   cursor: 'pointer'
//                 }
//               },
//                 React.createElement('input', {
//                   type: 'checkbox',
//                   name: 'isActive',
//                   checked: formData.isActive,
//                   onChange: (e) => setFormData({ ...formData, isActive: e.target.checked }),
//                   style: {
//                     width: '18px',
//                     height: '18px',
//                     cursor: 'pointer'
//                   }
//                 }),
                
//                 React.createElement('span', {
//                   style: {
//                     fontSize: '14px',
//                     color: '#374151'
//                   }
//                 }, formData.isActive ? '✅ Active Account' : '❌ Inactive Account')
//               )
//             )
//           )
//         ),

//         // Address
//         React.createElement('h2', {
//           style: {
//             fontSize: '20px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '20px',
//             paddingBottom: '12px',
//             borderBottom: '2px solid #e5e7eb',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px'
//           }
//         }, '📍 Address Information'),

//         React.createElement('div', {
//           style: {
//             marginBottom: '16px'
//           }
//         },
//           React.createElement('label', {
//             style: {
//               display: 'block',
//               fontSize: '14px',
//               fontWeight: '500',
//               color: '#374151',
//               marginBottom: '6px'
//             }
//           }, 'Street Address'),
          
//           React.createElement('input', {
//             type: 'text',
//             name: 'address.street',
//             value: formData.address.street,
//             onChange: handleChange,
//             placeholder: 'Street address',
//             style: {
//               width: '100%',
//               padding: '12px',
//               border: '2px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               boxSizing: 'border-box'
//             }
//           })
//         ),

//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '16px',
//             marginBottom: '16px'
//           }
//         },
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'City'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'address.city',
//               value: formData.address.city,
//               onChange: handleChange,
//               placeholder: 'City',
//               style: {
//                 width: '100%',
//                 padding: '12px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           ),

//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'State'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'address.state',
//               value: formData.address.state,
//               onChange: handleChange,
//               placeholder: 'State',
//               style: {
//                 width: '100%',
//                 padding: '12px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           )
//         ),

//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '16px',
//             marginBottom: '24px'
//           }
//         },
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Zip Code'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'address.zipCode',
//               value: formData.address.zipCode,
//               onChange: handleChange,
//               placeholder: 'Zip code',
//               style: {
//                 width: '100%',
//                 padding: '12px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           ),

//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '500',
//                 color: '#374151',
//                 marginBottom: '6px'
//               }
//             }, 'Country'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'address.country',
//               value: formData.address.country,
//               onChange: handleChange,
//               placeholder: 'Country',
//               style: {
//                 width: '100%',
//                 padding: '12px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           )
//         ),

//         // Submit Buttons
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '12px',
//             justifyContent: 'flex-end',
//             borderTop: '2px solid #e5e7eb',
//             paddingTop: '24px'
//           }
//         },
//           React.createElement('button', {
//             type: 'button',
//             onClick: () => navigate('/admin/users'),
//             style: {
//               padding: '14px 28px',
//               backgroundColor: 'white',
//               color: '#374151',
//               border: '2px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '15px',
//               fontWeight: '600',
//               cursor: 'pointer'
//             }
//           }, 'Cancel'),
          
//           React.createElement('button', {
//             type: 'submit',
//             disabled: loading,
//             style: {
//               padding: '14px 28px',
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '15px',
//               fontWeight: '600',
//               cursor: loading ? 'not-allowed' : 'pointer',
//               opacity: loading ? 0.7 : 1,
//               boxShadow: '0 4px 6px rgba(102, 126, 234, 0.4)'
//             }
//           }, loading ? 'Saving...' : (isEditMode ? '✏️ Update User' : '✅ Create User'))
//         )
//       )
//     )
//   );
// };

// export default UserForm;