import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import WorkCard from '../components/WorkCard.jsx'
import work from '../data/work.json'
import { CATEGORIES } from '../data/site.js'
import './Work.css'

const FILTERS = ['All', ...CATEGORIES]

export default function Work() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? work : work.filter((p) => p.category === active)),
    [active],
  )

  return (
    <PageTransition>
      <section className="section work-page">
        <div className="container">
          <motion.div
            className="work-page__head"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">Portfolio</span>
            <h1>Selected Work</h1>
          </motion.div>

          <div className="work-page__filters" role="tablist" aria-label="Filter work by category">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={active === f}
                className={`filter-btn ${active === f ? 'filter-btn--active' : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div
            key={active}
            className="work-page__grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <WorkCard key={project.slug} project={project} index={i} scrollReveal={false} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="work-page__empty">No work in this category yet.</p>
          )}
        </div>
      </section>
    </PageTransition>
  )
}
