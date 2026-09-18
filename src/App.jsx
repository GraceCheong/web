import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TimelineSection from './components/TimelineSection'
import ResearchDirection from './components/ResearchDirection'
import Publications from './components/Publications'
import SideProjects from './components/SideProjects'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { researchItems } from './data/content'

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
        <Contact />
        <TimelineSection
          id="research"
          eyebrow="01 / Selected Research"
          heading={
            <>
              Research on representations
              <br />
              for 3D perception.
            </>
          }
          lead="Two research threads connect my recent work: learning representations for camera geometry, and using reconstructed human geometry in interactive 3D systems."
          items={researchItems}
        />
        <Publications />
        <ResearchDirection />
        <SideProjects />
        <About />
      </main>
      <Footer />
    </>
  )
}
