# Ujas Sheta — Portfolio (Full-Stack Source)

A full-stack portfolio website built with **React + Vite** (frontend) and **Node.js + Express** (backend). All content is stored in a single data file and served via a REST API. Styling is written in **pure SCSS** — no Bootstrap or Tailwind.

---

## Folder Structure

```
portfolio-source/
├── client/                         # React + Vite frontend
│   ├── index.html                  # Entry HTML (Google Fonts loaded here)
│   ├── vite.config.js              # Vite config + proxy to Express
│   ├── package.json
│   └── src/
│       ├── main.jsx                # App entry point
│       ├── App.jsx                 # Root component — fetches API, renders sections
│       ├── App.scss
│       ├── styles/
│       │   ├── _variables.scss     # All design tokens (colours, fonts, breakpoints)
│       │   ├── _reset.scss         # Browser normalisation
│       │   ├── _animations.scss    # Keyframes + .rv / .cr reveal classes
│       │   └── main.scss           # Imports all partials
│       ├── hooks/
│       │   └── useScrollReveal.js  # IntersectionObserver for scroll animations
│       └── components/
│           ├── Cursor/             # Custom mouse cursor
│           ├── Loader/             # Intro loading animation
│           ├── Nav/                # Fixed navigation bar
│           ├── Hero/               # Full-viewport hero section
│           ├── Marquee/            # Infinite scrolling tech ticker
│           ├── About/              # Two-column about section
│           ├── Experience/         # Work history timeline
│           ├── Skills/             # Skills grid
│           ├── Projects/           # Project cards
│           ├── Education/          # Education + certifications
│           ├── Contact/            # Contact form (posts to API) + details
│           └── Footer/             # Site footer
│
└── server/                         # Node.js + Express backend
    ├── server.js                   # Express app entry point
    ├── package.json
    ├── data/
    │   └── portfolioData.js        # ← ALL SITE CONTENT LIVES HERE
    └── routes/
        ├── portfolio.js            # GET /api/portfolio
        └── contact.js              # POST /api/contact
```

---

## Quick Start

### 1. Start the Express API server

```bash
cd server
npm install
npm run dev
# Running at http://localhost:5000
```

### 2. Start the React dev server (new terminal)

```bash
cd client
npm install
npm run dev
# Running at http://localhost:5173
```

Open **http://localhost:5173** in your browser.

The Vite proxy forwards all `/api/*` requests to Express on port 5000 — no CORS issues in development.

---

## How to Update Content

**All text, links, dates, skills, projects, etc. live in one file:**

```
server/data/portfolioData.js
```

Edit it and save. The API serves the updated data on the next request (no rebuild needed in dev mode).

Examples:
- Add a new project → add an object to the `projects` array
- Change your email → update `meta.email`
- Add a skill → add an object to the `skills` array

---

## How to Enable Contact Form Email

In production, set these environment variables in `server/.env`:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your-app-password
CONTACT_TO=uksheta15@gmail.com
```

In development (no SMTP vars), the form logs to console and still returns success.

---

## Production Build

```bash
# Build the React app
cd client && npm run build
# Output: client/dist/

# Serve dist/ as static files from Express (add express.static middleware)
# Or deploy client/dist/ to Netlify / Vercel and server/ to Render / Railway
```

---

## Tech Stack

| Layer     | Tech                        |
|-----------|-----------------------------|
| Frontend  | React 18, Vite              |
| Styling   | SCSS (pure — no frameworks) |
| Backend   | Node.js, Express            |
| Email     | Nodemailer                  |
| Fonts     | Google Fonts (Syne + Inter) |

