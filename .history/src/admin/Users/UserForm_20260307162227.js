
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
//     isActive: true,
//     userHyperlink: '',
//     profilePhoto: null,
//     profilePhotoPreview: '',
//     location: {
//       street: '',
//       city: '',
//       state: '',
//       zipCode: '',
//       country: ''
//     }
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);
//   const [copySuccess, setCopySuccess] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const [savedUser, setSavedUser] = useState(null);

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
//         password: user.password || '',
//         phone: user.phone || '',
//         role: user.role || 'user',
//         isActive: user.isActive !== undefined ? user.isActive : true,
//         userHyperlink: user.userHyperlink || '',
//         profilePhoto: null,
//         profilePhotoPreview: user.profilePhoto || '',
//         location: user.location || {
//           street: '',
//           city: '',
//           state: '',
//           zipCode: '',
//           country: ''
//         }
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
    
//     // Handle nested location fields
//     if (name.startsWith('location.')) {
//       const locationField = name.split('.')[1];
//       setFormData(prev => ({
//         ...prev,
//         location: {
//           ...prev.location,
//           [locationField]: value
//         }
//       }));
//     } else {
//       setFormData(prev => ({
//         ...prev,
//         [name]: value
//       }));
//     }
//   };

//   const handlePhotoChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData(prev => ({
//           ...prev,
//           profilePhoto: file,
//           profilePhotoPreview: reader.result
//         }));
//       };
//       reader.readAsDataURL(file);
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

//   const handleCopyHyperlink = () => {
//     navigator.clipboard.writeText(formData.userHyperlink).then(() => {
//       setCopySuccess('✅ Hyperlink copied to clipboard!');
//       setTimeout(() => setCopySuccess(''), 3000);
//     }).catch(() => {
//       setCopySuccess('❌ Failed to copy hyperlink');
//       setTimeout(() => setCopySuccess(''), 3000);
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);
//     setLoading(true);

//     try {
//       // Create FormData for file upload
//       const submitData = new FormData();
//       submitData.append('firstName', formData.firstName);
//       submitData.append('lastName', formData.lastName);
//       submitData.append('email', formData.email);
//       submitData.append('password', formData.password);
//       submitData.append('phone', formData.phone);
//       submitData.append('role', formData.role);
//       submitData.append('isActive', formData.isActive);
//       submitData.append('userHyperlink', formData.userHyperlink);
//       submitData.append('location', JSON.stringify(formData.location));
      
//       if (formData.profilePhoto) {
//         submitData.append('profilePhoto', formData.profilePhoto);
//       }

//       let response;
//       if (isEditMode) {
//         response = await userService.updateUser(id, submitData);
//         setSuccess('✅ User updated successfully!');
//       } else {
//         response = await userService.createUser(submitData);
//         setSuccess('✅ User created successfully!');
//       }
      
//       // Make sure we have the complete user data with photo
//       const savedUserData = response.data || formData;
//       if (formData.profilePhotoPreview) {
//         savedUserData.profilePhotoPreview = formData.profilePhotoPreview;
//       }
      
//       setSavedUser(savedUserData);
//       setShowPopup(true);
      
//       setTimeout(() => {
//         setShowPopup(false);
//         navigate('/admin/users');
//       }, 5000);
//     } catch (err) {
//       setError(err.error || `Failed to ${isEditMode ? 'update' : 'create'} user`);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleHyperlinkClick = () => {
//     if (formData.userHyperlink) {
//       window.open(formData.userHyperlink, '_blank');
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
//           marginBottom: '20px'
//         }
//       },
//         React.createElement('h1', {
//           style: {
//             fontSize: '26px',
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
//             padding: '8px 16px',
//             backgroundColor: 'white',
//             color: '#374151',
//             border: '1px solid #e5e7eb',
//             borderRadius: '6px',
//             fontSize: '14px',
//             cursor: 'pointer'
//           }
//         }, '← Back')
//       ),

