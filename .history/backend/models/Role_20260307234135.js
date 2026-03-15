// const mongoose = require('mongoose');

// const roleSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, 'Role name is required'],
//     unique: true,
//     trim: true
//   },
//   description: String,
//   permissions: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Permission'
//   }],
//   userCount: {
//     type: Number,
//     default: 0
//   },
//   createdBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Admin',
//     required: true
//   },
//   isDefault: {
//     type: Boolean,
//     default: false
//   }
// }, {
//   timestamps: true
// });

// module.exports = mongoose.model('Role', roleSchema);











const mongoose = require('mongoose');

const permissionSchema = new mongoose.Schema({
  resource: {
    type: String,
    enum: ['users', 'contacts', 'leads', 'tickets', 'roles', 'permissions', 'dashboard', 'messages'],
    required: true
  },
  actions: [{
    type: String,
    enum: ['create', 'read', 'update', 'delete', 'manage', 'export', 'import']
  }]
}, { _id: false });

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  permissions: [permissionSchema],
  isDefault: {
    type: Boolean,
    default: false
  },
  isSystem: {
    type: Boolean,
    default: false // System roles cannot be deleted
  },
  userCount: {
    type: Number,
    default: 0
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update timestamp
roleSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Role', roleSchema);