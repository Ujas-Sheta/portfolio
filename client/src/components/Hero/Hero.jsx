/**
 * Hero.jsx — Full-viewport hero section.
 *
 * Props:
 *   hero {object} — from portfolioData.hero
 *     .kicker  {string}   — top status line
 *     .lines   {string[]} — headline words (each gets its own animation line)
 *     .stats   {object[]} — bottom stat cells { label, value }
 *
 * Animation is driven by CSS classes added after the Loader finishes.
 * useScrollReveal hook is called in App.jsx to handle .rv elements.
 *
 * TO CHANGE the headline, edit portfolioData.hero.lines in the server.
 */

import { useEffect, useRef } from 'react';
import './Hero.scss';

const Hero = ({ hero }) => {
  const kickerRef = useRef(null);
  const hbotRef   = useRef(null);
  const hwRefs    = useRef([]);

  // Called by App → after loader exits, trigger hero entrance animations
  useEffect(() => {
    // App.jsx controls the outer page opacity; hero animations are CSS-driven.
    // We add 'show' classes after a short delay to stagger them nicely.
    const delays = [100, 200, 340, 440, 600]; // ms per .hw element + kicker + hbot

    const timers = [
      // Animate headline words
      setTimeout(() => hwRefs.current.forEach((hw) => hw?.classList.add('show')), delays[0]),
      // Animate kicker
      setTimeout(() => kickerRef.current?.classList.add('show'), delays[3]),
      // Animate bottom stats
      setTimeout(() => hbotRef.current?.classList.add('show'), delays[4]),
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  if (!hero) return null;

  return (
    <section className="hero" id="home">
      <div className="hero-top">

        {/* ── Status kicker ── */}
        <div className="hero-kicker">
          <div className="hero-kicker-inner" ref={kickerRef}>
            <div className="kdot" aria-hidden="true" />
            {hero.kicker}
          </div>
        </div>

        {/* ── Big animated headline ── */}
        <h1 className="hero-h">
          {hero.lines.map((line, i) => (
            <span className="hl" key={i}>
              <span
                className={`hw${i === 1 ? ' dim' : ''}`}
                ref={(el) => (hwRefs.current[i] = el)}
                style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
              >
                {line}
              </span>
              {/* Lime dot after last line */}
              {i === hero.lines.length - 1 && (
                <span
                  className="hw lm"
                  ref={(el) => (hwRefs.current[hero.lines.length] = el)}
                  style={{ transitionDelay: `${0.1 + hero.lines.length * 0.12}s` }}
                  aria-hidden="true"
                >
                  .
                </span>
              )}
            </span>
          ))}
        </h1>

        {/* ── Bottom stats row ── */}
        <div className="hero-bottom" ref={hbotRef}>
          {hero.stats.map((stat, i) => (
            <div className="hb-cell" key={i}>
              <span className="hb-label">{stat.label}</span>
              <span className="hb-val">{stat.value}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;
