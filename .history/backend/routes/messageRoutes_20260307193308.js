const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const Conversation = require('../models/Conversation');
const User = require('../models/User');
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/messages/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png|gif|pdf|doc|docx|txt|xlsx|xls|ppt|pptx/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('File type not allowed'));
    }
  }
});

// Send a new message
router.post('/send', upload.array('attachments', 5), async (req, res) => {
  try {
    const { senderId, senderName, senderRole, receiverId, content } = req.body;
    
    if (!senderId || !receiverId || !content) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }

    // Get receiver info
    const receiver = await User.findById(receiverId);
    if (!receiver) {
      return res.status(404).json({
        success: false,
        error: 'Receiver not found'
      });
    }

    // Generate conversation ID
    const conversationId = Message.generateConversationId(senderId, receiverId);

    // Process attachments
    const attachments = [];
    if (req.files && req.files.length > 0) {
      req.files.forEach(file => {
        attachments.push({
          filename: file.originalname,
          fileUrl: `/uploads/messages/${file.filename}`,
          fileType: file.mimetype,
          fileSize: file.size
        });
      });
    }

    // Create message
    const message = new Message({
      senderId,
      senderName,
      senderRole,
      receiverId,
      receiverName: receiver.firstName + ' ' + receiver.lastName,
      content,
      attachments,
      conversationId
    });

    await message.save();

    // Update or create conversation
    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] }
    });

    if (!conversation) {
      const sender = await User.findById(senderId);
      conversation = new Conversation({
        participants: [senderId, receiverId],
        participantNames: [
          sender.firstName + ' ' + sender.lastName,
          receiver.firstName + ' ' + receiver.lastName
        ],
        unreadCount: new Map()
      });
    }

    // Update last message
    conversation.lastMessage = {
      content,
      senderId,
      senderName,
      createdAt: new Date()
    };
    conversation.updatedAt = new Date();

    // Increment unread count for receiver
    const currentUnread = conversation.unreadCount.get(receiverId.toString()) || 0;
    conversation.unreadCount.set(receiverId.toString(), currentUnread + 1);

    await conversation.save();

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

// Get conversations for a user
router.get('/conversations/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const conversations = await Conversation.find({
      participants: userId
    })
    .sort({ updatedAt: -1 })
    .limit(50);

    // Get unread counts for each conversation
    const conversationsWithDetails = await Promise.all(conversations.map(async (conv) => {
      const otherParticipantId = conv.participants.find(id => id.toString() !== userId);
      const otherUser = await User.findById(otherParticipantId).select('firstName lastName profilePhoto');
      
      const unreadForUser = conv.unreadCount.get(userId) || 0;
      
      // Get last few messages for preview
      const recentMessages = await Message.find({
        conversationId: Message.generateConversationId(userId, otherParticipantId)
      })
      .sort({ createdAt: -1 })
      .limit(1);

      return {
        _id: conv._id,
        otherUser: {
          _id: otherUser?._id,
          name: otherUser ? `${otherUser.firstName} ${otherUser.lastName}` : 'Unknown',
          profilePhoto: otherUser?.profilePhoto
        },
        lastMessage: conv.lastMessage,
        unreadCount: unreadForUser,
        updatedAt: conv.updatedAt,
        recentMessage: recentMessages[0]
      };
    }));

    res.json({
      success: true,
      data: conversationsWithDetails
    });

  } catch (error) {
    console.error('Error fetching conversations:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get messages for a conversation
router.get('/:userId/:otherUserId', async (req, res) => {
  try {
    const { userId, otherUserId } = req.params;
    const { page = 1, limit = 50 } = req.query;

    const conversationId = Message.generateConversationId(userId, otherUserId);

    const messages = await Message.find({
      conversationId
    })
    .sort({ createdAt: -1 })
    .skip((parseInt(page) - 1) * parseInt(limit))
    .limit(parseInt(limit));

    // Mark messages as read
    await Message.updateMany(
      {
        conversationId,
        receiverId: userId,
        isRead: false
      },
      {
        isRead: true,
        readAt: new Date()
      }
    );

    // Reset unread count in conversation
    await Conversation.findOneAndUpdate(
      {
        participants: { $all: [userId, otherUserId] }
      },
      {
        $set: { [`unreadCount.${userId}`]: 0 }
      }
    );

    res.json({
      success: true,
      data: messages.reverse(),
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit)
      }
    });

  } catch (error) {
    console.error('Error fetching messages:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Mark messages as read
router.put('/read/:messageId', async (req, res) => {
  try {
    const { messageId } = req.params;

    const message = await Message.findByIdAndUpdate(
      messageId,
      {
        isRead: true,
        readAt: new Date()
      },
      { new: true }
    );

    res.json({
      success: true,
      data: message
    });

  } catch (error) {
    console.error('Error marking message as read:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get unread count for a user
router.get('/unread/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const unreadCount = await Message.countDocuments({
      receiverId: userId,
      isRead: false
    });

    res.json({
      success: true,
      data: { unreadCount }
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
