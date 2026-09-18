import { useState } from 'react'
import { publications, profile } from '../data/content'
import VideoEmbed from './VideoEmbed'

function PublicationCard({ pub }) {
  const [open, setOpen] = useState(false)
  const panelId = `${pub.id}-details`

  return (
    <article className="work-card publication-card" id={pub.id}>
      <div className="work-card-meta">
        <span className="mono">{pub.year}</span>
        <span>{pub.status}</span>
        <span>{pub.type}</span>
      </div>

      <h3 className="work-card-title">
        {pub.doiUrl ? (
          <a href={pub.doiUrl} target="_blank" rel="noopener noreferrer">
            {pub.title}
          </a>
        ) : (
          pub.title
        )}
      </h3>

      <p className="publication-authors">
        {pub.authors.map((author, index) => (
          <span key={author.name}>
            <span className={author.me ? 'me' : ''}>{author.name}</span>
            {index < pub.authors.length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>

      <p className="publication-institutions">{pub.institutions?.join(' · ')}</p>
      <p className="publication-venue">{pub.venue}</p>

      {pub.mainFigure && (
        <button
          type="button"
          className="media-thumbnail-button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen(true)}
        >
          <img className="work-thumbnail" src={pub.mainFigure} alt={`Main figure from ${pub.title}`} />
        </button>
      )}

      <button
        type="button"
        className="work-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? 'Hide details' : 'Abstract & media'}
        <span aria-hidden="true">{open ? '−' : '+'}</span>
      </button>

      {open && (
        <div className="work-details" id={panelId}>
          <div className="work-detail-block">
            <span className="field-label">Abstract</span>
            <p>{pub.abstract}</p>
          </div>

          {pub.mainFigure && (
            <figure className="work-figure">
              <img src={pub.mainFigure} alt={`Main figure from ${pub.title}`} />
              <figcaption>Main figure</figcaption>
            </figure>
          )}

          {pub.video && <VideoEmbed url={pub.video} title={`${pub.title} video`} />}

          {pub.doiUrl && (
            <a className="text-link" href={pub.doiUrl} target="_blank" rel="noopener noreferrer">
              View publication / DOI &nearr;
            </a>
          )}
        </div>
      )}
    </article>
  )
}

export default function Publications() {
  return (
    <section className="wrap" id="publications">
      <div className="section-head split-head">
        <div>
          <span className="eyebrow">03 / Publications</span>
          <h2>Publications</h2>
        </div>
        <a className="text-link section-link" href={profile.scholarUrl} target="_blank" rel="noopener noreferrer">
          Google Scholar &nearr;
        </a>
      </div>

      <div className="work-list">
        {publications.map((pub) => (
          <PublicationCard key={pub.id} pub={pub} />
        ))}
      </div>
    </section>
  )
}
