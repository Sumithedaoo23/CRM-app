// import React from 'react';
// import { useAuth } from '../../context/AuthContext';

// const UserProfile = () => {
//   const { user } = useAuth();

//   return React.createElement('div', null,
//     React.createElement('h1', { style: { fontSize: '24px', marginBottom: '24px' } }, 'My Profile'),
//     React.createElement('div', { style: { backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' } },
//       React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' } },
//         React.createElement('div', {
//           style: {
//             width: '80px',
//             height: '80px',
//             borderRadius: '50%',
//             backgroundColor: '#10b981',
//             color: 'white',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             fontSize: '32px',
//             fontWeight: 'bold'
//           }
//         }, user?.name?.charAt(0) || 'U'),
//         React.createElement('div', null,
//           React.createElement('h2', { style: { margin: '0 0 5px 0' } }, user?.name || 'User'),
//           React.createElement('p', { style: { color: '#6b7280', margin: 0 } }, user?.role || 'User')
//         )
//       ),
//       React.createElement('div', { style: { display: 'grid', gap: '15px' } },
//         React.createElement('div', null,
//           React.createElement('label', { style: { fontWeight: '500', display: 'block', marginBottom: '5px' } }, 'Email'),
//           React.createElement('p', { style: { margin: 0, color: '#10b981' } }, user?.email || 'user@example.com')
//         )
//       )
//     )
//   );
// };

// export default UserProfile;















import React, { useState, useEffect } from 'react';
import { useAuth } from '../';
import userService from '../services/userService';

