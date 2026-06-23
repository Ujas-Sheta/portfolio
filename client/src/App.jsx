/**
 * App.jsx — Root application component.
 *
 * Responsibilities:
 *  1. Fetch all portfolio data from GET /api/portfolio on mount.
 *  2. Show the Loader animation while waiting.
 *  3. After loader exits, reveal the full page.
 *  4. Pass fetched data slices as props to each section component.
 *  5. Run scroll-reveal observer once sections are mounted.
 *
 * Data flow:
 *   Express /api/portfolio  →  App (state)  →  props  →  components
 *
 * TO ADD A NEW SECTION:
 *  1. Add its content to server/data/portfolioData.js
 *  2. Create a component in src/components/YourSection/
 *  3. Import and render it below, passing the relevant data slice
 */

import { useState, useEffect } from 'react';

// Hooks
import useScrollReveal from './hooks/useScrollReveal';

// Layout & chrome
import Cursor     from './components/Cursor/Cursor';
import Loader     from './components/Loader/Loader';
import Nav        from './components/Nav/Nav';
import Footer     from './components/Footer/Footer';

// Page sections (in order)
import Hero       from './components/Hero/Hero';
import Marquee    from './components/Marquee/Marquee';
import About      from './components/About/About';
import Experience from './components/Experience/Experience';
import Skills     from './components/Skills/Skills';
import Projects   from './components/Projects/Projects';
import Education  from './components/Education/Education';
import Contact    from './components/Contact/Contact';

import './App.scss';

function App() {
  // ── State ──────────────────────────────────────────────────────────────────
  const [data,        setData]        = useState(null);   // portfolio JSON from API
  const [apiError,    setApiError]    = useState(false);  // true if fetch failed
  const [pageVisible, setPageVisible] = useState(false);  // fade-in after loader

  // ── Fetch portfolio data once on mount ────────────────────────────────────
  useEffect(() => {
    fetch('/api/portfolio')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => {
        console.error('[App] API fetch failed:', err);
        setApiError(true);
      });
  }, []);

  // ── Scroll-reveal ─────────────────────────────────────────────────────────
  // Passing `data` means the observer runs AFTER all sections are in the DOM.
  // If we passed nothing (empty deps), it would run before sections render
  // and find zero .rv elements — causing all sections to stay invisible.
  useScrollReveal(data);

  // ── Loader complete ───────────────────────────────────────────────────────
  const handleLoaderComplete = () => setPageVisible(true);

  // ── Error fallback ────────────────────────────────────────────────────────
  if (apiError) {
    return (
      <div className="api-error">
        <h2>API connection failed</h2>
        <p>Make sure the Express server is running on port 5000:</p>
        <code>cd server &amp;&amp; npm run dev</code>
      </div>
    );
  }

  return (
    <>
      {/* Custom mouse cursor (CSS hides it on mobile) */}
      <Cursor />

      {/* Full-screen loader plays once, then calls handleLoaderComplete */}
      <Loader onComplete={handleLoaderComplete} />

      {/* Main page — starts at opacity 0, fades to 1 after loader exits */}
      <div className={`page-wrapper${pageVisible ? ' page-visible' : ''}`}>
        {data && (
          <>
            <Nav        meta={data.meta}                                        />
            <Hero       hero={data.hero}                                        />
            <Marquee    items={data.marqueeItems}                               />
            <About      about={data.about}                                      />
            <Experience items={data.experience}                                 />
            <Skills     skills={data.skills}                                    />
            <Projects   projects={data.projects}                                />
            <Education  education={data.education} certs={data.certifications} />
            <Contact    meta={data.meta}                                        />
            <Footer     meta={data.meta}                                        />
          </>
        )}
      </div>
    </>
  );
}

export default App;
