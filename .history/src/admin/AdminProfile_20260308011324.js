// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../context/AuthContext';
// import userService from '../services/userService';
// import { useNavigate } from 'react-router-dom';

// const AdminProfile = () => {
//   const navigate = useNavigate();
//   const { user: authUser, logout } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     password: '',
//     role: '',
//     company: '',
//     joinDate: '',
//     isActive: true,
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

//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     // Check if user exists and has a valid ID
//     if (authUser) {
//       console.log('Auth user:', authUser);
      
//       // Check if we have a valid MongoDB ObjectId (24 character hex string)
//       const isValidObjectId = authUser._id && /^[0-9a-fA-F]{24}$/.test(authUser._id);
      
//       if (isValidObjectId) {
//         fetchUserProfile();
//       } else {
//         // Set default form data from authUser
//         setFormData(prev => ({
//           ...prev,
//           firstName: authUser.firstName || authUser.name?.split(' ')[0] || 'Admin',
//           lastName: authUser.lastName || authUser.name?.split(' ')[1] || 'User',
//           email: authUser.email || 'admin@crm.com',
//           role: authUser.role || 'admin',
//           joinDate: new Date().toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//           })
//         }));
//         setLoading(false);
//       }
//     }
//   }, [authUser]);

//   const fetchUserProfile = async () => {
//     try {
//       setLoading(true);
//       console.log('Fetching user with ID:', authUser._id);
      
//       // Only proceed if we have a valid ID
//       if (!authUser._id) {
//         throw new Error('No user ID found');
//       }
      
//       const response = await userService.getUser(authUser._id);
//       const userData = response.data;
      
//       setFormData({
//         firstName: userData.firstName || authUser.firstName || '',
//         lastName: userData.lastName || authUser.lastName || '',
//         phone: userData.phone || '',
//         email: userData.email || authUser.email || '',
//         password: '',
//         role: userData.role || authUser.role || 'admin',
//         company: userData.company || 'CRM Solutions',
//         joinDate: userData.createdAt ? new Date(userData.createdAt).toLocaleDateString('en-US', {
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric'
//         }) : new Date().toLocaleDateString('en-US', {
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric'
//         }),
//         isActive: userData.isActive !== undefined ? userData.isActive : true,
//         profilePhoto: null,
//         profilePhotoPreview: userData.profilePhoto || '',
//         location: userData.location || {
//           street: '',
//           city: '',
//           state: '',
//           zipCode: '',
//           country: ''
//         }
//       });
//       setError(null);
//     } catch (err) {
//       console.error('Error fetching profile:', err);
//       // Don't show error for now, just use default values
//       setError(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
    
//     if (name.startsWith('location.')) {
//       const locationField = name.split('.')[1];
//       setFormData(prev => ({
//         ...prev,
//         location: {
//           ...prev.location,
//           [locationField]: value
//         }
//       }));
//     } else if (type === 'checkbox') {
//       setFormData(prev => ({
//         ...prev,
//         [name]: checked
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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);
//     setLoading(true);

//     try {
//       // Check if we have a valid user ID
//       if (!authUser?._id) {
//         throw new Error('No user ID found. Please login again.');
//       }

//       const submitData = new FormData();
//       submitData.append('firstName', formData.firstName);
//       submitData.append('lastName', formData.lastName);
//       submitData.append('email', formData.email);
//       submitData.append('phone', formData.phone);
//       submitData.append('role', 'admin');
//       submitData.append('isActive', formData.isActive);
//       submitData.append('company', formData.company);
//       submitData.append('location', JSON.stringify(formData.location));
      
//       if (formData.password) {
//         submitData.append('password', formData.password);
//       }
      
//       if (formData.profilePhoto) {
//         submitData.append('profilePhoto', formData.profilePhoto);
//       }

//       const response = await userService.updateUser(authUser._id, submitData);
      
//       setSuccess('Profile updated successfully!');
      
//       // Refresh user data
//       fetchUserProfile();
      
//       setTimeout(() => {
//         setSuccess(null);
//       }, 3000);
//     } catch (err) {
//       console.error('Update error:', err);
//       setError(err.error || 'Failed to update profile. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleReset = () => {
//     if (authUser?._id && /^[0-9a-fA-F]{24}$/.test(authUser._id)) {
//       fetchUserProfile();
//     }
//   };

