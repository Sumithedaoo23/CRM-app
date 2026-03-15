// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;












// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     // Use a default connection string if .env is not set
//     const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/crm_solar_system';
    
//     const conn = await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     // Don't exit process in development
//     console.log('Continuing without database connection...');
//   }
// };

// module.exports = connectDB;












// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     // Use a default connection string if .env is not set
//     const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/crm_solar_system';
    
//     const conn = await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log(`MongoDB Connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`MongoDB Connection Error: ${error.message}`);
//     console.log('Continuing without database connection for development...');
//   }
// };

// module.exports = connectDB;













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