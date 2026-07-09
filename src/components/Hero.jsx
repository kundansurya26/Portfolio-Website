import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import profileImg from '../assets/profile.jpg'
import resumePDF from '../assets/Kundan_resume.pdf'

const TYPED_STRINGS = [
  'Building Scalable Web Apps',
  'Crafting Data-Driven Solutions',
  'Full Stack Developer',
  'ML Enthusiast',
]

function TypingEffect() {
  const [text, setText] = useState('')
  const [idx, setIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = TYPED_STRINGS[idx]
    let timeout

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIdx))
        setCharIdx((c) => c + 1)
      }, 60)
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIdx))
        setCharIdx((c) => c - 1)
      }, 30)
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIdx < 0) {
      setDeleting(false)
      setIdx((i) => (i + 1) % TYPED_STRINGS.length)
      setCharIdx(0)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, idx])

  return (
    <span className="gradient-text">
      {text}
      <span className="animate-pulse text-brand-400">|</span>
    </span>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-mesh-gradient opacity-60" />
        {/* Orbs - Hide on mobile or make smaller */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-brand-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-accent-600/20 rounded-full blur-3xl"
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-12 sm:py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-4 sm:mb-6">
              <span className="tag text-[10px] sm:text-xs">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 mr-1.5 sm:mr-2 animate-pulse inline-block" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.p variants={itemVariants} className="font-mono text-brand-400 text-xs sm:text-sm mb-2 sm:mb-3 tracking-widest uppercase">
              Hi there, I'm
            </motion.p>

            {/* FIX 1: Smaller text on mobile */}
            <motion.h1 variants={itemVariants} className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] sm:leading-none mb-3 sm:mb-4 tracking-tight">
              Kundan<br />
              <span className="text-slate-500">Suryawanshi</span>
            </motion.h1>

            {/* FIX 2: Smaller subtitle on mobile */}
            <motion.div variants={itemVariants} className="font-display text-lg sm:text-xl md:text-2xl text-slate-300 mb-4 sm:mb-6 h-8 sm:h-10 flex items-center justify-center lg:justify-start">
              <TypingEffect />
            </motion.div>

            {/* FIX 3: Smaller description text */}
            <motion.p variants={itemVariants} className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6 sm:mb-10 max-w-lg mx-auto lg:mx-0 font-body">
              Motivated B.Tech CSE student passionate about building responsive web applications
              and analyzing data to generate insights. Skilled in Python, React, and modern web technologies.
            </motion.p>

            {/* FIX 4: Buttons stacked on mobile, side by side on larger screens */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-10">
              <a href="#projects" className="btn-primary justify-center text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6">
                View Projects
                <HiArrowDown className="w-4 h-4" />
              </a>
              <a
                href={resumePDF}
                download="Kundan_Suryawanshi_Resume.pdf"
                className="btn-outline justify-center text-sm sm:text-base py-2.5 sm:py-3 px-4 sm:px-6"
              >
                <HiDownload className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>

            {/* FIX 5: Social icons - better spacing on mobile */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 sm:gap-5">
              {[
                { icon: FiGithub, href: 'https://github.com/kundansurya26', label: 'GitHub' },
                { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kundan-suryawanshi/', label: 'LinkedIn' },
                { icon: FiMail, href: 'mailto:kundansurya24@gmail.com', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-600/40 transition-all duration-200 hover:scale-110"
                >
                  <Icon size={15} className="sm:w-[16px] sm:h-[16px] md:w-[18px] md:h-[18px]" />
                </a>
              ))}
              <span className="text-slate-600 text-[10px] sm:text-xs font-mono ml-0 sm:ml-1 hidden sm:inline">kundansurya26</span>
            </motion.div>
          </motion.div>

          {/* Right — Profile */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end mb-6 sm:mb-8 lg:mb-0"
          >
            <div className="relative">
              {/* Animated ring - smaller on mobile */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 sm:-inset-4 rounded-full border border-dashed border-brand-600/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-5 sm:-inset-8 rounded-full border border-dashed border-accent-600/10"
              />

              {/* FIX 6: Avatar - smaller on mobile */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-80 lg:h-80"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-600/30 to-accent-600/30 blur-2xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-brand-600/30 shadow-2xl shadow-brand-600/20">
                  <img
                    src={profileImg}
                    alt="Kundan Suryawanshi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* FIX 7: Floating badges - reposition for mobile */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-1 -left-4 sm:-bottom-2 sm:-left-6 glass rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 text-[8px] sm:text-xs font-mono text-brand-400 border border-brand-600/20 whitespace-nowrap"
                >
                  <span className="text-slate-500">&lt;</span>
                  developer
                  <span className="text-slate-500"> /&gt;</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -top-1 -right-3 sm:-top-2 sm:-right-4 glass rounded-xl px-2 py-1.5 sm:px-3 sm:py-2 text-[8px] sm:text-xs font-mono text-accent-400 border border-accent-600/20 whitespace-nowrap"
                >
                  CGPA 8.30 ✦
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hide on very small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-slate-600 hidden sm:flex"
      >
        <span className="text-[8px] sm:text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown size={14} className="sm:w-4 sm:h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
