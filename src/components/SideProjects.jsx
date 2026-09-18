import { sideProjects } from '../data/content'
import { GitHubIcon } from './Icons'

export default function SideProjects() {
  return (
    <section className="wrap" id="side-projects">
      <div className="section-head">
        <span className="eyebrow">04 / Side Projects</span>
        <h2>Side projects</h2>
      </div>

      <div className="sp-other-grid">
        {sideProjects.map((project) => (
          <article className="sp-other-card" key={project.id}>
            <span className="side-project-period mono">{project.period}</span>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="tags compact-tags">
              {project.stack?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            {project.githubUrl && (
              <a className="text-link sp-github" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                Repository
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
