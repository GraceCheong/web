import { educationTimeline, skillGroups } from '../data/content'

export default function About() {
  return (
    <section className="wrap" id="about">
      <div className="section-head">
        <span className="eyebrow">01 / Education & Experience</span>
        <h2>Education &amp; experience</h2>
      </div>
      <p className="about-lead">
        I completed my master&rsquo;s degree in Computer Science and Engineering at Korea University, advised by
        Jung Hyun Han.
      </p>
      <ol className="timeline">
        {educationTimeline.map((item) => (
          <li className="tl-item" key={item.title + item.date}>
            <div className="tl-date">{item.date}</div>
            <div className="tl-title">{item.title}</div>
            <div className="tl-org">{item.org}</div>
            {item.extra && <div className="tl-extra">{item.extra}</div>}
          </li>
        ))}
      </ol>

      <div style={{ marginTop: 34 }}>
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chips">
              {group.chips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
