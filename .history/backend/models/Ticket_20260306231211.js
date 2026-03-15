
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






// const mongoose = require('mongoose');

// const ticketSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: [true, 'Title is required'],
//     trim: true
//   },
//   description: {
//     type: String,
//     required: [true, 'Description is required']
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
//   userId: {
//     type: String,
//     required: true,
//     default: 'user123'
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// // Update the updatedAt timestamp on save
// ticketSchema.pre('save', function(next) {
//   this.updatedAt = Date.now();
//   next();
// });

// module.exports = mongoose.model('Ticket', ticketSchema);









// const mongoose = require('mongoose');

// const commentSchema = new mongoose.Schema({
//   text: {
//     type: String,
//     required: true
//   },
//   userType: {
//     type: String,
//     enum: ['User', 'Admin'],
//     default: 'User'
//   },
//   userName: {
//     type: String,
//     default: 'User'
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// const ticketSchema = new mongoose.Schema({
//   ticketNumber: {
//     type: String,
//     unique: true,
//     sparse: true // This allows multiple null values
//   },
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
//     enum: ['pending', 'in-progress', 'resolved', 'closed', 'rejected'],
//     default: 'pending'
//   },
//   userId: {
//     type: String,
//     required: true
//   },
//   userName: {
//     type: String,
//     default: 'User'
//   },
//   comments: [commentSchema],
//   resolvedAt: Date,
//   closedAt: Date,
//   rejectedAt: Date,
//   createdAt: {
//     type: Date,
//     default: Date.now
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now
//   }
// });

// // Generate ticket number before saving
// ticketSchema.pre('save', async function(next) {
//   // Only generate ticketNumber if it doesn't exist
//   if (!this.ticketNumber) {
//     try {
//       const date = new Date();
//       const year = date.getFullYear().toString().slice(-2);
//       const month = (date.getMonth() + 1).toString().padStart(2, '0');
//       const day = date.getDate().toString().padStart(2, '0');
      
//       // Count existing tickets to generate a unique number
//       const count = await mongoose.model('Ticket').countDocuments();
//       const sequential = (count + 1).toString().padStart(4, '0');
      
//       this.ticketNumber = `TICKET-${year}${month}${day}-${sequential}`;
//       console.log('Generated ticket number:', this.ticketNumber);
//     } catch (error) {
//       console.error('Error generating ticket number:', error);
//       // Fallback ticket number
//       this.ticketNumber = `TICKET-${Date.now()}`;
//     }
//   }
//   this.updatedAt = Date.now();
//   next();
// });

// // Handle duplicate key errors gracefully
// ticketSchema.post('save', function(error, doc, next) {
//   if (error.name === 'MongoServerError' && error.code === 11000) {
//     // Regenerate ticket number and retry
//     this.ticketNumber = `TICKET-${Date.now()}-${Math.random().toString(36).substr(2, 5)}`;
//     this.save();
//   } else {
//     next(error);
//   }
// });

// module.exports = mongoose.model('Ticket', ticketSchema);