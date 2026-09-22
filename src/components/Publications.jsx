import { useState } from 'react'
import VideoEmbed from './VideoEmbed'

function PublicationRow({ pub, labels }) {
  const [open, setOpen] = useState(false)
  const panelId = `${pub.id}-details`

  return (
    <article className="work-row" id={pub.id}>
      <div className="work-row-main">
        <div className="work-row-content">
          <div className="work-meta">
            <span className="mono">{pub.year}</span>
            <span>{pub.type}</span>
          </div>

          <h3 className="work-title">
            <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer">
              {pub.title}
            </a>
          </h3>

          <p className="publication-authors">
            {pub.authors.map((author, index) => (
              <span key={author.name}>
                <span className={author.me ? 'me' : ''}>{author.name}</span>
                {index < pub.authors.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>

          <p className="publication-meta">
            <span>{pub.institutions?.join(' · ')}</span>
            <span className="publication-venue">{pub.venue}</span>
          </p>

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

        {pub.mainFigure && (
          <button
            type="button"
            className="work-thumb-button"
            aria-label={`${labels.thumbnailLabel} ${pub.title}`}
            onClick={() => setOpen(true)}
          >
            <img className="work-thumb" src={pub.mainFigure} alt="" />
          </button>
        )}
      </div>

      {open && (
        <div className="work-details" id={panelId}>
          <div className="work-detail-block">
            <span className="field-label">{labels.abstractLabel}</span>
            <p>{pub.abstract}</p>
          </div>

          {pub.mainFigure && (
            <figure className="work-figure">
              <img src={pub.mainFigure} alt={`${labels.figureLabel} ${pub.title}`} />
            </figure>
          )}

          {pub.video && <VideoEmbed url={pub.video} title={`${pub.title} ${labels.videoLabel}`} />}

          <a className="text-link" href={pub.doiUrl} target="_blank" rel="noopener noreferrer">
            {labels.doiLink}
          </a>
        </div>
      )}
    </article>
  )
}

export default function Publications({ publications, profile, ui }) {
  const labels = ui.publications

  return (
    <section className="wrap section" id="publications">
      <div className="section-head split-head">
        <div>
          <span className="eyebrow">{ui.sections.publications.number}</span>
          <h2>{ui.sections.publications.heading}</h2>
        </div>
        <a className="text-link section-link" href={profile.scholarUrl} target="_blank" rel="noopener noreferrer">
          {ui.profileLinks.googleScholar} &nearr;
        </a>
      </div>

      <div className="work-list">
        {publications.map((pub) => (
          <PublicationRow key={pub.id} pub={pub} labels={labels} />
        ))}
      </div>
    </section>
  )
}
