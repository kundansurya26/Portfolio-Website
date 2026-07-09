import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { HiCode, HiChip, HiGlobe } from 'react-icons/hi'

const projects = [
  {
    id: 1,
    title: 'Shoplane',
    subtitle: 'E-commerce Website',
    description: 'Developed a fully functional e-commerce website with cart management, checkout flow, and a responsive UI built with modern web technologies.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    category: 'Web',
    github: 'https://kundansurya26.github.io/Shoplane-Ecommerce-website/',
    live: null,
    icon: HiGlobe,
    gradient: 'from-blue-600/20 to-brand-600/20',
    accent: 'brand',
  },
  {
    id: 2,
    title: 'IPL Winner Prediction',
    subtitle: 'ML Prediction System',
    description: 'Built a machine learning model using historical IPL match data to predict match winners and generate win probabilities with high accuracy.',
    tags: ['Python', 'Machine Learning', 'Data Analysis', 'Statistics'],
    category: 'ML',
    github: null,
    live: 'https://kundansurya26.github.io/IPL-2026-Winner-Prediction/',
    icon: HiChip,
    gradient: 'from-accent-600/20 to-pink-600/20',
    accent: 'accent',
  },
  {
    id: 3,
    title: 'Stock Analysis',
    subtitle: 'Data Analytics Dashboard',
    description: 'Analyzed comprehensive sales datasets using Python and Excel, creating interactive dashboards and visualizations to surface business insights.',
    tags: ['Python', 'Excel', 'Power BI', 'Data Viz'],
    category: 'ML',
    github: 'https://kundansurya26.github.io/Stock-Analysis/',
    live: null,
    icon: HiChip,
    gradient: 'from-green-600/20 to-brand-600/20',
    accent: 'brand',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    subtitle: 'Personal Portfolio',
    description: 'Designed and developed a responsive personal portfolio website with smooth animations, dark theme, and modern UI showcasing projects and skills.',
    tags: ['React', 'TailwindCSS', 'Framer Motion', 'Vite'],
    category: 'Web',
    github: 'https://portfolio-tdh5.vercel.app/',
    live: null,
    icon: HiGlobe,
    gradient: 'from-purple-600/20 to-accent-600/20',
    accent: 'accent',
  },
]

const filters = ['All', 'Web', 'ML']

export default function Projects() {
  const { ref, inView } = useInView()
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" ref={ref} className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-brand-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-8 sm:mb-12"
        >
          <p className="font-mono text-brand-400 text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-3">What I've Built</p>
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl">Projects</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-brand-600 to-accent-600 mx-auto mt-3 sm:mt-4 mb-6 sm:mb-10" />

          {/* Filter tabs - responsive */}
          <div className="inline-flex glass rounded-xl p-1 gap-1 overflow-x-auto max-w-full">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-display font-medium transition-all duration-200 whitespace-nowrap ${
                  active === f
                    ? 'bg-gradient-to-r from-brand-600 to-accent-600 text-white shadow-lg shadow-brand-600/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass-hover rounded-2xl overflow-hidden group cursor-default"
              >
                {/* Card header gradient */}
                <div className={`h-1 sm:h-2 w-full bg-gradient-to-r ${project.gradient.replace('/20', '')} opacity-60`} />

                <div className="p-4 sm:p-6 md:p-7">
                  <div className="flex items-start justify-between mb-4 sm:mb-5">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${project.gradient} border border-white/10 flex items-center justify-center shrink-0`}>
                      <project.icon className="text-white text-sm sm:text-base" size={18} />
                    </div>
                    <div className="flex gap-1.5 sm:gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 sm:w-8 sm:h-8 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all hover:scale-110"
                        >
                          <FiGithub size={13} className="sm:w-[15px] sm:h-[15px]" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 sm:w-8 sm:h-8 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-brand-400 transition-all hover:scale-110"
                        >
                          <FiExternalLink size={13} className="sm:w-[15px] sm:h-[15px]" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="mb-2 sm:mb-3">
                    <p className="font-mono text-[10px] sm:text-xs text-slate-500 mb-0.5 sm:mb-1">{project.subtitle}</p>
                    <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-brand-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">{project.description}</p>

                  <div className="flex flex-wrap gap-1 sm:gap
