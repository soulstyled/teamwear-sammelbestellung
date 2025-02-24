import nodemailer from 'nodemailer';

function formatOrderDetails(order) {
  if (!order || order.length === 0) return 'Keine Bestelldetails verfügbar.';
  return order.map(item => {
    return `Product ID: ${item.productId}\nSelections:\n${item.selections.map(selection => `  - Size: ${selection.size}, Quantity: ${selection.quantity}, Initials: ${selection.initials}`).join('\n')}`;
  }).join('\n\n');
}

export default async function handler(req, res) {
  const { order } = req.body;

  if (!order || order.length === 0) {
    return res.status(400).json({ success: false, error: 'Keine Bestelldetails verfügbar.' });
  }

  // Konfigurieren Sie den SMTP-Transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Erstellen Sie die E-Mail-Inhalte
  const orderDetails = formatOrderDetails(order);

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Sie können hier auch eine andere E-Mail-Adresse angeben
    subject: 'Neue Produktbestellung',
    text: `Bestelldetails:\n\n${orderDetails}`,
  };

  try {
    // Senden Sie die E-Mail
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}