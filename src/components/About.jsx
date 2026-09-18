import { educationTimeline, skillGroups } from '../data/content'

export default function About() {
  return (
    <section className="wrap section" id="about">
      <div className="section-head">
        <span className="eyebrow">01</span>
        <h2>Education &amp; experience</h2>
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
