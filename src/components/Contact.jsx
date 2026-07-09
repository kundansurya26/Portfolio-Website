import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { HiCheckCircle, HiXCircle } from 'react-icons/hi'
import emailjs from '@emailjs/browser'

// ─────────────────────────────────────────────
// EMAILJS CONFIG — fill these after signing up
// at https://www.emailjs.com
// ─────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_t3ctmpp'
const EMAILJS_TEMPLATE_ID = 'template_nkzf9nd'
const EMAILJS_PUBLIC_KEY  = 'cENDtDawul4CG3Mu4'

export default function Contact() {
  const { ref, inView } = useInView()
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          your_email: form.email,
          message: form.message,
          to_name: 'Kundan',
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" ref={ref} className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-brand-900/20 via-transparent to-transparent" />
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-brand-600/8 rounded-full blur-3xl" />
        <div className="absolute right-0 top-0 w-80 h-80 bg-accent-600/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-brand-400 text-xs tracking-widest uppercase mb-3">Get In Touch</p>
          <h2 className="section-heading">Contact Me</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-brand-600 to-accent-600 mx-auto mt-4 mb-4" />
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            I'm open to internships, collaborations, and freelance opportunities. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: FiMail,    label: 'Email',    value: 'kundansurya24@gmail.com', href: 'mailto:kundansurya24@gmail.com' },
              { icon: FiPhone,   label: 'Phone',    value: '+91 72498 19135',         href: 'tel:+917249819135' },
              { icon: FiMapPin,  label: 'Location', value: 'Ahmedabad, Gujarat',      href: null },
            ].map((item) => (
              <div key={item.label} className="glass-hover rounded-xl p-4 flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-brand-600/10 border border-brand-600/20 flex items-center justify-center text-brand-400 shrink-0">
                  <item.icon size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-500 text-xs font-mono">{item.label}</p>
                  {item.href
                    ? <a href={item.href} className="text-slate-200 text-sm hover:text-brand-400 transition-colors truncate block">{item.value}</a>
                    : <p className="text-slate-200 text-sm">{item.value}</p>
                  }
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="glass rounded-xl p-5">
              <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">Find me on</p>
              <div className="flex gap-3">
                {[
                  { icon: FiGithub,   href: 'https://github.com/kundansurya26',                    label: 'GitHub' },
                  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kundan-suryawanshi/',     label: 'LinkedIn' },
                  { icon: FiMail,     href: 'mailto:kundansurya24@gmail.com',                      label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-600/40 transition-all hover:scale-110"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="lg:col-span-3"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-slate-400 text-xs font-mono uppercase tracking-widest mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-600/50 focus:bg-brand-600/5 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 text-xs font-mono uppercase tracking-widest mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-600/50 focus:bg-brand-600/5 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-mono uppercase tracking-widest mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-600 focus:outline-none focus:border-brand-600/50 focus:bg-brand-600/5 transition-all resize-none"
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3 text-sm"
                >
                  <HiCheckCircle size={18} />
                  Message sent! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3 text-sm"
                >
                  <HiXCircle size={18} />
                  Something went wrong. Please try again or email me directly.
                </motion.div>
              )}

              <button
                type="submit"
                disabled={status === 'sending' || status === 'success'}
                className={`w-full btn-primary justify-center py-3.5 disabled:opacity-70 disabled:cursor-not-allowed ${status === 'success' ? 'from-green-600 to-green-500' : ''}`}
              >
                {status === 'sending' ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                ) : status === 'success' ? (
                  <><HiCheckCircle size={17} /> Message Sent!</>
                ) : (
                  <><FiSend size={15} /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
