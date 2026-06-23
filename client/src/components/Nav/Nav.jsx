/**
 * Nav.jsx — Fixed top navigation bar.
 *
 * Props:
 *   meta {object} — from portfolioData.meta
 *     .name, .email
 *
 * Features:
 *  - Logo pill "US." → links to top
 *  - Links to each section anchor
 *  - "Hire me" CTA button → mailto
 *  - Nav links hidden on tablet (< 900px); CTA remains
 */

import './Nav.scss';

const Nav = ({ meta }) => {
  return (
    <nav id="nav" aria-label="Main navigation">
      {/* Logo */}
      <a href="#home" className="nav-logo">US.</a>

      <div className="nav-right">
        {/* Section links (hidden on mobile) */}
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* CTA */}
        <a
          href={`mailto:${meta?.email}`}
          className="nav-cta"
          aria-label="Send Ujas an email"
        >
          Hire me
        </a>
      </div>
    </nav>
  );
};

export default Nav;