//   const handleLogout = () => {
//     if (logout) {
//       logout();
//     }
//     navigate('/login');
//   };

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   if (loading && !formData.firstName) {
//     return React.createElement('div', {
//       style: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         fontSize: '18px',
//         color: '#6b7280'
//       }
//     }, 'Loading profile...');
//   }

//   return React.createElement('div', {
//     style: {
//       minHeight: '100vh',
//       width: '100%',
//       backgroundColor: '#f3f4f6',
//       padding: '20px 24px 24px 24px',
//       boxSizing: 'border-box',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     React.createElement('div', {
//       style: {
//         maxWidth: '1400px',
//         margin: '0 auto',
//         width: '100%'
//       }
//     },
//       // Navigation Tabs
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '20px',
//           marginBottom: '24px',
//           padding: '12px 20px',
//           backgroundColor: '#ffffff',
//           borderRadius: '8px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//           flexWrap: 'wrap'
//         }
//       },
//         ['Dashboard', 'Profile', 'Tickets', 'Users', 'Contacts', 'Leads', 'Roles', 'Permissions'].map((item) =>
//           React.createElement('span', {
//             key: item,
//             onClick: () => {
//               if (item === 'Dashboard') handleNavigate('/admin/dashboard');
//               else if (item === 'Users') handleNavigate('/admin/users');
//               else if (item === 'Contacts') handleNavigate('/admin/contacts');
//               else if (item === 'Tickets') handleNavigate('/admin/tickets');
//               else if (item === 'Profile') handleNavigate('/admin/profile');
//             },
//             style: {
//               fontSize: '14px',
//               color: item === 'Profile' ? '#2563eb' : '#4b5563',
//               fontWeight: item === 'Profile' ? '600' : '500',
//               cursor: 'pointer',
//               padding: '4px 0',
//               borderBottom: item === 'Profile' ? '2px solid #2563eb' : 'none'
//             }
//           }, item)
//         )
//       ),

//       // Success/Error Messages
//       error ? React.createElement('div', {
//         style: {
//           backgroundColor: '#fee2e2',
//           color: '#dc2626',
//           padding: '12px',
//           borderRadius: '8px',
//           marginBottom: '20px',
//           border: '1px solid #fecaca'
//         }
//       }, error) : null,

//       success ? React.createElement('div', {
//         style: {
//           backgroundColor: '#d1fae5',
//           color: '#065f46',
//           padding: '12px',
//           borderRadius: '8px',
//           marginBottom: '20px',
//           border: '1px solid #a7f3d0',
//           textAlign: 'center'
//         }
//       }, success) : null,

//       // Profile Card
//       React.createElement('form', {
//         onSubmit: handleSubmit,
//         encType: 'multipart/form-data',
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '16px',
//           padding: '32px',
//           boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//           width: '100%'
//         }
//       },
//         // Profile Header with Avatar
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '24px',
//             marginBottom: '32px',
//             paddingBottom: '24px',
//             borderBottom: '1px solid #e5e7eb',
//             flexWrap: 'wrap'
//           }
//         },
//           // Avatar with upload
//           React.createElement('div', {
//             onClick: () => document.getElementById('profile-photo-upload').click(),
//             style: {
//               width: '100px',
//               height: '100px',
//               borderRadius: '50%',
//               backgroundColor: '#f3f4f6',
//               overflow: 'hidden',
//               border: '3px solid #e5e7eb',
//               cursor: 'pointer',
//               position: 'relative',
//               flexShrink: 0,
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
//                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '40px',
//                   fontWeight: '600',
//                   color: '#ffffff'
//                 }
//               }, (formData.firstName?.charAt(0) || 'A') + (formData.lastName?.charAt(0) || 'U'))
//           ),
          
//           React.createElement('input', {
//             id: 'profile-photo-upload',
//             type: 'file',
//             accept: 'image/*',
//             onChange: handlePhotoChange,
//             style: { display: 'none' }
//           }),
          
//           // Name and Role
//           React.createElement('div', null,
//             React.createElement('h2', {
//               style: {
//                 fontSize: '28px',
//                 fontWeight: '700',
//                 color: '#111827',
//                 marginBottom: '4px'
//               }
//             }, `${formData.firstName || ''} ${formData.lastName || ''}`.trim() || 'Admin User'),
            
//             React.createElement('div', {
//               style: {
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '8px',
//                 marginBottom: '4px'
//               }
//             },
//               React.createElement('span', {
//                 style: {
//                   padding: '4px 12px',
//                   borderRadius: '20px',
//                   fontSize: '13px',
//                   fontWeight: '500',
//                   backgroundColor: '#dbeafe',
//                   color: '#3b82f6'
//                 }
//               }, formData.role === 'admin' ? 'Administrator' : 'User'),
              
//               React.createElement('span', {
//                 style: {
//                   padding: '4px 12px',
//                   borderRadius: '20px',
//                   fontSize: '13px',
//                   fontWeight: '500',
//                   backgroundColor: formData.isActive ? '#d1fae5' : '#fee2e2',
//                   color: formData.isActive ? '#10b981' : '#ef4444'
//                 }
//               }, formData.isActive ? 'Active' : 'Inactive')
//             ),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '13px',
//                 color: '#9ca3af',
//                 marginTop: '4px'
//               }
//             }, 'Click on avatar to change photo')
//           )
//         ),

//         // Form Fields Grid
//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//             gap: '24px',
//             marginBottom: '32px'
//           }
//         },
//           // First Name
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'First Name'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'firstName',
//               value: formData.firstName,
//               onChange: handleChange,
//               style: {
//                 width: '100%',
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // Last Name
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'Last Name'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'lastName',
//               value: formData.lastName,
//               onChange: handleChange,
//               style: {
//                 width: '100%',
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // Phone Number
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
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
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // Email
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'Email'),
            
