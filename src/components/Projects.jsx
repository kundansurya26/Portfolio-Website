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
    <section id="projects" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-brand-400 text-xs tracking-widest uppercase mb-3">What I've Built</p>
          <h2 className="section-heading">Projects</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-brand-600 to-accent-600 mx-auto mt-4 mb-10" />

          {/* Filter tabs */}
          <div className="inline-flex glass rounded-xl p-1.5 gap-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2 rounded-lg text-sm font-display font-medium transition-all duration-200 ${
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

        <motion.div layout className="grid md:grid-cols-2 gap-6">
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
                <div className={`h-2 w-full bg-gradient-to-r ${project.gradient.replace('/20', '')} opacity-60`} />

                <div className="p-7">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} border border-white/10 flex items-center justify-center`}>
                      <project.icon className="text-white" size={22} />
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-all hover:scale-110"
                        >
                          <FiGithub size={15} />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-brand-400 transition-all hover:scale-110"
                        >
                          <FiExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <p className="font-mono text-xs text-slate-500 mb-1">{project.subtitle}</p>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/kundansurya26"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            <FiGithub size={16} />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
