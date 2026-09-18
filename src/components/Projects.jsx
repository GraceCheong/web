import { useState } from 'react'
import { projects } from '../data/content'
import VideoEmbed from './VideoEmbed'
import { GitHubIcon } from './Icons'

function ProjectCard({ project }) {
  const [open, setOpen] = useState(false)
  const panelId = `${project.id}-details`
  const hasMedia = project.images?.length > 0 || Boolean(project.video)

  return (
    <article className="work-card project-card">
      <div className="work-card-meta">
        <span className="mono">{project.period}</span>
        <span>{project.status}</span>
      </div>

      <h3 className="work-card-title">{project.title}</h3>

      <div className="tags">
        {project.tags?.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>

      <p className="work-summary">{project.description}</p>

      {project.images?.[0] && (
        <div className="work-preview">
          <span className="field-label media-label">Result</span>
          <button
          type="button"
          className="media-thumbnail-button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(true)}
        >
          <img className="work-thumbnail" src={project.images[0]} alt={`${project.title} result`} />
          </button>
        </div>
      )}

      <button
        type="button"
        className="work-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Hide details' : hasMedia ? 'Project details & results' : 'Project details'}
        <span aria-hidden="true">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className="work-details" id={panelId}>
          {project.role && (
            <div className="work-detail-block">
              <span className="field-label">What I worked on</span>
              <p>{project.role}</p>
            </div>
          )}

          {project.images?.length > 0 && (
            <div className="project-gallery">
              {project.images.map((image, index) => (
                <figure className="work-figure" key={image}>
                  <img src={image} alt={`${project.title} result ${index + 1}`} />
                </figure>
              ))}
            </div>
          )}

          {project.video && <VideoEmbed url={project.video} title={`${project.title} demo`} />}

          <div className="work-links">
            {project.relatedPublication && (
              <a className="text-link" href={project.relatedPublication}>
                Related publication &darr;
              </a>
            )}
            {project.githubUrl && (
              <a className="text-link sp-github" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                Repository
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  )
}

export default function Projects() {
  return (
    <section className="wrap" id="projects">
      <div className="section-head">
        <span className="eyebrow">04 / Projects</span>
        <h2>Projects</h2>
        <p className="lead">
          Research and development projects, ordered from the most recent work.
        </p>
      </div>

      <div className="work-list">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
