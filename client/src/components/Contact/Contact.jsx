/**
 * Contact.jsx — Contact section with working form.
 *
 * Props:
 *   meta {object} — from portfolioData.meta
 *     .email, .phone, .linkedin, .linkedinUrl, .github, .githubUrl, .status, .availability, .location
 *
 * The form POSTs to POST /api/contact.
 * On success: shows a thank-you message.
 * On error:   shows the error message from the API.
 *
 * TO ENABLE real email sending: set SMTP env vars in server/.env
 */

import { useState } from 'react';
import './Contact.scss';

const INITIAL_FORM = { name: '', email: '', message: '' };

const Contact = ({ meta }) => {
  const [form,    setForm]    = useState(INITIAL_FORM);
  const [status,  setStatus]  = useState('idle'); // idle | sending | success | error
  const [message, setMessage] = useState('');

  if (!meta) return null;

  // ── Handle input changes ───────────────────────────────────────────────────
  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ── Handle form submit ────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setMessage('');

    try {
      const res  = await fetch('/api/contact', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setMessage(data.message || 'Message sent!');
        setForm(INITIAL_FORM);
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Could not connect to server. Please email directly.');
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-inner">

        {/* ── Heading block ── */}
        <div className="rv">
          <div className="contact-label">06 — Let's talk</div>
          <h2 className="contact-headline">
            Have a project<br />in mind?
          </h2>
          <p className="contact-sub">
            Open to full-time roles, freelance work and interesting collaborations.
            Based in Canada, available remotely worldwide.
          </p>
          <a href={`mailto:${meta.email}`} className="contact-email-big">
            {meta.email}
          </a>
        </div>

        {/* ── Contact details ── */}
        <div className="contact-cols rv d2">
          <div>
            <div className="cc-label">Phone</div>
            <a href={`tel:${meta.phone}`} className="cc-val">{meta.phone}</a>
          </div>
          <div>
            <div className="cc-label">LinkedIn</div>
            <a href={meta.linkedinUrl} className="cc-val" target="_blank" rel="noopener noreferrer">
              {meta.linkedin}
            </a>
          </div>
          <div>
            <div className="cc-label">GitHub</div>
            <a href={meta.githubUrl} className="cc-val" target="_blank" rel="noopener noreferrer">
              {meta.github}
            </a>
          </div>
          <div>
            <div className="cc-label">Location</div>
            <div className="cc-val">{meta.location}</div>
          </div>
          <div>
            <div className="cc-label">Status</div>
            <div className="cc-val avail">● {meta.status}</div>
          </div>
          <div>
            <div className="cc-label">Availability</div>
            <div className="cc-val">{meta.availability}</div>
          </div>
        </div>

        {/* ── Contact Form ── */}
        <div className="contact-form-wrap rv d3">
          <h3 className="form-heading">Send me a message</h3>

          {status === 'success' ? (
            <div className="form-success">
              <span className="form-success-icon">✓</span>
              <p>{message}</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              {status === 'error' && (
                <p className="form-error">{message}</p>
              )}

              <button
                type="submit"
                className="form-submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send message →'}
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
