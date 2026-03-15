
// const express = require('express');
// const router = express.Router();
// const Message = require('../models/Message');
// const Conversation = require('../models/Conversation');
// const User = require('../models/User');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// // Ensure uploads directory exists
// const uploadDir = 'uploads/messages';
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname.replace(/\s/g, '_'));
//   }
// });

// const upload = multer({ 
//   storage: storage,
//   limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
//   fileFilter: function (req, file, cb) {
//     const filetypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt|xlsx|xls|ppt|pptx/;
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = filetypes.test(file.mimetype);
//     if (mimetype && extname) {
//       return cb(null, true);
//     } else {
//       cb(new Error('File type not allowed'));
//     }
//   }
// });

// // Generate conversation ID
// const generateConversationId = (userId1, userId2) => {
//   return [userId1.toString(), userId2.toString()].sort().join('_');
// };

// // Send a new message
// router.post('/send', upload.array('attachments', 5), async (req, res) => {
//   try {
//     const { senderId, senderName, senderRole, receiverId, content } = req.body;
    
//     console.log('Received message request:', { senderId, senderName, senderRole, receiverId, content });
    
//     if (!senderId || !receiverId || !content) {
//       return res.status(400).json({
//         success: false,
//         error: 'Missing required fields'
//       });
//     }

//     // Get receiver info
//     const receiver = await User.findById(receiverId);
//     if (!receiver) {
//       return res.status(404).json({
//         success: false,
//         error: 'Receiver not found'
//       });
//     }

//     // Generate conversation ID
//     const conversationId = generateConversationId(senderId, receiverId);

//     // Process attachments
//     const attachments = [];
//     if (req.files && req.files.length > 0) {
//       req.files.forEach(file => {
//         attachments.push({
//           filename: file.originalname,
//           fileUrl: `/uploads/messages/${file.filename}`,
//           fileType: file.mimetype,
//           fileSize: file.size
//         });
//       });
//     }

//     // Create message
//     const message = new Message({
//       senderId,
//       senderName,
//       senderRole,
//       receiverId,
//       receiverName: receiver.firstName + ' ' + receiver.lastName,
//       content,
//       attachments,
//       conversationId
//     });

//     await message.save();
//     console.log('Message saved:', message._id);

//     // Update or create conversation
//     let conversation = await Conversation.findOne({
//       participants: { $all: [senderId, receiverId] }
//     });

//     if (!conversation) {
//       const sender = await User.findById(senderId);
//       conversation = new Conversation({
//         participants: [senderId, receiverId],
//         participantNames: [
//           sender ? (sender.firstName + ' ' + sender.lastName) : senderName,
//           receiver.firstName + ' ' + receiver.lastName
//         ],
//         unreadCount: new Map()
//       });
//     }

//     // Update last message
//     conversation.lastMessage = {
//       content,
//       senderId,
//       senderName,
//       createdAt: new Date()
//     };
//     conversation.updatedAt = new Date();

//     // Increment unread count for receiver
//     const currentUnread = conversation.unreadCount.get(receiverId.toString()) || 0;
//     conversation.unreadCount.set(receiverId.toString(), currentUnread + 1);

//     await conversation.save();
//     console.log('Conversation updated');

//     res.status(201).json({
//       success: true,
//       data: message
//     });

//   } catch (error) {
//     console.error('Error sending message:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Get conversations for a user
// router.get('/conversations/:userId', async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const conversations = await Conversation.find({
//       participants: userId
//     })
//     .sort({ updatedAt: -1 })
//     .limit(50);

//     // Get unread counts for each conversation
//     const conversationsWithDetails = await Promise.all(conversations.map(async (conv) => {
//       const otherParticipantId = conv.participants.find(id => id.toString() !== userId);
//       const otherUser = await User.findById(otherParticipantId).select('firstName lastName profilePhoto');
      
//       const unreadForUser = conv.unreadCount.get(userId) || 0;
      
//       // Get last few messages for preview
//       const recentMessages = await Message.find({
//         conversationId: generateConversationId(userId, otherParticipantId)
//       })
//       .sort({ createdAt: -1 })
//       .limit(1);

