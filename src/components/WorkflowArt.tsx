import type { ReactNode } from 'react'

/* ------------------------------------------------------------
   WorkflowArt — abstract, editorial concept illustrations that
   convey what a workflow DOES (not how it's wired). Rendered as
   an overlay on a project card's warm gradient cover.
   Style: thin cream strokes + soft shapes reading over color.
------------------------------------------------------------ */

type Motif =
  | 'seo'
  | 'sales'
  | 'content'
  | 'ats'
  | 'intelligence'
  | 'web'
  | 'document'
  | 'assistant'
  | 'distribution'
  | 'safety'

const V = '0 0 440 280'

function Art({ children }: { children: ReactNode }) {
  return (
    <svg className="wart" viewBox={V} fill="none" role="img" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      {children}
    </svg>
  )
}

/* Local SEO / citation finder — scattered marks snapping into a ranked list */
const Seo = () => (
  <Art>
    <circle cx="150" cy="120" r="52" className="wl" strokeWidth="3" />
    <line x1="188" y1="158" x2="228" y2="198" className="wl" strokeWidth="3" strokeLinecap="round" />
    {[0, 1, 2, 3].map((i) => (
      <g key={i}>
        <rect x="270" y={92 + i * 26} width={110 - i * 22} height="10" rx="5" className="wf" opacity={1 - i * 0.18} />
      </g>
    ))}
    <circle cx="132" cy="104" r="5" className="wf" />
    <circle cx="168" cy="130" r="4" className="wf" opacity="0.7" />
    <circle cx="146" cy="140" r="3" className="wf" opacity="0.6" />
  </Art>
)

/* Sales-call intelligence — a waveform distilling into a scorecard */
const Sales = () => (
  <Art>
    {Array.from({ length: 22 }).map((_, i) => {
      const h = 14 + Math.abs(Math.sin(i * 0.9)) * 60
      return <rect key={i} x={70 + i * 8} y={130 - h / 2} width="3.5" height={h} rx="2" className="wf" opacity="0.85" />
    })}
    <rect x="262" y="176" width="118" height="70" rx="12" className="wl" strokeWidth="2.5" />
    <path d="M280 210 l14 14 l26 -30" className="wl" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="352" cy="205" r="7" className="wf" />
  </Art>
)

/* Content / carousel creator — fanned cards + spark */
const Content = () => (
  <Art>
    {[-14, 0, 14].map((r, i) => (
      <rect
        key={i}
        x="150"
        y="80"
        width="120"
        height="150"
        rx="12"
        className="wl"
        strokeWidth="2.5"
        transform={`rotate(${r} 210 155)`}
        opacity={0.5 + i * 0.25}
      />
    ))}
    <path d="M312 92 l6 20 l20 6 l-20 6 l-6 20 l-6 -20 l-20 -6 l20 -6 z" className="wf" />
  </Art>
)

/* Recruiting / ATS — candidate cards funnel through a filter to a match */
const Ats = () => (
  <Art>
    {[0, 1, 2].map((i) => (
      <rect key={i} x={70 + i * 8} y={78 + i * 6} width="120" height="34" rx="8" className="wl" strokeWidth="2.5" opacity={0.5 + i * 0.25} />
    ))}
    <path d="M210 120 L300 120 L268 160 L268 210 L242 196 L242 160 Z" className="wl" strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="360" cy="150" r="30" className="wl" strokeWidth="2.5" />
    <path d="M347 150 l9 9 l17 -19" className="wl" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </Art>
)

/* Central intelligence / semantic search — scattered nodes converge to a query orb */
const Intelligence = () => {
  const nodes = [
    [90, 70], [360, 84], [70, 190], [380, 200], [130, 230], [320, 40], [60, 120],
  ]
  return (
    <Art>
      {nodes.map(([x, y], i) => (
        <line key={i} x1={x} y1={y} x2="220" y2="140" className="wl" strokeWidth="1.5" opacity="0.5" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={4 + (i % 3)} className="wf" opacity="0.8" />
      ))}
      <circle cx="220" cy="140" r="34" className="wl" strokeWidth="2.5" />
      <circle cx="220" cy="140" r="12" className="wf" />
      <circle cx="220" cy="140" r="52" className="wl" strokeWidth="1.5" opacity="0.4" />
    </Art>
  )
}

