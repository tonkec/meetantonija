import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

function FadeInSection({ children }) {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  // Use "some" so tall sections (e.g. selected work) fade in as soon as any
  // part enters the viewport. A high amount threshold kept them opacity:0
  // and looked like huge empty space below the marquees.
  const isInView = useInView(ref, {
    amount: 'some',
    margin: '0px 0px -10% 0px',
    once: true,
  })

  if (shouldReduceMotion) {
    return <div ref={ref}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default FadeInSection
