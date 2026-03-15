

import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LandingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  
  // State for popup
  const [showAdminPopup, setShowAdminPopup] = useState(false);
  const [adminCode, setAdminCode] = useState('');
  const [codeError, setCodeError] = useState('');

  // Check URL for popup parameter
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('adminPopup') === 'true') {
      setShowAdminPopup(true);
    }
  }, [location]);

  const handleAdminAccess = () => {
    if (adminCode === '') { // 4-digit code
      const user = {
        name: 'Admin User',
        email: 'admin@crm.com',
        role: 'Administrator',
        isAdmin: true
      };
      login(user);
      setShowAdminPopup(false);
      navigate('/admin/dashboard');
    } else {
      setCodeError('Invalid admin code. Use 1234');
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000
    },
    logo: {
      fontSize: '28px',
      fontWeight: '700',
      color: 'white',
      cursor: 'pointer'
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center'
    },
    navLink: {
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '500',
      padding: '8px 16px',
      borderRadius: '8px',
      transition: 'background-color 0.2s'
    },
    userButton: {
      padding: '10px 24px',
      backgroundColor: '#10b981',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    adminButton: {
      padding: '10px 24px',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '14px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    hero: {
      paddingTop: '120px',
      textAlign: 'center',
      color: 'white',
      marginBottom: '60px'
    },
    heroTitle: {
      fontSize: 'clamp(36px, 8vw, 64px)',
      fontWeight: '800',
      marginBottom: '20px',
      textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
    },
    heroSubtitle: {
      fontSize: 'clamp(16px, 3vw, 20px)',
      opacity: '0.9',
      maxWidth: '800px',
      margin: '0 auto 40px',
      lineHeight: '1.6'
    },
    buttonGroup: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },
    primaryButton: {
      padding: '14px 32px',
      backgroundColor: '#10b981',
      color: 'white',
      border: 'none',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    secondaryButton: {
      padding: '14px 32px',
      backgroundColor: 'transparent',
      color: 'white',
      border: '2px solid white',
      borderRadius: '50px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    // Popup styles
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 2000
    },
    popup: {
      backgroundColor: 'white',
      borderRadius: '16px',
      padding: '40px',
      maxWidth: '400px',
      width: '90%',
      boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
    },
    popupTitle: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#111827',
      marginBottom: '20px',
      textAlign: 'center'
    },
    popupInput: {
      width: '100%',
      padding: '15px',
      fontSize: '24px',
      textAlign: 'center',
      letterSpacing: '8px',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      marginBottom: '20px',
      outline: 'none',
      boxSizing: 'border-box'
    },
    popupButton: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      marginBottom: '10px'
    },
    popupClose: {
      width: '100%',
      padding: '10px',
      backgroundColor: 'transparent',
      color: '#6b7280',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      fontSize: '14px',
      cursor: 'pointer'
    },
    features: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '30px',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px 60px'
    },
    featureCard: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '30px',
      borderRadius: '16px',
      textAlign: 'center',
      color: 'white',
      transition: 'transform 0.3s',
      cursor: 'pointer'
    },
    featureIcon: {
      fontSize: '48px',
      marginBottom: '20px'
    },
    featureTitle: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '10px'
    },
    featureDesc: {
      fontSize: '14px',
      opacity: '0.8',
      lineHeight: '1.6'
    },
    footer: {
      textAlign: 'center',
      padding: '30px',
      color: 'rgba(255, 255, 255, 0.7)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }
  };

  const features = [
    {
      icon: '📊',
      title: 'Dashboard Analytics',
      desc: 'Real-time insights and metrics for your business',
      path: '/user/dashboard'
    },
    {
      icon: '👥',
      title: 'User Management',
      desc: 'Efficiently manage users and permissions',
      path: '/user/contacts'
    },
    {
      icon: '🎫',
      title: 'Ticket System',
      desc: 'Track and manage support tickets',
      path: '/user/tickets'
    },
    {
      icon: '📞',
      title: 'Contact Management',
      desc: 'Organize all your contacts in one place',
      path: '/user/contacts'
    },
    {
      icon: '📈',
      title: 'Lead Tracking',
      desc: 'Monitor and convert leads effectively',
      path: '/user/dashboard'
    },
    {
      icon: '🔐',
      title: 'Secure Platform',
      desc: 'Enterprise-grade security for your data',
      path: '/user/dashboard'
    }
  ];

  return React.createElement('div', { style: styles.container },
    // Navbar
    React.createElement('nav', { style: styles.navbar },
      React.createElement('div', {
        style: styles.logo,
        onClick: () => navigate('/')
      }, 'CRM Solar System'),
      
      React.createElement('div', { style: styles.navLinks },
        React.createElement('span', {
          style: styles.navLink,
          onClick: () => {
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
          }
        }, 'Features'),
        
        React.createElement('span', {
          style: styles.navLink,
          onClick: () => navigate('/user/dashboard')
        }, 'User Portal'),
        
        React.createElement('button', {
          style: styles.userButton,
          onClick: () => navigate('/user/dashboard'),
          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#059669',
          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#10b981'
        }, 'User Dashboard'),
        
        React.createElement('button', {
          style: styles.adminButton,
          onClick: () => setShowAdminPopup(true),
          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
        }, 'Admin Access')
      )
    ),

    // Hero Section
    React.createElement('div', { style: styles.hero },
      React.createElement('h1', { style: styles.heroTitle },
        'Welcome to CRM Solar System'
      ),
      
      React.createElement('p', { style: styles.heroSubtitle },
        'The complete customer relationship management solution for modern businesses. ',
        'Manage contacts, track leads, handle support tickets, and grow your business.'
      ),
      
      React.createElement('div', { style: styles.buttonGroup },
        React.createElement('button', {
          onClick: () => navigate('/user/dashboard'),
          style: styles.primaryButton,
          onMouseEnter: (e) => {
            e.currentTarget.style.backgroundColor = '#059669';
            e.currentTarget.style.transform = 'translateY(-2px)';
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.backgroundColor = '#10b981';
            e.currentTarget.style.transform = 'translateY(0)';
          }
        }, 'Explore User Dashboard'),
        
        React.createElement('button', {
          onClick: () => setShowAdminPopup(true),
          style: styles.secondaryButton,
          onMouseEnter: (e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = '#667eea';
          },
          onMouseLeave: (e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'white';
          }
        }, 'Admin Access')
      )
    ),

    // Admin Popup
    showAdminPopup && React.createElement('div', {
      style: styles.overlay,
      onClick: (e) => {
        if (e.target === e.currentTarget) {
          setShowAdminPopup(false);
          setAdminCode('');
          setCodeError('');
        }
      }
    },
      React.createElement('div', { style: styles.popup },
        React.createElement('h2', { style: styles.popupTitle }, 'Admin Access'),
        
        React.createElement('p', {
          style: {
            textAlign: 'center',
            color: '#6b7280',
            marginBottom: '20px',
            fontSize: '14px'
          }
        }, 'Enter 4-digit admin code'),
        
        React.createElement('input', {
          type: 'password',
          maxLength: 4,
          value: adminCode,
          onChange: (e) => {
            setAdminCode(e.target.value);
            setCodeError('');
          },
          placeholder: '●●●●',
          style: styles.popupInput,
          autoFocus: true
        }),
        
        codeError && React.createElement('p', {
          style: {
            color: '#ef4444',
            fontSize: '14px',
            marginBottom: '10px',
            textAlign: 'center'
          }
        }, codeError),
        
        React.createElement('button', {
          onClick: handleAdminAccess,
          style: styles.popupButton,
          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = '#2563eb',
          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = '#3b82f6'
        }, 'Access Admin Dashboard'),
        
        React.createElement('button', {
          onClick: () => {
            setShowAdminPopup(false);
            setAdminCode('');
            setCodeError('');
          },
          style: styles.popupClose
        }, 'Cancel')
      )
    ),

    // Features Section
    React.createElement('div', {
      id: 'features',
      style: styles.features
    },
      features.map((feature, index) =>
        React.createElement('div', {
          key: index,
          style: styles.featureCard,
          onClick: () => navigate(feature.path),
          onMouseEnter: (e) => e.currentTarget.style.transform = 'translateY(-5px)',
          onMouseLeave: (e) => e.currentTarget.style.transform = 'translateY(0)'
        },
          React.createElement('div', { style: styles.featureIcon }, feature.icon),
          React.createElement('h3', { style: styles.featureTitle }, feature.title),
          React.createElement('p', { style: styles.featureDesc }, feature.desc)
        )
      )
    ),

    // Footer
    React.createElement('footer', { style: styles.footer },
      '© 2024 CRM Solar System. All rights reserved.'
    )
  );
};

export default LandingPage;