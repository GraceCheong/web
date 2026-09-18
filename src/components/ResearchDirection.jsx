import { researchDirection } from '../data/content'

export default function ResearchDirection() {
  return (
    <section className="wrap" id="direction">
      <div className="section-head">
        <span className="eyebrow">03 / Research Direction</span>
        <h2>
          Toward stronger geometric
          <br />
          understanding from images.
        </h2>
      </div>
      <p className="lead research-direction-lead">{researchDirection.lead}</p>
      <div className="direction-grid">
        {researchDirection.pillars.map((pillar, index) => (
          <div key={pillar.title}>
            <span className="direction-index mono">{String(index + 1).padStart(2, '0')}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
