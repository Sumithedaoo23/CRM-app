
// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const { protect, admin } = require('../middleware/authMiddleware');
// const generateToken = require('../utils/generateToken');

// // @desc    Get all users
// // @route   GET /api/users
// // @access  Private/Admin
// router.get('/', protect, admin, async (req, res) => {
//   try {
//     const users = await User.find({}).select('-password');
//     res.json({
//       success: true,
//       count: users.length,
//       data: users
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Get user by ID
// // @route   GET /api/users/:id
// // @access  Private/Admin
// router.get('/:id', protect, admin, async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select('-password');
    
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

// // @desc    Update user
// // @route   PUT /api/users/:id
// // @access  Private/Admin
// router.put('/:id', protect, admin, async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
    
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     const { name, email, role, isAdmin, phone, company } = req.body;
    
//     user.name = name || user.name;
//     user.email = email || user.email;
//     user.role = role || user.role;
//     user.isAdmin = isAdmin !== undefined ? isAdmin : user.isAdmin;
//     user.phone = phone || user.phone;
//     user.company = company || user.company;

//     const updatedUser = await user.save();
    
//     res.json({
//       success: true,
//       data: {
//         _id: updatedUser._id,
//         name: updatedUser.name,
//         email: updatedUser.email,
//         role: updatedUser.role,
//         isAdmin: updatedUser.isAdmin,
//         phone: updatedUser.phone,
//         company: updatedUser.company
//       }
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Delete user
// // @route   DELETE /api/users/:id
// // @access  Private/Admin
// router.delete('/:id', protect, admin, async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
    
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     await user.deleteOne();
    
//     res.json({
//       success: true,
//       message: 'User removed'
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // @desc    Get user profile
// // @route   GET /api/users/profile/me
// // @access  Private
// router.get('/profile/me', protect, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
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

// // @desc    Update user profile
// // @route   PUT /api/users/profile
// // @access  Private
// router.put('/profile', protect, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id);
    
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         error: 'User not found'
//       });
//     }

//     const { name, email, phone, company } = req.body;
    
//     user.name = name || user.name;
//     user.email = email || user.email;
//     user.phone = phone || user.phone;
//     user.company = company || user.company;

//     const updatedUser = await user.save();
    
//     res.json({
//       success: true,
//       data: {
//         _id: updatedUser._id,
//         name: updatedUser.name,
//         email: updatedUser.email,
//         role: updatedUser.role,
//         isAdmin: updatedUser.isAdmin,
//         phone: updatedUser.phone,
//         company: updatedUser.company
//       }
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// module.exports = router;













// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const PDFDocument = require('pdfkit');

// // Get all users with filters and pagination
// router.get('/', async (req, res) => {
//   try {
//     const { role, search, page = 1, limit = 10 } = req.query;
//     const query = {};

//     // Filter by role
//     if (role) {
//       query.role = role;
//     }

//     // Search by name, email, or phone
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
//       .select('-password')
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

// // Create new user
// router.post('/', async (req, res) => {
//   try {
//     const { firstName, lastName, email, password, phone, role, company, address, isActive } = req.body;

//     // Check if user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         error: 'User with this email already exists'
//       });
//     }

//     // Create new user
//     const user = new User({
//       firstName,
//       lastName,
//       email,
//       password,
//       phone: phone || '',
//       role: role || 'user',
//       company: company || '',
//       address: address || {},
//       isActive: isActive !== undefined ? isActive : true
//     });

//     await user.save();

//     // Return user without password
//     const userResponse = user.toObject();
//     delete userResponse.password;

//     res.status(201).json({
//       success: true,
//       data: userResponse
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Get single user
// router.get('/:id', async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id).select('-password');
    
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

// // Update user
// router.put('/:id', async (req, res) => {
//   try {
//     const { firstName, lastName, email, phone, role, company, address, isActive } = req.body;

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

//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         firstName,
//         lastName,
//         email,
//         phone,
//         role,
//         company,
//         address,
//         isActive,
//         updatedAt: Date.now()
//       },
//       { new: true, runValidators: true }
//     ).select('-password');

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
//     const fullName = `${user.firstName} ${user.lastName}`;
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