//       // Success/Error Messages
//       error ? React.createElement('div', {
//         style: {
//           backgroundColor: '#fee2e2',
//           color: '#dc2626',
//           padding: '12px',
//           borderRadius: '8px',
//           marginBottom: '16px',
//           fontSize: '14px',
//           border: '1px solid #fecaca'
//         }
//       }, error) : null,

//       success ? React.createElement('div', {
//         style: {
//           backgroundColor: '#d1fae5',
//           color: '#065f46',
//           padding: '12px',
//           borderRadius: '8px',
//           marginBottom: '16px',
//           fontSize: '14px',
//           textAlign: 'center',
//           border: '1px solid #a7f3d0'
//         }
//       }, success) : null,

//       // Main Form
//       React.createElement('form', {
//         onSubmit: handleSubmit,
//         encType: 'multipart/form-data',
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '16px',
//           padding: '28px',
//           boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
//         }
//       },
//         // Profile Photo Section
//         React.createElement('div', {
//           style: {
//             marginBottom: '28px',
//             textAlign: 'center'
//           }
//         },
//           React.createElement('div', {
//             onClick: () => document.getElementById('photo-upload').click(),
//             style: {
//               width: '120px',
//               height: '120px',
//               borderRadius: '50%',
//               backgroundColor: '#f3f4f6',
//               margin: '0 auto 16px',
//               overflow: 'hidden',
//               border: '3px solid #e5e7eb',
//               cursor: 'pointer',
//               position: 'relative',
//               boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
//             }
//           },
//             formData.profilePhotoPreview ? 
//               React.createElement('img', {
//                 src: formData.profilePhotoPreview,
//                 alt: 'Profile',
//                 style: {
//                   width: '100%',
//                   height: '100%',
//                   objectFit: 'cover'
//                 }
//               }) :
//               React.createElement('div', {
//                 style: {
//                   width: '100%',
//                   height: '100%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '36px',
//                   color: '#9ca3af',
//                   backgroundColor: '#f3f4f6'
//                 }
//               }, '📷')
//           ),
          
//           React.createElement('input', {
//             id: 'photo-upload',
//             type: 'file',
//             accept: 'image/*',
//             onChange: handlePhotoChange,
//             style: {
//               display: 'none'
//             }
//           }),
          
//           React.createElement('p', {
//             style: {
//               fontSize: '13px',
//               color: '#6b7280'
//             }
//           }, 'Click to upload profile photo (optional)')
//         ),

//         // Hyperlink Section - Manual Entry
//         React.createElement('div', {
//           style: {
//             marginBottom: '24px',
//             padding: '16px',
//             backgroundColor: '#f0f9ff',
//             borderRadius: '10px',
//             border: '1px solid #bae6fd'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: '10px'
//             }
//           },
//             React.createElement('label', {
//               style: {
//                 fontSize: '15px',
//                 fontWeight: '600',
//                 color: '#0369a1',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '6px'
//               }
//             }, '🔗 User Hyperlink (Optional)'),
            
//             formData.userHyperlink ? React.createElement('button', {
//               type: 'button',
//               onClick: handleCopyHyperlink,
//               style: {
//                 padding: '5px 12px',
//                 backgroundColor: '#0369a1',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '6px',
//                 fontSize: '12px',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '4px'
//               }
//             }, '📋 Copy') : null
//           ),
          
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               gap: '8px',
//               alignItems: 'center'
//             }
//           },
//             React.createElement('input', {
//               type: 'url',
//               name: 'userHyperlink',
//               value: formData.userHyperlink,
//               onChange: handleChange,
//               placeholder: 'Enter custom hyperlink (optional)',
//               style: {
//                 flex: 1,
//                 padding: '12px',
//                 border: '1px solid #bae6fd',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 fontFamily: 'monospace'
//               }
//             }),
            
