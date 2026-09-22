import { useState } from 'react'
import VideoEmbed from './VideoEmbed'
import { GitHubIcon } from './Icons'

function ProjectRow({ project, labels, repositoryLabel }) {
  const [open, setOpen] = useState(false)
  const panelId = `${project.id}-details`

  return (
    <article className="work-row">
      <div className="work-row-main">
        <div className="work-row-content">
          <div className="work-meta">
            <span className="mono">{project.period}</span>
            <span>{project.status}</span>
          </div>

          <h3 className="work-title">{project.title}</h3>

          <p className="work-summary">{project.description}</p>

          <div className="tags compact-tags">
            {project.tags?.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <button
            type="button"
            className="work-toggle"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? labels.toggleOpen : labels.toggleClosed}
            <span aria-hidden="true">{open ? '−' : '+'}</span>
          </button>
        </div>

        {project.images?.[0] && (
          <button
            type="button"
            className="work-thumb-button"
            aria-label={`${labels.thumbnailLabel} ${project.title}`}
            onClick={() => setOpen(true)}
          >
            <img className="work-thumb" src={project.images[0]} alt="" />
          </button>
        )}
      </div>

      {open && (
        <div className="work-details" id={panelId}>
          {project.role && (
            <div className="work-detail-block">
              <span className="field-label">{labels.roleLabel}</span>
              <p>{project.role}</p>
            </div>
          )}

          {project.images?.length > 0 && (
            <div className="project-gallery">
              {project.images.map((image, index) => (
                <figure className="work-figure" key={image}>
                  <img src={image} alt={`${project.title} ${labels.imageLabel} ${index + 1}`} />
                </figure>
              ))}
            </div>
          )}

          {project.video && <VideoEmbed url={project.video} title={`${project.title} ${labels.demoLabel}`} />}

          <div className="work-links">
            {project.relatedPublication && (
              <a className="text-link" href={project.relatedPublication}>
                {labels.relatedPublication}
              </a>
            )}
            {project.githubUrl && (
              <a className="text-link" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                {repositoryLabel}
              </a>
            )}
          </div>
        </div>
      )}
    </article>
  )
}

export default function Projects({ projects, ui }) {
  return (
    <section className="wrap section" id="projects">
      <div className="section-head">
        <span className="eyebrow">{ui.sections.projects.number}</span>
        <h2>{ui.sections.projects.heading}</h2>
      </div>

      <div className="work-list">
        {projects.map((project) => (
          <ProjectRow
            key={project.id}
            project={project}
            labels={ui.projects}
            repositoryLabel={ui.profileLinks.repository}
          />
        ))}
      </div>
    </section>
  )
}
