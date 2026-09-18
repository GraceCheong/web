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
      const link = event.target.closest('a[href^="#"]')
      if (!link) return
      const id = link.getAttribute('href').slice(1)
      const target = document.getElementById(id)
      if (!target) return
      event.preventDefault()
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
      history.pushState(null, '', `#${id}`)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <>
      <Header />
      <main>
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
