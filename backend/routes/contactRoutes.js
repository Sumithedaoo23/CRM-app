const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Get all contacts with filters and pagination
router.get('/', async (req, res) => {
  try {
    const { status, search, page = 1, limit = 10 } = req.query;
    const query = {};

    if (status) {
      query.status = status;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    const contacts = await Contact.find(query)
      .skip(skip)
      .limit(parseInt(limit))
      .sort({ createdAt: -1 });

    const total = await Contact.countDocuments(query);

    res.json({
      success: true,
      data: contacts,
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

// Create new contact
router.post('/', async (req, res) => {
  try {
    const { name, email, phone, company, position, status, notes, tags, createdBy } = req.body;

    const contact = new Contact({
      name,
      email,
      phone,
      company,
      position,
      status: status || 'Active',
      createdBy,
      notes,
      tags: tags || []
    });

    await contact.save();

    res.status(201).json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get single contact
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Update contact
router.put('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact not found'
      });
    }

    res.json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Delete contact
router.delete('/:id', async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact not found'
      });
    }

    res.json({
      success: true,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Export contacts to PDF
router.get('/export/pdf', async (req, res) => {
  try {
    const { status, search } = req.query;
    const query = {};

    if (status) {
      query.status = status;
    }
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const contacts = await Contact.find(query).sort({ createdAt: -1 });

    const PDFDocument = require('pdfkit');
    const doc = new PDFDocument({ margin: 30, size: 'A4' });
    
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=contacts.pdf');
    
    doc.pipe(res);

    doc.fontSize(20).text('Contact List', { align: 'center' });
    doc.moveDown();
    doc.fontSize(10).text(`Generated on: ${new Date().toLocaleDateString()}`, { align: 'right' });
    doc.moveDown();

    const tableTop = 150;
    const col1 = 50;
    const col2 = 200;
    const col3 = 350;
    const col4 = 450;

    doc.fontSize(10).font('Helvetica-Bold');
    doc.text('Name', col1, tableTop);
    doc.text('Email', col2, tableTop);
    doc.text('Phone', col3, tableTop);
    doc.text('Status', col4, tableTop);

    doc.moveTo(30, tableTop + 20)
       .lineTo(565, tableTop + 20)
       .stroke();

    let y = tableTop + 30;
    doc.font('Helvetica');

    contacts.forEach((contact, i) => {
      if (y > 750) {
        doc.addPage();
        y = 50;
      }

      doc.text(contact.name || 'N/A', col1, y);
      doc.text(contact.email || 'N/A', col2, y);
      doc.text(contact.phone || 'N/A', col3, y);
      doc.text(contact.status || 'Inactive', col4, y);
      
      y += 20;
    });

    doc.moveDown();
    doc.fontSize(12).text(`Total Contacts: ${contacts.length}`, { align: 'right' });

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