import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-2 sm:py-3' : 'py-3 sm:py-5'
        }`}
      >
        <div className={`mx-auto max-w-6xl px-3 sm:px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'glass rounded-xl sm:rounded-2xl py-2 sm:py-3 px-3 sm:px-6 mx-3 sm:mx-6' : ''
        }`}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1.5 sm:gap-2 group shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-brand-600 to-accent-600 flex items-center justify-center text-white font-display font-bold text-xs sm:text-sm shadow-lg shadow-brand-600/30 group-hover:scale-110 transition-transform duration-300">
              K
            </div>
            <span className="font-display font-semibold text-white text-xs sm:text-sm tracking-wide hidden xs:block">
              Kundan<span className="text-brand-400">.</span>
            </span>
          </a>

          {/* FIX: Desktop links - More visible */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-slate-300 hover:text-white text-sm lg:text-base font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-brand-600 after:to-accent-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="mailto:kundansurya24@gmail.com"
              className="hidden md:inline-flex bg-gradient-to-r from-brand-600 to-accent-600 text-white text-xs sm:text-sm font-medium py-2 px-4 sm:px-5 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-600/25"
            >
              Hire Me
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-slate-300 hover:text-white transition-colors p-1"
            >
              {menuOpen ? <HiX size={22} className="sm:w-6 sm:h-6" /> : <HiMenuAlt3 size={22} className="sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-3 sm:inset-x-4 top-16 sm:top-20 z-40 glass rounded-2xl p-5 sm:p-6 md:hidden bg-dark-900/95 backdrop-blur-xl border border-white/10"
          >
            <div className="flex flex-col gap-3 sm:gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-white font-display font-medium py-2.5 border-b border-white/5 transition-colors text-base sm:text-lg"
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="mailto:kundansurya24@gmail.com" 
                className="bg-gradient-to-r from-brand-600 to-accent-600 text-white text-center font-medium py-3 rounded-xl mt-2 text-base sm:text-lg"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
