import { useEffect, useRef } from 'react'

const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: `${Math.random() * 4 + 2}px`,
  duration: `${Math.random() * 20 + 10}s`,
  delay: `${Math.random() * 10}s`,
  color: ['#a855f7', '#ec4899', '#f97316', '#06b6d4'][Math.floor(Math.random() * 4)],
}))

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < 3; i++) {
        const x = canvas.width / 2 + Math.cos(time * 0.5 + (i * Math.PI * 2) / 3) * 300
        const y = canvas.height / 2 + Math.sin(time * 0.3 + (i * Math.PI * 2) / 3) * 200
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 250)
        const colors = ['rgba(168,85,247,0.08)', 'rgba(236,72,153,0.08)', 'rgba(249,115,22,0.06)']
        gradient.addColorStop(0, colors[i])
        gradient.addColorStop(1, 'transparent')
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }
      time += 0.005
      animationId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {PARTICLES.map(p => (
        <div
          key={p.id}
          className="particle rounded-full"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDuration: p.duration,
            animationDelay: p.delay,
            boxShadow: `0 0 6px ${p.color}`,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass neon-border text-sm font-mono text-purple-400">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponible · Courbevoie (92) · Île-de-France
        </div>

        <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
          <span className="gradient-text animate-glow">Bautros</span>
          <br />
          <span className="text-white">Meouchi</span>
        </h1>

        <p className="text-xl md:text-2xl font-mono text-purple-300 mb-3 tracking-widest uppercase">
          Consultant IT · Support VIP/VVIP · SysAdmin
        </p>

        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Technicien Support Informatique VIP/VVIP chez <span className="text-purple-400 font-semibold">CCF – La Défense</span>,
          ex-Colonna &amp; Metaline. Président fondateur de l'association{' '}
          <span className="text-pink-400 font-semibold">Valaron</span>.
          Infrastructure serveurs, réseaux, cybersécurité.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projets"
            className="px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-xl font-semibold text-purple-300 glass neon-border hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
          >
            Me contacter
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-md mx-auto">
          {[
            { value: '5+', label: 'ans d\'expérience' },
            { value: 'VIP', label: 'Support N1–N3' },
            { value: 'CCNA', label: '1 & 2 certifié' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black gradient-text">{stat.value}</div>
              <div className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-purple-500/50 flex items-start justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-gradient-to-b from-purple-400 to-transparent" />
        </div>
      </div>
    </section>
  )
}
