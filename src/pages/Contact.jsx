import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import Magnetic from '../components/Magnetic.jsx'
import { CONTACT_EMAIL, SOCIALS, WHATSAPP_LINK } from '../data/site.js'
import './Contact.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M17.6 6.32A7.85 7.85 0 0 0 4.2 15.8L3 21l5.35-1.4a7.86 7.86 0 0 0 3.76.96h.01a7.85 7.85 0 0 0 5.48-13.24ZM12.13 19.2h-.01a6.52 6.52 0 0 1-3.32-.91l-.24-.14-2.47.65.66-2.41-.16-.25a6.53 6.53 0 1 1 5.54 3.06Zm3.58-4.89c-.2-.1-1.15-.57-1.33-.63-.18-.07-.3-.1-.44.1-.13.19-.5.63-.61.76-.11.13-.23.14-.42.05-.2-.1-.82-.3-1.56-.96a5.84 5.84 0 0 1-1.08-1.34c-.11-.2 0-.3.09-.4.09-.1.2-.24.3-.36.1-.12.13-.2.2-.34.06-.13.03-.25-.02-.35-.05-.1-.44-1.06-.6-1.45-.16-.38-.32-.33-.44-.34h-.38c-.13 0-.34.05-.52.24-.18.2-.68.66-.68 1.62s.7 1.87.8 2c.1.13 1.37 2.1 3.33 2.94.46.2.83.32 1.11.41.47.15.9.13 1.24.08.38-.06 1.15-.47 1.31-.92.16-.46.16-.85.11-.93-.05-.08-.18-.13-.38-.23Z"
        fill="currentColor"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  )
}

export default function Contact() {
  return (
    <PageTransition>
      <section className="section contact-page">
        <motion.div
          className="container contact-page__inner"
          initial="hidden"
          animate="show"
          variants={container}
        >
          <motion.span className="eyebrow" variants={fadeUp}>
            Contact
          </motion.span>
          <motion.h1 variants={fadeUp}>Let&rsquo;s make something.</motion.h1>
          <motion.p variants={fadeUp}>
            For bookings, collaborations, or just to talk through an idea —
            message directly on WhatsApp or Instagram.
          </motion.p>

          <motion.div className="contact-page__ctas" variants={fadeUp}>
            <Magnetic strength={0.12}>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="contact-action contact-action--primary"
              >
                <WhatsAppIcon />
                <span>Message on WhatsApp</span>
              </a>
            </Magnetic>
            <Magnetic strength={0.12}>
              <a
                href={SOCIALS[0].href}
                target="_blank"
                rel="noreferrer"
                className="contact-action"
              >
                <InstagramIcon />
                <span>Follow on Instagram</span>
              </a>
            </Magnetic>
          </motion.div>

          <motion.div className="contact-page__details" variants={fadeUp}>
            <a href={`mailto:${CONTACT_EMAIL}`} className="contact-page__email">
              {CONTACT_EMAIL}
            </a>
            <span>Pune, India — available worldwide</span>
          </motion.div>
        </motion.div>
      </section>
    </PageTransition>
  )
}
