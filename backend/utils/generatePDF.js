const PDFDocument = require('pdfkit');

const generatePDF = async (type, data) => {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50 });
      const chunks = [];

      doc.on('data', chunk => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));

      // Header
      doc.fontSize(20).text('CRM Solar System', { align: 'center' });
      doc.moveDown();
      doc.fontSize(16).text(`${type.toUpperCase()} Report`, { align: 'center' });
      doc.moveDown();
      doc.fontSize(10).text(`Generated on: ${new Date().toLocaleString()}`, { align: 'right' });
      doc.moveDown(2);

      if (type === 'users' && Array.isArray(data)) {
        // Users list table
        const tableTop = 150;
        const itemPerPage = 20;
        
        // Table headers
        doc.fontSize(10).font('Helvetica-Bold');
        doc.text('Name', 50, tableTop);
        doc.text('Email', 200, tableTop);
        doc.text('Phone', 350, tableTop);
        doc.text('Role', 450, tableTop);
        doc.text('Status', 500, tableTop);
        
        doc.font('Helvetica');
        let y = tableTop + 20;

        data.forEach((user, i) => {
          if (i > 0 && i % itemPerPage === 0) {
            doc.addPage();
            y = 50;
          }

          doc.text(user.fullName || `${user.firstName} ${user.lastName}`, 50, y);
          doc.text(user.email, 200, y);
          doc.text(user.phone || 'N/A', 350, y);
          doc.text(user.role, 450, y);
          doc.text(user.isActive ? 'Active' : 'Inactive', 500, y);
          
          y += 20;
        });
      } else if (type === 'user' && !Array.isArray(data)) {
        // Single user details
        doc.fontSize(12).font('Helvetica-Bold');
        doc.text('User Details');
        doc.font('Helvetica');
        doc.moveDown();
        
        doc.text(`Name: ${data.fullName}`);
        doc.text(`Email: ${data.email}`);
        doc.text(`Phone: ${data.phone || 'N/A'}`);
        doc.text(`Role: ${data.role}`);
        doc.text(`Status: ${data.isActive ? 'Active' : 'Inactive'}`);
        doc.text(`Company: ${data.company || 'N/A'}`);
        
        if (data.address) {
          doc.moveDown();
          doc.font('Helvetica-Bold').text('Address:');
          doc.font('Helvetica');
          doc.text(`${data.address.street || ''}`);
          doc.text(`${data.address.city || ''}, ${data.address.state || ''} ${data.address.zipCode || ''}`);
          doc.text(data.address.country || '');
        }

        if (data.hyperlinks && data.hyperlinks.length > 0) {
          doc.moveDown();
          doc.font('Helvetica-Bold').text('Hyperlinks:');
          doc.font('Helvetica');
          data.hyperlinks.forEach(link => {
            doc.text(`• ${link.title}: ${link.url}`);
          });
        }

        if (data.notes && data.notes.length > 0) {
          doc.moveDown();
          doc.font('Helvetica-Bold').text('Notes:');
          doc.font('Helvetica');
          data.notes.forEach(note => {
            doc.text(`• ${note.content} (${new Date(note.createdAt).toLocaleDateString()})`);
          });
        }
      }

      doc.end();
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { generatePDF };