//             React.createElement('input', {
//               type: 'email',
//               name: 'email',
//               value: formData.email,
//               onChange: handleChange,
//               style: {
//                 width: '100%',
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // Password
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'New Password (optional)'),
            
//             React.createElement('div', {
//               style: {
//                 position: 'relative'
//               }
//             },
//               React.createElement('input', {
//                 type: showPassword ? 'text' : 'password',
//                 name: 'password',
//                 value: formData.password,
//                 onChange: handleChange,
//                 placeholder: 'Enter new password',
//                 style: {
//                   width: '100%',
//                   padding: '12px 16px',
//                   paddingRight: '45px',
//                   border: '2px solid #e5e7eb',
//                   borderRadius: '8px',
//                   fontSize: '15px',
//                   transition: 'border-color 0.2s',
//                   boxSizing: 'border-box'
//                 },
//                 onFocus: (e) => e.target.style.borderColor = '#667eea',
//                 onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//               }),
              
//               React.createElement('button', {
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
//               }, showPassword ? '👁️' : '👁️‍🗨️')
//             )
//           ),

//           // Company
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
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
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // Member Since (read-only)
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'Member Since'),
            
//             React.createElement('div', {
//               style: {
//                 backgroundColor: '#f9fafb',
//                 padding: '12px 16px',
//                 borderRadius: '8px',
//                 border: '1px solid #e5e7eb',
//                 fontSize: '15px',
//                 color: '#111827'
//               }
//             }, formData.joinDate)
//           )
//         ),

//         // Location Section
//         React.createElement('h3', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '16px',
//             paddingBottom: '8px',
//             borderBottom: '2px solid #e5e7eb'
//           }
//         }, '📍 Location'),

//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//             gap: '20px',
//             marginBottom: '32px'
//           }
//         },
//           // Street
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'Street Address'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'location.street',
//               value: formData.location.street,
//               onChange: handleChange,
//               placeholder: 'Street address',
//               style: {
//                 width: '100%',
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // City
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
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
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // State
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
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
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // Zip Code
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
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
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // Country
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
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
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           )
//         ),

//         // Status Checkbox
//         React.createElement('div', {
//           style: {
//             marginBottom: '24px',
//             padding: '16px',
//             backgroundColor: '#f9fafb',
//             borderRadius: '8px'
//           }
//         },
//           React.createElement('label', {
//             style: {
//               display: 'flex',
//               alignItems: 'center',
//               gap: '12px',
//               cursor: 'pointer'
//             }
//           },
//             React.createElement('input', {
//               type: 'checkbox',
//               name: 'isActive',
//               checked: formData.isActive,
//               onChange: handleChange,
//               style: {
//                 width: '18px',
//                 height: '18px',
//                 cursor: 'pointer'
//               }
//             }),
            
