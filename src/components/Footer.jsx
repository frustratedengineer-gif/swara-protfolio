import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import { SOCIALS, CONTACT_EMAIL, BRAND_NAME } from '../data/site.js'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt={BRAND_NAME} className="footer__mark" />
          <h3>{BRAND_NAME}</h3>
          <p>Cinematographer &amp; Photographer, based in Pune, India.</p>
        </div>

        <nav className="footer__links" aria-label="Footer">
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="footer__contact">
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>&copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.</span>
      </div>
    </footer>
  )
}
