import { profile } from '../data/content'
import { EmailIcon, GitHubIcon } from './Icons'

export default function Contact() {
  return (
    <section className="wrap" id="contact">
      <div className="contact-card">
        <h2>Let&rsquo;s talk research.</h2>
        <p>Open to PhD opportunities, collaborations, and conversations about 3D vision, human reconstruction, or XR.</p>
        <div className="hero-links">
          <a className="btn primary" href={`mailto:${profile.email}`}>
            <EmailIcon />
            {profile.email}
          </a>
          <a className="btn" href={profile.githubUrl} target="_blank" rel="noopener">
            <GitHubIcon />
            github.com/GraceCheong
          </a>
        </div>
      </div>
    </section>
  )
}
