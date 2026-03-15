
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  userType: {
    type: String,
    enum: ['User', 'Admin'],
    default: 'User'
  },
  userName: {
    type: String,
    default: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ticketSchema = new mongoose.Schema({
  ticketNumber: {
    type: String,
    unique: true,
    sparse: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['general', 'technical', 'billing', 'feature'],
    default: 'general'
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'urgent'],
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'resolved', 'closed', 'rejected'],
    default: 'pending'
  },
  userId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    default: 'User'
  },
  comments: [commentSchema],
  resolvedAt: Date,
  closedAt: Date,
  rejectedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Generate ticket number before saving
ticketSchema.pre('save', async function(next) {
  if (!this.ticketNumber) {
    try {
      const date = new Date();
      const year = date.getFullYear().toString().slice(-2);
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      
      // Use timestamp to ensure uniqueness
      const timestamp = Date.now().toString().slice(-6);
      
      this.ticketNumber = `TKT-${year}${month}${day}-${timestamp}`;
      console.log('Generated ticket number:', this.ticketNumber);
    } catch (error) {
      console.error('Error generating ticket number:', error);
      this.ticketNumber = `TKT-${Date.now()}`;
    }
  }
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Ticket', ticketSchema);