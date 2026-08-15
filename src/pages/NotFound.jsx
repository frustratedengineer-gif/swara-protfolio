import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition.jsx'
import './NotFound.css'

export default function NotFound() {
  return (
    <PageTransition>
      <section className="not-found">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="eyebrow">404</span>
          <h1>This frame doesn&rsquo;t exist.</h1>
          <p>The page you&rsquo;re looking for has been cut from the final edit.</p>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  )
}
