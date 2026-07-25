import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let w, h, stars = []
    let raf

    function size() {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio
      h = canvas.height = canvas.offsetHeight * devicePixelRatio
    }
    function init() {
      size()
      stars = Array.from({ length: Math.floor((w * h) / 38000) }, () => ({
        x: Math.random() * w,
        y: Math.random() * h * 0.7,
        r: Math.random() * 1.4 + 0.3,
        a: Math.random() * 0.6 + 0.15,
        tw: Math.random() * 0.02 + 0.005,
        dir: Math.random() > 0.5 ? 1 : -1,
      }))
    }
    function draw() {
      ctx.clearRect(0, 0, w, h)
      stars.forEach((s) => {
        s.a += s.tw * s.dir
        if (s.a > 0.85 || s.a < 0.1) s.dir *= -1
        ctx.beginPath()
        ctx.fillStyle = `rgba(234,243,251,${s.a})`
        ctx.arc(s.x, s.y, s.r * devicePixelRatio, 0, Math.PI * 2)
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }

    init()
    draw()
    window.addEventListener('resize', init)
    return () => {
      window.removeEventListener('resize', init)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <canvas id="stars" ref={canvasRef} />
}
