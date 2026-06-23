/**
 * Projects.jsx — Selected work grid.
 *
 * Props:
 *   projects {object[]} — from portfolioData.projects
 *     Each item: { id, num, name, desc, tags[], url, thumbClass, thumbLabel, thumbEmoji }
 *
 * Each card is an <a> that links to project.url.
 * Hover: name turns lime, arrow rotates 45°, lime border slides in.
 *
 * TO ADD a project: add an object to portfolioData.projects.
 * TO ADD a thumbnail: add a .proj-thumb-N class in Projects.scss with your gradient.
 */

import './Projects.scss';

const Projects = ({ projects }) => {
  if (!projects?.length) return null;

  return (
    <section className="projects" id="projects">
      <div className="sec-header rv">
        <span className="sec-label">04 — Projects</span>
        <h2 className="sec-h">Selected work</h2>
      </div>

      <div className="proj-grid rv d1">
        {projects.map((project) => (
          <a
            href={project.url}
            className="proj-card"
            key={project.id}
            target={project.url !== '#' ? '_blank' : undefined}
            rel={project.url !== '#' ? 'noopener noreferrer' : undefined}
            aria-label={`View ${project.name} project`}
          >
            {/* Thumbnail / preview image area */}
            <div className={`proj-thumb ${project.thumbClass}`}>
              <div className="thumb-label">{project.thumbLabel}</div>
              <span aria-hidden="true">{project.thumbEmoji}</span>
            </div>

            {/* Card content */}
            <div className="proj-card-inner">
              <div className="proj-num">{project.num}</div>
              <div className="proj-name">{project.name}</div>
              <div className="proj-desc">{project.desc}</div>

              {/* Tech tags */}
              <div className="proj-tags-row">
                {project.tags.map((tag, i) => (
                  <span className="ptag" key={i}>{tag}</span>
                ))}
              </div>

              {/* Arrow button */}
              <div className="proj-arrow" aria-hidden="true">↗</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
