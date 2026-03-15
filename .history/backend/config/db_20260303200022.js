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












