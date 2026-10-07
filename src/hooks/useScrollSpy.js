import { useEffect, useState } from 'react'

// Highlights the nav link for whichever section is currently in view.
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? null)

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (sections.length === 0) return undefined

    let frame = 0
    function update() {
      frame = 0
      const threshold = (document.querySelector('.topbar')?.getBoundingClientRect().height ?? 52) + 24
      let current = sections[0].id
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= threshold) current = section.id
      }
      if (Math.ceil(window.scrollY + window.innerHeight) >= document.documentElement.scrollHeight) {
        current = sections.at(-1).id
      }
      setActiveId(current)
    }
    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [ids])

  return activeId
}
