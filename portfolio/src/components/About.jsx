const TIMELINE = [
  {
    year: '2024–présent',
    title: 'Administrateur Systèmes & Réseaux',
    org: 'Valaron',
    desc: 'Gestion de l\'infrastructure réseau, montage et configuration de serveurs, supervision de la sécurité et de la disponibilité des services.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2022–2024',
    title: 'Support IT — Niveau 1 à 3',
    org: 'Expérience terrain',
    desc: 'Résolution d\'incidents techniques multi-niveaux : assistance utilisateurs, diagnostics matériels/logiciels, escalade et résolution avancée d\'incidents complexes.',
    color: 'from-pink-500 to-orange-500',
  },
  {
    year: '2021–2022',
    title: 'Cybersécurité & Réseaux',
    org: 'Formation & Projets',
    desc: 'Sécurisation d\'infrastructures, analyse de vulnérabilités, mise en place de politiques de sécurité réseau et pare-feux.',
    color: 'from-orange-500 to-cyan-500',
  },
  {
    year: '2020',
    title: 'Co-fondateur',
    org: 'Association Valaron',
    desc: 'Création et développement de l\'association Valaron, mise en place de l\'infrastructure technique et coordination des ressources système.',
    color: 'from-cyan-500 to-purple-500',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          <span className="gradient-text">À propos</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Passionné par les infrastructures, la sécurité et les systèmes qui font tourner le monde numérique.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <div className="glass neon-border rounded-2xl p-8 mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-black text-white">
                BM
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Bautros Meouchi</h3>
                <p className="text-purple-400 font-mono text-sm">@bmeouchi</p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Administrateur systèmes & réseaux avec une expertise couvrant l'ensemble du spectre IT —
              du support utilisateur de niveau 1 jusqu'à la résolution d'incidents complexes de niveau 3,
              en passant par la cybersécurité et la gestion d'infrastructure.
            </p>
            <p className="text-slate-400 leading-relaxed">
              J'ai monté des serveurs, sécurisé des réseaux, et co-fondé l'association{' '}
              <span className="text-purple-400 font-semibold">Valaron</span> — un projet qui incarne
              ma vision d'une tech accessible et robuste.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🖥️', label: 'Linux / Windows Server' },
              { icon: '🔐', label: 'Cybersécurité' },
              { icon: '🌐', label: 'Réseaux TCP/IP' },
              { icon: '🛡️', label: 'Pare-feu & VPN' },
            ].map(item => (
              <div key={item.label} className="glass rounded-xl p-4 flex items-center gap-3 hover:neon-border transition-all duration-300 hover:scale-105">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm text-slate-300 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {TIMELINE.map((item, i) => (
            <div key={i} className="relative pl-8 group">
              <div className={`absolute left-0 top-2 w-3 h-3 rounded-full bg-gradient-to-r ${item.color} group-hover:scale-150 transition-transform duration-300`} />
              {i < TIMELINE.length - 1 && (
                <div className="absolute left-[5px] top-5 w-[2px] h-full bg-gradient-to-b from-purple-500/30 to-transparent" />
              )}
              <div className="glass rounded-xl p-5 hover:neon-border transition-all duration-300 group-hover:scale-[1.02]">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-mono px-2 py-1 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                    {item.year}
                  </span>
                  <span className="text-xs text-slate-500 italic">{item.org}</span>
                </div>
                <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
