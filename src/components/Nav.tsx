import { useEffect, useState } from 'react'
import { nav, profile } from '../data/content'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container nav__inner">
          <a href="#top" className="nav__logo" data-cursor="focus" aria-label="Home">
            <span className="nav__logo-mark" aria-hidden="true" />
            FARHAN<span className="text-dim"> / </span>HANS
          </a>

          <nav className="nav__links" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="nav__link" data-cursor="focus">
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost nav__cta"
            data-cursor="focus"
          >
            Résumé ↗
          </a>

          <button
            className={`nav__burger ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${open ? 'is-open' : ''}`} role="dialog" aria-hidden={!open}>
        {nav.map((n) => (
          <a key={n.href} href={n.href} className="mobile-menu__link" onClick={() => setOpen(false)}>
            {n.label}
          </a>
        ))}
        <a
          href={profile.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
          onClick={() => setOpen(false)}
        >
          Download résumé ↗
        </a>
      </div>
    </>
  )
}
