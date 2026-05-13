import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

const NAV_LINKS = [
  { href: '#hero', label: 'Accueil' },
  { href: '#about', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
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

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-purple-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className={`w-6 h-0.5 bg-current transition-all mb-1.5 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-all mb-1.5 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass border-t border-white/5 px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-purple-300 font-medium transition-colors"
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

function Contact() {
  return (
    <section id="contact" className="py-24 px-4 max-w-2xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-black mb-4">
        <span className="gradient-text">Contact</span>
      </h2>
      <p className="text-slate-400 mb-10 leading-relaxed">
        Vous avez un projet d'infrastructure, besoin d'un admin sys, ou envie de collaborer ?
        Je suis disponible.
      </p>

      <div className="glass neon-border rounded-2xl p-8">
        <div className="space-y-4 text-left mb-6">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 hover:bg-purple-500/10 transition-colors group">
            <span className="text-2xl">🌐</span>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Site</div>
              <div className="text-slate-200 font-mono group-hover:text-purple-300 transition-colors">bmeouchi.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/30 hover:bg-purple-500/10 transition-colors group">
            <span className="text-2xl">🏛️</span>
            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Association</div>
              <div className="text-slate-200 font-mono group-hover:text-purple-300 transition-colors">Valaron</div>
            </div>
          </div>
        </div>

        <a
          href="mailto:contact@bmeouchi.com"
          className="block w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
        >
          Envoyer un message →
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center">
      <p className="text-slate-600 font-mono text-sm">
        © {new Date().getFullYear()} <span className="text-purple-500">Bautros Meouchi</span> — Construit avec React & Tailwind
      </p>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
