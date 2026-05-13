const PROJECTS = [
  {
    title: 'Association Valaron',
    desc: 'Co-fondateur et architecte technique de l\'association Valaron. Mise en place de toute l\'infrastructure IT : serveurs, réseau, sécurité, et services internes.',
    tags: ['Infrastructure', 'Serveurs', 'Réseaux', 'Administration'],
    color: 'from-purple-500 to-pink-500',
    icon: '🏛️',
    status: 'Actif',
  },
  {
    title: 'Infrastructure Serveurs',
    desc: 'Montage, configuration et déploiement de serveurs physiques et virtuels. Mise en place de clusters Proxmox, gestion du stockage et haute disponibilité.',
    tags: ['Proxmox', 'VMware', 'Linux', 'Stockage NAS'],
    color: 'from-orange-500 to-pink-500',
    icon: '🖥️',
    status: 'Déployé',
  },
  {
    title: 'Sécurisation Réseau',
    desc: 'Audit et hardening d\'une infrastructure réseau : segmentation VLAN, déploiement de pare-feux pfSense, VPN site-à-site, et monitoring des flux.',
    tags: ['pfSense', 'VLAN', 'VPN', 'Wireshark'],
    color: 'from-cyan-500 to-blue-500',
    icon: '🛡️',
    status: 'Déployé',
  },
  {
    title: 'Support IT Multi-Niveaux',
    desc: 'Mise en place d\'un système de ticketing et résolution d\'incidents sur 3 niveaux : helpdesk N1, support technique N2, et résolution avancée N3.',
    tags: ['GLPI', 'Ticketing', 'ITSM', 'Documentation'],
    color: 'from-green-500 to-cyan-500',
    icon: '🛠️',
    status: 'Opérationnel',
  },
  {
    title: 'Déploiement Active Directory',
    desc: 'Installation et administration d\'un domaine Windows Server avec Active Directory, politiques de groupe (GPO), gestion des utilisateurs et des droits.',
    tags: ['Windows Server', 'Active Directory', 'GPO', 'DNS/DHCP'],
    color: 'from-blue-500 to-purple-500',
    icon: '🗂️',
    status: 'Déployé',
  },
  {
    title: 'Monitoring & Supervision',
    desc: 'Mise en place d\'une solution de supervision (Zabbix/Grafana) pour surveiller les serveurs, réseaux et services avec alerting en temps réel.',
    tags: ['Zabbix', 'Grafana', 'Prometheus', 'Alerting'],
    color: 'from-pink-500 to-orange-500',
    icon: '📊',
    status: 'En cours',
  },
]

const STATUS_COLORS = {
  'Actif': 'text-green-400 bg-green-400/10',
  'Déployé': 'text-blue-400 bg-blue-400/10',
  'Opérationnel': 'text-purple-400 bg-purple-400/10',
  'En cours': 'text-orange-400 bg-orange-400/10',
}

export default function Projects() {
  return (
    <section id="projets" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          <span className="gradient-text">Projets</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Des infrastructures réelles, des défis concrets, des solutions qui tiennent en prod.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            className="glass rounded-2xl p-6 group hover:scale-[1.03] hover:neon-border transition-all duration-300 cursor-default"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl shadow-lg`}>
                {project.icon}
              </div>
              <span className={`text-xs font-mono px-2 py-1 rounded-full ${STATUS_COLORS[project.status]}`}>
                ● {project.status}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              {project.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className={`text-xs px-2 py-1 rounded-md font-mono bg-gradient-to-r ${project.color} bg-opacity-10 text-slate-300 border border-slate-700/50`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
