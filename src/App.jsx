import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ResearchDirection from './components/ResearchDirection'
import Publications from './components/Publications'
import Projects from './components/Projects'
import SideProjects from './components/SideProjects'
import About from './components/About'
import Footer from './components/Footer'
import { getContent, getInitialLanguageState } from './data/content'

export default function App() {
  const [languageState, setLanguageState] = useState(getInitialLanguageState)
  const { lang, preserveQuery, syncQuery, syncToStorage } = languageState
  const content = useMemo(() => getContent(lang), [lang])

  function setLang(nextLanguage) {
    setLanguageState({
      lang: nextLanguage,
      preserveQuery: false,
      syncQuery: true,
      syncToStorage: true,
    })
  }

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
      history.pushState(null, '', `${window.location.pathname}${window.location.search}#${id}`)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    const url = new URL(window.location.href)
    const currentLangParam = url.searchParams.get('lang')
    const hasSupportedLangParam = currentLangParam === 'en' || currentLangParam === 'ko'
    if (syncQuery) url.searchParams.set('lang', lang)
    else if (!preserveQuery && hasSupportedLangParam) url.searchParams.delete('lang')

    window.history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`)
    if (syncToStorage) {
      try {
        window.localStorage.setItem('portfolio-language', lang)
      } catch {}
    }

    document.documentElement.lang = lang
    document.title = content.ui.meta.title
    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) descriptionTag.setAttribute('content', content.ui.meta.description)
  }, [content.ui.meta.description, content.ui.meta.title, lang, preserveQuery, syncQuery, syncToStorage])

  return (
    <>
      <Header lang={lang} setLang={setLang} profile={content.profile} ui={content.ui} />
      <main>
        <Hero profile={content.profile} ui={content.ui} />
        <About educationTimeline={content.educationTimeline} skillGroups={content.skillGroups} ui={content.ui} />
        <ResearchDirection researchDirection={content.researchDirection} ui={content.ui} />
        <Publications publications={content.publications} profile={content.profile} ui={content.ui} />
        <Projects projects={content.projects} ui={content.ui} />
        <SideProjects sideProjects={content.sideProjects} ui={content.ui} />
      </main>
      <Footer profile={content.profile} ui={content.ui} />
    </>
  )
}
