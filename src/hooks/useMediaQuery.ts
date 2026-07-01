import { useEffect, useState } from 'react'

/** Subscribe to a CSS media query. SSR-safe-ish; defaults to `false`. */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(query).matches : false,
  )

  useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [query])

  return matches
}

/** True when the user has requested reduced motion. */
export const usePrefersReducedMotion = () =>
  useMediaQuery('(prefers-reduced-motion: reduce)')

/** True on coarse pointers / small viewports — used to throttle 3D + disable the custom cursor. */
export const useIsMobile = () => useMediaQuery('(max-width: 820px), (pointer: coarse)')