//             React.createElement('span', {
//               style: {
//                 fontSize: '15px',
//                 fontWeight: '500',
//                 color: '#374151'
//               }
//             }, 'Account Active')
//           )
//         ),

//         // Action Buttons
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '16px',
//             justifyContent: 'flex-end',
//             borderTop: '1px solid #e5e7eb',
//             paddingTop: '24px'
//           }
//         },
//           React.createElement('button', {
//             type: 'button',
//             onClick: handleLogout,
//             style: {
//               padding: '12px 28px',
//               backgroundColor: '#ef4444',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '15px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
//           }, 'Logout'),
          
//           React.createElement('button', {
//             type: 'button',
//             onClick: handleReset,
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
//           }, 'Reset'),

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
//           }, loading ? 'Saving...' : 'Save Changes')
//         )
//       )
//     )
//   );
// };

// export default AdminProfile;



















// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../context/AuthContext';
// import userService from '../services/userService';
// import { useNavigate } from 'react-router-dom';

// const AdminProfile = () => {
//   const navigate = useNavigate();
//   const { user: authUser, logout, updateUser } = useAuth();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     email: '',
//     password: '',
//     role: '',
//     company: '',
//     joinDate: '',
//     isActive: true,
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

//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {
//     if (authUser) {
//       console.log('Auth user:', authUser);
      
//       // Check if we have a valid MongoDB ObjectId (24 character hex string)
//       const isValidObjectId = authUser._id && /^[0-9a-fA-F]{24}$/.test(authUser._id);
      
//       if (isValidObjectId) {
//         fetchUserProfile();
//       } else {
//         // Set default form data from authUser
//         setFormData(prev => ({
//           ...prev,
//           firstName: authUser.firstName || authUser.name?.split(' ')[0] || 'Admin',
//           lastName: authUser.lastName || authUser.name?.split(' ')[1] || 'User',
//           email: authUser.email || 'admin@crm.com',
//           role: authUser.role || 'admin',
//           profilePhotoPreview: authUser.profilePhoto || '',
//           joinDate: new Date().toLocaleDateString('en-US', {
//             year: 'numeric',
//             month: 'long',
//             day: 'numeric'
//           })
//         }));
//         setLoading(false);
//       }
//     }
//   }, [authUser]);

//   const fetchUserProfile = async () => {
//     try {
//       setLoading(true);
//       console.log('Fetching user with ID:', authUser._id);
      
//       if (!authUser._id) {
//         throw new Error('No user ID found');
//       }
      
//       const response = await userService.getUser(authUser._id);
//       const userData = response.data;
      
//       setFormData({
//         firstName: userData.firstName || authUser.firstName || '',
//         lastName: userData.lastName || authUser.lastName || '',
//         phone: userData.phone || '',
//         email: userData.email || authUser.email || '',
//         password: '',
//         role: userData.role || authUser.role || 'admin',
//         company: userData.company || 'CRM Solutions',
//         joinDate: userData.createdAt ? new Date(userData.createdAt).toLocaleDateString('en-US', {
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric'
//         }) : new Date().toLocaleDateString('en-US', {
//           year: 'numeric',
//           month: 'long',
//           day: 'numeric'
//         }),
//         isActive: userData.isActive !== undefined ? userData.isActive : true,
//         profilePhoto: null,
//         profilePhotoPreview: userData.profilePhoto || (userData.profilePhotoPreview || ''),
//         location: userData.location || {
//           street: '',
//           city: '',
//           state: '',
//           zipCode: '',
//           country: ''
//         }
//       });
//       setError(null);
//     } catch (err) {
//       console.error('Error fetching profile:', err);
//       setError(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
    
//     if (name.startsWith('location.')) {
//       const locationField = name.split('.')[1];
//       setFormData(prev => ({
//         ...prev,
//         location: {
//           ...prev.location,
//           [locationField]: value
//         }
//       }));
//     } else if (type === 'checkbox') {
//       setFormData(prev => ({
//         ...prev,
//         [name]: checked
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

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setSuccess(null);
//     setLoading(true);

//     try {
//       if (!authUser?._id) {
//         throw new Error('No user ID found. Please login again.');
//       }

