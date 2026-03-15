
// import React from 'react';

// const AdminHeader = ({ onMenuClick, user, onLogout, isSidebarOpen }) => {
//   const headerStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     padding: '0 24px',
//     height: '70px',
//     backgroundColor: '#ffffff',
//     borderBottom: '1px solid #e5e7eb',
//     boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
//     position: 'fixed',
//     top: 0,
//     left: isSidebarOpen ? '280px' : '0',
//     right: 0,
//     zIndex: 30,
//     transition: 'left 0.3s ease-in-out',
//     boxSizing: 'border-box'
//   };

//   const menuButtonStyle = {
//     padding: '10px',
//     borderRadius: '8px',
//     backgroundColor: '#f3f4f6',
//     border: 'none',
//     cursor: 'pointer',
//     fontSize: '20px',
//     width: '44px',
//     height: '44px',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center'
//   };

//   const logoStyle = {
//     fontSize: '20px',
//     fontWeight: '600',
//     color: '#667eea'
//   };

//   const userInfoStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     gap: '12px',
//     padding: '6px 6px 6px 16px',
//     borderRadius: '40px',
//     backgroundColor: '#f3f4f6'
//   };

//   const avatarStyle = {
//     width: '40px',
//     height: '40px',
//     borderRadius: '50%',
//     backgroundColor: '#667eea',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'white',
//     fontWeight: '600',
//     fontSize: '16px'
//   };

//   return React.createElement('header', { style: headerStyle },
//     React.createElement('div', {
//       style: {
//         display: 'flex',
//         alignItems: 'center',
//         gap: '16px'
//       }
//     },
//       React.createElement('button', {
//         onClick: onMenuClick,
//         style: menuButtonStyle
//       }, isSidebarOpen ? '✕' : '☰'),
      
//       React.createElement('span', { style: logoStyle }, 'Admin Panel')
//     ),

//     React.createElement('div', {
//       style: {
//         display: 'flex',
//         alignItems: 'center',
//         gap: '20px'
//       }
//     },
//       React.createElement('div', { style: userInfoStyle },
//         React.createElement('div', null,
//           React.createElement('div', {
//             style: { fontSize: '14px', fontWeight: '600', color: '#111827' }
//           }, user?.name || 'Admin User'),
          
//           React.createElement('div', {
//             style: { fontSize: '12px', color: '#6b7280' }
//           }, user?.role || 'Administrator')
//         ),
        
//         React.createElement('div', { style: avatarStyle },
//           user?.name?.charAt(0) || 'A'
//         )
//       )
//     )
//   );
// };

