import Reveal from './Reveal'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Career</p>
            <h2 className="section-title">Where I&apos;ve worked.</h2>
          </Reveal>
        </div>

        <div className="timeline">
          {experience.map((e, i) => (
            <Reveal as="article" className="exp" delay={i * 0.06} key={e.company + e.period}>
              <div className="exp__meta">
                <span className="exp__period">{e.period}</span>
                {e.current && <span className="exp__badge">Current</span>}
              </div>
              <div className="exp__main">
                <h3 className="exp__company">
                  {e.company}
                  {e.current && <span className="exp__pulse" aria-hidden="true" />}
                </h3>
                <p className="exp__role">{e.role}</p>
                <ul className="exp__bullets">
                  {e.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