//       const submitData = new FormData();
//       submitData.append('firstName', formData.firstName);
//       submitData.append('lastName', formData.lastName);
//       submitData.append('email', formData.email);
//       submitData.append('phone', formData.phone);
//       submitData.append('role', 'admin');
//       submitData.append('isActive', formData.isActive);
//       submitData.append('company', formData.company);
//       submitData.append('location', JSON.stringify(formData.location));
      
//       if (formData.password) {
//         submitData.append('password', formData.password);
//       }
      
//       if (formData.profilePhoto) {
//         submitData.append('profilePhoto', formData.profilePhoto);
//       }

//       const response = await userService.updateUser(authUser._id, submitData);
      
//       // Update auth context with new user data
//       if (updateUser) {
//         updateUser(response.data);
//       } else {
//         // Fallback: update localStorage
//         const updatedUser = {
//           ...authUser,
//           firstName: formData.firstName,
//           lastName: formData.lastName,
//           name: `${formData.firstName} ${formData.lastName}`,
//           profilePhoto: response.data.profilePhoto || formData.profilePhotoPreview,
//           phone: formData.phone,
//           company: formData.company
//         };
//         localStorage.setItem('crm-user', JSON.stringify(updatedUser));
//       }
      
//       setSuccess('Profile updated successfully!');
      
//       // Refresh user data
//       fetchUserProfile();
      
//       setTimeout(() => {
//         setSuccess(null);
//       }, 3000);
//     } catch (err) {
//       console.error('Update error:', err);
//       setError(err.error || 'Failed to update profile. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleReset = () => {
//     if (authUser?._id && /^[0-9a-fA-F]{24}$/.test(authUser._id)) {
//       fetchUserProfile();
//     }
//   };

//   const handleLogout = () => {
//     if (logout) {
//       logout();
//     }
//     navigate('/login');
//   };

//   const handleNavigate = (path) => {
//     navigate(path);
//   };

//   if (loading && !formData.firstName) {
//     return React.createElement('div', {
//       style: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         fontSize: '18px',
//         color: '#6b7280'
//       }
//     }, 'Loading profile...');
//   }

//   return React.createElement('div', {
//     style: {
//       minHeight: '100vh',
//       width: '100%',
//       backgroundColor: '#f3f4f6',
//       padding: '20px 24px 24px 24px',
//       boxSizing: 'border-box',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     }
//   },
//     React.createElement('div', {
//       style: {
//         maxWidth: '1400px',
//         margin: '0 auto',
//         width: '100%'
//       }
//     },
//       // Navigation Tabs
//       React.createElement('div', {
//         style: {
//           display: 'flex',
//           gap: '20px',
//           marginBottom: '24px',
//           padding: '12px 20px',
//           backgroundColor: '#ffffff',
//           borderRadius: '8px',
//           boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
//           flexWrap: 'wrap'
//         }
//       },
//         ['Dashboard', 'Profile', 'Tickets', 'Users', 'Contacts', 'Leads', 'Roles', 'Permissions', 'Messages'].map((item) =>
//           React.createElement('span', {
//             key: item,
//             onClick: () => {
//               if (item === 'Dashboard') handleNavigate('/admin/dashboard');
//               else if (item === 'Users') handleNavigate('/admin/users');
//               else if (item === 'Contacts') handleNavigate('/admin/contacts');
//               else if (item === 'Tickets') handleNavigate('/admin/tickets');
//               else if (item === 'Profile') handleNavigate('/admin/profile');
//               else if (item === 'Messages') handleNavigate('/admin/messages');
//             },
//             style: {
//               fontSize: '14px',
//               color: item === 'Profile' ? '#2563eb' : '#4b5563',
//               fontWeight: item === 'Profile' ? '600' : '500',
//               cursor: 'pointer',
//               padding: '4px 0',
//               borderBottom: item === 'Profile' ? '2px solid #2563eb' : 'none'
//             }
//           }, item)
//         )
//       ),

//       // Success/Error Messages
//       error ? React.createElement('div', {
//         style: {
//           backgroundColor: '#fee2e2',
//           color: '#dc2626',
//           padding: '12px',
//           borderRadius: '8px',
//           marginBottom: '20px',
//           border: '1px solid #fecaca'
//         }
//       }, error) : null,

