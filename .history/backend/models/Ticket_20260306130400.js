// const mongoose = require('mongoose');

// const ticketSchema = new mongoose.Schema({
//   ticketNumber: {
//     type: String,
//     required: true,
//     unique: true
//   },
//   title: {
//     type: String,
//     required: [true, 'Ticket title is required'],
//     trim: true
//   },
//   description: {
//     type: String,
//     required: [true, 'Ticket description is required']
//   },
//   category: {
//     type: String,
//     enum: ['technical', 'billing', 'general', 'feature_request', 'bug'],
//     default: 'general'
//   },
//   priority: {
//     type: String,
//     enum: ['low', 'medium', 'high', 'critical'],
//     default: 'medium'
//   },
//   status: {
//     type: String,
//     enum: ['pending', 'in-progress', 'resolved', 'closed', 'rejected'],
//     default: 'pending'
//   },
//   createdBy: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   createdByDetails: {
//     name: String,
//     email: String,
//     phone: String
//   },
//   assignedTo: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Admin'
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
//       refPath: 'commentUserType'
//     },
//     userType: {
//       type: String,
//       enum: ['Admin', 'User']
//     },
//     content: String,
//     attachments: [String],
//     createdAt: {
//       type: Date,
//       default: Date.now
//     }
//   }],
//   history: [{
//     action: String,
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       refPath: 'historyUserType'
//     },
//     userType: String,
//     timestamp: {
//       type: Date,
//       default: Date.now
//     }
//   }],
//   resolvedAt: Date,
//   closedAt: Date,
//   resolution: String
// }, {
//   timestamps: true
// });

// // Generate ticket number before saving
// ticketSchema.pre('save', async function(next) {
//   if (!this.ticketNumber) {
//     const count = await mongoose.model('Ticket').countDocuments();
//     this.ticketNumber = `TICK-${(count + 1).toString().padStart(6, '0')}`;
//   }
//   next();
// });

// module.exports = mongoose.model('Ticket', ticketSchema);















const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`📊 Database: ${conn.connection.name}`);
    
    // Create collections if they don't exist
    await createCollections(conn);
    
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

const createCollections = async (conn) => {
  const db = conn.connection.db;
  
  // List of collections to create
  const collections = [
    'users',
    'tickets', 
    'contacts',
    'leads',
    'roles',
    'permissions',
    'admins',
    'hyperlinks'
  ];
  
  for (const collectionName of collections) {
    try {
      await db.createCollection(collectionName);
      console.log(`📁 Collection created: ${collectionName}`);
    } catch (error) {
      // Collection might already exist
      console.log(`📁 Collection exists: ${collectionName}`);
    }
  }
};

module.exports = connectDB;


