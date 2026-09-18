import { profile } from '../data/content'
import { EmailIcon, ScholarIcon, GitHubIcon, LinkedInIcon } from './Icons'

export default function Contact() {
  return (
    <section className="wrap contact-strip" id="contact">
      <div className="contact-copy">
        <span className="contact-kicker">CONTACT</span>
        <h2>Research opportunities &amp; collaboration</h2>
        <p>
          Open to PhD opportunities and research conversations in 3D vision, geometric representation learning,
          reconstruction, and real-time 3D systems.
        </p>
      </div>
      <div className="contact-actions">
        <a className="btn primary" href={`mailto:${profile.email}`}>
          <EmailIcon />
          Email
        </a>
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
    </section>
  )
}
