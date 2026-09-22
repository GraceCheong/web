import { GitHubIcon } from './Icons'

export default function SideProjects({ sideProjects, ui }) {
  return (
    <section className="wrap section" id="side-projects">
      <div className="section-head">
        <span className="eyebrow">{ui.sections.sideProjects.number}</span>
        <h2>{ui.sections.sideProjects.heading}</h2>
      </div>

      <div className="side-project-list">
        {sideProjects.map((project) => (
          <article className="side-project-row" key={project.id}>
            <div className="side-project-date mono">{project.period}</div>
            <div className="side-project-main">
              <div className="side-project-heading">
                <h3>{project.title}</h3>
                {project.githubUrl && (
                  <a
                    className="icon-link"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} ${ui.profileLinks.repository}`}
                  >
                    <GitHubIcon />
                  </a>
                )}
              </div>
              <p>{project.description}</p>
              <div className="tags compact-tags">
                {project.stack?.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
