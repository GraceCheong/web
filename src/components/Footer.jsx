export default function Footer({ profile, ui }) {
  return (
    <footer>
      <div>
        <div className="f-name">{profile.name}</div>
        <div className="f-tag">{ui.footer.tag}</div>
      </div>
      <div className="f-links">
        <a href={`mailto:${profile.email}`}>{ui.profileLinks.email}</a>
        <a href={profile.scholarUrl} target="_blank" rel="noopener">
          {ui.profileLinks.scholar}
        </a>
        <a href={profile.githubUrl} target="_blank" rel="noopener">
          {ui.profileLinks.github}
        </a>
        <a href="#top">{ui.profileLinks.backToTop}</a>
      </div>
    </footer>
  )
}
