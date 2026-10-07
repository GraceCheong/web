import { useEffect, useRef } from 'react'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { profile } from '../data/content'

const NAV_LINKS = [
  { id: 'about', label: 'Education' },
  { id: 'direction', label: 'Research' },
  { id: 'publications', label: 'Publications' },
  { id: 'projects', label: 'Projects' },
  { id: 'side-projects', label: 'Side Projects' },
]
const NAV_IDS = NAV_LINKS.map((link) => link.id)

export default function Header() {
  const activeId = useScrollSpy(NAV_IDS)
  const navRef = useRef(null)

  useEffect(() => {
    const nav = navRef.current
    let drag = null
    let suppressClick = false

    function onPointerDown(event) {
      suppressClick = false
      if (event.pointerType !== 'mouse' || event.button !== 0 || nav.scrollWidth <= nav.clientWidth) return
      drag = { x: event.clientX, scrollLeft: nav.scrollLeft, moved: false }
    }
    function onPointerMove(event) {
      if (!drag) return
      const distance = event.clientX - drag.x
      if (!drag.moved && Math.abs(distance) < 5) return
      drag.moved = true
      suppressClick = true
      nav.classList.add('is-dragging')
      nav.scrollLeft = drag.scrollLeft - distance
      event.preventDefault()
    }
    function finishDrag() {
      drag = null
      nav.classList.remove('is-dragging')
    }
    function onClick(event) {
      if (!suppressClick) return
      event.preventDefault()
      event.stopPropagation()
      suppressClick = false
    }
    function onDragStart(event) {
      event.preventDefault()
    }

    nav.addEventListener('pointerdown', onPointerDown)
    nav.addEventListener('click', onClick, true)
    nav.addEventListener('dragstart', onDragStart)
    window.addEventListener('pointermove', onPointerMove, { passive: false })
    window.addEventListener('pointerup', finishDrag)
    window.addEventListener('pointercancel', finishDrag)
    window.addEventListener('blur', finishDrag)
    return () => {
      nav.removeEventListener('pointerdown', onPointerDown)
      nav.removeEventListener('click', onClick, true)
      nav.removeEventListener('dragstart', onDragStart)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', finishDrag)
      window.removeEventListener('pointercancel', finishDrag)
      window.removeEventListener('blur', finishDrag)
    }
  }, [])

  useEffect(() => {
    const nav = navRef.current
    const activeLink = nav?.querySelector('[aria-current="location"]')
    if (!activeLink) return
    const navBounds = nav.getBoundingClientRect()
    const linkBounds = activeLink.getBoundingClientRect()
    if (linkBounds.left < navBounds.left || linkBounds.right > navBounds.right) {
      nav.scrollTo({
        left: nav.scrollLeft + linkBounds.left - navBounds.left - (nav.clientWidth - linkBounds.width) / 2,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      })
    }
  }, [activeId])

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a className="wordmark" href="#top">
          {profile.name}
        </a>
        <nav ref={navRef} className="toplinks" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.id} href={`#${link.id}`} aria-current={activeId === link.id ? 'location' : undefined} className={activeId === link.id ? 'is-active' : ''}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
