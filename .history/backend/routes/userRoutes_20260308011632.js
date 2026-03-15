

// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const multer = require('multer');
// const path = require('path');

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   }
// });

// const upload = multer({ 
//   storage: storage,
//   limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
//   fileFilter: function (req, file, cb) {
//     const filetypes = /jpeg|jpg|png|gif/;
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = filetypes.test(file.mimetype);
//     if (mimetype && extname) {
//       return cb(null, true);
//     } else {
//       cb(new Error('Only image files are allowed'));
//     }
//   }
// });

// // Get all users with filters and pagination
// router.get('/', async (req, res) => {
//   try {
//     const { role, search, page = 1, limit = 10 } = req.query;
//     const query = {};

//     if (role) {
//       query.role = role;
//     }

//     if (search) {
//       query.$or = [
//         { firstName: { $regex: search, $options: 'i' } },
//         { lastName: { $regex: search, $options: 'i' } },
//         { email: { $regex: search, $options: 'i' } },
//         { phone: { $regex: search, $options: 'i' } }
//       ];
//     }

//     const skip = (parseInt(page) - 1) * parseInt(limit);
    
//     const users = await User.find(query)
//       .select('-password') // Don't send password in list view for security
//       .skip(skip)
//       .limit(parseInt(limit))
//       .sort({ createdAt: -1 });

//     const total = await User.countDocuments(query);

//     res.json({
//       success: true,
//       data: users,
//       pagination: {
//         total,
//         page: parseInt(page),
//         pages: Math.ceil(total / parseInt(limit))
//       }
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Create new user with photo upload
// router.post('/', upload.single('profilePhoto'), async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, phone, role, isActive, userHyperlink, location } = req.body;
    
//     console.log('Creating user with data:', { 
//       firstName, lastName, email, password: password ? '***' : 'not set', 
//       phone, role, isActive, userHyperlink, location 
//     });

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         error: 'User with this email already exists'
//       });
//     }

//     // Parse location if it's a string
//     let parsedLocation = {};
//     if (location) {
//       try {
//         parsedLocation = typeof location === 'string' ? JSON.parse(location) : location;
//       } catch (e) {
//         console.error('Error parsing location:', e);
//       }
//     }

//     // Create new user
//     const user = new User({
//       firstName,
//       lastName,
//       email,
//       password: password || 'password123',
//       phone: phone || '',
//       role: role || 'user',
//       isActive: isActive !== undefined ? isActive : true,
//       userHyperlink: userHyperlink || '', // Save the hyperlink exactly as entered
//       location: parsedLocation || {},
//       profilePhoto: req.file ? `/uploads/${req.file.filename}` : ''
//     });

//     await user.save();

//     // Return user without password
//     const userResponse = user.toObject();
//     delete userResponse.password;

//     console.log('User created successfully with hyperlink:', userResponse.userHyperlink);

