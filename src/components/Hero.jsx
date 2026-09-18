import { profile } from '../data/content'
import { EmailIcon, ScholarIcon, GitHubIcon, LinkedInIcon } from './Icons'

export default function Hero() {
  return (
    <section className="hero wrap" id="top" style={{ maxWidth: 'none' }}>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-inner wrap">
        <p className="eyebrow">{profile.eyebrow}</p>
        <h1 style={{ marginTop: 14 }}>
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
        <div className="hero-links">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            <EmailIcon />
            Email
          </a>
          <a className="btn" href={profile.scholarUrl} target="_blank" rel="noopener">
            <ScholarIcon />
            Scholar
          </a>
          <a className="btn" href={profile.githubUrl} target="_blank" rel="noopener">
            <GitHubIcon />
            GitHub
          </a>
          <a className="btn" href={profile.linkedinUrl || '#'} target="_blank" rel="noopener">
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
        <div className="hero-note">
          {profile.note.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