//       success ? React.createElement('div', {
//         style: {
//           backgroundColor: '#d1fae5',
//           color: '#065f46',
//           padding: '12px',
//           borderRadius: '8px',
//           marginBottom: '20px',
//           border: '1px solid #a7f3d0',
//           textAlign: 'center'
//         }
//       }, success) : null,

//       // Profile Card
//       React.createElement('form', {
//         onSubmit: handleSubmit,
//         encType: 'multipart/form-data',
//         style: {
//           backgroundColor: '#ffffff',
//           borderRadius: '16px',
//           padding: '32px',
//           boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//           width: '100%'
//         }
//       },
//         // Profile Header with Avatar
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             alignItems: 'center',
//             gap: '24px',
//             marginBottom: '32px',
//             paddingBottom: '24px',
//             borderBottom: '1px solid #e5e7eb',
//             flexWrap: 'wrap'
//           }
//         },
//           // Avatar with upload
//           React.createElement('div', {
//             onClick: () => document.getElementById('profile-photo-upload').click(),
//             style: {
//               width: '100px',
//               height: '100px',
//               borderRadius: '50%',
//               backgroundColor: '#f3f4f6',
//               overflow: 'hidden',
//               border: '3px solid #e5e7eb',
//               cursor: 'pointer',
//               position: 'relative',
//               flexShrink: 0,
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
//                   background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   fontSize: '40px',
//                   fontWeight: '600',
//                   color: '#ffffff'
//                 }
//               }, (formData.firstName?.charAt(0) || 'A') + (formData.lastName?.charAt(0) || 'U'))
//           ),
          
//           React.createElement('input', {
//             id: 'profile-photo-upload',
//             type: 'file',
//             accept: 'image/*',
//             onChange: handlePhotoChange,
//             style: { display: 'none' }
//           }),
          
//           // Name and Role
//           React.createElement('div', null,
//             React.createElement('h2', {
//               style: {
//                 fontSize: '28px',
//                 fontWeight: '700',
//                 color: '#111827',
//                 marginBottom: '4px'
//               }
//             }, `${formData.firstName || ''} ${formData.lastName || ''}`.trim() || 'Admin User'),
            
//             React.createElement('div', {
//               style: {
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: '8px',
//                 marginBottom: '4px'
//               }
//             },
//               React.createElement('span', {
//                 style: {
//                   padding: '4px 12px',
//                   borderRadius: '20px',
//                   fontSize: '13px',
//                   fontWeight: '500',
//                   backgroundColor: '#dbeafe',
//                   color: '#3b82f6'
//                 }
//               }, formData.role === 'admin' ? 'Administrator' : 'User'),
              
//               React.createElement('span', {
//                 style: {
//                   padding: '4px 12px',
//                   borderRadius: '20px',
//                   fontSize: '13px',
//                   fontWeight: '500',
//                   backgroundColor: formData.isActive ? '#d1fae5' : '#fee2e2',
//                   color: formData.isActive ? '#10b981' : '#ef4444'
//                 }
//               }, formData.isActive ? 'Active' : 'Inactive')
//             ),
            
//             React.createElement('p', {
//               style: {
//                 fontSize: '13px',
//                 color: '#9ca3af',
//                 marginTop: '4px'
//               }
//             }, 'Click on avatar to change photo')
//           )
//         ),

//         // Form Fields Grid
//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
//             gap: '24px',
//             marginBottom: '32px'
//           }
//         },
//           // First Name
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'First Name'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'firstName',
//               value: formData.firstName,
//               onChange: handleChange,
//               style: {
//                 width: '100%',
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // Last Name
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'Last Name'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'lastName',
//               value: formData.lastName,
//               onChange: handleChange,
//               style: {
//                 width: '100%',
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // Phone Number
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
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
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // Email
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'Email'),
            
//             React.createElement('input', {
//               type: 'email',
//               name: 'email',
//               value: formData.email,
//               onChange: handleChange,
//               style: {
//                 width: '100%',
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // Password
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'New Password (optional)'),
            
//             React.createElement('div', {
//               style: {
//                 position: 'relative'
//               }
//             },
//               React.createElement('input', {
//                 type: showPassword ? 'text' : 'password',
//                 name: 'password',
//                 value: formData.password,
//                 onChange: handleChange,
//                 placeholder: 'Enter new password',
//                 style: {
//                   width: '100%',
//                   padding: '12px 16px',
//                   paddingRight: '45px',
//                   border: '2px solid #e5e7eb',
//                   borderRadius: '8px',
//                   fontSize: '15px',
//                   transition: 'border-color 0.2s',
//                   boxSizing: 'border-box'
//                 },
//                 onFocus: (e) => e.target.style.borderColor = '#667eea',
//                 onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//               }),
              
