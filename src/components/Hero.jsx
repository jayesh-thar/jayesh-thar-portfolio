import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import StarField from './StarField.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set('.hero-eyebrow, .hero-sub, .hero-foot', { opacity: 0, y: 16 })
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      tl.to('.hero-title .line span', { y: '0%', duration: 1.1, stagger: 0.09 })
        .to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.8 }, '-=0.9')
        .to('.hero-sub', { opacity: 1, y: 0, duration: 0.8 }, '-=0.7')
        .to('.hero-foot', { opacity: 1, duration: 0.8 }, '-=0.6')

      gsap.to('.hero-media', {
        yPercent: 14,
        ease: 'none',
        scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <section className="hero">
      <div className="hero-media" style={{ backgroundImage: "url('/images/hero-portrait.jpg')" }} />
      <div className="hero-scrim" />
      <StarField />
      <div className="hero-inner">
        <div className="eyebrow hero-eyebrow"><span className="star">✦</span> Software Engineer — Full-Stack</div>
        <h1 className="hero-title">
          <span className="line"><span>Jayesh</span></span>
          <span className="line"><span>Thar</span></span>
        </h1>
        <p className="hero-sub reveal">
          Final-year B.Tech Computer Engineer building end to end — React and Next.js on the
          surface, Node and Express underneath, with security and system design treated as
          first-class citizens.
        </p>
      </div>
      <div className="hero-foot">
        <div>RAJKOT, INDIA</div>
        <div>FULL-STACK / SDE</div>
        <div>2026</div>
      </div>
    </section>
  )
}
