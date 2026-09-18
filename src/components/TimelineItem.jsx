import { Fragment, useState } from 'react'
import VideoEmbed from './VideoEmbed'

export default function TimelineItem({ item, index }) {
  const [open, setOpen] = useState(false)
  const panelId = `${item.id}-panel`
  const hasExtra = Boolean(
    item.question ||
      item.method ||
      item.contribution ||
      item.diagram ||
      item.interactionMap ||
      item.video ||
      item.links?.length,
  )

  return (
    <li className={`tl-item2${item.placeholder ? ' is-placeholder' : ''}`}>
      <span className="tl-dot" aria-hidden="true" />
      <div className="tl-card">
        {item.placeholder && <span className="placeholder-flag">Placeholder — needs your content</span>}
        <div className="tl-card-head">
          <span className="tl-date mono">{item.period}</span>
          <span className="idx mono">{String(index + 1).padStart(2, '0')}</span>
          <span className="cat">{item.category}</span>
        </div>
        <span className="tl-status">{item.status}</span>
        <div className="tags">
          {item.tags?.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <h3>{item.title}</h3>
        <p className="subtitle">{item.subtitle}</p>
        <p className="tl-summary">{item.summary}</p>

        {hasExtra && (
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
        )}

        {hasExtra && open && (
          <div id={panelId} className="tl-panel">
            {item.context && <p className="research-context mono">{item.context}</p>}

            {(item.question || item.method) && (
              <div className="columns">
                {item.question && (
                  <div>
                    <h4>Research Question</h4>
                    <p>{item.question}</p>
                  </div>
                )}
                {item.method && (
                  <div>
                    <h4>Method / Representation</h4>
                    <p>{item.method}</p>
                  </div>
                )}
              </div>
            )}

            {item.contribution && (
              <div className="contribution">
                <h4 className="field-label">Research Contribution</h4>
                <p>{item.contribution}</p>
              </div>
            )}

            {item.diagram && (
              <>
                <h4 className="field-label">Architecture / Concept</h4>
                <div className="diagram" role="img" aria-label={`Conceptual overview for ${item.title}`}>
                  {item.diagram.map((step, i) => (
                    <Fragment key={step.label}>
                      {i > 0 && <span aria-hidden="true">&rarr;</span>}
                      <div className={step.accent ? 'accent' : ''}>
                        <small>{step.label}</small>
                        <strong>{step.value}</strong>
                      </div>
                    </Fragment>
                  ))}
                </div>
                {item.diagramCaption && <p className="caption">{item.diagramCaption}</p>}
              </>
            )}

            {item.interactionMap && (
              <>
                <h4 className="field-label">Architecture / Concept</h4>
                <div className="interaction-map">
                  {item.interactionMap.map((step) => (
                    <div key={step.step}>
                      <span className="map-number mono">{step.step}</span>
                      <h4>{step.title}</h4>
                      <p>{step.detail}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {item.video && <VideoEmbed url={item.video} title={`${item.title} video`} />}

            {item.links?.length > 0 && (
              <div className="tl-links">
                {item.links.map((link) => (
                  <a key={link.label} className="text-link" href={link.href}>
                    {link.label} &darr;
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </li>
  )
}
