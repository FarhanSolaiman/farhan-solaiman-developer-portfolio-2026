import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/content'
import { usePrefersReducedMotion } from '../hooks/useMediaQuery'

const HeroCanvas = lazy(() => import('../scenes/HeroCanvas'))

export default function Hero() {
  const reduced = usePrefersReducedMotion()
  const showCanvas = !reduced

  return (
    <section id="top" className="hero" aria-label="Introduction">
      {/* 3D neural field, or a static gradient fallback for reduced-motion */}
      <div className="hero__canvas" aria-hidden="true">
        {showCanvas ? (
          <Suspense fallback={<div className="hero__canvas-fallback" />}>
            <HeroCanvas />
          </Suspense>
        ) : (
          <div className="hero__canvas-fallback" />
        )}
        <div className="hero__vignette" />
      </div>

      <div className="container hero__inner">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {profile.role} · {profile.location}
        </motion.p>

        <h1 className="hero__headline">
          {profile.headline.map((line, i) => (
            <span className="hero__line" key={line}>
              <motion.span
                className="hero__line-inner"
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="hero__tagline text-dim"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          className="hero__cta"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <a href="#work" className="btn btn--primary" data-cursor="focus">
            View selected work
          </a>
          <a
            href={profile.resume}
            className="btn btn--ghost"
            data-cursor="focus"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download résumé ↗
          </a>
        </motion.div>
      </div>

      <a href="#work" className="hero__scroll" aria-label="Scroll to work">
        <span>SCROLL</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  )
}
