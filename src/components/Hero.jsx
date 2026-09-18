import { profile } from '../data/content'
import { ScholarIcon, GitHubIcon, LinkedInIcon } from './Icons'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner wrap">
        <div className="hero-copy">
          <p className="eyebrow">{profile.eyebrow}</p>
          <h1>
            {profile.headingLead}
            <br />
            {profile.headingRest}
            <em>{profile.headingEmphasis}</em>
          </h1>
          <div className="intro">
            {profile.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <a className="hero-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="hero-links">
            <a className="btn" href={profile.scholarUrl} target="_blank" rel="noopener noreferrer">
              <ScholarIcon />
              Scholar
            </a>
            <a className="btn" href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
              GitHub
            </a>
            <a className="btn" href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>

        <aside className="hero-focus" aria-label="Research profile summary">
          <span className="hero-focus-label">PROFILE</span>
          {profile.focus.map((item) => (
            <div className="hero-focus-row" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
          <div className="hero-note">
            {profile.note.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  )
}
