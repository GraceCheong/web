import { ScholarIcon, GitHubIcon, LinkedInIcon } from './Icons'

export default function Hero({ profile, ui }) {
  return (
    <section className="hero" id="top">
      <div className="hero-inner wrap">
        <p className="eyebrow">{profile.eyebrow}</p>

        <h1 className="hero-name">{profile.name}</h1>

        <div className="hero-contact">
          <a className="hero-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <span>{profile.phone}</span>
        </div>

        <div className="hero-links">
          <a className="profile-link" href={profile.scholarUrl} target="_blank" rel="noopener noreferrer">
            <ScholarIcon />
            {ui.profileLinks.scholar}
          </a>
          <a className="profile-link" href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
            {ui.profileLinks.github}
          </a>
          <a className="profile-link" href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
            {ui.profileLinks.linkedin}
          </a>
        </div>

        <div className="hero-intro">
          {profile.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
