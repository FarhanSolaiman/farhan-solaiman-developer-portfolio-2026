import { useMemo, type ReactNode } from 'react'

/* ------------------------------------------------------------
   GenerativeCover — a deterministic, warm abstract "image" built
   from a seed string. Gives every card a unique on-brand visual
   with zero external assets.
------------------------------------------------------------ */

const PALETTE = [
  '#c05a37', // terracotta
  '#4a5d52', // sage
  '#c79a3f', // ochre
  '#d98b5f', // clay
  '#7a8b6f', // olive
  '#b8442e', // rust
  '#e0b978', // sand
  '#3f5148', // pine
]

function makeRng(seed: string) {
  let h = 2166136261
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return () => {
    h += 0x6d2b79f5
    let t = h
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export default function GenerativeCover({
  seed,
  className = '',
  children,
}: {
  seed: string
  className?: string
  children?: ReactNode
}) {
  const bg = useMemo(() => {
    const rnd = makeRng(seed)
    const pick = () => PALETTE[Math.floor(rnd() * PALETTE.length)]
    const c1 = pick()
    let c2 = pick()
    if (c2 === c1) c2 = PALETTE[(PALETTE.indexOf(c1) + 3) % PALETTE.length]
    const c3 = pick()
    const p = () => `${Math.round(rnd() * 100)}% ${Math.round(rnd() * 100)}%`
    const angle = Math.round(rnd() * 360)
    return `
      radial-gradient(80% 90% at ${p()}, ${c1}, transparent 62%),
      radial-gradient(70% 80% at ${p()}, ${c2}, transparent 58%),
      radial-gradient(60% 60% at ${p()}, ${c3}dd, transparent 55%),
      linear-gradient(${angle}deg, ${c1}, ${c2})
    `
  }, [seed])

  return (
    <div className={`gcover ${className}`} style={{ backgroundImage: bg }} aria-hidden="true">
      <span className="gcover__sheen" />
      {children}
    </div>
  )
}
