import Reveal from './Reveal'
import TiltCard from './TiltCard'
import GenerativeCover from './GenerativeCover'
import WorkflowArt from './WorkflowArt'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <section id="work" className="section projects">
      <div className="container">
        <div className="section-head projects__head">
          <Reveal>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title">
              Things I&apos;ve <em>built</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="projects__note text-dim">
              A few systems I&apos;m proud of. Details kept light on purpose — the point is the outcome,
              not the wiring.
            </p>
          </Reveal>
        </div>

        <div className="projects__grid">
          {projects.map((p, i) => (
            <Reveal delay={(i % 2) * 0.08} key={p.id}>
              <TiltCard className="project" max={7}>
                <GenerativeCover seed={p.id} className="project__cover">
                  <WorkflowArt motif={p.motif} />
                  <span className="project__index">0{i + 1}</span>
                  <span className="project__kind">{p.kind}</span>
                </GenerativeCover>
                <div className="project__body">
                  <h3 className="project__name">{p.name}</h3>
                  <p className="project__blurb">{p.blurb}</p>
                  <div className="project__tags">
                    {p.tags.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