//             formData.userHyperlink ? React.createElement('button', {
//               type: 'button',
//               onClick: handleHyperlinkClick,
//               style: {
//                 padding: '12px 16px',
//                 backgroundColor: 'white',
//                 color: '#0369a1',
//                 border: '1px solid #0369a1',
//                 borderRadius: '8px',
//                 fontSize: '13px',
//                 cursor: 'pointer',
//                 fontWeight: '500'
//               }
//             }, 'Open') : null
//           ),
          
//           copySuccess ? React.createElement('p', {
//             style: {
//               marginTop: '10px',
//               fontSize: '12px',
//               color: copySuccess.includes('✅') ? '#10b981' : '#ef4444',
//               textAlign: 'center'
//             }
//           }, copySuccess) : null
//         ),

//         // Password Section - Manual Entry
//         React.createElement('div', {
//           style: {
//             marginBottom: '24px',
//             padding: '16px',
//             backgroundColor: '#f0fdf4',
//             borderRadius: '10px',
//             border: '1px solid #bbf7d0'
//           }
//         },
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               justifyContent: 'space-between',
//               alignItems: 'center',
//               marginBottom: '10px'
//             }
//           },
//             React.createElement('label', {
//               style: {
//                 fontSize: '15px',
//                 fontWeight: '600',
//                 color: '#166534',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '6px'
//               }
//             }, '🔑 Password'),
            
//             formData.password ? React.createElement('button', {
//               type: 'button',
//               onClick: handleCopyPassword,
//               style: {
//                 padding: '5px 12px',
//                 backgroundColor: '#166534',
//                 color: 'white',
//                 border: 'none',
//                 borderRadius: '6px',
//                 fontSize: '12px',
//                 cursor: 'pointer',
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '4px'
//               }
//             }, '📋 Copy') : null
//           ),
          
//           React.createElement('div', {
//             style: {
//               display: 'flex',
//               gap: '8px',
//               alignItems: 'center'
//             }
//           },
//             React.createElement('div', {
//               style: {
//                 flex: 1,
//                 position: 'relative'
//               }
//             },
//               React.createElement('input', {
//                 type: showPassword ? 'text' : 'password',
//                 name: 'password',
//                 value: formData.password,
//                 onChange: handleChange,
//                 placeholder: 'Enter password (optional)',
//                 style: {
//                   width: '100%',
//                   padding: '12px',
//                   paddingRight: '45px',
//                   border: '1px solid #bbf7d0',
//                   borderRadius: '8px',
//                   fontSize: '14px',
//                   fontFamily: 'monospace'
//                 }
//               }),
              
//               formData.password ? React.createElement('button', {
//                 type: 'button',
//                 onClick: () => setShowPassword(!showPassword),
//                 style: {
//                   position: 'absolute',
//                   right: '12px',
//                   top: '50%',
//                   transform: 'translateY(-50%)',
//                   background: 'none',
//                   border: 'none',
//                   cursor: 'pointer',
//                   fontSize: '16px',
//                   color: '#6b7280'
//                 }
//               }, showPassword ? '👁️' : '👁️‍🗨️') : null
//             )
//           ),
          
//           formData.password ? React.createElement('p', {
//             style: {
//               marginTop: '10px',
//               fontSize: '12px',
//               color: '#6b7280',
//               fontStyle: 'italic'
//             }
//           }, 'Password will be saved and visible in view profile.') : null
//         ),

//         // Personal Information
//         React.createElement('h3', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '20px',
//             paddingBottom: '10px',
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
//                 padding: '10px 14px',
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
//                 padding: '10px 14px',
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

//         // Email Field
//         React.createElement('div', {
//           style: {
//             marginBottom: '24px'
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
//           }, 'Email *'),
          
//           React.createElement('input', {
//             type: 'email',
//             name: 'email',
//             value: formData.email,
//             onChange: handleChange,
//             required: true,
//             style: {
//               width: '100%',
//               padding: '10px 14px',
//               border: '2px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               boxSizing: 'border-box',
//               backgroundColor: isEditMode ? '#f9fafb' : 'white'
//             },
//             readOnly: isEditMode
//           })
//         ),

