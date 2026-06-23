/**
 * About.jsx — Two-column about section.
 *
 * Props:
 *   about {object} — from portfolioData.about
 *     .body  {string[]} — paragraphs
 *     .stats {object[]} — stat boxes { num, sup, label }
 *
 * Layout: light left panel (heading) + dark right panel (bio + stats).
 * Scroll-reveal (.rv) handled by useScrollReveal hook in App.jsx.
 */

import './About.scss';

const About = ({ about }) => {
  if (!about) return null;

  return (
    <div className="about" id="about">

      {/* ── Left panel: heading on light background ── */}
      <div className="about-left rv">
        <div>
          <div className="about-tag">01 — About</div>
        </div>
        <div>
          <h2 className="about-heading">
            Building things<br />
            people <em>actually</em><br />
            enjoy using.
          </h2>
        </div>
        {/* Large decorative number */}
        <div className="about-left-num" aria-hidden="true">01</div>
      </div>

      {/* ── Right panel: bio + stats ── */}
      <div className="about-right rv d2">
        <div className="about-tag about-tag--dark">Frontend Developer</div>

        {/* Bio paragraphs */}
        <div className="about-body">
          {about.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* 2×2 stat grid */}
        <div className="about-stats">
          {about.stats.map((stat, i) => (
            <div className="astat" key={i}>
              <div className="astat-n">
                {stat.num}
                {stat.sup && <sup>{stat.sup}</sup>}
              </div>
              <div className="astat-l">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
