import Reveal from './Reveal'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">Toolbox</p>
            <h2 className="section-title">Stack &amp; tools.</h2>
          </Reveal>
        </div>

        <div className="skills__grid">
          {skills.map((g, i) => (
            <Reveal className="skillgroup" delay={i * 0.07} key={g.label}>
              <p className="skillgroup__label">
                <span className="skillgroup__dot" aria-hidden="true" />
                {g.label}
              </p>
              <div className="skillgroup__items">
                {g.items.map((it) => (
                  <span className="chip" key={it} data-cursor="focus">
                    {it}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
