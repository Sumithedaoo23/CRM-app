const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

async function setupAdmin() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/crm_db', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ Connected to MongoDB');

    const adminEmail = 'admin2026@gmail.com';
    const adminPassword = 'admin2026';
    const adminPhone = '9999999999';

    // Check if admin already exists
    let admin = await User.findOne({ email: adminEmail });

    if (admin) {
      console.log('📝 Admin found. Updating password...');
      
      // Hash new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(adminPassword, salt);
      
      // Update admin
      admin.password = hashedPassword;
      admin.firstName = 'Admin';
      admin.lastName = 'User';
      admin.phone = adminPhone;
      admin.role = 'admin';
      admin.isActive = true;
      admin.isApproved = true;
      admin.company = 'CRM Solar System';
      
      await admin.save();
      
      console.log('✅ Admin updated successfully!');
    } else {
      console.log('📝 Creating new admin...');
      
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(adminPassword, salt);
      
      // Create new admin
      admin = new User({
        firstName: 'Admin',
        lastName: 'User',
        email: adminEmail,
        password: hashedPassword,
        phone: adminPhone,
        role: 'admin',
        isActive: true,
        isApproved: true,
        company: 'CRM Solar System',
        createdAt: new Date()
      });
      
      await admin.save();
      
      console.log('✅ Admin created successfully!');
    }

    console.log('📧 Email:', adminEmail);
    console.log('🔑 Password:', adminPassword);
    console.log('📱 Phone:', adminPhone);

    await mongoose.disconnect();
    console.log('👋 Disconnected from MongoDB');

  } catch (error) {
    console.error('❌ Error:', error);
  }
}

setupAdmin();