// export default AdminHeader;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHeader = ({ onMenuClick, user, onLogout, isSidebarOpen }) => {
  const navigate = useNavigate();
  const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [userData, setUserData] = useState(user);

  useEffect(() => {
    // Update userData when user prop changes
    setUserData(user);
  }, [user]);

  // Get user initials for avatar
  const getUserInitials = () => {
    if (userData?.firstName && userData?.lastName) {
      return (userData.firstName.charAt(0) + userData.lastName.charAt(0)).toUpperCase();
    }
    if (userData?.name) {
      const nameParts = userData.name.split(' ');
      if (nameParts.length > 1) {
        return (nameParts[0].charAt(0) + nameParts[1].charAt(0)).toUpperCase();
      }
      return userData.name.charAt(0).toUpperCase();
    }
    return 'AU';
  };

  // Get full name
  const getFullName = () => {
    if (userData?.firstName && userData?.lastName) {
      return `${userData.firstName} ${userData.lastName}`;
    }
    if (userData?.name) {
      return userData.name;
    }
    return 'Admin User';
  };

  // Get profile photo
  const getProfilePhoto = () => {
    return userData?.profilePhoto || userData?.profilePhotoPreview || null;
  };

  const handleProfileClick = () => {
    setShowProfilePopup(!showProfilePopup);
  };

  const handleViewProfile = () => {
    setShowProfilePopup(false);
    navigate('/admin/profile');
  };

  const handleLogoutClick = () => {
    setShowProfilePopup(false);
    if (onLogout) {
      onLogout();
    }
  };

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '0 24px',
    height: '70px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e5e7eb',
    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    position: 'fixed',
    top: 0,
    left: isSidebarOpen ? '280px' : '0',
    right: 0,
    zIndex: 30,
    transition: 'left 0.3s ease-in-out',
    boxSizing: 'border-box'
  };

  const menuButtonStyle = {
    padding: '10px',
    borderRadius: '8px',
    backgroundColor: '#f3f4f6',
    border: 'none',
    cursor: 'pointer',
    fontSize: '20px',
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const logoStyle = {
    fontSize: '20px',
    fontWeight: '600',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginLeft: '8px'
  };

  const userInfoStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '4px 4px 4px 16px',
    borderRadius: '40px',
    backgroundColor: '#f3f4f6',
    cursor: 'pointer',
    position: 'relative'
  };

  const avatarStyle = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    backgroundColor: getProfilePhoto() ? 'transparent' : '#667eea',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: '600',
    fontSize: '16px'
  };

  const avatarImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const popupStyle = {
    position: 'absolute',
    top: '60px',
    right: '0',
    width: '280px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    border: '1px solid #e5e7eb',
    zIndex: 100,
    overflow: 'hidden'
  };

  const popupHeaderStyle = {
    padding: '20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    textAlign: 'center'
  };

  const popupAvatarStyle = {
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    backgroundColor: 'white',
    margin: '0 auto 12px',
    overflow: 'hidden',
    border: '3px solid rgba(255,255,255,0.3)'
  };

  const popupAvatarImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  const popupNameStyle = {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '4px'
  };

  const popupRoleStyle = {
    fontSize: '13px',
    opacity: '0.9'
  };

  const popupMenuStyle = {
    padding: '8px'
  };

  const popupMenuItemStyle = {
    padding: '12px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const popupMenuItemHover = {
    backgroundColor: '#f3f4f6'
  };

  const popupDividerStyle = {
    height: '1px',
    backgroundColor: '#e5e7eb',
    margin: '8px 0'
  };

  return React.createElement('header', { style: headerStyle },
    React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }
    },
      React.createElement('button', {
        onClick: onMenuClick,
        style: menuButtonStyle,
        onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#e5e7eb',
        onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#f3f4f6'
      }, isSidebarOpen ? '✕' : '☰'),
      
      React.createElement('span', { style: logoStyle }, 'Admin Panel')
    ),

    React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }
    },
      // User Info with Profile Popup
      React.createElement('div', {
        style: userInfoStyle,
        onClick: handleProfileClick
      },
        React.createElement('div', null,
          React.createElement('div', {
            style: { fontSize: '14px', fontWeight: '600', color: '#111827' }
          }, getFullName()),
          
          React.createElement('div', {
            style: { fontSize: '12px', color: '#6b7280' }
          }, userData?.role === 'admin' ? 'Administrator' : 'User')
        ),
        
        React.createElement('div', { style: avatarStyle },
          getProfilePhoto() ? 
            React.createElement('img', {
              src: getProfilePhoto(),
              alt: 'Profile',
              style: avatarImageStyle
            }) :
            getUserInitials()
        ),

        // Profile Popup
        showProfilePopup && React.createElement('div', { style: popupStyle },
          React.createElement('div', { style: popupHeaderStyle },
            React.createElement('div', { style: popupAvatarStyle },
              getProfilePhoto() ? 
                React.createElement('img', {
                  src: getProfilePhoto(),
                  alt: 'Profile',
                  style: popupAvatarImageStyle
                }) :
                React.createElement('div', {
                  style: {
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                    fontWeight: '600',
                    color: '#667eea'
                  }
                }, getUserInitials())
            ),
            
            React.createElement('div', { style: popupNameStyle }, getFullName()),
            React.createElement('div', { style: popupRoleStyle }, userData?.role === 'admin' ? 'Administrator' : 'User'),
            
            userData?.email && React.createElement('div', {
              style: {
                fontSize: '12px',
                marginTop: '8px',
                opacity: '0.8'
              }
            }, userData.email)
          ),
          
          React.createElement('div', { style: popupMenuStyle },
            React.createElement('div', {
              style: popupMenuItemStyle,
              onClick: handleViewProfile,
              onMouseEnter: (e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            },
              React.createElement('span', { style: { fontSize: '18px' } }, '👤'),
              React.createElement('span', null, 'View Profile')
            ),
            
            React.createElement('div', {
              style: popupMenuItemStyle,
              onClick: () => {
                setShowProfilePopup(false);
                navigate('/admin/settings');
              },
              onMouseEnter: (e) => {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            },
              React.createElement('span', { style: { fontSize: '18px' } }, '⚙️'),
              React.createElement('span', null, 'Settings')
            ),
            
            React.createElement('div', { style: popupDividerStyle }),
            
            React.createElement('div', {
              style: popupMenuItemStyle,
              onClick: handleLogoutClick,
              onMouseEnter: (e) => {
                e.currentTarget.style.backgroundColor = '#fee2e2';
                e.currentTarget.style.color = '#ef4444';
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#374151';
              }
            },
              React.createElement('span', { style: { fontSize: '18px' } }, '🚪'),
              React.createElement('span', null, 'Logout')
            )
          )
        )
      )
    )
  );
};

export default AdminHeader;