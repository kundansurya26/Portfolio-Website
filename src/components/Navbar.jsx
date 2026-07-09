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
          <a href="#home" className="flex items-center gap-1.5 sm:gap-2 group">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-brand-600 to-accent-600 flex items-center justify-center text-white font-display font-bold text-xs sm:text-sm shadow-lg shadow-brand-600/30 group-hover:scale-110 transition-transform duration-300">
              K
            </div>
            <span className="font-display font-semibold text-white text-xs sm:text-sm tracking-wide hidden xs:block">
              Kundan<span className="text-brand-400">.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="nav-link text-xs lg:text-sm">
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Mobile menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="mailto:kundansurya24@gmail.com"
              className="hidden md:inline-flex btn-primary text-[10px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4"
            >
              Hire Me
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
            >
              {menuOpen ? <HiX size={20} className="sm:w-[22px] sm:h-[22px]" /> : <HiMenuAlt3 size={20} className="sm:w-[22px] sm:h-[22px]" />}
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
            className="fixed inset-x-3 sm:inset-x-4 top-16 sm:top-20 z-40 glass rounded-2xl p-4 sm:p-6 md:hidden"
          >
            <div className="flex flex-col gap-3 sm:gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-slate-300 hover:text-white font-display font-medium py-2 border-b border-white/5 transition-colors text-sm sm:text-base"
                >
                  {link.label}
                </a>
              ))}
              <a href="mailto:kundansurya24@gmail.com" className="btn-primary text-center mt-1 sm:mt-2 text-sm sm:text-base py-2 sm:py-2.5">
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
