import { forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { unsplash } from '../utils/image.js'
import './WorkCard.css'

const WorkCard = forwardRef(function WorkCard({ project, index = 0, scrollReveal = true }, ref) {
  // Home's featured strip can sit below the fold, so it scroll-reveals on whileInView.
  // The Work page's filterable grid is always in view and lives inside AnimatePresence
  // (enter/exit on filter change) — mixing whileInView with presence exit there is fragile,
  // so it uses a plain initial/animate instead.
  const revealProps = scrollReveal
    ? {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-80px' },
      }
    : {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
      }

  return (
    <motion.div
      ref={ref}
      className="work-card"
      exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.3 } }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      {...revealProps}
    >
      <Link to={`/work/${project.slug}`} className="work-card__link">
        <div className="work-card__frame corner-frame">
          <motion.img
            layoutId={`cover-${project.slug}`}
            src={unsplash(project.coverId, { w: 900 })}
            alt={project.title}
            loading="lazy"
          />
          <span className="work-card__category">{project.category}</span>
        </div>
        <div className="work-card__meta">
          <h3>{project.title}</h3>
          <span>{project.year}</span>
        </div>
      </Link>
    </motion.div>
  )
})

export default WorkCard
