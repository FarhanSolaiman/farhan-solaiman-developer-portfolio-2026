import { useEffect, useRef, useState } from 'react'
import { useIsMobile, usePrefersReducedMotion } from '../hooks/useMediaQuery'

/* ------------------------------------------------------------
   Cursor — a custom trailing dot + ring. Grows over interactive
   elements (anything with [data-cursor="focus"], links, buttons).
   Disabled on touch and for reduced-motion.
------------------------------------------------------------ */

export default function Cursor() {
  const mobile = useIsMobile()
  const reduced = usePrefersReducedMotion()
  const enabled = !mobile && !reduced

  const ring = useRef<HTMLDivElement>(null)
  const dot = useRef<HTMLDivElement>(null)
  const [focused, setFocused] = useState(false)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    if (!enabled) return
    document.body.classList.add('has-custom-cursor')

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ringPos = { ...target }
    let raf = 0

    const move = (e: PointerEvent) => {
      target.x = e.clientX
      target.y = e.clientY
      setHidden(false)
      if (dot.current) {
        dot.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
      const el = e.target as HTMLElement
      setFocused(!!el.closest('a, button, [data-cursor="focus"]'))
    }

    const leave = () => setHidden(true)

    const loop = () => {
      ringPos.x += (target.x - ringPos.x) * 0.18
      ringPos.y += (target.y - ringPos.y) * 0.18
      if (ring.current) {
        ring.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', move)
    document.addEventListener('pointerleave', leave)
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('pointermove', move)
      document.removeEventListener('pointerleave', leave)
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <>
      <div
        ref={ring}
        className={`cursor-ring ${focused ? 'is-focused' : ''} ${hidden ? 'is-hidden' : ''}`}
        aria-hidden="true"
      />
      <div ref={dot} className={`cursor-dot ${hidden ? 'is-hidden' : ''}`} aria-hidden="true" />
    </>
  )
}