//         // Phone Field
//         React.createElement('div', {
//           style: {
//             marginBottom: '24px'
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
//           }, 'Phone Number'),
          
//           React.createElement('input', {
//             type: 'tel',
//             name: 'phone',
//             value: formData.phone,
//             onChange: handleChange,
//             placeholder: '+1 234 567 8900',
//             style: {
//               width: '100%',
//               padding: '10px 14px',
//               border: '2px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '14px',
//               boxSizing: 'border-box'
//             }
//           })
//         ),

//         // Location Information
//         React.createElement('h3', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '20px',
//             paddingBottom: '10px',
//             borderBottom: '2px solid #e5e7eb',
//             display: 'flex',
//             alignItems: 'center',
//             gap: '8px'
//           }
//         }, '📍 Location (Optional)'),

//         React.createElement('div', {
//           style: {
//             marginBottom: '20px'
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
//             name: 'location.street',
//             value: formData.location.street,
//             onChange: handleChange,
//             placeholder: 'Street address',
//             style: {
//               width: '100%',
//               padding: '10px 14px',
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
//             gap: '20px',
//             marginBottom: '20px'
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
//               name: 'location.city',
//               value: formData.location.city,
//               onChange: handleChange,
//               placeholder: 'City',
//               style: {
//                 width: '100%',
//                 padding: '10px 14px',
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
//               name: 'location.state',
//               value: formData.location.state,
//               onChange: handleChange,
//               placeholder: 'State',
//               style: {
//                 width: '100%',
//                 padding: '10px 14px',
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
//             gap: '20px',
//             marginBottom: '28px'
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
//               name: 'location.zipCode',
//               value: formData.location.zipCode,
//               onChange: handleChange,
//               placeholder: 'Zip code',
//               style: {
//                 width: '100%',
//                 padding: '10px 14px',
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
//               name: 'location.country',
//               value: formData.location.country,
//               onChange: handleChange,
//               placeholder: 'Country',
//               style: {
//                 width: '100%',
//                 padding: '10px 14px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '14px',
//                 boxSizing: 'border-box'
//               }
//             })
//           )
//         ),

//         // Role & Status
//         React.createElement('h3', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '20px',
//             paddingBottom: '10px',
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
//             marginBottom: '28px'
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
//                 padding: '10px 14px',
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
//                 padding: '10px 0'
//               }
//             },
//               React.createElement('label', {
//                 style: {
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: '10px',
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

//         // Submit Buttons
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '16px',
//             justifyContent: 'flex-end',
//             borderTop: '2px solid #e5e7eb',
//             paddingTop: '24px'
//           }
//         },
//           React.createElement('button', {
//             type: 'button',
//             onClick: () => navigate('/admin/users'),
//             style: {
//               padding: '12px 28px',
//               backgroundColor: 'white',
//               color: '#374151',
//               border: '2px solid #e5e7eb',
//               borderRadius: '8px',
//               fontSize: '15px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = 'white'
//           }, 'Cancel'),
          
//           React.createElement('button', {
//             type: 'submit',
//             disabled: loading,
//             style: {
//               padding: '12px 32px',
//               background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '15px',
//               fontWeight: '600',
//               cursor: loading ? 'not-allowed' : 'pointer',
//               opacity: loading ? 0.7 : 1,
//               transition: 'transform 0.2s',
//               boxShadow: '0 4px 6px rgba(102, 126, 234, 0.4)'
//             },
//             onMouseEnter: (e) => {
//               if (!loading) {
//                 e.currentTarget.style.transform = 'translateY(-2px)';
//                 e.currentTarget.style.boxShadow = '0 6px 8px rgba(102, 126, 234, 0.5)';
//               }
//             },
//             onMouseLeave: (e) => {
//               if (!loading) {
//                 e.currentTarget.style.transform = 'translateY(0)';
//                 e.currentTarget.style.boxShadow = '0 4px 6px rgba(102, 126, 234, 0.4)';
//               }
//             }
//           }, loading ? 'Saving...' : (isEditMode ? 'Update User' : 'Create User'))
//         )
//       )
//     ),

