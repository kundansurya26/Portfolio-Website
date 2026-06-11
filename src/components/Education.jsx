import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const education = [
  {
    degree: 'B.Tech — Computer Science & Engineering',
    institution: 'Indus University, Ahmedabad, Gujarat',
    period: '2023 – 2027',
    score: 'CGPA: 8.30',
    status: 'current',
  },
  {
    degree: 'Higher Secondary Education (12th)',
    institution: 'P.G. Public School, Nandurbar, Maharashtra',
    period: '2023',
    score: '60%',
    status: 'completed',
  },
  {
    degree: 'Secondary Education (10th)',
    institution: 'P.G. Public School, Nandurbar, Maharashtra',
    period: '2021',
    score: '79%',
    status: 'completed',
  },
]

const strengths = [
  { num: '01', label: 'Problem-Solving Mindset' },
  { num: '02', label: 'Quick Learner' },
  { num: '03', label: 'Team Player & Leadership' },
  { num: '04', label: 'Strong Web Foundation' },
]

export default function Education() {
  const { ref, inView } = useInView()

  return (
    <section id="education" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-brand-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-brand-400 text-xs tracking-widest uppercase mb-3">My Background</p>
          <h2 className="section-heading">Education</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-brand-600 to-accent-600 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="relative pl-8 space-y-6">
              <div className="absolute left-3 top-4 bottom-0 w-px bg-gradient-to-b from-brand-600/60 via-accent-600/30 to-transparent" />
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="relative"
                >
                  <div className={`absolute -left-5 top-6 w-4 h-4 rounded-full border-2 flex items-center justify-center ${edu.status === 'current' ? 'border-brand-500 bg-brand-600' : 'border-slate-600 bg-dark-900'}`}>
                    {edu.status === 'current' && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
                  </div>
                  <div className="glass-hover rounded-2xl p-6">
                    <h3 className="font-display font-semibold text-white text-base leading-tight mb-3">{edu.degree}</h3>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-brand-400 text-sm font-medium">{edu.institution}</p>
                      <span className={`tag shrink-0 ${edu.status === 'current' ? 'border-green-500/30 text-green-400 bg-green-500/10' : 'text-slate-400 border-slate-700/40'}`}>
                        {edu.status === 'current' ? '● Active · 2023 – 2027' : edu.period}
                      </span>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/5">
                      <span className="font-mono font-bold text-sm gradient-text">{edu.score}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-brand-400 text-xs tracking-widest uppercase mb-5">Core Strengths</p>
              <div className="space-y-3">
                {strengths.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-600/20 to-accent-600/20 border border-brand-600/20 flex items-center justify-center text-brand-400 text-xs font-mono font-bold shrink-0">
                      {s.num}
                    </div>
                    <span className="text-slate-300 text-sm">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="glass rounded-2xl p-6 mt-4"
            >
              <p className="font-mono text-brand-400 text-xs tracking-widest uppercase mb-4">Extracurriculars</p>
              {['Coding competitions & hackathons', 'Open-source contributions on GitHub', 'Volunteered teaching programming'].map((item, i) => (
                <div key={i} className="flex items-start gap-2 mb-2 last:mb-0">
                  <span className="text-brand-400 mt-0.5 shrink-0">▸</span>
                  <span className="text-slate-400 text-xs leading-relaxed">{item}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