//     res.status(201).json({
//       success: true,
//       data: userResponse
//     });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Get single user - Include password for admin view
// router.get('/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
    
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     res.json({
//       success: true,
//       data: user
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Update user with photo upload
// router.put('/:id', upload.single('profilePhoto'), async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, phone, role, isActive, userHyperlink, location } = req.body;
    
//     console.log('Updating user with data:', { 
//       firstName, lastName, email, password: password ? '***' : 'not set', 
//       phone, role, isActive, userHyperlink, location 
//     });

//     // Check if email is taken by another user
//     if (email) {
//       const existingUser = await User.findOne({ 
//         email, 
//         _id: { $ne: req.params.id } 
//       });
      
//       if (existingUser) {
//         return res.status(400).json({
//           success: false,
//           error: 'Email already in use by another user'
//         });
//       }
//     }

//     // Parse location if it's a string
//     let parsedLocation = {};
//     if (location) {
//       try {
//         parsedLocation = typeof location === 'string' ? JSON.parse(location) : location;
//       } catch (e) {
//         console.error('Error parsing location:', e);
//       }
//     }

//     // Build update object
//     const updateData = {
//       firstName,
//       lastName,
//       email,
//       phone,
//       role,
//       isActive,
//       userHyperlink: userHyperlink || '', // Save the hyperlink exactly as entered
//       location: parsedLocation || {},
//       updatedAt: Date.now()
//     };

//     // Only update password if provided
//     if (password && password.trim() !== '') {
//       updateData.password = password;
//     }

//     // Update profile photo if new one uploaded
//     if (req.file) {
//       updateData.profilePhoto = `/uploads/${req.file.filename}`;
//     }

//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       updateData,
//       { new: true, runValidators: true }
//     );

//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     console.log('User updated successfully with hyperlink:', user.userHyperlink);

//     res.json({
//       success: true,
//       data: user
//     });
//   } catch (error) {
//     console.error('Error updating user:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Delete user with confirmation
// router.delete('/:id', async (req, res) => {
//   try {
//     const { confirmFullName } = req.body;
    
//     const user = await User.findById(req.params.id);
    
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     // Verify full name for confirmation
//     const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
//     if (confirmFullName !== fullName) {
//       return res.status(400).json({
//         success: false,
//         error: 'Name confirmation does not match'
//       });
//     }

//     await user.deleteOne();

//     res.json({
//       success: true,
//       message: 'User deleted successfully'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Export all users to PDF
// router.get('/export/pdf', async (req, res) => {
//   try {
//     const { role, search } = req.query;
//     const query = {};

//     if (role) {
//       query.role = role;
//     }
//     if (search) {
//       query.$or = [
//         { firstName: { $regex: search, $options: 'i' } },
//         { lastName: { $regex: search, $options: 'i' } },
//         { email: { $regex: search, $options: 'i' } }
//       ];
//     }

//     const users = await User.find(query).select('-password').sort({ createdAt: -1 });

//     // Create PDF
//     const PDFDocument = require('pdfkit');
//     const doc = new PDFDocument({ margin: 30, size: 'A4' });
    
//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Disposition', 'attachment; filename=users.pdf');
    
//     doc.pipe(res);

//     // Add title
//     doc.fontSize(20).text('User List', { align: 'center' });
//     doc.moveDown();
//     doc.fontSize(10).text(`Generated on: ${new Date().toLocaleDateString()}`, { align: 'right' });
//     doc.moveDown();

//     // Table headers
//     const tableTop = 150;
//     const col1 = 50;
//     const col2 = 200;
//     const col3 = 350;
//     const col4 = 450;

//     doc.fontSize(10).font('Helvetica-Bold');
//     doc.text('Name', col1, tableTop);
//     doc.text('Email', col2, tableTop);
//     doc.text('Phone', col3, tableTop);
//     doc.text('Role', col4, tableTop);

//     // Draw line
//     doc.moveTo(30, tableTop + 20)
//        .lineTo(565, tableTop + 20)
//        .stroke();

//     // Add users
//     let y = tableTop + 30;
//     doc.font('Helvetica');

//     users.forEach((user, i) => {
//       if (y > 750) {
//         doc.addPage();
//         y = 50;
//       }

//       const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'N/A';
      
//       doc.text(fullName, col1, y);
//       doc.text(user.email || 'N/A', col2, y);
//       doc.text(user.phone || 'N/A', col3, y);
//       doc.text(user.role || 'user', col4, y);
      
//       y += 20;
//     });

//     // Add summary
//     doc.moveDown();
//     doc.fontSize(12).text(`Total Users: ${users.length}`, { align: 'right' });

//     doc.end();

//   } catch (error) {
//     console.error('PDF export error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Export single user to PDF
// router.get('/:id/export/pdf', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select('-password');
    
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     // Create PDF
//     const PDFDocument = require('pdfkit');
//     const doc = new PDFDocument({ margin: 50, size: 'A4' });
    
//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Disposition', `attachment; filename=user-${user.firstName || 'user'}-${user.lastName || 'profile'}.pdf`);
    
//     doc.pipe(res);

//     // Add content
//     doc.fontSize(25).text('User Details', { align: 'center' });
//     doc.moveDown();
    
//     doc.fontSize(12);
//     doc.text(`Name: ${user.firstName || ''} ${user.lastName || ''}`.trim() || 'N/A');
//     doc.text(`Email: ${user.email || 'N/A'}`);
//     doc.text(`Phone: ${user.phone || 'N/A'}`);
//     doc.text(`Role: ${user.role || 'user'}`);
//     doc.text(`Hyperlink: ${user.userHyperlink || 'N/A'}`);
//     doc.text(`Status: ${user.isActive ? 'Active' : 'Inactive'}`);
//     doc.text(`Created: ${new Date(user.createdAt).toLocaleDateString()}`);
    
//     if (user.location && Object.keys(user.location).length > 0) {
//       doc.moveDown();
//       doc.text('Address:');
//       doc.text(`  ${user.location.street || ''}`);
//       doc.text(`  ${user.location.city || ''} ${user.location.state || ''} ${user.location.zipCode || ''}`);
//       doc.text(`  ${user.location.country || ''}`);
//     }

//     doc.end();

//   } catch (error) {
//     console.error('PDF export error:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// module.exports = router;
















const express = require('express');
const router = express.Router();
const User = require('../models/User');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure uploads directory exists
const uploadDir = 'uploads/profiles';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

// Get all users with filters and pagination
router.get('/', async (req, res) => {
  try {
    const { role, search, page = 1, limit = 10 } = req.query;
    const query = {};

    if (role) {
      query.role = role;
    }

    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const users = await User.find(query)
      .select('-password')
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await User.countDocuments(query);

    res.json({
      success: true,
      data: users,
      pagination: {
        total,
        page: parseInt(page),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Create new user with photo upload
router.post('/', upload.single('profilePhoto'), async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, role, isActive, userHyperlink, company, location } = req.body;
    
    console.log('Creating user with data:', { 
      firstName, lastName, email, phone, role, isActive, userHyperlink, company, location 
    });

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        error: 'User with this email already exists'
      });
    }

    // Parse location if it's a string
    let parsedLocation = {};
    if (location) {
      try {
        parsedLocation = typeof location === 'string' ? JSON.parse(location) : location;
      } catch (e) {
        console.error('Error parsing location:', e);
      }
    }

    // Create new user
    const user = new User({
      firstName,
      lastName,
      email,
      password: password || 'password123',
      phone: phone || '',
      role: role || 'user',
      isActive: isActive !== undefined ? isActive : true,
      userHyperlink: userHyperlink || '',
      company: company || '',
      location: parsedLocation || {},
      profilePhoto: req.file ? `/uploads/profiles/${req.file.filename}` : ''
    });

    await user.save();

    // Return user without password
    const userResponse = user.toObject();
    delete userResponse.password;

    console.log('User created successfully with photo:', userResponse.profilePhoto);

    res.status(201).json({
      success: true,
      data: userResponse
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get single user - Include password for admin view
router.get('/:id', async (req, res) => {
  try {
    // Check if ID is valid MongoDB ObjectId
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid user ID format'
      });
    }

    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Update user with photo upload
router.put('/:id', upload.single('profilePhoto'), async (req, res) => {
  try {
    // Check if ID is valid MongoDB ObjectId
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid user ID format'
      });
    }

    const { firstName, lastName, email, password, phone, role, isActive, userHyperlink, company, location } = req.body;
    
    console.log('Updating user with data:', { 
      firstName, lastName, email, phone, role, isActive, userHyperlink, company, location 
    });

    // Check if email is taken by another user
    if (email) {
      const existingUser = await User.findOne({ 
        email, 
        _id: { $ne: req.params.id } 
      });
      
      if (existingUser) {
        return res.status(400).json({
          success: false,
          error: 'Email already in use by another user'
        });
      }
    }

    // Parse location if it's a string
    let parsedLocation = {};
    if (location) {
      try {
        parsedLocation = typeof location === 'string' ? JSON.parse(location) : location;
      } catch (e) {
        console.error('Error parsing location:', e);
      }
    }

    // Build update object
    const updateData = {
      firstName,
      lastName,
      email,
      phone,
      role,
      isActive,
      userHyperlink: userHyperlink || '',
      company: company || '',
      location: parsedLocation || {},
      updatedAt: Date.now()
    };

    // Only update password if provided
    if (password && password.trim() !== '') {
      updateData.password = password;
    }

    // Update profile photo if new one uploaded
    if (req.file) {
      // Delete old photo if exists
      const oldUser = await User.findById(req.params.id);
      if (oldUser && oldUser.profilePhoto) {
        const oldPath = '.' + oldUser.profilePhoto;
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
          console.log('Old photo deleted:', oldPath);
        }
      }
      updateData.profilePhoto = `/uploads/profiles/${req.file.filename}`;
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    console.log('User updated successfully with photo:', user.profilePhoto);

    res.json({
      success: true,
      data: user
    });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Delete user with confirmation
router.delete('/:id', async (req, res) => {
  try {
    const { confirmFullName } = req.body;
    
    const user = await User.findById(req.params.id);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    // Verify full name for confirmation
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim();
    if (confirmFullName !== fullName) {
      return res.status(400).json({
        success: false,
        error: 'Name confirmation does not match'
      });
    }

    // Delete profile photo if exists
    if (user.profilePhoto) {
      const photoPath = '.' + user.profilePhoto;
      if (fs.existsSync(photoPath)) {
        fs.unlinkSync(photoPath);
        console.log('Profile photo deleted:', photoPath);
      }
    }

    await user.deleteOne();

    res.json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Export all users to PDF
router.get('/export/pdf', async (req, res) => {
  try {
    const { role, search } = req.query;
    const query = {};

    if (role) {
      query.role = role;
    }
    if (search) {
      query.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const users = await User.find(query).select('-password').sort({ createdAt: -1 });

    // Create PDF
    const PDFDocument = require('pdfkit');
    const doc = new PDFDocument({ margin: 30, size: 'A4' });
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=users.pdf');
    
    doc.pipe(res);

    // Add title
    doc.fontSize(20).text('User List', { align: 'center' });
    doc.moveDown();
    doc.fontSize(10).text(`Generated on: ${new Date().toLocaleDateString()}`, { align: 'right' });
    doc.moveDown();

    // Table headers
    const tableTop = 150;
    const col1 = 50;
    const col2 = 200;
    const col3 = 350;
    const col4 = 450;

    doc.fontSize(10).font('Helvetica-Bold');
    doc.text('Name', col1, tableTop);
    doc.text('Email', col2, tableTop);
    doc.text('Phone', col3, tableTop);
    doc.text('Role', col4, tableTop);

    // Draw line
    doc.moveTo(30, tableTop + 20)
       .lineTo(565, tableTop + 20)
       .stroke();

    // Add users
    let y = tableTop + 30;
    doc.font('Helvetica');

    users.forEach((user, i) => {
      if (y > 750) {
        doc.addPage();
        y = 50;
      }

      const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'N/A';
      
      doc.text(fullName, col1, y);
      doc.text(user.email || 'N/A', col2, y);
      doc.text(user.phone || 'N/A', col3, y);
      doc.text(user.role || 'user', col4, y);
      
      y += 20;
    });

    // Add summary
    doc.moveDown();
    doc.fontSize(12).text(`Total Users: ${users.length}`, { align: 'right' });

    doc.end();

  } catch (error) {
    console.error('PDF export error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Export single user to PDF
router.get('/:id/export/pdf', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    // Create PDF
    const PDFDocument = require('pdfkit');
    const doc = new PDFDocument({ margin: 50, size: 'A4' });
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=user-${user.firstName || 'user'}-${user.lastName || 'profile'}.pdf`);
    
    doc.pipe(res);

    // Add content
    doc.fontSize(25).text('User Details', { align: 'center' });
    doc.moveDown();
    
    doc.fontSize(12);
    doc.text(`Name: ${user.firstName || ''} ${user.lastName || ''}`.trim() || 'N/A');
    doc.text(`Email: ${user.email || 'N/A'}`);
    doc.text(`Phone: ${user.phone || 'N/A'}`);
    doc.text(`Role: ${user.role || 'user'}`);
    doc.text(`Hyperlink: ${user.userHyperlink || 'N/A'}`);
    doc.text(`Company: ${user.company || 'N/A'}`);
    doc.text(`Status: ${user.isActive ? 'Active' : 'Inactive'}`);
    doc.text(`Created: ${new Date(user.createdAt).toLocaleDateString()}`);
    
    if (user.location && Object.keys(user.location).length > 0) {
      doc.moveDown();
      doc.text('Address:');
      doc.text(`  ${user.location.street || ''}`);
      doc.text(`  ${user.location.city || ''} ${user.location.state || ''} ${user.location.zipCode || ''}`);
      doc.text(`  ${user.location.country || ''}`);
    }

    doc.end();

  } catch (error) {
    console.error('PDF export error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;