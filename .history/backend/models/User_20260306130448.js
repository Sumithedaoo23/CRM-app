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
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  phone: String,
  company: String,
  profilePicture: String,
  lastLogin: Date,
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);