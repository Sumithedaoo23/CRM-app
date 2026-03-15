// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const LandingPage = () => {
//   const navigate = useNavigate();

//   const styles = {
//     container: {
//       minHeight: '100vh',
//       background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       fontFamily: 'system-ui, -apple-system, sans-serif'
//     },
//     overlay: {
//       minHeight: '100vh',
//       backgroundColor: 'rgba(0, 0, 0, 0.5)',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       padding: '20px',
//       boxSizing: 'border-box'
//     },
//     title: {
//       fontSize: 'clamp(40px, 8vw, 72px)',
//       fontWeight: '800',
//       color: 'white',
//       marginBottom: '16px',
//       textAlign: 'center',
//       textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
//     },
//     subtitle: {
//       fontSize: 'clamp(18px, 3vw, 24px)',
//       color: 'rgba(255,255,255,0.9)',
//       marginBottom: '48px',
//       textAlign: 'center',
//       maxWidth: '800px'
//     },
//     buttonContainer: {
//       display: 'flex',
//       gap: '24px',
//       flexWrap: 'wrap',
//       justifyContent: 'center'
//     },
//     button: {
//       padding: '16px 48px',
//       fontSize: '18px',
//       fontWeight: '600',
//       border: 'none',
//       borderRadius: '50px',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//     },
//     adminButton: {
//       backgroundColor: '#3b82f6',
//       color: 'white'
//     },
//     userButton: {
//       backgroundColor: '#10b981',
//       color: 'white'
//     },
//     features: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
//       gap: '30px',
//       maxWidth: '1200px',
//       marginTop: '80px',
//       color: 'white'
//     },
//     feature: {
//       textAlign: 'center',
//       padding: '30px',
//       backgroundColor: 'rgba(255,255,255,0.1)',
//       borderRadius: '16px',
//       backdropFilter: 'blur(10px)'
//     },
//     featureIcon: {
//       fontSize: '48px',
//       marginBottom: '16px'
//     },
//     featureTitle: {
//       fontSize: '20px',
//       fontWeight: '600',
//       marginBottom: '8px'
//     },
//     featureDesc: {
//       fontSize: '14px',
//       opacity: '0.8',
//       lineHeight: '1.6'
//     }
//   };

//   return React.createElement('div', { style: styles.container },
//     React.createElement('div', { style: styles.overlay },
//       React.createElement('h1', { style: styles.title }, 'CRM SOLAR SYSTEM'),
      
//       React.createElement('p', { style: styles.subtitle },
//         'Complete Customer Relationship Management Solution for Modern Businesses'
//       ),
      
//       React.createElement('div', { style: styles.buttonContainer },
//         React.createElement('button', {
//           onClick: () => navigate('/login', { state: { userType: 'admin' } }),
//           style: { ...styles.button, ...styles.adminButton },
//           onMouseEnter: (e) => e.currentTarget.style.transform = 'translateY(-2px)',
//           onMouseLeave: (e) => e.currentTarget.style.transform = 'translateY(0)'
//         }, 'Admin Portal'),
        
//         React.createElement('button', {
//           onClick: () => navigate('/login', { state: { userType: 'user' } }),
//           style: { ...styles.button, ...styles.userButton },
//           onMouseEnter: (e) => e.currentTarget.style.transform = 'translateY(-2px)',
//           onMouseLeave: (e) => e.currentTarget.style.transform = 'translateY(0)'
//         }, 'User Portal')
//       ),
      
//       React.createElement('div', { style: styles.features },
//         React.createElement('div', { style: styles.feature },
//           React.createElement('div', { style: styles.featureIcon }, '📊'),
//           React.createElement('h3', { style: styles.featureTitle }, 'Dashboard Analytics'),
//           React.createElement('p', { style: styles.featureDesc }, 'Real-time insights and metrics for your business')
//         ),
        
//         React.createElement('div', { style: styles.feature },
//           React.createElement('div', { style: styles.featureIcon }, '👥'),
//           React.createElement('h3', { style: styles.featureTitle }, 'User Management'),
//           React.createElement('p', { style: styles.featureDesc }, 'Efficiently manage users, roles, and permissions')
//         ),
        
//         React.createElement('div', { style: styles.feature },
//           React.createElement('div', { style: styles.featureIcon }, '🎫'),
//           React.createElement('h3', { style: styles.featureTitle }, 'Ticket System'),
//           React.createElement('p', { style: styles.featureDesc }, 'Track and manage support tickets effectively')
//         ),
        
//         React.createElement('div', { style: styles.feature },
//           React.createElement('div', { style: styles.featureIcon }, '📞'),
//           React.createElement('h3', { style: styles.featureTitle }, 'Contact Management'),
//           React.createElement('p', { style: styles.featureDesc }, 'Organize and manage all your contacts in one place')
//         )
//       )
//     )
//   );
// };

// export default LandingPage;