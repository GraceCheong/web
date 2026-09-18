import { researchDirection } from '../data/content'

export default function ResearchDirection() {
  return (
    <section className="wrap" id="direction">
      <div className="section-head">
        <span className="eyebrow">02 / Research Direction</span>
        <h2>
          Representations that support
          <br />
          richer 3D understanding.
        </h2>
      </div>
      <p className="lead">{researchDirection.lead}</p>
      <div className="direction-grid">
        {researchDirection.pillars.map((pillar) => (
          <div key={pillar.title}>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
