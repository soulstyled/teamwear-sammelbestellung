import nodemailer from 'nodemailer';

function formatOrderDetails(order) {
  if (!order || order.length === 0) return 'Keine Bestelldetails verfügbar.';
  
  return order.map(item => {
    return `Produkt ID: ${item.productId}\nAuswahl:\n${item.selections.map(selection => 
      `  - Größe: ${selection.size}, Menge: ${selection.quantity}${selection.initials ? `, Initialen: ${selection.initials}` : ''}`
    ).join('\n')}`;
  }).join('\n\n');
}

function formatCustomerData(customer) {
  if (!customer) return 'Keine Kundendaten verfügbar.';
  
  return `Name: ${customer.name || '-'}\nMannschaft: ${customer.team || '-'}\nKontakt: ${customer.contact || '-'}`;
}

export default async function handler(req, res) {
  const { customer, order } = req.body;
  
  if (!order || order.length === 0) {
    return res.status(400).json({ success: false, error: 'Keine Bestelldetails verfügbar.' });
  }
  
  if (!customer) {
    return res.status(400).json({ success: false, error: 'Keine Kundendaten verfügbar.' });
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
  const customerDetails = formatCustomerData(customer);
  const orderDetails = formatOrderDetails(order);
  
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Sie können hier auch eine andere E-Mail-Adresse angeben
    subject: `Neue Teamwear-Bestellung von ${customer.name || 'Unbekannt'}`,
    text: `Kundendaten:\n\n${customerDetails}\n\nBestelldetails:\n\n${orderDetails}`,
  };

  try {
    // Senden Sie die E-Mail
    await transporter.sendMail(mailOptions);
    console.log('E-Mail erfolgreich gesendet');
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    res.status(500).json({ success: false, error: error.message });
  }
}