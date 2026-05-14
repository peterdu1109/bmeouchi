import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const TIMELINE = [
  {
    year: '2024 – Présent',
    title: 'Administrateur Système & Réseau',
    org: 'Elit Service — client : Afalula (CDI)',
    desc: 'Administration réseau et systèmes, cybersécurité, SOC (analyse d\'alertes, réponse à incidents), support VIP/VVIP N1→N3, infogérance. Supervision de l\'infrastructure client, durcissement des systèmes, gestion des pare-feu et des accès.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2021 – 2024',
    title: 'Technicien Support VIP/VVIP',
    org: 'CCF – La Défense (CDI)',
    desc: 'Support dédié aux membres du Comité Exécutif et VIP/VVIP. Interventions d\'urgence en environnements sécurisés, configuration de postes haut de gamme (PC/Mac), coordination avec les équipes Infrastructure, Réseau et Sécurité. Administration AD/O365, ticketing Smartdesk & ServiceNow.',
    color: 'from-pink-500 to-orange-500',
  },
  {
    year: '2021 – 2024',
    title: 'Technicien Informatique',
    org: 'Colonna – Neuilly-sur-Seine (CDI)',
    desc: 'Support N1 à N3, helpdesk, déploiement de postes, imaging/masters, administration Active Directory & Office 365, gestion de flotte mobile iOS/Android, ticketing Smartdesk & ServiceNow.',
    color: 'from-orange-400 to-yellow-500',
  },
  {
    year: '2020 – 2021',
    title: 'Technicien Informatique de Backup',
    org: 'Metaline – Nanterre (CDI)',
    desc: 'Assistance de proximité, support helpdesk, résolution d\'incidents à distance et sur site, masterisation de postes, interventions hors Île-de-France, gestion Active Directory et inventaire.',
    color: 'from-orange-500 to-cyan-500',
  },
  {
    year: '2019 – 2023',
    title: 'Président & Directeur Général',
    org: 'Association Valaron – Courbevoie',
    desc: 'Pilotage de projets IT, management d\'équipe, administration serveurs Linux & Windows (DNS, web, Proxmox, VMware), configuration pare-feu, automatisation des tâches, sauvegardes NAS, sécurité et conformité.',
    color: 'from-cyan-500 to-purple-500',
  },
]

const EDUCATION = [
  { title: 'Gestionnaire maintenance et support informatique', school: 'CESI École Supérieure', type: 'Alternance' },
  { title: 'Bac Pro – Systèmes électroniques numériques', school: 'Lycée Claude Chappe', type: 'Baccalauréat' },
]

function FadeIn({ children, delay = 0, direction = 'up' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const initial = { opacity: 0, y: direction === 'up' ? 30 : 0, x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0 }
  return (
    <motion.div ref={ref} initial={initial} animate={inView ? { opacity: 1, x: 0, y: 0 } : {}} transition={{ duration: 0.6, delay }}>
      {children}
    </motion.div>
  )
}

export default function About() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          <span className="gradient-text">À propos</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Admin Sys & Réseau · Cybersécurité · SOC · Infogérance — 5 ans d'expérience terrain en Île-de-France.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <FadeIn delay={0.1} direction="left">
            <div className="glass neon-border rounded-2xl p-8 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-black text-white">
                  BM
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Bautros Meouchi</h3>
                  <p className="text-purple-400 font-mono text-sm">Courbevoie · 27 ans</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-4">
                Administrateur Système & Réseau actuellement en poste chez{' '}
                <span className="text-purple-400 font-semibold">Elit Service</span>{' '}
                (client : <span className="text-pink-400 font-semibold">Afalula</span>) —
                réseau, cybersécurité, SOC, support VIP/VVIP N1→N3 et infogérance.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                Fondateur et ancien Président de l'association{' '}
                <span className="text-pink-400 font-semibold">Valaron</span> — projet IT complet :
                virtualisation, réseaux, sécurité, monitoring et gestion d'équipe.
              </p>
              <div className="flex flex-wrap gap-2">
                {['CCNA 1 & 2', 'Alternance CESI', 'Santé & Sécurité au travail'].map(c => (
                  <span key={c} className="text-xs px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="glass rounded-2xl p-6 mb-6">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Formation</h3>
              <div className="space-y-3">
                {EDUCATION.map(e => (
                  <div key={e.title} className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">🎓</span>
                    <div>
                      <div className="text-slate-200 text-sm font-medium">{e.title}</div>
                      <div className="text-slate-500 text-xs">{e.school} · {e.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} direction="left">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Langues</h3>
              <div className="space-y-2">
                {[
                  { lang: 'Français', level: 'Avancé', pct: 95 },
                  { lang: 'Arabe littéraire', level: 'Avancé', pct: 90 },
                  { lang: 'Anglais', level: 'Intermédiaire', pct: 60 },
                ].map(l => (
                  <div key={l.lang}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-slate-300">{l.lang}</span>
                      <span className="text-slate-500 text-xs">{l.level}</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500" style={{ width: `${l.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Timeline */}
        <div className="space-y-4">
          {TIMELINE.map((item, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.1} direction="right">
              <div className="relative pl-8 group">
                <div className={`absolute left-0 top-2 w-3 h-3 rounded-full bg-gradient-to-r ${item.color} group-hover:scale-150 transition-transform duration-300`} />
                {i < TIMELINE.length - 1 && (
                  <div className="absolute left-[5px] top-5 w-[2px] h-full bg-gradient-to-b from-purple-500/30 to-transparent" />
                )}
                <div className="glass rounded-xl p-5 hover:neon-border transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-mono px-2 py-1 rounded-full bg-gradient-to-r ${item.color} text-white`}>
                      {item.year}
                    </span>
                  </div>
                  <h4 className="text-white font-semibold mb-0.5">{item.title}</h4>
                  <p className="text-purple-400 text-xs font-mono mb-2">{item.org}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
