import { useEffect, useRef } from 'react'

export default function NavStickman() {
  const figure = useRef<SVGSVGElement>(null)
  const head = useRef<SVGGElement>(null)
  const eyes = useRef<SVGGElement>(null)
  const body = useRef<SVGGElement>(null)

  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let x = 0
    let y = 0
    let targetX = 0
    let targetY = 0
    let lastTime = 0

    const paint = () => {
      head.current?.setAttribute('transform', motion.matches ? '' : `translate(${x * 4} ${y * 3}) rotate(${x * 10} 32 29)`)
      eyes.current?.setAttribute('transform', `translate(${x * 4} ${y * 4})`)
      body.current?.setAttribute('transform', motion.matches ? '' : `rotate(${x * 3} 32 62)`)
    }

    const animate = (time: number) => {
      const delta = lastTime ? Math.min(time - lastTime, 50) : 16
      lastTime = time
      const ease = 1 - Math.exp(-delta / 100)
      x += (targetX - x) * ease
      y += (targetY - y) * ease
      paint()
      if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.002) {
        frame = requestAnimationFrame(animate)
      } else {
        frame = 0
        lastTime = 0
      }
    }

    const move = (event: MouseEvent) => {
      if (!figure.current) return
      const bounds = figure.current.getBoundingClientRect()
      const dx = event.clientX - bounds.left - bounds.width / 2
      const dy = event.clientY - bounds.top - bounds.height * 0.26
      const distance = Math.hypot(dx, dy)
      const range = Math.max(100, distance)
      targetX = dx / range
      targetY = dy / range
      // Keep direct eye tracking available with reduced motion, without easing or body movement.
      if (motion.matches) {
        cancelAnimationFrame(frame)
        frame = 0
        lastTime = 0
        x = targetX
        y = targetY
        paint()
        return
      }
      if (!frame) frame = requestAnimationFrame(animate)
    }

    const reset = () => {
      targetX = 0
      targetY = 0
      if (motion.matches || document.hidden) {
        cancelAnimationFrame(frame)
        frame = 0
        lastTime = 0
        x = 0
        y = 0
        paint()
      } else if (!frame) {
        frame = requestAnimationFrame(animate)
      }
    }

    window.addEventListener('mousemove', move, { passive: true })
    document.documentElement.addEventListener('pointerleave', reset)
    window.addEventListener('blur', reset)
    document.addEventListener('visibilitychange', reset)
    motion.addEventListener('change', reset)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', move)
      document.documentElement.removeEventListener('pointerleave', reset)
      window.removeEventListener('blur', reset)
      document.removeEventListener('visibilitychange', reset)
      motion.removeEventListener('change', reset)
    }
  }, [])

  return (
    <svg ref={figure} className="nav-stickman" viewBox="0 0 64 96" fill="none" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 62 L23 84 M32 62 L41 84" />
        <g ref={body}>
          <path d="M32 37 L32 62 M32 43 L20 57 M32 43 L44 57" />
          <g ref={head}>
            <circle cx="32" cy="25" r="12" fill="#0a0a0a" />
            <g ref={eyes} fill="currentColor" stroke="none">
              <circle cx="28" cy="25" r="1.5" />
              <circle cx="36" cy="25" r="1.5" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
