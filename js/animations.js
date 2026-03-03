/* ============================================================
   animations.js — Scroll-reveal & Marquee
   Handles: IntersectionObserver for .animate-on-scroll,
            marquee pause-on-hover / reduced-motion guard
   ============================================================ */

/* ----------------------------------------------------------
   REDUCED-MOTION CHECK
   Single source of truth for whether the user prefers
   reduced motion. We check once at startup.
---------------------------------------------------------- */

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;


/* ----------------------------------------------------------
   SCROLL REVEAL — IntersectionObserver
   Observes every .animate-on-scroll element. When one
   enters the viewport it receives .visible, which triggers
   the CSS transition defined in animations.css.
   Elements are unobserved immediately after reveal so
   this is a one-shot, fire-and-forget animation.
---------------------------------------------------------- */

const scrollReveal = (() => {
  const SELECTOR = '.animate-on-scroll';
  const VISIBLE_CLASS = 'visible';

  // Observer config: trigger when 15% of the element is
  // visible and give a small bottom margin so elements
  // animate just before they scroll fully into view.
  const OBSERVER_OPTIONS = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
  };

  const revealElement = (el, observer) => {
    el.classList.add(VISIBLE_CLASS);
    // One-time reveal — stop watching to save resources
    observer?.unobserve(el);
  };

  const init = () => {
    const elements = document.querySelectorAll(SELECTOR);
    if (!elements.length) return;

    // If user prefers reduced motion, make everything
    // visible immediately without any JS-driven delay.
    // CSS already handles this via the prefers-reduced-motion
    // media query, but we add .visible as well so any
    // JS-dependent state is also resolved.
    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add(VISIBLE_CLASS));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          revealElement(entry.target, obs);
        }
      });
    }, OBSERVER_OPTIONS);

    elements.forEach((el) => observer.observe(el));
  };

  return { init };
})();


/* ----------------------------------------------------------
   MARQUEE
   The HTML already contains two copies of .marquee__content
   for a seamless CSS-only loop. This module handles:
     1. Pausing the animation when reduced-motion is active
     2. Exposing a clean pause-on-hover (CSS handles it via
        .marquee__track:hover, but we reinforce it here for
        touch devices via a .is-paused class toggle)
---------------------------------------------------------- */

const marquee = (() => {
  const PAUSED_CLASS = 'is-paused';

  const init = () => {
    const track = document.querySelector('.marquee__track');
    if (!track) return;

    // Pause animation entirely for reduced-motion users.
    // The CSS media query already sets animation: none, but
    // adding the class keeps state consistent for any
    // future JS that checks it.
    if (prefersReducedMotion) {
      track.classList.add(PAUSED_CLASS);
      return;
    }

    // Touch devices don't fire :hover; give them a tap-to-
    // pause / tap-to-resume toggle on the marquee container.
    const container = document.getElementById('marquee');
    if (!container) return;

    let isPaused = false;

    container.addEventListener('touchstart', () => {
      isPaused = !isPaused;
      track.style.animationPlayState = isPaused ? 'paused' : 'running';
    }, { passive: true });
  };

  return { init };
})();


/* ----------------------------------------------------------
   BOOT
---------------------------------------------------------- */

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    scrollReveal.init();
    marquee.init();
  });
} else {
  scrollReveal.init();
  marquee.init();
}
