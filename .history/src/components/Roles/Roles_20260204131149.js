import React from 'react';

const Roles = () => {
  const roles = [
    { id: 1, name: 'Administrator', permissions: ['All'] },
    { id: 2, name: 'User', permissions: ['Read Only'] },
    { id: 3, name: 'Manager', permissions: ['Read', 'Write'] },
  ];

  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#111827' }}>
          Roles
        </h1>
      </div>

      <div className="card">
        <div style={{ overflowX: 'auto' }}>
          <table className="table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>PERMISSIONS</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role.id}>
                  <td>{role.name}</td>
                  <td>{role.permissions.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Roles;