//     // Success Popup
//     showPopup && savedUser ? React.createElement('div', {
//       style: {
//         position: 'fixed',
//         top: '50%',
//         left: '50%',
//         transform: 'translate(-50%, -50%)',
//         backgroundColor: 'white',
//         borderRadius: '20px',
//         padding: '32px',
//         maxWidth: '500px',
//         width: '90%',
//         maxHeight: '85vh',
//         overflowY: 'auto',
//         boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
//         zIndex: 2000,
//         animation: 'slideIn 0.3s ease'
//       }
//     },
//       React.createElement('div', {
//         style: {
//           textAlign: 'center',
//           marginBottom: '24px'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             width: '70px',
//             height: '70px',
//             background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
//             borderRadius: '50%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             margin: '0 auto 16px',
//             fontSize: '36px',
//             color: 'white',
//             boxShadow: '0 10px 20px rgba(16, 185, 129, 0.3)'
//           }
//         }, '✅'),
        
//         React.createElement('h2', {
//           style: {
//             fontSize: '24px',
//             fontWeight: '700',
//             color: '#111827',
//             marginBottom: '8px'
//           }
//         }, isEditMode ? 'User Updated!' : 'User Created!')
//       ),

//       // Profile Photo in Popup
//       savedUser.profilePhotoPreview ? React.createElement('div', {
//         style: {
//           textAlign: 'center',
//           marginBottom: '20px'
//         }
//       },
//         React.createElement('img', {
//           src: savedUser.profilePhotoPreview,
//           alt: 'Profile',
//           style: {
//             width: '100px',
//             height: '100px',
//             borderRadius: '50%',
//             objectFit: 'cover',
//             border: '4px solid #e5e7eb'
//           }
//         })
//       ) : null,

//       // Hyperlink in popup
//       savedUser.userHyperlink ? React.createElement('div', {
//         style: {
//           padding: '16px',
//           backgroundColor: '#f0f9ff',
//           borderRadius: '12px',
//           marginBottom: '16px',
//           border: '1px solid #bae6fd'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginBottom: '10px'
//           }
//         },
//           React.createElement('span', {
//             style: {
//               fontSize: '15px',
//               fontWeight: '600',
//               color: '#0369a1'
//             }
//           }, '🔗 User Hyperlink'),
          
//           React.createElement('button', {
//             onClick: () => {
//               navigator.clipboard.writeText(savedUser.userHyperlink);
//               alert('Hyperlink copied!');
//             },
//             style: {
//               padding: '4px 12px',
//               backgroundColor: '#0369a1',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               fontSize: '12px',
//               cursor: 'pointer'
//             }
//           }, 'Copy')
//         ),
        
//         React.createElement('div', {
//           style: {
//             padding: '12px',
//             backgroundColor: 'white',
//             borderRadius: '8px',
//             fontSize: '13px',
//             fontFamily: 'monospace',
//             wordBreak: 'break-all',
//             border: '1px solid #e5e7eb'
//           }
//         }, savedUser.userHyperlink),
        
//         React.createElement('button', {
//           onClick: () => window.open(savedUser.userHyperlink, '_blank'),
//           style: {
//             marginTop: '12px',
//             padding: '8px 16px',
//             backgroundColor: 'white',
//             color: '#0369a1',
//             border: '1px solid #0369a1',
//             borderRadius: '8px',
//             fontSize: '13px',
//             cursor: 'pointer',
//             width: '100%',
//             fontWeight: '500'
//           }
//         }, '🔗 Open Link')
//       ) : null,

//       // Password in popup
//       savedUser.password ? React.createElement('div', {
//         style: {
//           padding: '16px',
//           backgroundColor: '#f0fdf4',
//           borderRadius: '12px',
//           marginBottom: '16px',
//           border: '1px solid #bbf7d0'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//             marginBottom: '10px'
//           }
//         },
//           React.createElement('span', {
//             style: {
//               fontSize: '15px',
//               fontWeight: '600',
//               color: '#166534'
//             }
//           }, '🔑 Password'),
          