//       return {
//         _id: conv._id,
//         otherUser: {
//           _id: otherUser?._id,
//           name: otherUser ? `${otherUser.firstName} ${otherUser.lastName}` : 'Unknown',
//           profilePhoto: otherUser?.profilePhoto
//         },
//         lastMessage: conv.lastMessage,
//         unreadCount: unreadForUser,
//         updatedAt: conv.updatedAt,
//         recentMessage: recentMessages[0]
//       };
//     }));

//     res.json({
//       success: true,
//       data: conversationsWithDetails
//     });

//   } catch (error) {
//     console.error('Error fetching conversations:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Get messages for a conversation
// router.get('/:userId/:otherUserId', async (req, res) => {
//   try {
//     const { userId, otherUserId } = req.params;
//     const { page = 1, limit = 50 } = req.query;

//     const conversationId = generateConversationId(userId, otherUserId);

//     const messages = await Message.find({
//       conversationId
//     })
//     .sort({ createdAt: -1 })
//     .skip((parseInt(page) - 1) * parseInt(limit))
//     .limit(parseInt(limit));

//     // Mark messages as read
//     await Message.updateMany(
//       {
//         conversationId,
//         receiverId: userId,
//         isRead: false
//       },
//       {
//         isRead: true,
//         readAt: new Date()
//       }
//     );

//     // Reset unread count in conversation
//     await Conversation.findOneAndUpdate(
//       {
//         participants: { $all: [userId, otherUserId] }
//       },
//       {
//         $set: { [`unreadCount.${userId}`]: 0 }
//       }
//     );

//     res.json({
//       success: true,
//       data: messages.reverse(),
//       pagination: {
//         page: parseInt(page),
//         limit: parseInt(limit)
//       }
//     });

//   } catch (error) {
//     console.error('Error fetching messages:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Mark messages as read
// router.put('/read/:messageId', async (req, res) => {
//   try {
//     const { messageId } = req.params;

//     const message = await Message.findByIdAndUpdate(
//       messageId,
//       {
//         isRead: true,
//         readAt: new Date()
//       },
//       { new: true }
//     );

//     res.json({
//       success: true,
//       data: message
//     });

//   } catch (error) {
//     console.error('Error marking message as read:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Get unread count for a user
// router.get('/unread/:userId', async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const unreadCount = await Message.countDocuments({
//       receiverId: userId,
//       isRead: false
//     });

//     res.json({
//       success: true,
//       data: { unreadCount }
//     });

//   } catch (error) {
//     console.error('Error getting unread count:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// module.exports = router;















// const express = require('express');
// const router = express.Router();
// const Message = require('../models/Message');
// const Conversation = require('../models/Conversation');
// const User = require('../models/User');
// const multer = require('multer');
// const path = require('path');
// const fs = require('fs');

// // Ensure uploads directory exists
// const uploadDir = 'uploads/messages';
// if (!fs.existsSync(uploadDir)) {
//   fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname.replace(/\s/g, '_'));
//   }
// });

// const upload = multer({ 
//   storage: storage,
//   limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
//   fileFilter: function (req, file, cb) {
//     const filetypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt|xlsx|xls|ppt|pptx/;
//     const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
//     const mimetype = filetypes.test(file.mimetype);
//     if (mimetype && extname) {
//       return cb(null, true);
//     } else {
//       cb(new Error('File type not allowed'));
//     }
//   }
// });

// // Generate conversation ID
// const generateConversationId = (userId1, userId2) => {
//   return [userId1.toString(), userId2.toString()].sort().join('_');
// };

// // Send a new message
// router.post('/send', upload.array('attachments', 5), async (req, res) => {
//   try {
//     const { senderId, senderName, senderRole, receiverId, content } = req.body;
    
//     console.log('Received message request:', { senderId, senderName, senderRole, receiverId });

//     if (!senderId || !receiverId || !content) {
//       return res.status(400).json({
//         success: false,
//         error: 'Missing required fields'
//       });
//     }

//     // Get receiver info
//     const receiver = await User.findById(receiverId);
//     if (!receiver) {
//       return res.status(404).json({
//         success: false,
//         error: 'Receiver not found'
//       });
//     }

//     // Check if receiver is approved (if they're a user)
//     if (receiver.role === 'user' && !receiver.isApproved) {
//       return res.status(403).json({
//         success: false,
//         error: 'Cannot message unapproved user'
//       });
//     }

//     // Generate conversation ID
//     const conversationId = generateConversationId(senderId, receiverId);

