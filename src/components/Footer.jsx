import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="f-name">{profile.name}</div>
        <div className="f-tag">3D vision &amp; deep learning</div>
      </div>
      <div className="f-links">
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.scholarUrl} target="_blank" rel="noopener">
          Scholar
        </a>
        <a href={profile.githubUrl} target="_blank" rel="noopener">
          GitHub
        </a>
        <a href="#top">Back to top &uarr;</a>
      </div>
    </footer>
  )
}