//               React.createElement('button', {
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
//               }, showPassword ? '👁️' : '👁️‍🗨️')
//             )
//           ),

//           // Company
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
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
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // Member Since (read-only)
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'Member Since'),
            
//             React.createElement('div', {
//               style: {
//                 backgroundColor: '#f9fafb',
//                 padding: '12px 16px',
//                 borderRadius: '8px',
//                 border: '1px solid #e5e7eb',
//                 fontSize: '15px',
//                 color: '#111827'
//               }
//             }, formData.joinDate)
//           )
//         ),

//         // Location Section
//         React.createElement('h3', {
//           style: {
//             fontSize: '18px',
//             fontWeight: '600',
//             color: '#111827',
//             marginBottom: '16px',
//             paddingBottom: '8px',
//             borderBottom: '2px solid #e5e7eb'
//           }
//         }, '📍 Location'),

//         React.createElement('div', {
//           style: {
//             display: 'grid',
//             gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//             gap: '20px',
//             marginBottom: '32px'
//           }
//         },
//           // Street
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
//               }
//             }, 'Street Address'),
            
//             React.createElement('input', {
//               type: 'text',
//               name: 'location.street',
//               value: formData.location.street,
//               onChange: handleChange,
//               placeholder: 'Street address',
//               style: {
//                 width: '100%',
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // City
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
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
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // State
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
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
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // Zip Code
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
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
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           ),

//           // Country
//           React.createElement('div', null,
//             React.createElement('label', {
//               style: {
//                 display: 'block',
//                 fontSize: '14px',
//                 fontWeight: '600',
//                 color: '#374151',
//                 marginBottom: '8px'
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
//                 padding: '12px 16px',
//                 border: '2px solid #e5e7eb',
//                 borderRadius: '8px',
//                 fontSize: '15px',
//                 transition: 'border-color 0.2s',
//                 boxSizing: 'border-box'
//               },
//               onFocus: (e) => e.target.style.borderColor = '#667eea',
//               onBlur: (e) => e.target.style.borderColor = '#e5e7eb'
//             })
//           )
//         ),

//         // Status Checkbox
//         React.createElement('div', {
//           style: {
//             marginBottom: '24px',
//             padding: '16px',
//             backgroundColor: '#f9fafb',
//             borderRadius: '8px'
//           }
//         },
//           React.createElement('label', {
//             style: {
//               display: 'flex',
//               alignItems: 'center',
//               gap: '12px',
//               cursor: 'pointer'
//             }
//           },
//             React.createElement('input', {
//               type: 'checkbox',
//               name: 'isActive',
//               checked: formData.isActive,
//               onChange: handleChange,
//               style: {
//                 width: '18px',
//                 height: '18px',
//                 cursor: 'pointer'
//               }
//             }),
            
//             React.createElement('span', {
//               style: {
//                 fontSize: '15px',
//                 fontWeight: '500',
//                 color: '#374151'
//               }
//             }, 'Account Active')
//           )
//         ),

//         // Action Buttons
//         React.createElement('div', {
//           style: {
//             display: 'flex',
//             gap: '16px',
//             justifyContent: 'flex-end',
//             borderTop: '1px solid #e5e7eb',
//             paddingTop: '24px'
//           }
//         },
//           React.createElement('button', {
//             type: 'button',
//             onClick: handleLogout,
//             style: {
//               padding: '12px 28px',
//               backgroundColor: '#ef4444',
//               color: 'white',
//               border: 'none',
//               borderRadius: '8px',
//               fontSize: '15px',
//               fontWeight: '600',
//               cursor: 'pointer',
//               transition: 'all 0.2s'
//             },
//             onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#dc2626',
//             onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ef4444'
//           }, 'Logout'),
          
//           React.createElement('button', {
//             type: 'button',
//             onClick: handleReset,
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
//           }, 'Reset'),

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
//           }, loading ? 'Saving...' : 'Save Changes')
//         )
//       )
//     )
//   );
// };

// export default AdminProfile;






















