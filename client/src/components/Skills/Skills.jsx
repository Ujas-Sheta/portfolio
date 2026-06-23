/**
 * Skills.jsx — Skills grid.
 *
 * Props:
 *   skills {object[]} — from portfolioData.skills
 *     Each item: { num, name, desc }
 *
 * 3-column responsive grid.
 * Hover: lime top-border wipe animation (pure CSS).
 *
 * TO ADD a skill: add an object to portfolioData.skills in the server.
 */

import './Skills.scss';

const Skills = ({ skills }) => {
  if (!skills?.length) return null;

  return (
    <section className="skills" id="skills">
      <div className="skills-top">
        <div className="sec-header rv">
          <span className="sec-label">03 — Skills</span>
          <h2 className="sec-h">What I work with</h2>
        </div>
      </div>

      <div className="skills-grid rv d1">
        {skills.map((skill, i) => (
          <div className="sk" key={i}>
            <div className="sk-n">{skill.num}</div>
            <div className="sk-name">{skill.name}</div>
            <div className="sk-desc">{skill.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
