import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import SplitText from '../components/SplitText.jsx'
import about from '../data/about.json'
import { FULL_NAME } from '../data/site.js'
import swaraPortrait from '../assets/swara.webp'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  return (
    <PageTransition>
      <section className="section about-page">
        <div className="container about-page__intro">
          <motion.div
            className="about-page__image corner-frame"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <img src={swaraPortrait} alt={FULL_NAME} />
          </motion.div>

          <div className="about-page__text">
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              About
            </motion.span>
            <SplitText
              as="h1"
              text={about.philosophy}
              className="text-metallic"
              by="word"
              stagger={0.04}
              delay={0.1}
            />
            {about.bio.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-gear">
        <div className="container about-gear__row">
          <div>
            <motion.span
              className="eyebrow"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              I Work With
            </motion.span>
            <motion.ul
              className="about-gear__list"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            >
              {about.workWith.map((g) => (
                <motion.li key={g} variants={fadeUp}>
                  {g}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div>
            <motion.span
              className="eyebrow"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              Kit
            </motion.span>
            <motion.ul
              className="about-gear__list"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              variants={{ show: { transition: { staggerChildren: 0.06 } } }}
            >
              {about.gear.map((g) => (
                <motion.li key={g} variants={fadeUp}>
                  {g}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      <section className="section about-timeline">
        <div className="container">
          <motion.span
            className="eyebrow"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Experience
          </motion.span>
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Where the work has taken me
          </motion.h2>

          <div className="timeline">
            {about.timeline.map((entry, i) => (
              <motion.div
                key={entry.year + entry.title}
                className="timeline__item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="timeline__year">{entry.year}</span>
                <div className="timeline__content">
                  <h3>{entry.title}</h3>
                  <span className="timeline__org">{entry.org}</span>
                  <p>{entry.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