/* Web / app — a browser window with layout blocks */
const Web = () => (
  <Art>
    <rect x="96" y="66" width="248" height="150" rx="14" className="wl" strokeWidth="2.5" />
    <line x1="96" y1="96" x2="344" y2="96" className="wl" strokeWidth="2" />
    <circle cx="114" cy="81" r="3.5" className="wf" />
    <circle cx="128" cy="81" r="3.5" className="wf" opacity="0.7" />
    <circle cx="142" cy="81" r="3.5" className="wf" opacity="0.5" />
    <rect x="114" y="112" width="80" height="86" rx="8" className="wf" opacity="0.28" />
    <rect x="210" y="112" width="116" height="14" rx="7" className="wf" opacity="0.6" />
    <rect x="210" y="136" width="96" height="10" rx="5" className="wf" opacity="0.45" />
    <rect x="210" y="156" width="116" height="42" rx="8" className="wl" strokeWidth="2" />
  </Art>
)

/* Document automation / provisioning — folders + a page assembling */
const Document = () => (
  <Art>
    {[0, 1, 2, 3].map((i) => (
      <g key={i} transform={`translate(${90 + (i % 2) * 130} ${80 + Math.floor(i / 2) * 90})`}>
        <path d="M0 14 h34 l10 12 h56 v66 h-100 z" className="wl" strokeWidth="2.5" strokeLinejoin="round" opacity={0.6 + (i % 2) * 0.3} />
      </g>
    ))}
    <circle cx="330" cy="70" r="18" className="wf" opacity="0.85" />
    <path d="M322 70 l6 6 l11 -12" className="wl" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </Art>
)

/* Assistant / voice — concentric sound rings + a reply bubble */
const Assistant = () => (
  <Art>
    {[18, 40, 64, 90].map((r, i) => (
      <circle key={i} cx="150" cy="140" r={r} className="wl" strokeWidth="2" opacity={0.9 - i * 0.2} />
    ))}
    <circle cx="150" cy="140" r="8" className="wf" />
    <path d="M258 96 h108 a14 14 0 0 1 14 14 v52 a14 14 0 0 1 -14 14 h-70 l-24 22 v-22 h-14 a14 14 0 0 1 -14 -14 v-52 a14 14 0 0 1 14 -14 z" className="wl" strokeWidth="2.5" strokeLinejoin="round" />
    <circle cx="300" cy="136" r="4" className="wf" />
    <circle cx="320" cy="136" r="4" className="wf" opacity="0.7" />
    <circle cx="340" cy="136" r="4" className="wf" opacity="0.5" />
  </Art>
)

/* Distribution / syndication / posting — one hub broadcasting to many */
const Distribution = () => {
  const targets = [
    [360, 70], [380, 140], [360, 212], [250, 60], [250, 224],
  ]
  return (
    <Art>
      {targets.map(([x, y], i) => (
        <line key={i} x1="120" y1="140" x2={x} y2={y} className="wl" strokeWidth="1.8" opacity="0.55" />
      ))}
      <circle cx="120" cy="140" r="30" className="wl" strokeWidth="2.5" />
      <path d="M108 140 h24 M120 128 v24" className="wl" strokeWidth="3" strokeLinecap="round" />
      {targets.map(([x, y], i) => (
        <rect key={i} x={x - 16} y={y - 16} width="32" height="32" rx="8" className="wf" opacity={0.75 - i * 0.06} />
      ))}
    </Art>
  )
}

/* Safety / zero-trust — a shield with a pulse */
const Safety = () => (
  <Art>
    <path d="M220 60 l86 30 v58 c0 52 -38 82 -86 100 c-48 -18 -86 -48 -86 -100 v-58 z" className="wl" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M150 150 h34 l12 -30 l24 60 l12 -30 h58" className="wl" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </Art>
)

const MOTIFS: Record<Motif, () => JSX.Element> = {
  seo: Seo,
  sales: Sales,
  content: Content,
  ats: Ats,
  intelligence: Intelligence,
  web: Web,
  document: Document,
  assistant: Assistant,
  distribution: Distribution,
  safety: Safety,
}

export type { Motif }
export default function WorkflowArt({ motif }: { motif: Motif }) {
  const Cmp = MOTIFS[motif] ?? Intelligence
  return <Cmp />
}
