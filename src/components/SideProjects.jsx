import { useState } from 'react'
import { sideProjects } from '../data/content'
import VideoEmbed from './VideoEmbed'
import { GitHubIcon } from './Icons'

function FeaturedProject({ project }) {
  const [open, setOpen] = useState(false)
  const panelId = `${project.id}-panel`

  return (
    <article className="sp-card sp-card-featured">
      <div className="sp-card-topline">
        <span className="project-kicker">FEATURED BUILD</span>
        {project.status && <span className="project-status">{project.status}</span>}
      </div>
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
        {open ? 'Hide details' : 'View build details'}
        <span className="tl-toggle-icon">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div id={panelId} className="tl-panel">
          <div className="columns">
            <div>
              <h4>Goal</h4>
              <p>{project.problem}</p>
            </div>
            <div>
              <h4>What I am building</h4>
              <p>{project.whatBuilt}</p>
            </div>
          </div>

          {project.video && <VideoEmbed url={project.video} title={`${project.title} demo`} />}

          {project.githubUrl && (
            <a className="text-link sp-github" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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
        <span className="eyebrow">04 / Engineering &amp; Side Projects</span>
        <h2>
          Systems built beyond
          <br />
          the research prototype.
        </h2>
        <p className="lead">
          Independent projects that show how I turn technical ideas into working tools, services, and interactive
          applications.
        </p>
      </div>

      <div className="sp-featured">
        {sideProjects.featured.map((project) => (
          <FeaturedProject key={project.id} project={project} />
        ))}
      </div>

      {sideProjects.other?.length > 0 && (
        <div className="sp-other-grid">
          {sideProjects.other.map((project) => (
            <article className="sp-other-card" key={project.id}>
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
      )}
    </section>
  )
}
