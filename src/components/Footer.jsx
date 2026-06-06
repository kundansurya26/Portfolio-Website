import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 text-xs font-mono">
          © {new Date().getFullYear()} Kundan Suryawanshi. Built with React & Framer Motion.
        </p>
        <div className="flex gap-4">
          {[
            { icon: FiGithub, href: 'https://github.com/kundansurya26' },
            { icon: FiLinkedin, href: 'https://www.linkedin.com/in/kundan-suryawanshi/' },
            { icon: FiMail, href: 'mailto:kundansurya24@gmail.com' },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-brand-400 transition-colors"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
