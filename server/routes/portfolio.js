/**
 * routes/portfolio.js
 *
 * GET /api/portfolio
 * Responds with the complete portfolioData object as JSON.
 * The React front-end fetches this once on initial load.
 */

const express       = require('express');
const router        = express.Router();
const portfolioData = require('../data/portfolioData');

// GET /api/portfolio
router.get('/', (_req, res) => {
  try {
    res.json(portfolioData);
  } catch (err) {
    console.error('[portfolio route error]', err);
    res.status(500).json({ error: 'Failed to load portfolio data.' });
  }
});

module.exports = router;
