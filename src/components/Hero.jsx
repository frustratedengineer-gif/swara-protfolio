import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Magnetic from './Magnetic.jsx'
import { useParallax } from './useParallax.js'
import portrait from '../assets/swara-cutout.webp'
import { FULL_NAME, SOCIALS } from '../data/site.js'
import './Hero.css'

const easeCinematic = [0.22, 1, 0.36, 1]

export default function Hero() {
  const bgParallax = useParallax(5)
  const typoParallax = useParallax(11)
  const portraitParallax = useParallax(20)

  return (
    <section className="hero">
      {/*
        Layered like a poster: background -> giant typography (midground) ->
        portrait cutout (foreground, above the typography so its transparent
        areas let the type show through and its opaque pixels cover it) ->
        small foreground UI. Depth comes from each layer parallaxing at a
        different rate on mouse move (background slowest, portrait fastest).
      */}
      <motion.div
        className="hero__bg"
        style={{ x: bgParallax.x, y: bgParallax.y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: easeCinematic }}
      />
      <div className="hero__vignette" />

      <motion.div
        className="hero__marquee"
        style={{ x: typoParallax.x, y: typoParallax.y }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: easeCinematic }}
      >
        <div className="hero__marquee-track">
          <span>Frames By Swara &mdash;</span>
          <span>Frames By Swara &mdash;</span>
        </div>
      </motion.div>

      <motion.div
        className="hero__portrait"
        style={{ x: portraitParallax.x, y: portraitParallax.y }}
        initial={{ opacity: 0, y: 50, scale: 1.05 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.6, ease: easeCinematic }}
      >
        <img
          src={portrait}
          alt={FULL_NAME}
          className="hero__portrait-img"
          draggable="false"
        />
      </motion.div>

      <motion.div
        className="hero__meta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
      >
        <span>2026</span>
        <a href={SOCIALS[0].href} target="_blank" rel="noreferrer">
          {SOCIALS[0].label}
        </a>
      </motion.div>

      <div className="hero__ui">
        <motion.span
          className="hud-rec"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.6 }}
        >
          Rec &middot; Cinematographer &amp; Photographer
        </motion.span>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.7, ease: easeCinematic }}
        >
          <Magnetic>
            <Link to="/work" className="btn">
              View Work
            </Link>
          </Magnetic>
          <Magnetic>
            <Link to="/contact" className="btn btn-ghost">
              Get in Touch
            </Link>
          </Magnetic>
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <span className="hero__scroll-line" />
        <span>Scroll</span>
      </motion.div>
    </section>
  )
}
