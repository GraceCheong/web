import { useState } from 'react'
import { publications, profile } from '../data/content'
import VideoEmbed from './VideoEmbed'

function PublicationRow({ pub }) {
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
            {open ? 'Close' : 'Abstract & media'}
            <span aria-hidden="true">{open ? '−' : '+'}</span>
          </button>
        </div>

        {pub.mainFigure && (
          <button
            type="button"
            className="work-thumb-button"
            aria-label={`Open details for ${pub.title}`}
            onClick={() => setOpen(true)}
          >
            <img className="work-thumb" src={pub.mainFigure} alt="" />
          </button>
        )}
      </div>

      {open && (
        <div className="work-details" id={panelId}>
          <div className="work-detail-block">
            <span className="field-label">Abstract</span>
            <p>{pub.abstract}</p>
          </div>

          {pub.mainFigure && (
            <figure className="work-figure">
              <img src={pub.mainFigure} alt={`Main figure from ${pub.title}`} />
            </figure>
          )}

          {pub.video && <VideoEmbed url={pub.video} title={`${pub.title} video`} />}

          <a className="text-link" href={pub.doiUrl} target="_blank" rel="noopener noreferrer">
            DOI / publication &nearr;
          </a>
        </div>
      )}
    </article>
  )
}

export default function Publications() {
  return (
    <section className="wrap section" id="publications">
      <div className="section-head split-head">
        <div>
          <span className="eyebrow">03</span>
          <h2>Publications</h2>
        </div>
        <a className="text-link section-link" href={profile.scholarUrl} target="_blank" rel="noopener noreferrer">
          Google Scholar &nearr;
        </a>
      </div>

      <div className="work-list">
        {publications.map((pub) => (
          <PublicationRow key={pub.id} pub={pub} />
        ))}
      </div>
    </section>
  )
}
