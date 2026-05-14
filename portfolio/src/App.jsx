import { useState, useEffect, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Blog from './components/Blog'

const NAV_LINKS = [
  { href: '#hero', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#projets', label: 'Projets' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
]

function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label="Changer le thème"
      className="w-10 h-10 rounded-full glass flex items-center justify-center text-lg transition-all duration-300 hover:neon-border hover:scale-110"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 glass border-b border-white/5' : 'py-6'}`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="font-mono font-bold text-lg gradient-text">
          &lt;bmeouchi /&gt;
        </a>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200 nav-link"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            className="text-slate-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className={`w-6 h-0.5 bg-current transition-all mb-1.5 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-current transition-all mb-1.5 ${menuOpen ? 'opacity-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link font-medium transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

const FORM_STATES = { idle: 'idle', sending: 'sending', success: 'success', error: 'error' }

function Contact() {
  const [formState, setFormState] = useState(FORM_STATES.idle)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState(FORM_STATES.sending)
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setFormState(res.ok ? FORM_STATES.success : FORM_STATES.error)
    } catch {
      setFormState(FORM_STATES.error)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          <span className="gradient-text">Contact</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Vous avez un projet d'infrastructure, besoin d'un admin sys, ou envie de collaborer ? Je suis disponible.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Coordonnées */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass neon-border rounded-2xl p-8"
        >
          <div className="space-y-4 mb-6">
            {[
              { icon: '📧', label: 'Email', value: 'bautros@gmail.com' },
              { icon: '📞', label: 'Téléphone', value: '07 87 60 39 49' },
              { icon: '📍', label: 'Localisation', value: 'Courbevoie, 92400 · Île-de-France' },
              { icon: '🏛️', label: 'Association fondée', value: 'Valaron – Courbevoie' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 hover:bg-purple-500/10 transition-colors group">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</div>
                  <div className="text-slate-200 font-mono group-hover:text-purple-300 transition-colors">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
          <a
            href="mailto:bautros@gmail.com"
            className="block w-full py-4 rounded-xl font-semibold text-white text-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Envoyer un email →
          </a>
        </motion.div>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-2xl p-8"
        >
          <AnimatePresence mode="wait">
            {formState === FORM_STATES.success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-8"
              >
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
                <p className="text-slate-400">Je vous répondrai dans les plus brefs délais.</p>
                <button
                  onClick={() => { setFormState(FORM_STATES.idle); setForm({ name: '', email: '', message: '' }) }}
                  className="mt-6 text-sm text-purple-400 hover:text-purple-300 underline"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-6">Envoyer un message</h3>
                <div>
                  <label className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Nom</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    placeholder="Votre nom"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/30 transition-all font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    placeholder="votre@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/30 transition-all font-mono text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-400 uppercase tracking-wider block mb-1">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder="Votre message..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-purple-500/70 focus:ring-1 focus:ring-purple-500/30 transition-all font-mono text-sm resize-none"
                  />
                </div>
                {formState === FORM_STATES.error && (
                  <p className="text-red-400 text-xs">Erreur lors de l'envoi. Réessayez ou contactez par email.</p>
                )}
                <button
                  type="submit"
                  disabled={formState === FORM_STATES.sending}
                  className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  {formState === FORM_STATES.sending ? 'Envoi en cours…' : 'Envoyer →'}
                </button>
                <p className="text-slate-600 text-xs text-center">
                  Propulsé par <a href="https://formspree.io" target="_blank" rel="noreferrer" className="text-purple-500/60 hover:text-purple-400">Formspree</a> · Configurez votre ID dans App.jsx
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center">
      <p className="text-slate-600 font-mono text-sm">
        © {new Date().getFullYear()} <span className="text-purple-500">Bautros Meouchi</span> — React · Tailwind · Framer Motion
      </p>
    </footer>
  )
}

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
