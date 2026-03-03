/* ============================================================
   main.js — Loader dismissal & Hero text reveal
   Handles: #loader fade-out, hero line stagger reveal
   ============================================================ */

/* ----------------------------------------------------------
   HERO TEXT REVEAL
   Each .line div inside .hero__name is revealed in sequence
   by setting opacity to 1 with a staggered delay.
   We use requestAnimationFrame to ensure the browser has
   painted before we start manipulating styles.
---------------------------------------------------------- */

const heroText = (() => {
  // Reveal hero lines by setting opacity to 1 in sequence.
  const revealLines = () => {
    const lines = document.querySelectorAll('.hero__name .line');
    if (!lines.length) return;

    lines.forEach((line, index) => {
      // Stagger each line 150ms apart
      const delay = index * 150;
      requestAnimationFrame(() => {
        setTimeout(() => {
          line.style.opacity = '1';
          line.style.transform = 'translateY(0)';
        }, delay);
      });
    });
  };

  return { revealLines };
})();


/* ----------------------------------------------------------
   LOADER
   Wait for window load + minimum 2s delay (so the CSS
   loader animations play through at least once), then
   fade out the loader and remove it from the DOM.
---------------------------------------------------------- */

const loader = (() => {
  const MINIMUM_DISPLAY_MS = 2000;

  const dismiss = (loaderEl) => {
    // Add is-hidden class which transitions opacity → 0
    // and visibility → hidden (defined in sections.css)
    loaderEl.classList.add('is-hidden');

    // Remove from DOM after the CSS transition completes.
    // The transition is var(--dur-medium) ≈ 300ms; we wait
    // 400ms to be safe across all browsers.
    setTimeout(() => {
      loaderEl.remove();

      // Unblock body scroll if it was locked during load
      document.body.style.overflow = '';

      // Hero text can now animate freely
      heroText.revealLines();
    }, 400);
  };

  const init = () => {
    const loaderEl = document.getElementById('loader');
    if (!loaderEl) return;

    // Block scroll while loader is visible
    document.body.style.overflow = 'hidden';

    const startTime = Date.now();

    // Wait for all resources (fonts, images) to load
    const onReady = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, MINIMUM_DISPLAY_MS - elapsed);

      // Respect the minimum display time so animations finish
      setTimeout(() => dismiss(loaderEl), remaining);
    };

    if (document.readyState === 'complete') {
      onReady();
    } else {
      window.addEventListener('load', onReady, { once: true });
    }
  };

  return { init };
})();


/* ----------------------------------------------------------
   BOOT
   DOMContentLoaded is safe with defer scripts, but we
   also handle the already-ready case.
---------------------------------------------------------- */

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => loader.init());
} else {
  loader.init();
}
