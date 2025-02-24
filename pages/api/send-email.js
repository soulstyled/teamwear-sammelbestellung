import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { selections } = req.body;

  // Konfigurieren Sie den SMTP-Transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Erstellen Sie die E-Mail-Inhalte
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Sie können hier auch eine andere E-Mail-Adresse angeben
    subject: 'Neue Produktbestellung',
    text: `Bestelldetails:\n\n${JSON.stringify(selections, null, 2)}`,
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