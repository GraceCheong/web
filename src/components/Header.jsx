import { useScrollSpy } from '../hooks/useScrollSpy'

export default function Header({ lang, setLang, profile, ui }) {
  const activeId = useScrollSpy(ui.navLinks.map((link) => link.id))

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="wordmark" href="#top">
          {profile.name}
        </a>
        <div className="topbar-actions">
          <nav className="toplinks" aria-label={ui.navigationLabel}>
            {ui.navLinks.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={activeId === link.id ? 'is-active' : ''}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="language-toggle" role="group" aria-label={ui.languageToggleLabel}>
            {['en', 'ko'].map((language) => (
              <button
                key={language}
                type="button"
                className={lang === language ? 'is-active' : ''}
                onClick={() => setLang(language)}
                aria-pressed={lang === language}
              >
                {ui.languages[language]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
