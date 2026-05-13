const PROJECTS = [
  {
    title: 'CCF – Support VIP/VVIP',
    desc: 'Support dédié aux membres du Comité Exécutif à La Défense. Interventions d\'urgence en environnements sécurisés, configuration postes haut de gamme (PC/Mac), gestion d\'inventaire VIP, administration AD/O365.',
    tags: ['ServiceNow', 'SmartDesk', 'AD/O365', 'PC/Mac'],
    color: 'from-purple-500 to-pink-500',
    icon: '🏦',
    status: 'En poste',
  },
  {
    title: 'Association Valaron',
    desc: 'Fondateur et Président — gestion complète de l\'infrastructure IT : serveurs Linux & Windows, Proxmox, VMware, DNS, services web, pare-feu, sauvegardes NAS, monitoring proactif et management d\'équipe.',
    tags: ['Proxmox', 'VMware', 'Linux', 'Pare-feu', 'NAS'],
    color: 'from-pink-500 to-orange-500',
    icon: '🏛️',
    status: '2019–2023',
  },
  {
    title: 'Colonna – Technicien IT',
    desc: 'Support N1 à N3, helpdesk, déploiement de postes et imaging/masters, administration Active Directory & Office 365, gestion flotte mobile iOS/Android, ticketing Smartdesk & ServiceNow.',
    tags: ['Active Directory', 'O365', 'Imaging', 'iOS/Android'],
    color: 'from-orange-500 to-cyan-500',
    icon: '💼',
    status: '2021–2024',
  },
  {
    title: 'Metaline – Backup IT',
    desc: 'Assistance de proximité et helpdesk, résolution d\'incidents à distance et sur site, masterisation de postes, interventions hors Île-de-France, gestion Active Directory et inventaire.',
    tags: ['Helpdesk', 'On-site', 'Active Directory', 'Ticketing'],
    color: 'from-cyan-500 to-blue-500',
    icon: '🔧',
    status: '2020–2021',
  },
  {
    title: 'Infrastructure Serveurs Valaron',
    desc: 'Montage, configuration et déploiement de serveurs physiques et virtuels sous Proxmox et VMware. Mise en place de DNS, services web, sauvegardes NAS automatisées et monitoring proactif.',
    tags: ['Proxmox', 'VMware', 'DNS', 'Monitoring'],
    color: 'from-blue-500 to-purple-500',
    icon: '🖥️',
    status: 'Déployé',
  },
  {
    title: 'Sécurité Réseau & Conformité',
    desc: 'Configuration de pare-feu et automatisation des tâches récurrentes pour sécuriser les réseaux. Application des bonnes pratiques et standards réglementaires de sécurité informatique.',
    tags: ['Pare-feu', 'Automatisation', 'Conformité', 'Sécurité'],
    color: 'from-green-500 to-cyan-500',
    icon: '🛡️',
    status: 'Déployé',
  },
]

const STATUS_COLORS = {
  'En poste':  'text-green-400 bg-green-400/10',
  '2019–2023': 'text-pink-400 bg-pink-400/10',
  '2021–2024': 'text-orange-400 bg-orange-400/10',
  '2020–2021': 'text-cyan-400 bg-cyan-400/10',
  'Déployé':   'text-blue-400 bg-blue-400/10',
}

export default function Projects() {
  return (
    <section id="projets" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          <span className="gradient-text">Expériences & Projets</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          5 ans de missions concrètes, de la Défense à Courbevoie — du VIP au serveur bare metal.
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
              <span className={`text-xs font-mono px-2 py-1 rounded-full ${STATUS_COLORS[project.status] ?? 'text-slate-400 bg-slate-400/10'}`}>
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
