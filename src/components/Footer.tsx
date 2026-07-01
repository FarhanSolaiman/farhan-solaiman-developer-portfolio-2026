import { profile } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__copy">© 2026 {profile.name}</span>
        <a href="#top" className="footer__top" data-cursor="focus">
          Back to top ↑
        </a>
        <span className="footer__built text-dim">Built with React · Three.js</span>
      </div>
    </footer>
  )
}
