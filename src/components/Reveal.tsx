import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/* Scroll-into-view reveal. Respects reduced-motion automatically via
   framer-motion's reduced-motion handling on transform/opacity. */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  className = '',
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  as?: 'div' | 'li' | 'article' | 'section'
}) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
