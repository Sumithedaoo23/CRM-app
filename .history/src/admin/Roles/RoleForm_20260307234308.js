import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import roleService from '../../services/roleService';

const RoleForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    name: '',
    description: '',
    permissions: []
  });

  const [permissionsList, setPermissionsList] = useState({
    resources: [],
    actions: []
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    loadPermissions();
    if (isEditMode) {
      fetchRole();
    }
  }, [id]);

  const loadPermissions = async () => {
    try {
      const response = await roleService.getPermissions();
      setPermissionsList(response.data || { resources: [], actions: [] });
    } catch (err) {
      console.error('Failed to load permissions:', err);
    }
  };

  const fetchRole = async () => {
    try {
      setLoading(true);
      const response = await roleService.getRole(id);
      const role = response.data;
      setFormData({
        name: role.name || '',
        description: role.description || '',
        permissions: role.permissions || []
      });
      setError(null);
    } catch (err) {
      setError(err.error || 'Failed to load role');
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

  const handlePermissionChange = (resource, action) => {
    setFormData(prev => {
      const existingPermission = prev.permissions.find(p => p.resource === resource);
      
      if (existingPermission) {
        // Toggle action
        const updatedActions = existingPermission.actions.includes(action)
          ? existingPermission.actions.filter(a => a !== action)
          : [...existingPermission.actions, action];

        // Remove permission if no actions left
        if (updatedActions.length === 0) {
          return {
            ...prev,
            permissions: prev.permissions.filter(p => p.resource !== resource)
          };
        }

        // Update permission
        return {
          ...prev,
          permissions: prev.permissions.map(p =>
            p.resource === resource
              ? { ...p, actions: updatedActions }
              : p
          )
        };
      } else {
        // Add new permission
        return {
          ...prev,
          permissions: [...prev.permissions, { resource, actions: [action] }]
        };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    try {
      if (isEditMode) {
        await roleService.updateRole(id, formData);
        setSuccess('✅ Role updated successfully!');
      } else {
        await roleService.createRole(formData);
        setSuccess('✅ Role created successfully!');
      }
      
      setTimeout(() => {
        navigate('/admin/roles');
      }, 2000);
    } catch (err) {
      setError(err.error || `Failed to ${isEditMode ? 'update' : 'create'} role`);
    } finally {
      setLoading(false);
    }
  };

  const hasPermission = (resource, action) => {
    const permission = formData.permissions.find(p => p.resource === resource);
    return permission ? permission.actions.includes(action) : false;
  };

  if (loading && isEditMode) {
    return React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '18px',
        color: '#6b7280'
      }
    }, 'Loading role...');
  }

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
          marginBottom: '20px'
        }
      },
        React.createElement('h1', {
          style: {
            fontSize: '26px',
            fontWeight: '700',
            color: '#111827',
            margin: 0
          }
        }, isEditMode ? '✏️ Edit Role' : '➕ Create New Role'),
        
        React.createElement('button', {
          onClick: () => navigate('/admin/roles'),
          style: {
            padding: '8px 16px',
            backgroundColor: 'white',
            color: '#374151',
            border: '1px solid #e5e7eb',
            borderRadius: '6px',
            fontSize: '14px',
            cursor: 'pointer'
          }
        }, '← Back')
      ),

      // Messages
      error && React.createElement('div', {
        style: {
          backgroundColor: '#fee2e2',
          color: '#dc2626',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '16px'
        }
      }, error),

      success && React.createElement('div', {
        style: {
          backgroundColor: '#d1fae5',
          color: '#065f46',
          padding: '12px',
          borderRadius: '8px',
          marginBottom: '16px',
          textAlign: 'center'
        }
      }, success),

      // Form
      React.createElement('form', {
        onSubmit: handleSubmit,
        style: {
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '32px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }
      },
        // Role Name
        React.createElement('div', {
          style: {
            marginBottom: '24px'
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
          }, 'Role Name *'),
          
          React.createElement('input', {
            type: 'text',
            name: 'name',
            value: formData.name,
            onChange: handleChange,
            required: true,
            placeholder: 'e.g., Admin, User, Manager',
            style: {
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }
          })
        ),

        // Description
        React.createElement('div', {
          style: {
            marginBottom: '24px'
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
          }, 'Description'),
          
          React.createElement('textarea', {
            name: 'description',
            value: formData.description,
            onChange: handleChange,
            rows: 3,
            placeholder: 'Describe this role...',
            style: {
              width: '100%',
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              resize: 'vertical',
              boxSizing: 'border-box'
            }
          })
        ),

        // Permissions
        React.createElement('h3', {
          style: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#111827',
            marginBottom: '16px',
            paddingBottom: '8px',
            borderBottom: '2px solid #e5e7eb'
          }
        }, 'Permissions'),

        permissionsList.resources.map((resource) => (
          React.createElement('div', {
            key: resource,
            style: {
              marginBottom: '20px',
              padding: '16px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px'
            }
          },
            React.createElement('h4', {
              style: {
                fontSize: '16px',
                fontWeight: '600',
                color: '#374151',
                marginBottom: '12px',
                textTransform: 'capitalize'
              }
            }, resource),
            
            React.createElement('div', {
              style: {
                display: 'flex',
                gap: '16px',
                flexWrap: 'wrap'
              }
            },
              permissionsList.actions.map((action) => (
                React.createElement('label', {
                  key: `${resource}-${action}`,
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer'
                  }
                },
                  React.createElement('input', {
                    type: 'checkbox',
                    checked: hasPermission(resource, action),
                    onChange: () => handlePermissionChange(resource, action),
                    style: {
                      width: '16px',
                      height: '16px',
                      cursor: 'pointer'
                    }
                  }),
                  React.createElement('span', {
                    style: {
                      fontSize: '14px',
                      color: '#374151',
                      textTransform: 'capitalize'
                    }
                  }, action)
                )
              ))
            )
          )
        )),

        // Submit Buttons
        React.createElement('div', {
          style: {
            display: 'flex',
            gap: '16px',
            justifyContent: 'flex-end',
            marginTop: '32px',
            borderTop: '2px solid #e5e7eb',
            paddingTop: '24px'
          }
        },
          React.createElement('button', {
            type: 'button',
            onClick: () => navigate('/admin/roles'),
            style: {
              padding: '12px 28px',
              backgroundColor: 'white',
              color: '#374151',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer'
            }
          }, 'Cancel'),
          
          React.createElement('button', {
            type: 'submit',
            disabled: loading,
            style: {
              padding: '12px 32px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1
            }
          }, loading ? 'Saving...' : (isEditMode ? 'Update Role' : 'Create Role'))
        )
      )
    )
  );
};

export default RoleForm;