//     // Process attachments
//     const attachments = [];
//     if (req.files && req.files.length > 0) {
//       req.files.forEach(file => {
//         attachments.push({
//           filename: file.originalname,
//           fileUrl: `/uploads/messages/${file.filename}`,
//           fileType: file.mimetype,
//           fileSize: file.size
//         });
//       });
//     }

//     // Create message
//     const message = new Message({
//       senderId,
//       senderName,
//       senderRole,
//       receiverId,
//       receiverName: receiver.firstName + ' ' + receiver.lastName,
//       content,
//       attachments,
//       conversationId
//     });

//     await message.save();

//     // Update or create conversation
//     let conversation = await Conversation.findOne({
//       participants: { $all: [senderId, receiverId] }
//     });

//     if (!conversation) {
//       const sender = await User.findById(senderId);
//       conversation = new Conversation({
//         participants: [senderId, receiverId],
//         participantNames: [
//           sender ? (sender.firstName + ' ' + sender.lastName) : senderName,
//           receiver.firstName + ' ' + receiver.lastName
//         ],
//         unreadCount: new Map()
//       });
//     }

//     // Update last message
//     conversation.lastMessage = {
//       content,
//       senderId,
//       senderName,
//       createdAt: new Date()
//     };
//     conversation.updatedAt = new Date();

//     // Increment unread count for receiver
//     const currentUnread = conversation.unreadCount.get(receiverId.toString()) || 0;
//     conversation.unreadCount.set(receiverId.toString(), currentUnread + 1);

//     await conversation.save();

//     res.status(201).json({
//       success: true,
//       data: message
//     });

//   } catch (error) {
//     console.error('Error sending message:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Get conversations for a user
// router.get('/conversations/:userId', async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const conversations = await Conversation.find({
//       participants: userId
//     })
//     .sort({ updatedAt: -1 })
//     .limit(50);

//     const conversationsWithDetails = await Promise.all(conversations.map(async (conv) => {
//       const otherParticipantId = conv.participants.find(id => id.toString() !== userId);
//       const otherUser = await User.findById(otherParticipantId).select('firstName lastName profilePhoto role isApproved');
      
//       const unreadForUser = conv.unreadCount.get(userId) || 0;
      
//       return {
//         _id: conv._id,
//         otherUser: {
//           _id: otherUser?._id,
//           name: otherUser ? `${otherUser.firstName} ${otherUser.lastName}` : 'Unknown',
//           profilePhoto: otherUser?.profilePhoto,
//           role: otherUser?.role,
//           isApproved: otherUser?.isApproved
//         },
//         lastMessage: conv.lastMessage,
//         unreadCount: unreadForUser,
//         updatedAt: conv.updatedAt
//       };
//     }));

//     res.json({
//       success: true,
//       data: conversationsWithDetails
//     });

//   } catch (error) {
//     console.error('Error fetching conversations:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Get messages for a conversation
// router.get('/:userId/:otherUserId', async (req, res) => {
//   try {
//     const { userId, otherUserId } = req.params;
//     const { page = 1, limit = 50 } = req.query;

//     const conversationId = generateConversationId(userId, otherUserId);

//     const messages = await Message.find({
//       conversationId
//     })
//     .sort({ createdAt: -1 })
//     .skip((parseInt(page) - 1) * parseInt(limit))
//     .limit(parseInt(limit));

//     // Mark messages as read
//     await Message.updateMany(
//       {
//         conversationId,
//         receiverId: userId,
//         isRead: false
//       },
//       {
//         isRead: true,
//         readAt: new Date()
//       }
//     );

//     // Reset unread count in conversation
//     await Conversation.findOneAndUpdate(
//       {
//         participants: { $all: [userId, otherUserId] }
//       },
//       {
//         $set: { [`unreadCount.${userId}`]: 0 }
//       }
//     );

//     res.json({
//       success: true,
//       data: messages.reverse(),
//       pagination: {
//         page: parseInt(page),
//         limit: parseInt(limit)
//       }
//     });

//   } catch (error) {
//     console.error('Error fetching messages:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// // Get unread count for a user
// router.get('/unread/:userId', async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const unreadCount = await Message.countDocuments({
//       receiverId: userId,
//       isRead: false
//     });

//     res.json({
//       success: true,
//       data: { unreadCount }
//     });

