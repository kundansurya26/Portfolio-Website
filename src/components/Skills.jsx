import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const skillGroups = [
  {
    category: 'Languages',
    color: 'from-brand-600 to-brand-400',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'C++', level: 70 },
      { name: 'HTML', level: 92 },
      { name: 'CSS', level: 88 },
    ],
  },
  {
    category: 'Frameworks',
    color: 'from-accent-600 to-accent-400',
    skills: [
      { name: 'React.js', level: 82 },
      { name: 'Node.js', level: 72 },
      { name: 'TailwindCSS', level: 88 },
    ],
  },
  {
    category: 'Tools & Other',
    color: 'from-brand-500 to-accent-500',
    skills: [
      { name: 'Power BI', level: 78 },
      { name: 'Git', level: 80 },
      { name: 'REST API', level: 76 },
      { name: 'Google Analytics', level: 70 },
      { name: 'Excel', level: 82 },
    ],
  },
]

const techBadges = [
  'Python', 'JavaScript', 'React.js', 'Node.js', 'TailwindCSS',
  'C++', 'HTML5', 'CSS3', 'Git', 'Power BI', 'REST API',
  'SQL', 'Excel', 'Google Analytics', 'Machine Learning',
]

function SkillBar({ name, level, color, delay, inView }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-slate-500 text-xs font-mono">{level}%</span>
      </div>
      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { ref, inView } = useInView()

  return (
    <section id="skills" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/3 w-72 h-72 bg-accent-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-brand-400 text-xs tracking-widest uppercase mb-3">What I Know</p>
          <h2 className="section-heading">Technical Skills</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-brand-600 to-accent-600 mx-auto mt-4" />
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${group.color}`} />
                <h3 className="font-display font-semibold text-white text-base">{group.category}</h3>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  color={group.color}
                  delay={0.3 + gi * 0.15 + si * 0.06}
                  inView={inView}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-6">Also comfortable with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.04 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="tag cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
