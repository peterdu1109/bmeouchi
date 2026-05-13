import { useEffect, useRef, useState } from 'react'

const SKILLS = [
  {
    category: 'Systèmes & Virtualisation',
    icon: '🖥️',
    color: 'from-purple-500 to-purple-700',
    items: [
      { name: 'Windows (10/11/Server)', level: 95 },
      { name: 'Linux (admin & services)', level: 85 },
      { name: 'Proxmox / VMware ESXi', level: 82 },
      { name: 'macOS', level: 78 },
    ],
  },
  {
    category: 'Réseaux & Sécurité',
    icon: '🌐',
    color: 'from-pink-500 to-pink-700',
    items: [
      { name: 'Active Directory / GPO', level: 90 },
      { name: 'Configuration Pare-feu', level: 82 },
      { name: 'DNS / DHCP / Services web', level: 85 },
      { name: 'Office 365 (comptes, licences)', level: 92 },
    ],
  },
  {
    category: 'Support IT',
    icon: '🛠️',
    color: 'from-orange-500 to-orange-700',
    items: [
      { name: 'Support VIP/VVIP N1–N3', level: 95 },
      { name: 'Ticketing (ServiceNow, SmartDesk)', level: 93 },
      { name: 'Imaging / Déploiement postes', level: 90 },
      { name: 'Flotte mobile iOS / Android', level: 85 },
    ],
  },
  {
    category: 'Dev & Outils',
    icon: '💻',
    color: 'from-cyan-500 to-cyan-700',
    items: [
      { name: 'Python / PHP / Ruby', level: 72 },
      { name: 'C++ / Java', level: 65 },
      { name: 'HTML / CSS', level: 80 },
      { name: 'Sauvegarde NAS & Monitoring', level: 83 },
    ],
  },
]

const BADGES = [
  'Windows Server', 'Linux', 'macOS', 'Proxmox', 'VMware',
  'Active Directory', 'Office 365', 'DNS/DHCP', 'Pare-feu',
  'ServiceNow', 'SmartDesk', 'Jira', 'Zendesk', 'GLPI',
  'OCS Inventory', 'Kace', 'PuTTy', 'Visual Studio',
  'Python', 'PHP', 'Ruby', 'C++', 'Java', 'HTML/CSS',
  'NAS', 'Monitoring', 'CCNA 1&2', 'iOS/Android MDM',
]

function SkillBar({ name, level, color }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setWidth(level) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level])

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-slate-300">{name}</span>
        <span className="text-xs font-mono text-purple-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color} transition-all duration-1000 ease-out`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="competences" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          <span className="gradient-text">Compétences</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Un stack technique solide, forgé sur le terrain — de la Défense à Courbevoie.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {SKILLS.map(cat => (
          <div key={cat.category} className="glass neon-border rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{cat.icon}</span>
              <h3 className={`text-xl font-bold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                {cat.category}
              </h3>
            </div>
            {cat.items.map(item => (
              <SkillBar key={item.name} name={item.name} level={item.level} color={cat.color} />
            ))}
          </div>
        ))}
      </div>

      <div className="glass rounded-2xl p-6">
        <h3 className="text-lg font-semibold text-slate-300 mb-4 text-center">Technologies & Outils</h3>
        <div className="flex flex-wrap gap-2 justify-center">
          {BADGES.map(badge => (
            <span
              key={badge}
              className="px-3 py-1.5 rounded-lg text-sm font-mono text-slate-300 bg-slate-800/50 border border-slate-700/50 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-200 cursor-default"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
