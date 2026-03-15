const express = require('express');
const router = express.Router();
const Role = require('../models/Role');
const User = require('../models/User');

// Get all roles with pagination
router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;
    const query = {};

    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    // Get user counts for each role
    const roles = await Role.find(query)
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    // Get user counts for each role
    const rolesWithCounts = await Promise.all(roles.map(async (role) => {
      const userCount = await User.countDocuments({ role: role.name.toLowerCase() });
      return {
        ...role.toObject(),
        userCount
      };
    }));

    const total = await Role.countDocuments(query);

    res.json({
      success: true,
      data: rolesWithCounts,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get single role
router.get('/:id', async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    
    if (!role) {
      return res.status(404).json({
        success: false,
        error: 'Role not found'
      });
    }

    const userCount = await User.countDocuments({ role: role.name.toLowerCase() });

    res.json({
      success: true,
      data: {
        ...role.toObject(),
        userCount
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Create new role
router.post('/', async (req, res) => {
  try {
    const { name, description, permissions } = req.body;

    // Check if role exists
    const existingRole = await Role.findOne({ name });
    if (existingRole) {
      return res.status(400).json({
        success: false,
        error: 'Role with this name already exists'
      });
    }

    const role = new Role({
      name,
      description,
      permissions: permissions || [],
      isSystem: false
    });

    await role.save();

    res.status(201).json({
      success: true,
      data: role
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Update role
router.put('/:id', async (req, res) => {
  try {
    const { name, description, permissions } = req.body;

    // Check if name is taken by another role
    if (name) {
      const existingRole = await Role.findOne({
        name,
        _id: { $ne: req.params.id }
      });
      
      if (existingRole) {
        return res.status(400).json({
          success: false,
          error: 'Role name already in use'
        });
      }
    }

    const role = await Role.findByIdAndUpdate(
      req.params.id,
      {
        name,
        description,
        permissions,
        updatedAt: Date.now()
      },
      { new: true, runValidators: true }
    );

    if (!role) {
      return res.status(404).json({
        success: false,
        error: 'Role not found'
      });
    }

    res.json({
      success: true,
      data: role
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Delete role
router.delete('/:id', async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);

    if (!role) {
      return res.status(404).json({
        success: false,
        error: 'Role not found'
      });
    }

    // Prevent deletion of system roles
    if (role.isSystem) {
      return res.status(400).json({
        success: false,
        error: 'System roles cannot be deleted'
      });
    }

    // Check if any users have this role
    const userCount = await User.countDocuments({ role: role.name.toLowerCase() });
    if (userCount > 0) {
      return res.status(400).json({
        success: false,
        error: `Cannot delete role that is assigned to ${userCount} users`
      });
    }

    await role.deleteOne();

    res.json({
      success: true,
      message: 'Role deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get all available permissions
router.get('/permissions/list', (req, res) => {
  const permissions = {
    resources: ['users', 'contacts', 'leads', 'tickets', 'roles', 'permissions', 'dashboard', 'messages'],
    actions: ['create', 'read', 'update', 'delete', 'manage', 'export', 'import']
  };
  
  res.json({
    success: true,
    data: permissions
  });
});

module.exports = router;