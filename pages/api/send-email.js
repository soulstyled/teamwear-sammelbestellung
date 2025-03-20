import nodemailer from 'nodemailer';
import { products } from '../../app/product-data';

function calculatePrice(productId, size, hasInitials) {
  const product = products.find(p => p.id === productId);
  if (!product) return 0;
  
  let basePrice = 0;
  
  // Einheitspreis für Produkte ohne Größenunterscheidung verwenden
  if (product.hasUniformSizing && product.price) {
    basePrice = product.price;
  } else {
    // Standardlogik für Produkte mit unterschiedlichen Größen
    // Für Kleidungsgrößen (Kinder vs. Erwachsene)
    const isChildSize = ["116", "128", "140", "152", "164", "176"].includes(size);
    basePrice = isChildSize ? (product.priceChildren || 0) : (product.priceAdults || 0);
  }
  
  // Aufpreis für Initialen hinzufügen (3,00 €)
  const initialsPrice = hasInitials ? 3.00 : 0;
  
  return basePrice + initialsPrice;
}

function formatOrderDetails(order) {
  if (!order || order.length === 0) return 'Keine Bestelldetails verfügbar.';
  
  let totalAmount = 0;
  const formattedOrder = order.map(item => {
    const product = products.find(p => p.id === item.productId);
    const productName = product ? product.name : `Unbekanntes Produkt (${item.productId})`;
    
    const selectionDetails = item.selections.map(selection => {
      const hasInitials = !!selection.initials;
      const price = calculatePrice(item.productId, selection.size, hasInitials);
      const quantity = parseInt(selection.quantity) || 1;
      const itemTotal = price * quantity;
      
      totalAmount += itemTotal;
      
      return `  - Größe: ${selection.size}, Menge: ${selection.quantity}${selection.initials ? `, Initialen: ${selection.initials}` : ''} | Preis: ${price.toFixed(2)} € | Gesamt: ${itemTotal.toFixed(2)} €`;
    }).join('\n');
    
    return `Produkt: ${productName}\nAuswahl:\n${selectionDetails}`;
  }).join('\n\n');
  
  return formattedOrder + `\n\nGesamtbetrag: ${totalAmount.toFixed(2)} €`;
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