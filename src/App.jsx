import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ResearchDirection from './components/ResearchDirection'
import Publications from './components/Publications'
import Projects from './components/Projects'
import SideProjects from './components/SideProjects'
import About from './components/About'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    function onClick(event) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const link = event.target.closest('a[href^="#"]')
      if (!link) return
      const id = link.getAttribute('href').slice(1)
      const target = document.getElementById(id)
      if (!target) return
      event.preventDefault()
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      if (link.classList.contains('skip-link')) target.focus({ preventScroll: true })
      if (window.location.hash !== `#${id}`) history.pushState(null, '', `#${id}`)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <ResearchDirection />
        <Publications />
        <Projects />
        <SideProjects />
      </main>
      <Footer />
    </>
  )
}
