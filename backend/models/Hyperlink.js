const mongoose = require('mongoose');

const hyperlinkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  url: {
    type: String,
    required: [true, 'URL is required'],
    trim: true
  },
  description: String,
  icon: String,
  password: {
    type: String,
    select: false
  },
  passwordProtected: {
    type: Boolean,
    default: false
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin'
  },
  clicks: {
    type: Number,
    default: 0
  },
  lastAccessed: Date,
  notes: String,
  tags: [String],
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Method to get password for copying
hyperlinkSchema.methods.getPassword = function() {
  return this.password;
};

module.exports = mongoose.model('Hyperlink', hyperlinkSchema);