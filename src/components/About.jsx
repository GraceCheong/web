export default function About({ educationTimeline, skillGroups, ui }) {
  return (
    <section className="wrap section" id="about">
      <div className="section-head">
        <span className="eyebrow">{ui.sections.about.number}</span>
        <h2>{ui.sections.about.heading}</h2>
      </div>

      <div className="education-list">
        {educationTimeline.map((item) => (
          <div className="education-row" key={item.title + item.date}>
            <div className="education-date mono">{item.date}</div>
            <div className="education-main">
              <strong>{item.title}</strong>
              <span>{item.org}</span>
              {item.extra && <small>{item.extra}</small>}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-compact">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chips">
              {group.chips.map((chip) => (
                <span className="chip" key={chip}>{chip}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
