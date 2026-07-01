import Reveal from './Reveal'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact__inner">
        <Reveal>
          <p className="eyebrow">Get in touch</p>
          <h2 className="contact__headline">
            Let&apos;s build something
            <br />
            <span className="grad-text">worth automating.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.12}>
          <a href={`mailto:${profile.email}`} className="contact__email" data-cursor="focus">
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="contact__links">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact__link" data-cursor="focus">
              LinkedIn ↗
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact__link" data-cursor="focus">
              GitHub ↗
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="contact__link" data-cursor="focus">
              Résumé ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
