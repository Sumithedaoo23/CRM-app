const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Permission name is required'],
    unique: true,
    trim: true
  },
  module: {
    type: String,
    enum: ['users', 'contacts', 'leads', 'roles', 'permissions', 'tickets', 'dashboard', 'reports'],
    required: true
  },
  actions: [{
    type: String,
    enum: ['create', 'read', 'update', 'delete', 'export', 'import']
  }],
  description: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Permission', permissionSchema);