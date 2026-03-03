/* ============================================================
   nav.js — Navigation behaviour
   Handles: scroll-spy active links, smooth scrolling,
            hamburger mobile menu, back-to-top link click
   ============================================================ */

(() => {
  /* ----------------------------------------------------------
     ELEMENT REFERENCES
  ---------------------------------------------------------- */

  const navLinks       = document.querySelectorAll('.nav__link');
  const hamburger      = document.querySelector('.hamburger');
  const mobileMenu     = document.getElementById('mobile-menu');
  const mobileLinks    = document.querySelectorAll('.mobile-menu__link');
  const mobileMenuCta  = document.querySelector('.mobile-menu__cta');
  const scrollTopBtn   = document.querySelector('.back-to-top');

  // All sections that have IDs matching nav link hrefs
  const sections = Array.from(
    document.querySelectorAll('main section[id], main div[id]')
  );


  /* ----------------------------------------------------------
     SCROLL SPY — Highlight the active nav link
     We find the section whose top edge is closest to (but
     still above) the centre of the viewport and mark its
     corresponding nav link as .active.
  ---------------------------------------------------------- */

  const updateActiveLink = (scrollY) => {
    if (!navLinks.length || !sections.length) return;

    // Use the vertical midpoint of the viewport as the
    // "reading position" rather than the top edge, so the
    // active link updates when the section is actually
    // dominant on screen.
    const viewMid = scrollY + window.innerHeight / 3;

    let activeId = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (sectionTop <= viewMid) {
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute('href'); // e.g. "#about"
      const matches = activeId && href === `#${activeId}`;
      link.classList.toggle('active', matches);
    });
  };


  /* ----------------------------------------------------------
     BACK-TO-TOP LINK
     The .back-to-top anchor is a static inline link in the
     contact section. We intercept the click to apply smooth
     scrolling instead of the browser's instant jump.
  ---------------------------------------------------------- */

  scrollTopBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });


  /* ----------------------------------------------------------
     UNIFIED SCROLL HANDLER
     A single listener avoids multiple reflows per frame.
     We read scrollY once and pass it to each updater.
  ---------------------------------------------------------- */

  let rafPending = false;

  const onScroll = () => {
    if (rafPending) return;
    rafPending = true;

    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      updateActiveLink(scrollY);
      rafPending = false;
    });
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // Run once on init to set correct state without needing a scroll
  onScroll();


  /* ----------------------------------------------------------
     SMOOTH SCROLLING — Desktop nav links
     Intercept anchor-link clicks and use scrollIntoView
     instead of letting the browser jump instantly.
  ---------------------------------------------------------- */

  const smoothScrollTo = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href?.startsWith('#')) return;

      e.preventDefault();
      const targetId = href.slice(1);
      smoothScrollTo(targetId);
    });
  });


  /* ----------------------------------------------------------
     MOBILE MENU — Open / Close
  ---------------------------------------------------------- */

  const openMenu = () => {
    if (!hamburger || !mobileMenu) return;

    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');

    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');

    // Prevent body from scrolling behind the overlay
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    if (!hamburger || !mobileMenu) return;

    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');

    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');

    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const isOpen = hamburger?.classList.contains('is-open');
    isOpen ? closeMenu() : openMenu();
  };

  // Hamburger button click
  hamburger?.addEventListener('click', toggleMenu);

  // Close when a mobile nav link is clicked
  mobileLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      closeMenu();

      if (href?.startsWith('#')) {
        e.preventDefault();
        const targetId = href.slice(1);
        // Small delay so the menu close animation plays
        // before the page jumps
        setTimeout(() => smoothScrollTo(targetId), 150);
      }
    });
  });

  // Also close when the CTA inside the mobile menu is clicked
  mobileMenuCta?.addEventListener('click', () => closeMenu());

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && hamburger?.classList.contains('is-open')) {
      closeMenu();
      // Return focus to the hamburger for accessibility
      hamburger.focus();
    }
  });

})();
