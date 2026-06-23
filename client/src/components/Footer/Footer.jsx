/**
 * Footer.jsx — Minimal site footer.
 *
 * Props:
 *   meta {object} — from portfolioData.meta
 *     .name, .email, .year
 */

import './Footer.scss';

const Footer = ({ meta }) => {
  if (!meta) return null;

  return (
    <footer>
      <span className="ft-l">
        © {meta.year} {meta.name} — Frontend Developer, {meta.location}
      </span>
      <span className="ft-r">{meta.email}</span>
    </footer>
  );
};

export default Footer;
