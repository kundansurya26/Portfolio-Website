import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiMapPin, FiPhone, FiMail, FiUser } from 'react-icons/fi'

const facts = [
  { icon: FiMapPin, label: 'Location', value: 'Ahmedabad, Gujarat' },
  { icon: FiPhone, label: 'Phone', value: '+91 72498 19135' },
  { icon: FiMail, label: 'Email', value: 'kundansurya24@gmail.com' },
  { icon: FiUser, label: 'Role', value: 'B.Tech CSE Student' },
]

const stats = [
  { value: '8.30', label: 'CGPA', suffix: '' },
  { value: '4+', label: 'Projects', suffix: '' },
  { value: '2+', label: 'Certifications', suffix: '' },
  { value: '2027', label: 'Graduating', suffix: '' },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="about" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-brand-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-brand-400 text-xs tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="section-heading">About Me</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-brand-600 to-accent-600 mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Motivated B.Tech Computer Science student with a strong interest in{' '}
              <span className="text-brand-400 font-medium">data analysis</span> and{' '}
              <span className="text-accent-400 font-medium">web development</span>. Skilled in Python,
              SQL, HTML, CSS, and JavaScript with hands-on project experience.
            </p>
            <p className="text-slate-400 text-base leading-relaxed mb-10">
              Passionate about building responsive web applications and analyzing data to generate
              meaningful insights. Currently pursuing B.Tech CSE at Indus University, Ahmedabad, with a
              CGPA of 8.30.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-4 mb-10">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="font-display font-bold text-2xl gradient-text">{s.value}</div>
                  <div className="text-slate-500 text-xs mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="space-y-3"
          >
            {facts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.35 + i * 0.08 }}
                className="glass-hover rounded-xl p-4 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-600/10 border border-brand-600/20 flex items-center justify-center text-brand-400 group-hover:bg-brand-600/20 transition-colors">
                  <fact.icon size={16} />
                </div>
                <div>
                  <p className="text-slate-500 text-xs font-mono">{fact.label}</p>
                  <p className="text-slate-200 text-sm font-medium">{fact.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Strengths */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="glass rounded-xl p-5 mt-2"
            >
              <p className="text-slate-400 text-xs font-mono uppercase tracking-widest mb-3">Core Strengths</p>
              <div className="flex flex-wrap gap-2">
                {['Problem-Solving Mindset', 'Quick Learner', 'Team Player', 'Data-Driven'].map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
