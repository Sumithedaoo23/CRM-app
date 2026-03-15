
// const mongoose = require('mongoose');

// const ticketSchema = new mongoose.Schema({
//   ticketNumber: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   title: {
//     type: String,
//     required: [true, 'Please provide a title'],
//     trim: true
//   },
//   description: {
//     type: String,
//     required: [true, 'Please provide a description']
//   },
//   category: {
//     type: String,
//     enum: ['general', 'technical', 'billing', 'feature'],
//     default: 'general'
//   },
//   priority: {
//     type: String,
//     enum: ['low', 'medium', 'high', 'urgent'],
//     default: 'medium'
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'in-progress', 'resolved', 'closed'],
//     default: 'pending'
//   },
//   createdBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   assignedTo: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User'
//   },
//   attachments: [{
//     filename: String,
//     path: String,
//     uploadedAt: {
//       type: Date,
//       default: Date.now
//     }
//   }],
//   comments: [{
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User'
//     },
//     text: String,
//     createdAt: {
//       type: Date,
//       default: Date.now
//     }
//   }],
//   resolvedAt: Date,
//   closedAt: Date
// }, {
//   timestamps: true
// });

// // Generate ticket number before saving
// ticketSchema.pre('save', async function(next) {
//   if (!this.ticketNumber) {
//     const date = new Date();
//     const year = date.getFullYear().toString().slice(-2);
//     const month = (date.getMonth() + 1).toString().padStart(2, '0');
//     const count = await mongoose.model('Ticket').countDocuments();
//     this.ticketNumber = `TICKET-${year}${month}-${(count + 1).toString().padStart(4, '0')}`;
//   }
//   next();
// });

// module.exports = mongoose.model('Ticket', ticketSchema);








// const mongoose = require('mongoose');

// const ticketSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   category: {
//     type: String,
//     default: 'general'
//   },
//   priority: {
//     type: String,
//     default: 'medium'
//   },
//   status: {
//     type: String,
//     default: 'pending'
//   },
//   userId: {
//     type: String,
//     default: 'user123'  // Simple user ID for now
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('Ticket', ticketSchema);






const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
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
    enum: ['pending', 'in-progress', 'resolved', 'closed'],
    default: 'pending'
  },
  userId: {
    type: String,
    required: true,
    default: 'user123'
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

// Update the updatedAt timestamp on save
ticketSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Ticket', ticketSchema);