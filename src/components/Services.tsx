import Reveal from './Reveal'
import TiltCard from './TiltCard'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-head">
          <Reveal>
            <p className="eyebrow">What I do</p>
            <h2 className="section-title">How I can help.</h2>
          </Reveal>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <Reveal delay={i * 0.08} key={s.no}>
              <TiltCard className="service" max={6}>
                <span className="service__no">{s.no}</span>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__desc">{s.desc}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
