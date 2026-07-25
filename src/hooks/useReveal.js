import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Call once at the App level, after all sections have mounted.
// Animates every element with the `.reveal` class as it enters the viewport.
export default function useReveal(deps = []) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        })
      })

      gsap.utils.toArray('.proj').forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: i * 0.03,
          scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        })
      })

      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
