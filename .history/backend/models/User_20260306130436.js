// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// const userSchema = new mongoose.Schema({
//   firstName: {
//     type: String,
//     required: [true, 'First name is required'],
//     trim: true
//   },
//   lastName: {
//     type: String,
//     required: [true, 'Last name is required'],
//     trim: true
//   },
//   email: {
//     type: String,
//     required: [true, 'Email is required'],
//     unique: true,
//     lowercase: true,
//     trim: true,
//     match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
//   },
//   password: {
//     type: String,
//     required: [true, 'Password is required'],
//     minlength: [6, 'Password must be at least 6 characters']
//   },
//   phone: {
//     type: String,
//     required: [true, 'Phone number is required']
//   },
//   address: {
//     street: String,
//     city: String,
//     state: String,
//     zipCode: String,
//     country: String
//   },
//   role: {
//     type: String,
//     enum: ['user', 'admin'],
//     default: 'user'
//   },
//   company: String,
//   profileImage: String,
//   isActive: {
//     type: Boolean,
//     default: true
//   },
//   lastLogin: Date,
//   createdBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Admin'
//   },
//   hyperlinks: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Hyperlink'
//   }],
//   notes: [{
//     content: String,
//     createdBy: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'Admin'
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now
//     }
//   }]
// }, {
//   timestamps: true
// });

// // Encrypt password before saving
// userSchema.pre('save', async function(next) {
//   if (!this.isModified('password')) return next();
  
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// // Compare password method
// userSchema.methods.comparePassword = async function(enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // Get full name
// userSchema.virtual('fullName').get(function() {
//   return `${this.firstName} ${this.lastName}`;
// });

// module.exports = mongoose.model('User', userSchema);



















const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  ticketNumber: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide a description']
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
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  attachments: [{
    filename: String,
    path: String,
    uploadedAt: {
      type: Date,
      default: Date.now
    }
  }],
  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    text: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  resolvedAt: Date,
  closedAt: Date
}, {
  timestamps: true
});

// Generate ticket number before saving
ticketSchema.pre('save', async function(next) {
  if (!this.ticketNumber) {
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const count = await mongoose.model('Ticket').countDocuments();
    this.ticketNumber = `TICKET-${year}${month}-${(count + 1).toString().padStart(4, '0')}`;
  }
  next();
});

module.exports = mongoose.model('Ticket', ticketSchema);