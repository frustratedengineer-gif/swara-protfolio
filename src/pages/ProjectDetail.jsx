import { useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition.jsx'
import Lightbox from '../components/Lightbox.jsx'
import work from '../data/work.json'
import { unsplash } from '../utils/image.js'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = useMemo(() => work.find((p) => p.slug === slug), [slug])
  const [lightboxIndex, setLightboxIndex] = useState(null)

  if (!project) return <Navigate to="/work" replace />

  const galleryUrls = project.galleryIds.map((id) => unsplash(id, { w: 1600 }))
  const nextProject = work[(work.findIndex((p) => p.slug === slug) + 1) % work.length]

  return (
    <PageTransition>
      <article className="project">
        <div className="project__hero">
          <motion.img
            layoutId={`cover-${project.slug}`}
            src={unsplash(project.coverId, { w: 2000 })}
            alt={project.title}
          />
          <div className="project__hero-overlay" />
          <div className="project__hero-content container">
            <span className="eyebrow">{project.category}</span>
            <h1>{project.title}</h1>
          </div>
        </div>

        <div className="container project__body">
          <Link to="/work" className="project__back">
            &larr; Back to Work
          </Link>

          <div className="project__meta">
            <p className="project__summary">{project.summary}</p>
            <dl className="project__facts">
              <div>
                <dt>Role</dt>
                <dd>{project.credits.role}</dd>
              </div>
              <div>
                <dt>Client</dt>
                <dd>{project.credits.client}</dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{project.location}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
            </dl>
          </div>

          <div className="project__gallery">
            {galleryUrls.map((url, i) => (
              <motion.button
                key={url + i}
                className="project__gallery-item corner-frame"
                onClick={() => setLightboxIndex(i)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src={url} alt={`${project.title} still ${i + 1}`} loading="lazy" />
              </motion.button>
            ))}
          </div>

          <div className="project__next">
            <span className="eyebrow">Next Project</span>
            <Link to={`/work/${nextProject.slug}`} className="project__next-title">
              {nextProject.title}
            </Link>
          </div>
        </div>
      </article>

      <Lightbox
        images={galleryUrls}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={() => setLightboxIndex((i) => (i + 1) % galleryUrls.length)}
        onPrev={() => setLightboxIndex((i) => (i - 1 + galleryUrls.length) % galleryUrls.length)}
      />
    </PageTransition>
  )
}
