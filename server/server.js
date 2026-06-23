/**
 * server.js — Main Express application entry point
 *
 * Starts the API server on PORT (default 5000).
 * Two route groups:
 *   GET  /api/portfolio  — returns all portfolio content as JSON
 *   POST /api/contact    — handles contact form submissions
 *
 * HOW TO RUN:
 *   cd server
 *   npm install
 *   npm run dev        ← development (auto-restart on change)
 *   npm start          ← production
 */

const express = require('express');
const cors    = require('cors');

// Import route handlers
const portfolioRoutes = require('./routes/portfolio');
const contactRoutes   = require('./routes/contact');

const app  = express();
const PORT = process.env.PORT || 5000;

// ─── Middleware ──────────────────────────────────────────────────────────────

// Parse JSON request bodies (needed for POST /api/contact)
app.use(express.json());

// Cross-Origin Resource Sharing:
// During development the Vite dev server runs on :5173 and calls this on :5000.
// In production, change CLIENT_ORIGIN env var to your actual domain.
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));

// ─── Routes ─────────────────────────────────────────────────────────────────

app.use('/api/portfolio', portfolioRoutes);
app.use('/api/contact',   contactRoutes);

// Simple health-check (useful for deploy platforms like Render / Railway)
app.get('/health', (_req, res) => res.json({ status: 'ok' }));

// ─── Start server ────────────────────────────────────────────────────────────

app.listen(PORT, () => {
  console.log(`[server] running → http://localhost:${PORT}`);
  console.log(`[server] portfolio API → http://localhost:${PORT}/api/portfolio`);
});
