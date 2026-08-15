import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: (stagger) => ({
    transition: { staggerChildren: stagger, delayChildren: 0 },
  }),
}

const piece = {
  hidden: { opacity: 0, y: '100%' },
  show: { opacity: 1, y: '0%', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

/** Splits text into animated words (default) or characters for a stagger reveal. */
export default function SplitText({
  text,
  as: Tag = 'span',
  by = 'word',
  stagger = 0.06,
  className,
  once = true,
  delay = 0,
}) {
  const parts = by === 'char' ? Array.from(text) : text.split(' ')

  return (
    <Tag className={className} style={{ display: 'block', overflow: 'hidden' }}>
      <motion.span
        style={{ display: 'inline-block' }}
        variants={container}
        custom={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once }}
        transition={{ delayChildren: delay }}
      >
        {parts.map((p, i) => (
          <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
            <motion.span style={{ display: 'inline-block' }} variants={piece}>
              {p === ' ' ? ' ' : p}
              {by === 'word' && i < parts.length - 1 ? ' ' : ''}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
