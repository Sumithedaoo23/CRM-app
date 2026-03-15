import React, { useState } from 'react';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem('crm-user') || '{}');
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || 'Admin',
    lastName: user?.name?.split(' ')[1] || 'User',
    phone: '',
    email: user?.email || 'admin@flatlogic.com',
    password: 'password',
    appRole: 'Administrator',
    disabled: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#111827' }}>
          Edit Profile
        </h1>
      </div>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr', 
            gap: '24px',
            marginBottom: '24px' 
          }}>
            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                placeholder="Phone Number"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                E-Mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                App Role
              </label>
              <input
                type="text"
                value={formData.appRole}
                readOnly
                className="form-input"
                style={{ backgroundColor: '#f3f4f6' }}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                name="disabled"
                checked={formData.disabled}
                onChange={handleChange}
                style={{ marginRight: '8px' }}
              />
              <label style={{ fontSize: '14px', color: '#374151' }}>
                Disabled
              </label>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
            <button type="submit" className="btn-primary">
              Submit
            </button>
            <button type="button" className="btn-secondary">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;