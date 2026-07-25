import { useCallback, useState } from 'react'
import useLenis from './hooks/useLenis.js'
import useReveal from './hooks/useReveal.js'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Work from './components/Work.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import ResumeModal from './components/ResumeModal.jsx'

export default function App() {
  const lenisRef = useLenis()
  const [resumeOpen, setResumeOpen] = useState(false)

  // Runs once, after every section has mounted, so ScrollTrigger can find
  // all `.reveal` / `.proj` elements in the DOM.
  useReveal([])

  const scrollToId = useCallback((id) => {
    const target = document.querySelector(id)
    if (!target) return
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        offset: -64,
        duration: 1.15,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      })
    } else {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [lenisRef])

  // Intercept every in-page anchor click so Lenis drives the scroll
  // instead of the browser's instant jump.
  const handleAppClick = useCallback((e) => {
    const a = e.target.closest('a[href^="#"]')
    if (!a) return
    const id = a.getAttribute('href')
    if (!id || id.length < 2) return
    e.preventDefault()
    scrollToId(id)
  }, [scrollToId])

  return (
    <div onClick={handleAppClick}>
      <Nav onResumeClick={() => setResumeOpen(true)} />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Education />
      <Contact />
      <ResumeModal open={resumeOpen} onClose={() => setResumeOpen(false)} lenisRef={lenisRef} />
    </div>
  )
}
