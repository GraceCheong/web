import { researchDirection } from '../data/content'

export default function ResearchDirection() {
  return (
    <section className="wrap section" id="direction">
      <div className="section-head">
        <span className="eyebrow">02</span>
        <h2>Research direction</h2>
      </div>

      <p className="section-lead">{researchDirection.lead}</p>

      <div className="direction-grid">
        {researchDirection.pillars.map((pillar, index) => (
          <div className="direction-item" key={pillar.title}>
            <span className="direction-index mono">{String(index + 1).padStart(2, '0')}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
