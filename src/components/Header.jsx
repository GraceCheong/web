import { useScrollSpy } from '../hooks/useScrollSpy'
import { profile } from '../data/content'

const NAV_LINKS = [
  { id: 'contact', label: 'Contact' },
  { id: 'research', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'direction', label: 'Direction' },
  { id: 'side-projects', label: 'Projects' },
  { id: 'about', label: 'Background' },
]

export default function Header() {
  const activeId = useScrollSpy(NAV_LINKS.map((link) => link.id))

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="wordmark" href="#top">
          <span className="name">{profile.name.toUpperCase()}</span>
          <span className="tag">{profile.wordmarkTag}</span>
        </a>
        <nav className="toplinks" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} className={activeId === link.id ? 'is-active' : ''}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
