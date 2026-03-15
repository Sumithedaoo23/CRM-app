
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