//   } catch (error) {
//     console.error('Error getting unread count:', error);
//     res.status(500).json({
//       success: false,
//       error: error.message
//     });
//   }
// });

// module.exports = router;











const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const User = require('../models/User');
const { protect } = require('../middleware/authMiddleware');

// @desc    Send a message
// @route   POST /api/messages
// @access  Private
router.post('/', protect, async (req, res) => {
  try {
    const { receiverId, content } = req.body;
    
    console.log('Send message request:', {
      senderId: req.user._id,
      receiverId,
      content
    });

    if (!receiverId || !content) {
      return res.status(400).json({
        success: false,
        error: 'Receiver ID and content are required'
      });
    }

    // Check if receiver exists
    const receiver = await User.findById(receiverId);
    if (!receiver) {
      return res.status(404).json({
        success: false,
        error: 'Receiver not found'
      });
    }

    const message = new Message({
      senderId: req.user._id,
      receiverId,
      content,
      read: false
    });

    await message.save();

    // Populate sender and receiver info
    await message.populate('senderId', 'firstName lastName email profilePhoto role');
    await message.populate('receiverId', 'firstName lastName email profilePhoto role');

    res.status(201).json({
      success: true,
      data: message
    });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Get conversations for current user
// @route   GET /api/messages/conversations
// @access  Private
router.get('/conversations', protect, async (req, res) => {
  try {
    const userId = req.user._id;

    console.log('Getting conversations for user:', userId);

    // Get all unique users that the current user has conversed with
    const conversations = await Message.aggregate([
      {
        $match: {
          $or: [
            { senderId: userId },
            { receiverId: userId }
          ]
        }
      },
      {
        $sort: { createdAt: -1 }
      },
      {
        $group: {
          _id: {
            $cond: [
              { $eq: ['$senderId', userId] },
              '$receiverId',
              '$senderId'
            ]
          },
          lastMessage: { $first: '$$ROOT' },
          unreadCount: {
            $sum: {
              $cond: [
                {
                  $and: [
                    { $eq: ['$receiverId', userId] },
                    { $eq: ['$read', false] }
                  ]
                },
                1,
                0
              ]
            }
          }
        }
      },
      {
        $lookup: {
          from: 'users',
          localField: '_id',
          foreignField: '_id',
          as: 'user'
        }
      },
      {
        $unwind: '$user'
      },
      {
        $project: {
          _id: '$user._id',
          firstName: '$user.firstName',
          lastName: '$user.lastName',
          email: '$user.email',
          profilePhoto: '$user.profilePhoto',
          role: '$user.role',
          lastMessage: 1,
          unreadCount: 1
        }
      },
      {
        $sort: { 'lastMessage.createdAt': -1 }
      }
    ]);

    console.log(`Found ${conversations.length} conversations`);

    res.json({
      success: true,
      data: conversations
    });
  } catch (error) {
    console.error('Error getting conversations:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Get messages between current user and another user
// @route   GET /api/messages/:userId
// @access  Private
router.get('/:userId', protect, async (req, res) => {
  try {
    const currentUserId = req.user._id;
    const otherUserId = req.params.userId;

    console.log('Getting messages between:', currentUserId, 'and', otherUserId);

    if (!otherUserId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid user ID format'
      });
    }

    // Mark messages as read
    await Message.updateMany(
      {
        senderId: otherUserId,
        receiverId: currentUserId,
        read: false
      },
      { read: true }
    );

    // Get messages between the two users
    const messages = await Message.find({
      $or: [
        { senderId: currentUserId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: currentUserId }
      ]
    })
      .sort({ createdAt: 1 })
      .populate('senderId', 'firstName lastName email profilePhoto role')
      .populate('receiverId', 'firstName lastName email profilePhoto role');

    console.log(`Found ${messages.length} messages`);

    res.json({
      success: true,
      data: messages
    });
  } catch (error) {
    console.error('Error getting messages:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// @desc    Get unread message count
// @route   GET /api/messages/unread/count
// @access  Private
router.get('/unread/count', protect, async (req, res) => {
  try {
    const count = await Message.countDocuments({
      receiverId: req.user._id,
      read: false
    });

    res.json({
      success: true,
      data: { count }
    });
  } catch (error) {
    console.error('Error getting unread count:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;