const UserProfile = () => {
  const { user, updateUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    profilePhoto: null,
    profilePhotoPreview: '',
    joinDate: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      loadUserData();
    }
  }, [user]);

  const loadUserData = async () => {
    try {
      setLoading(true);
      
      // Try to fetch latest user data from API
      if (user?._id) {
        const response = await userService.getUser(user._id);
        const userData = response.data;
        
        setFormData({
          firstName: userData.firstName || user.firstName || '',
          lastName: userData.lastName || user.lastName || '',
          email: userData.email || user.email || '',
          phone: userData.phone || user.phone || '',
          company: userData.company || user.company || '',
          profilePhoto: null,
          profilePhotoPreview: userData.profilePhoto || user.profilePhoto || '',
          joinDate: userData.createdAt 
            ? new Date(userData.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
            : new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })
        });
      } else {
        // Fallback to auth user data
        setFormData({
          firstName: user?.firstName || user?.name?.split(' ')[0] || '',
          lastName: user?.lastName || user?.name?.split(' ')[1] || '',
          email: user?.email || '',
          phone: user?.phone || '',
          company: user?.company || '',
          profilePhoto: null,
          profilePhotoPreview: user?.profilePhoto || '',
          joinDate: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        });
      }
    } catch (err) {
      console.error('Error loading user data:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profilePhoto: file,
          profilePhotoPreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      if (!user?._id) {
        throw new Error('User ID not found');
      }

      const submitData = new FormData();
      submitData.append('firstName', formData.firstName);
      submitData.append('lastName', formData.lastName);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('company', formData.company);
      
      if (formData.profilePhoto) {
        submitData.append('profilePhoto', formData.profilePhoto);
      }

      const response = await userService.updateUser(user._id, submitData);
      
      // Update auth context with new data
      if (updateUser) {
        updateUser({
          ...response.data,
          firstName: formData.firstName,
          lastName: formData.lastName,
          name: `${formData.firstName} ${formData.lastName}`,
          profilePhoto: response.data.profilePhoto || formData.profilePhotoPreview,
          phone: formData.phone,
          company: formData.company
        });
      }
      
      setSuccess('Profile updated successfully!');
      setIsEditing(false);
      
      setTimeout(() => {
        setSuccess(null);
      }, 3000);
    } catch (err) {
      console.error('Update error:', err);
      setError(err.error || 'Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    loadUserData(); // Reset form data
  };

  const getUserInitials = () => {
    return (
      (formData.firstName?.charAt(0) || 'U') + 
      (formData.lastName?.charAt(0) || 'U')
    ).toUpperCase();
  };

  if (loading && !formData.firstName) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#6b7280'
      }
    }, 'Loading profile...');
  }

  return React.createElement('div', {
    style: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      padding: '32px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
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
          fontSize: '28px',
          fontWeight: '700',
          color: '#111827',
          margin: 0
        }
      }, 'My Profile'),
      
      !isEditing && React.createElement('button', {
        onClick: () => setIsEditing(true),
        style: {
          padding: '10px 20px',
          backgroundColor: '#10b981',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          fontSize: '14px',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        },
        onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
        onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
      }, 'Edit Profile')
    ),

    // Messages
    error && React.createElement('div', {
      style: {
        backgroundColor: '#fee2e2',
        color: '#dc2626',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '24px',
        fontSize: '14px'
      }
    }, error),

    success && React.createElement('div', {
      style: {
        backgroundColor: '#d1fae5',
        color: '#065f46',
        padding: '12px',
        borderRadius: '8px',
        marginBottom: '24px',
        fontSize: '14px',
        textAlign: 'center'
      }
    }, success),

    // Profile Avatar Section
    React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '24px',
        marginBottom: '32px',
        paddingBottom: '24px',
        borderBottom: '1px solid #e5e7eb',
        flexWrap: 'wrap'
      }
    },
      // Avatar with upload (only when editing)
      React.createElement('div', {
        onClick: isEditing ? () => document.getElementById('profile-photo-upload').click() : null,
        style: {
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: '#f3f4f6',
          overflow: 'hidden',
          border: '3px solid #e5e7eb',
          cursor: isEditing ? 'pointer' : 'default',
          position: 'relative',
          flexShrink: 0,
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }
      },
        formData.profilePhotoPreview ? 
          React.createElement('img', {
            src: formData.profilePhotoPreview,
            alt: 'Profile',
            style: {
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }
          }) :
          React.createElement('div', {
            style: {
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '40px',
              fontWeight: '600',
              color: '#ffffff'
            }
          }, getUserInitials())
      ),
      
      isEditing && React.createElement('input', {
        id: 'profile-photo-upload',
        type: 'file',
        accept: 'image/*',
        onChange: handlePhotoChange,
        style: { display: 'none' }
      }),
      
      // Name and Role
      React.createElement('div', null,
        React.createElement('h2', {
          style: {
            fontSize: '24px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '4px'
          }
        }, `${formData.firstName} ${formData.lastName}`.trim() || 'User'),
        
        React.createElement('p', {
          style: {
            fontSize: '16px',
            color: '#6b7280'
          }
        }, 'Regular User'),
        
        isEditing && React.createElement('p', {
          style: {
            fontSize: '12px',
            color: '#9ca3af',
            marginTop: '4px'
          }
        }, 'Click on avatar to change photo')
      )
    ),

    // Profile Form
    React.createElement('form', {
      onSubmit: handleSubmit
    },
      React.createElement('div', {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
          marginBottom: '32px'
        }
      },
        // First Name
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'First Name'),
          
          isEditing 
            ? React.createElement('input', {
                type: 'text',
                name: 'firstName',
                value: formData.firstName,
                onChange: handleChange,
                style: {
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                },
                onFocus: (e) => e.currentTarget.style.borderColor = '#10b981',
                onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb',
                required: true
              })
            : React.createElement('div', {
                style: {
                  padding: '12px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  fontSize: '15px',
                  color: '#111827'
                }
              }, formData.firstName || '—')
        ),

        // Last Name
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'Last Name'),
          
          isEditing 
            ? React.createElement('input', {
                type: 'text',
                name: 'lastName',
                value: formData.lastName,
                onChange: handleChange,
                style: {
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                },
                onFocus: (e) => e.currentTarget.style.borderColor = '#10b981',
                onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb',
                required: true
              })
            : React.createElement('div', {
                style: {
                  padding: '12px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  fontSize: '15px',
                  color: '#111827'
                }
              }, formData.lastName || '—')
        ),

        // Email (read-only)
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'Email Address'),
          
          React.createElement('div', {
            style: {
              padding: '12px',
              backgroundColor: '#f3f4f6',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '15px',
              color: '#6b7280'
            }
          }, formData.email || '—')
        ),

        // Phone
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'Phone Number'),
          
          isEditing 
            ? React.createElement('input', {
                type: 'tel',
                name: 'phone',
                value: formData.phone,
                onChange: handleChange,
                placeholder: '+1 234 567 8900',
                style: {
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                },
                onFocus: (e) => e.currentTarget.style.borderColor = '#10b981',
                onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb'
              })
            : React.createElement('div', {
                style: {
                  padding: '12px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  fontSize: '15px',
                  color: '#111827'
                }
              }, formData.phone || '—')
        ),

        // Company
        React.createElement('div', null,
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'Company'),
          
          isEditing 
            ? React.createElement('input', {
                type: 'text',
                name: 'company',
                value: formData.company,
                onChange: handleChange,
                placeholder: 'Company name',
                style: {
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                  boxSizing: 'border-box'
                },
                onFocus: (e) => e.currentTarget.style.borderColor = '#10b981',
                onBlur: (e) => e.currentTarget.style.borderColor = '#e5e7eb'
              })
            : React.createElement('div', {
                style: {
                  padding: '12px',
                  backgroundColor: '#f9fafb',
                  borderRadius: '8px',
                  border: '1px solid #e5e7eb',
                  fontSize: '15px',
                  color: '#111827'
                }
              }, formData.company || '—')
        ),

        // Member Since (read-only)
        React.createElement('div', {
          style: {
            gridColumn: 'span 2'
          }
        },
          React.createElement('label', {
            style: {
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }
          }, 'Member Since'),
          
          React.createElement('div', {
            style: {
              padding: '12px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              fontSize: '15px',
              color: '#111827'
            }
          }, formData.joinDate || '—')
        )
      ),

      // Action Buttons (only show when editing)
      isEditing && React.createElement('div', {
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '12px',
          borderTop: '1px solid #e5e7eb',
          paddingTop: '24px'
        }
      },
        React.createElement('button', {
          type: 'button',
          onClick: handleCancel,
          style: {
            padding: '12px 24px',
            backgroundColor: '#ffffff',
            color: '#374151',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s'
          },
          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6',
          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#ffffff'
        }, 'Cancel'),
        
        React.createElement('button', {
          type: 'submit',
          disabled: loading,
          style: {
            padding: '12px 32px',
            backgroundColor: loading ? '#9ca3af' : '#10b981',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            transition: 'transform 0.2s, background-color 0.2s'
          },
          onMouseEnter: (e) => {
            if (!loading) {
              e.currentTarget.style.backgroundColor = '#059669';
            }
          },
          onMouseLeave: (e) => {
            if (!loading) {
              e.currentTarget.style.backgroundColor = '#10b981';
            }
          }
        }, loading ? 'Saving...' : 'Save Changes')
      )
    )
  );
};

export default UserProfile;