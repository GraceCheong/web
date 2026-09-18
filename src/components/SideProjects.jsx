import { useState } from 'react'
import { sideProjects } from '../data/content'
import VideoEmbed from './VideoEmbed'
import { GitHubIcon } from './Icons'

function FeaturedProject({ project }) {
  const [open, setOpen] = useState(false)
  const panelId = `${project.id}-panel`

  return (
    <article className="sp-card">
      <h3>{project.title}</h3>
      <p className="subtitle">{project.subtitle}</p>
      <div className="tags">
        {project.stack?.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <button
        type="button"
        className="tl-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Hide details' : 'View details'}
        <span className="tl-toggle-icon">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div id={panelId} className="tl-panel">
          {project.problem && (
            <div className="columns">
              <div>
                <h4>Problem</h4>
                <p>{project.problem}</p>
              </div>
              <div>
                <h4>What I Built</h4>
                <p>{project.whatBuilt}</p>
              </div>
            </div>
          )}

          {project.video && <VideoEmbed url={project.video} title={`${project.title} demo`} />}

          {project.githubUrl && (
            <a className="text-link sp-github" href={project.githubUrl} target="_blank" rel="noopener">
              <GitHubIcon />
              GitHub
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default function SideProjects() {
  return (
    <section className="wrap" id="side-projects">
      <div className="section-head">
        <span className="eyebrow">04 / Side Projects</span>
        <h2>
          Building systems around
          <br />
          3D vision and intelligent applications.
        </h2>
        <p className="lead">
          Applied and engineering work that extends the research above into interactive systems — supporting
          evidence for the research, not a separate track.
        </p>
      </div>

      <div className="sp-featured">
        {sideProjects.featured.map((project) => (
          <FeaturedProject key={project.id} project={project} />
        ))}
      </div>

      {sideProjects.other?.length > 0 && (
        <ul className="sp-other">
          {sideProjects.other.map((project) => (
            <li key={project.id}>
              <span className="sp-other-title">{project.title}</span>
              <span className="sp-other-desc">{project.description}</span>
              {project.githubUrl && (
                <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener">
                  GitHub &nearr;
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
