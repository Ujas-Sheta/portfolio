/**
 * Education.jsx — Academic background + certifications.
 *
 * Props:
 *   education {object[]} — from portfolioData.education
 *     Each item: { id, year, school, degree }
 *   certs {object[]} — from portfolioData.certifications
 *     Each item: { id, label }
 *
 * Hover on edu card: lime bottom-border wipe.
 * Hover on cert pill: lime border + text.
 */

import './Education.scss';

const Education = ({ education, certs }) => {
  if (!education?.length) return null;

  return (
    <section className="education" id="education">
      <div className="sec-header rv">
        <span className="sec-label">05 — Education</span>
        <h2 className="sec-h">Academic background</h2>
      </div>

      {/* Degree cards */}
      <div className="edu-grid rv d1">
        {education.map((item) => (
          <div className="edu-card" key={item.id}>
            <div className="edu-yr">{item.year}</div>
            <div className="edu-school">{item.school}</div>
            <div className="edu-deg">{item.degree}</div>
          </div>
        ))}
      </div>

      {/* Certification pills */}
      {certs?.length > 0 && (
        <div className="cert-row rv d2">
          {certs.map((cert) => (
            <div className="cert" key={cert.id}>
              <span className="cdot" aria-hidden="true" />
              {cert.label}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Education;
