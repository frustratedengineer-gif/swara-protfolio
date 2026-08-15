import { useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './Lightbox.css'

export default function Lightbox({ images, index, onClose, onNext, onPrev }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    },
    [onClose, onNext, onPrev],
  )

  useEffect(() => {
    if (index === null) return
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [index, handleKey])

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <button className="lightbox__close" aria-label="Close" onClick={onClose}>
            Close
          </button>

          <button
            className="lightbox__nav lightbox__nav--prev"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
          >
            &#8249;
          </button>

          <motion.img
            key={images[index]}
            src={images[index]}
            alt=""
            className="lightbox__image"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox__nav lightbox__nav--next"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
          >
            &#8250;
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