//           React.createElement('button', {
//             onClick: () => {
//               navigator.clipboard.writeText(savedUser.password);
//               alert('Password copied!');
//             },
//             style: {
//               padding: '4px 12px',
//               backgroundColor: '#166534',
//               color: 'white',
//               border: 'none',
//               borderRadius: '6px',
//               fontSize: '12px',
//               cursor: 'pointer'
//             }
//           }, 'Copy')
//         ),
        
//         React.createElement('div', {
//           style: {
//             padding: '12px',
//             backgroundColor: 'white',
//             borderRadius: '8px',
//             fontSize: '13px',
//             fontFamily: 'monospace',
//             wordBreak: 'break-all',
//             border: '1px solid #e5e7eb'
//           }
//         }, savedUser.password),
        
//         React.createElement('p', {
//           style: {
//             marginTop: '10px',
//             fontSize: '12px',
//             color: '#6b7280',
//             fontStyle: 'italic',
//             textAlign: 'center'
//           }
//         }, 'Password is saved and visible in view profile.')
//       ) : null,

//       // User details in popup
//       React.createElement('div', {
//         style: {
//           padding: '20px',
//           backgroundColor: '#f9fafb',
//           borderRadius: '12px'
//         }
//       },
//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: '1fr 1fr',
//             gap: '16px'
//           }
//         },
//           React.createElement('div', null,
//             React.createElement('p', { style: { fontSize: '12px', color: '#6b7280', marginBottom: '4px' } }, 'Full Name'),
//             React.createElement('p', { style: { fontSize: '15px', fontWeight: '600', color: '#111827' } }, 
//               `${savedUser.firstName || ''} ${savedUser.lastName || ''}`.trim() || 'N/A'
//             )
//           ),
          
//           React.createElement('div', null,
//             React.createElement('p', { style: { fontSize: '12px', color: '#6b7280', marginBottom: '4px' } }, 'Email'),
//             React.createElement('p', { style: { fontSize: '14px', fontWeight: '500', color: '#3b82f6' } }, savedUser.email || 'N/A')
//           ),
          
//           React.createElement('div', null,
//             React.createElement('p', { style: { fontSize: '12px', color: '#6b7280', marginBottom: '4px' } }, 'Phone'),
//             React.createElement('p', { style: { fontSize: '14px', fontWeight: '500' } }, savedUser.phone || 'N/A')
//           ),
          
//           React.createElement('div', null,
//             React.createElement('p', { style: { fontSize: '12px', color: '#6b7280', marginBottom: '4px' } }, 'Role'),
//             React.createElement('p', { style: { fontSize: '14px', fontWeight: '500' } }, 
//               savedUser.role === 'admin' ? 'Administrator' : 'User'
//             )
//           ),
          
//           React.createElement('div', { style: { gridColumn: 'span 2' } },
//             React.createElement('p', { style: { fontSize: '12px', color: '#6b7280', marginBottom: '4px' } }, 'Status'),
//             React.createElement('span', {
//               style: {
//                 padding: '4px 12px',
//                 borderRadius: '20px',
//                 fontSize: '13px',
//                 fontWeight: '500',
//                 backgroundColor: savedUser.isActive ? '#d1fae5' : '#fee2e2',
//                 color: savedUser.isActive ? '#10b981' : '#ef4444',
//                 display: 'inline-block'
//               }
//             }, savedUser.isActive ? 'Active' : 'Inactive')
//           )
//         )
//       ),

//       React.createElement('p', {
//         style: {
//           textAlign: 'center',
//           fontSize: '13px',
//           color: '#6b7280',
//           marginTop: '20px'
//         }
//       }, 'Redirecting to users list in 5 seconds...')
//     ) : null
//   );
// };

// export default UserForm;