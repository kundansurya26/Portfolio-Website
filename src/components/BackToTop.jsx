import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowUp } from 'react-icons/hi'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 w-8 h-8 sm:w-10 sm:h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-brand-600/40 transition-all hover:scale-110 shadow-lg"
          aria-label="Back to top"
        >
          <HiArrowUp size={13} className="sm:w-4 sm:h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
