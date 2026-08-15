import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import Hero from '../components/Hero.jsx'
import WorkCard from '../components/WorkCard.jsx'
import work from '../data/work.json'
import about from '../data/about.json'
import { FULL_NAME } from '../data/site.js'
import swaraPortrait from '../assets/swara.webp'
import './Home.css'

const featured = work.slice(0, 4)

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Home() {
  return (
    <PageTransition>
      <Hero />

      <section className="section featured">
        <div className="container">
          <motion.div
            className="featured__head"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
          >
            <span className="eyebrow">Selected Work</span>
            <h2>A few recent frames</h2>
          </motion.div>

          <div className="featured__grid">
            {featured.map((project, i) => (
              <WorkCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <div className="featured__more">
            <Link to="/work" className="btn btn-ghost">
              View All Work
            </Link>
          </div>
        </div>
      </section>

      <section className="section about-teaser">
        <div className="container about-teaser__inner">
          <motion.div
            className="about-teaser__image corner-frame"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={swaraPortrait} alt={FULL_NAME} loading="lazy" />
          </motion.div>

          <motion.div
            className="about-teaser__content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">About</span>
            <h2>{about.philosophy}</h2>
            <p>{about.bio[0]}</p>
            <Link to="/about" className="btn btn-ghost">
              More About Me
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section contact-cta">
        <motion.div
          className="container contact-cta__inner"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <h2>Have a story worth filming?</h2>
          <p>Let&rsquo;s talk about your next shoot — film, wedding, or campaign.</p>
          <Link to="/contact" className="btn">
            Start a Conversation
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  )
}
