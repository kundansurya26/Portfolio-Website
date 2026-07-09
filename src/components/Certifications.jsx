import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { HiBadgeCheck, HiCode, HiShieldCheck, HiChartBar } from 'react-icons/hi'

const certifications = [
  {
    title: 'Learn Python Programming',
    subtitle: 'Beginner to Master',
    issuer: 'Udemy',
    icon: HiCode,
    color: 'from-orange-500 to-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    iconColor: 'text-orange-400',
    year: '2024',
  },
  {
    title: 'Data Analytics & Job Simulation',
    subtitle: 'Virtual Experience Program',
    issuer: 'Deloitte',
    icon: HiChartBar,
    color: 'from-brand-500 to-brand-400',
    bg: 'bg-brand-500/10',
    border: 'border-brand-500/20',
    iconColor: 'text-brand-400',
    year: '2024',
  },
  {
    title: 'CyberSecurity',
    subtitle: 'Virtual Experience Program',
    issuer: 'Deloitte',
    icon: HiShieldCheck,
    color: 'from-accent-500 to-accent-400',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/20',
    iconColor: 'text-accent-400',
    year: '2024',
  },
   {
    title: 'Generative AI with Large Language Models ',
    subtitle: 'LLMs, Prompt Engineering & Generative Al.',
    issuer: 'Coursera',
    icon: HiShieldCheck,
    color: 'from-accent-500 to-accent-400',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/20',
    iconColor: 'text-accent-400',
    year: '2026',
  },
   {
    title: 'Retrieval-Augmented Generation (RAG)',
    subtitle: 'RAG Pipelines, Vector Search & LLM Integration.',
    issuer: 'Coursera',
    icon: HiShieldCheck,
    color: 'from-accent-500 to-accent-400',
    bg: 'bg-accent-500/10',
    border: 'border-accent-500/20',
    iconColor: 'text-accent-400',
    year: '2026',
  },
]

export default function Certifications() {
  const { ref, inView } = useInView()

  return (
    <section id="certifications" ref={ref} className="py-16 sm:py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-48 h-48 sm:w-80 sm:h-80 bg-accent-600/5 rounded-full blur-3xl" />
        <div className="absolute left-1/4 bottom-0 w-48 h-48 sm:w-64 sm:h-64 bg-brand-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="font-mono text-brand-400 text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-3">What I've Earned</p>
          <h2 className="section-heading text-3xl sm:text-4xl md:text-5xl">Certifications</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-brand-600 to-accent-600 mx-auto mt-3 sm:mt-4 mb-3 sm:mb-4" />
          <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto px-4">
            Professional certifications that validate my skills in programming, data analytics, and cybersecurity.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glass-hover rounded-2xl p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 group relative overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${cert.color}`} />

              {/* Icon */}
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${cert.bg} border ${cert.border} flex items-center justify-center shrink-0`}>
                <cert.icon size={18} className={`${cert.iconColor} sm:w-[22px] sm:h-[22px]`} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <p className="text-slate-500 text-[10px] sm:text-xs font-mono uppercase tracking-widest mb-0.5 sm:mb-1">{cert.issuer}</p>
                <h3 className="font-display font-semibold text-white text-sm sm:text-base leading-snug mb-1 group-hover:text-brand-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm">{cert.subtitle}</p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-white/5">
                <div className="flex items-center gap-1 sm:gap-1.5 text-green-400">
                  <HiBadgeCheck size={13} className="sm:w-[15px] sm:h-[15px]" />
                  <span className="text-[10px] sm:text-xs font-mono">Certified</span>
                </div>
                <span className="text-slate-600 text-[10px] sm:text-xs font-mono">{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="flex justify-center mt-8 sm:mt-12"
        >
          <div className="glass rounded-xl px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-2 sm:gap-3">
            <HiBadgeCheck className="text-brand-400" size={16} />
            <span className="text-slate-400 text-xs sm:text-sm">
              <span className="text-white font-medium">3 Certifications</span> earned from industry leaders
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
