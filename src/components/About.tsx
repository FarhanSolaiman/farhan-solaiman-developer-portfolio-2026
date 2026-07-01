import Reveal from './Reveal'
import GenerativeCover from './GenerativeCover'
import { about, stats } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about__grid">
          {/* Portrait framed over a generative warm backdrop */}
          <Reveal className="about__visual">
            <div className="about__portrait">
              <GenerativeCover seed="farhan-portrait" className="about__portrait-bg" />
              <img src="portrait.jpeg" alt="Farhan “Hans” Solaiman" loading="lazy" />
            </div>
            <span className="about__sig">Manila · PHT</span>
          </Reveal>

          <div className="about__content">
            <Reveal>
              <p className="eyebrow">Who I am</p>
              <h2 className="section-title">
                Engineer who ships <em>intelligent systems</em>.
              </h2>
            </Reveal>

            <div className="about__body">
              {about.map((p, i) => (
                <Reveal as="div" delay={i * 0.08} key={i}>
                  <p className="about__para">{p}</p>
                </Reveal>
              ))}
            </div>

            <div className="about__stats">
              {stats.map((s, i) => (
                <Reveal className="stat" delay={i * 0.06} key={s.label}>
                  <span className="stat__value">{s.value}</span>
                  <span className="stat__label">{s.label}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