//     // Apply same filters as list
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
//     const doc = new PDFDocument({ margin: 30, size: 'A4' });
    
//     // Set response headers
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

//       const fullName = `${user.firstName} ${user.lastName}`;
      
//       doc.text(fullName, col1, y);
//       doc.text(user.email, col2, y);
//       doc.text(user.phone || 'N/A', col3, y);
//       doc.text(user.role, col4, y);
      
//       y += 20;
//     });

//     // Add summary
//     doc.moveDown();
//     doc.fontSize(12).text(`Total Users: ${users.length}`, { align: 'right' });

//     doc.end();

//   } catch (error) {
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
//     const doc = new PDFDocument({ margin: 50, size: 'A4' });
    
//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Disposition', `attachment; filename=user-${user.firstName}-${user.lastName}.pdf`);
    
//     doc.pipe(res);

//     // Add content
//     doc.fontSize(25).text('User Details', { align: 'center' });
//     doc.moveDown();
    
//     doc.fontSize(12);
//     doc.text(`Name: ${user.firstName} ${user.lastName}`);
//     doc.text(`Email: ${user.email}`);
//     doc.text(`Phone: ${user.phone || 'N/A'}`);
//     doc.text(`Role: ${user.role}`);
//     doc.text(`Company: ${user.company || 'N/A'}`);
//     doc.text(`Status: ${user.isActive ? 'Active' : 'Inactive'}`);
//     doc.text(`Created: ${new Date(user.createdAt).toLocaleDateString()}`);
    
//     if (user.address) {
//       doc.moveDown();
//       doc.text('Address:');
//       doc.text(`  ${user.address.street || ''}`);
//       doc.text(`  ${user.address.city || ''} ${user.address.state || ''} ${user.address.zipCode || ''}`);
//       doc.text(`  ${user.address.country || ''}`);
//     }

//     doc.end();

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Add note to user (optional feature)
// router.post('/:id/notes', async (req, res) => {
//   try {
//     const { content } = req.body;
    
//     if (!content) {
//       return res.status(400).json({
//         success: false,
//         error: 'Note content is required'
//       });
//     }

//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       {
//         $push: {
//           notes: {
//             content,
//             createdAt: Date.now()
//           }
//         }
//       },
//       { new: true }
//     ).select('-password');

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

// module.exports = router;














const express = require('express');
const router = express.Router();
const User = require('../models/User');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
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
    const { firstName, lastName, email, password, phone, role, isActive, userHyperlink, location } = req.body;
    
    console.log('Creating user with data:', { 
      firstName, lastName, email, password, phone, role, isActive, userHyperlink, location 
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
      password: password || 'password123', // Use provided password or default
      phone: phone || '',
      role: role || 'user',
      isActive: isActive !== undefined ? isActive : true,
      userHyperlink: userHyperlink || '', // Save the hyperlink
      location: parsedLocation || {},
      profilePhoto: req.file ? `/uploads/${req.file.filename}` : ''
    });

    await user.save();

    // Return user without password
    const userResponse = user.toObject();
    delete userResponse.password;

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

// Get single user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    
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
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Update user with photo upload
router.put('/:id', upload.single('profilePhoto'), async (req, res) => {
  try {
    const { firstName, lastName, email, password, phone, role, isActive, userHyperlink, location } = req.body;
    
    console.log('Updating user with data:', { 
      firstName, lastName, email, password, phone, role, isActive, userHyperlink, location 
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
      userHyperlink: userHyperlink || '', // Save the hyperlink
      location: parsedLocation || {},
      updatedAt: Date.now()
    };

    // Only update password if provided
    if (password && password.trim() !== '') {
      updateData.password = password;
    }

    // Update profile photo if new one uploaded
    if (req.file) {
      updateData.profilePhoto = `/uploads/${req.file.filename}`;
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found'
      });
    }

    console.log('User updated successfully:', user);

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