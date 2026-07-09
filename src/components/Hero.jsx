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
    <span className="gradient-text text-base sm:text-xl md:text-2xl lg:text-3xl font-bold">
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

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-6 sm:py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-2 sm:mb-6">
              <span className="bg-green-500/20 border border-green-500/30 text-green-300 text-[8px] sm:text-xs font-medium px-2 py-1 sm:px-3 sm:py-1.5 rounded-full">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-400 mr-1 sm:mr-2 animate-pulse inline-block" />
                Available for opportunities
              </span>
            </motion.div>

            <motion.p variants={itemVariants} className="font-mono text-brand-400 text-xs sm:text-sm mb-1 sm:mb-3 tracking-widest uppercase font-semibold">
              Hi there, I'm
            </motion.p>

            {/* FIX: Much smaller name on mobile */}
            <motion.h1 variants={itemVariants} className="font-display font-extrabold text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.1] sm:leading-none mb-1 sm:mb-4 tracking-tight">
              Kundan<br />
              <span className="text-slate-400 text-xl xs:text-2xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">Suryawanshi</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="font-display text-base sm:text-xl md:text-2xl lg:text-3xl text-white mb-2 sm:mb-6 h-7 sm:h-12 flex items-center justify-center lg:justify-start">
              <TypingEffect />
            </motion.div>

            <motion.p variants={itemVariants} className="text-slate-300 text-xs sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-10 max-w-lg mx-auto lg:mx-0 font-body">
              Motivated B.Tech CSE student passionate about building responsive web applications
              and analyzing data to generate insights. Skilled in Python, React, and modern web technologies.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2 sm:gap-4 mb-4 sm:mb-10">
              <a href="#projects" className="btn-primary justify-center text-xs sm:text-base py-2 sm:py-3.5 px-4 sm:px-8">
                View Projects
                <HiArrowDown className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
              <a
                href={resumePDF}
                download="Kundan_Suryawanshi_Resume.pdf"
                className="btn-outline justify-center text-xs sm:text-base py-2 sm:py-3.5 px-4 sm:px-8"
              >
                <HiDownload className="w-3 h-3 sm:w-4 sm:h-4" />
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-2 sm:gap-5">
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
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 glass rounded-xl flex items-center justify-center text-slate-300 hover:text-brand-400 hover:border-brand-600/40 transition-all duration-200 hover:scale-110 border border-white/10"
                >
                  <Icon size={14} className="sm:w-[18px] sm:h-[18px] md:w-5 md:h-5" />
                </a>
              ))}
              <span className="text-slate-500 text-[10px] sm:text-sm font-mono ml-0 sm:ml-1 hidden sm:inline">kundansurya26</span>
            </motion.div>
          </motion.div>

          {/* Right — Profile */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end mb-2 sm:mb-6 lg:mb-0"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 sm:-inset-4 rounded-full border border-dashed border-brand-600/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 sm:-inset-8 rounded-full border border-dashed border-accent-600/10"
              />

              {/* FIX: Even smaller avatar on mobile */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-28 h-28 xs:w-32 xs:h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-600/30 to-accent-600/30 blur-2xl" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-brand-600/30 shadow-2xl shadow-brand-600/20">
                  <img
                    src={profileImg}
                    alt="Kundan Suryawanshi"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Developer Badge - More prominent */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -bottom-2 -left-3 sm:-bottom-4 sm:-left-6 glass rounded-xl px-2 py-1 sm:px-4 sm:py-2.5 text-[8px] sm:text-sm font-mono border-2 border-brand-500/50 bg-brand-900/80 backdrop-blur-xl shadow-xl shadow-brand-600/30 whitespace-nowrap"
                >
                  <span className="text-slate-400 font-bold">&lt;</span>
                  <span className="text-brand-300 font-bold">developer</span>
                  <span className="text-slate-400 font-bold"> /&gt;</span>
                </motion.div>

                {/* CGPA Badge - Ultra prominent */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 glass rounded-xl px-2 py-1 sm:px-5 sm:py-3 text-[8px] sm:text-sm font-mono border-2 border-accent-400/60 bg-gradient-to-br from-accent-900/90 to-purple-900/90 backdrop-blur-xl shadow-2xl shadow-accent-500/40 animate-pulse whitespace-nowrap"
                >
                  <span className="text-accent-300 font-bold text-[10px] sm:text-sm md:text-lg">
                    ⭐ CGPA 8.30
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-slate-500 hidden sm:flex"
      >
        <span className="text-[8px] sm:text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown size={12} className="sm:w-4 sm:h-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
