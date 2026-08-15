import { Fragment } from 'react'
import { motion } from 'framer-motion'
import './PageTransition.css'

const contentVariants = {
  initial: { opacity: 0, scale: 0.985 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.99 },
}

// Aperture-iris wipe, echoing the logo's shutter icon: each page mounts fully
// covered by black, "opens" (shrinks to a point) to reveal its content, then
// "closes" (grows back to cover) as it exits — so between routes the sequence
// reads as close -> cut -> open, like a camera shutter.
const shutterVariants = {
  initial: { clipPath: 'circle(150% at 50% 50%)' },
  animate: { clipPath: 'circle(0% at 50% 50%)' },
  exit: { clipPath: 'circle(150% at 50% 50%)' },
}

export default function PageTransition({ children }) {
  return (
    <Fragment>
      {/*
        Rendered as a sibling of the content wrapper, not inside it: the content
        wrapper animates opacity/scale (a `transform`), which creates a new CSS
        containing block — a position:fixed shutter nested inside it would resize
        relative to that wrapper instead of the true viewport.
      */}
      <motion.div
        className="page-shutter"
        variants={shutterVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      />
      <motion.div
        variants={contentVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </Fragment>
  )
}
