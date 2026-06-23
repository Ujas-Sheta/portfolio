/**
 * Experience.jsx — Work history timeline.
 *
 * Props:
 *   items {object[]} — from portfolioData.experience
 *     Each item: { id, num, company, location, date, current, badge, role, tags[], bullets[] }
 *
 * Layout: each job is a two-column card.
 *   Left (ei-meta): company info, date, badge.
 *   Right (ei-body): role, tech tags, bullet points.
 *
 * Hover effects (lime accent bar, tag colour change) are pure CSS.
 */

import './Experience.scss';

const Experience = ({ items }) => {
  if (!items?.length) return null;

  return (
    <section className="experience" id="experience">

      {/* Section header */}
      <div className="sec-header rv">
        <span className="sec-label">02 — Experience</span>
        <h2 className="sec-h">Work history</h2>
      </div>

      <div className="exp-timeline">
        {items.map((job, i) => (
          <div className={`exp-item rv d${(i % 4) + 1}`} key={job.id}>

            {/* ── Left: meta panel ── */}
            <div className="ei-meta">
              <div className="ei-meta-top">
                <span className="ei-num">{job.num}</span>
                <div className="ei-co">{job.company}</div>
                <div className="ei-loc">{job.location}</div>
                <div className="ei-date">{job.date}</div>
              </div>

              <div className="ei-status">
                <span className={`ei-badge${job.current ? ' current' : ''}`}>
                  {job.badge}
                </span>
              </div>
            </div>

            {/* ── Right: body panel ── */}
            <div className="ei-body">
              <div className="ei-role">{job.role}</div>

              {/* Tech tags */}
              <div className="ei-tags">
                {job.tags.map((tag, j) => (
                  <span className="etag" key={j}>{tag}</span>
                ))}
              </div>

              <div className="ei-divider" aria-hidden="true" />

              {/* Bullet points */}
              <ul className="ei-bullets">
                {job.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Experience;
