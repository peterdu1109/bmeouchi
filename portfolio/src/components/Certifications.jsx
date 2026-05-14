import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const CERTS = [
  {
    title: 'CCNA 1 – Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    year: '2021',
    icon: '🌐',
    color: 'from-cyan-500 to-blue-600',
    skills: ['TCP/IP', 'Routage', 'Commutation', 'IPv6', 'OSI Model'],
  },
  {
    title: 'CCNA 2 – Switching, Routing & Wireless',
    issuer: 'Cisco Networking Academy',
    year: '2022',
    icon: '🔀',
    color: 'from-blue-500 to-purple-600',
    skills: ['VLAN', 'STP', 'OSPF', 'EtherChannel', 'WLAN'],
  },
  {
    title: 'Santé & Sécurité au Travail',
    issuer: 'Formation certifiante',
    year: '2023',
    icon: '🛡️',
    color: 'from-green-500 to-emerald-600',
    skills: ['Prévention risques', 'SST', 'Conformité'],
  },
  {
    title: 'Gestionnaire maintenance & support informatique',
    issuer: 'CESI École Supérieure — Alternance',
    year: '2022',
    icon: '🎓',
    color: 'from-purple-500 to-pink-600',
    skills: ['SysAdmin', 'Réseaux', 'Support N1–N3', 'Gestion de parc'],
  },
]

function CertCard({ cert, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass rounded-2xl p-6 hover:neon-border transition-all duration-300 group hover:scale-[1.02]"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
          {cert.icon}
        </div>
        <div>
          <h3 className="text-white font-bold leading-snug group-hover:gradient-text transition-all duration-300">
            {cert.title}
          </h3>
          <p className="text-slate-500 text-xs font-mono mt-1">{cert.issuer}</p>
        </div>
        <span className={`ml-auto text-xs font-mono px-3 py-1 rounded-full bg-gradient-to-r ${cert.color} text-white flex-shrink-0`}>
          {cert.year}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {cert.skills.map(s => (
          <span key={s} className="text-xs px-2 py-1 rounded-md font-mono text-slate-400 bg-slate-800/60 border border-slate-700/50 hover:border-purple-500/50 hover:text-purple-300 transition-colors">
            {s}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Certifications() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  return (
    <section id="certifications" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          <span className="gradient-text">Certifications</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Formations certifiées Cisco et diplômes reconnus — des bases solides en réseau et infrastructure.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {CERTS.map((cert, i) => (
          <CertCard key={cert.title} cert={cert} index={i} />
        ))}
      </div>
    </section>
  )
}
