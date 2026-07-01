import { useRef, type ReactNode } from 'react'
import { usePrefersReducedMotion, useIsMobile } from '../hooks/useMediaQuery'

/* ------------------------------------------------------------
   TiltCard — pointer-tracked 3D tilt + light glare.
   Reused by Projects, Services and Skills. CSS-3D (no WebGL),
   so it's cheap and degrades to a flat card on touch/reduced-motion.
------------------------------------------------------------ */

type Props = {
  children: ReactNode
  className?: string
  max?: number // max tilt in degrees
}

export default function TiltCard({ children, className = '', max = 9 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const raf = useRef<number>()
  const reduced = usePrefersReducedMotion()
  const mobile = useIsMobile()
  const enabled = !reduced && !mobile

  const onMove = (e: React.PointerEvent) => {
    if (!enabled) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width // 0..1
    const py = (e.clientY - r.top) / r.height
    const rx = (0.5 - py) * max * 2
    const ry = (px - 0.5) * max * 2
    if (raf.current) cancelAnimationFrame(raf.current)
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty('--rx', `${rx.toFixed(2)}deg`)
      el.style.setProperty('--ry', `${ry.toFixed(2)}deg`)
      el.style.setProperty('--gx', `${(px * 100).toFixed(1)}%`)
      el.style.setProperty('--gy', `${(py * 100).toFixed(1)}%`)
      el.style.setProperty('--glare', '1')
    })
  }

  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
    el.style.setProperty('--glare', '0')
  }

  return (
    <div
      ref={ref}
      className={`tilt ${enabled ? 'is-interactive' : ''} ${className}`}
      onPointerMove={onMove}
      onPointerLeave={reset}
      data-cursor="focus"
    >
      <div className="tilt__inner">
        {children}
        <span className="tilt__glare" aria-hidden="true" />
      </div>
    </div>
  )
}
