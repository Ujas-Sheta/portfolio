/**
 * routes/contact.js
 *
 * POST /api/contact
 * Expected body: { name: string, email: string, message: string }
 *
 * DEV MODE  (no SMTP_HOST env var set):
 *   Logs the message to console and returns success.
 *
 * PROD MODE (set env vars below):
 *   Sends a real email via Nodemailer.
 *
 * Required env vars for email sending:
 *   SMTP_HOST     e.g. smtp.gmail.com
 *   SMTP_PORT     e.g. 587
 *   SMTP_USER     your email address
 *   SMTP_PASS     app password / SMTP password
 *   CONTACT_TO    destination inbox (defaults to uksheta15@gmail.com)
 */

const express    = require('express');
const router     = express.Router();
const nodemailer = require('nodemailer');

// POST /api/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // ── Validation ────────────────────────────────────────────────────────────
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'name, email, and message are all required.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }

  // ── Development: log only ─────────────────────────────────────────────────
  if (!process.env.SMTP_HOST) {
    console.log('[contact form submission]', { name, email, message });
    return res.json({
      success: true,
      message: 'Message received! (Dev mode — no email sent. Set SMTP env vars to enable.)',
    });
  }

  // ── Production: send real email ───────────────────────────────────────────
  try {
    const transporter = nodemailer.createTransport({
      host:   process.env.SMTP_HOST,
      port:   Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from:    `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to:      process.env.CONTACT_TO || 'uksheta15@gmail.com',
      subject: `New portfolio message from ${name}`,
      text:    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px">
          <h2>New message from your portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <hr>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
    });

    res.json({ success: true, message: 'Your message has been sent. I will be in touch soon!' });
  } catch (err) {
    console.error('[contact route error]', err);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

module.exports = router;
