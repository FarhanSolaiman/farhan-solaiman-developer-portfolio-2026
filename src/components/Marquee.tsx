const WORDS = [
  'AGENTIC AI',
  'LLM ORCHESTRATION',
  'RAG PIPELINES',
  'FULL-STACK',
  'AWS / TERRAFORM',
  'AUTOMATION',
]

export default function Marquee() {
  const strip = (
    <div className="marquee__group" aria-hidden="true">
      {WORDS.map((w) => (
        <span className="marquee__item" key={w}>
          {w}
          <span className="marquee__dot" />
        </span>
      ))}
    </div>
  )
  return (
    <div className="marquee" role="presentation">
      <div className="marquee__track">
        {strip}
        {strip}
      </div>
    </div>
  )
}
