import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const ARTICLES = [
  {
    slug: 'linux-cheatsheet',
    title: 'Linux SysAdmin — Cheatsheet',
    category: 'Linux',
    date: '2026-05-01',
    desc: 'Les commandes Linux essentielles pour l\'administration système au quotidien.',
    color: 'from-orange-500 to-yellow-500',
    icon: '🐧',
    content: `# Linux SysAdmin — Cheatsheet

## Gestion des services
\`\`\`bash
systemctl start|stop|restart|status <service>
systemctl enable|disable <service>
journalctl -u <service> -f          # logs en temps réel
\`\`\`

## Réseau
\`\`\`bash
ip a                                 # interfaces réseau
ip r                                 # table de routage
ss -tlnp                             # ports en écoute
ping -c 4 <host>
traceroute <host>
nmap -sV -p 1-65535 <ip>
\`\`\`

## Disques & fichiers
\`\`\`bash
df -h                                # espace disque
du -sh /*                            # taille répertoires
lsblk                                # périphériques bloc
mount /dev/sdb1 /mnt
\`\`\`

## Processus
\`\`\`bash
ps aux | grep <process>
top / htop
kill -9 <PID>
nice -n 10 <commande>
\`\`\`

## Utilisateurs & permissions
\`\`\`bash
useradd -m -s /bin/bash <user>
passwd <user>
usermod -aG sudo <user>
chmod 755 <fichier>
chown user:group <fichier>
\`\`\``,
  },
  {
    slug: 'active-directory',
    title: 'Active Directory — Tips & Tricks',
    category: 'Windows',
    date: '2026-04-20',
    desc: 'Commandes PowerShell et bonnes pratiques pour l\'administration Active Directory.',
    color: 'from-blue-500 to-cyan-500',
    icon: '🏢',
    content: `# Active Directory — Tips & Tricks

## Gestion des utilisateurs (PowerShell)
\`\`\`powershell
# Créer un utilisateur
New-ADUser -Name "Jean Dupont" -SamAccountName jdupont \`
  -AccountPassword (ConvertTo-SecureString "P@ss123" -AsPlainText -Force) \`
  -Enabled $true

# Modifier un utilisateur
Set-ADUser -Identity jdupont -Title "Technicien" -Department "IT"

# Désactiver un compte
Disable-ADAccount -Identity jdupont

# Lister les membres d'un groupe
Get-ADGroupMember -Identity "Admins IT" | Select Name
\`\`\`

## GPO
\`\`\`powershell
# Forcer l'application des GPO
gpupdate /force
gpresult /r                          # résultats GPO appliquées
\`\`\`

## Recherche & audit
\`\`\`powershell
# Utilisateurs inactifs depuis 90 jours
$date = (Get-Date).AddDays(-90)
Get-ADUser -Filter {LastLogonDate -lt $date} -Properties LastLogonDate

# Comptes expirés
Search-ADAccount -AccountExpired | Select Name
\`\`\``,
  },
  {
    slug: 'proxmox-vmware',
    title: 'Proxmox & VMware — Guide rapide',
    category: 'Virtualisation',
    date: '2026-04-10',
    desc: 'Création et gestion de VMs sous Proxmox VE et VMware ESXi.',
    color: 'from-purple-500 to-pink-500',
    icon: '🖥️',
    content: `# Proxmox & VMware — Guide rapide

## Proxmox VE — CLI
\`\`\`bash
# Lister les VMs
qm list

# Démarrer / arrêter une VM
qm start <vmid>
qm stop <vmid>
qm reboot <vmid>

# Créer un snapshot
qm snapshot <vmid> snap1 --description "avant MAJ"

# Cloner une VM
qm clone <vmid> <newid> --name clone-test --full

# Infos d'une VM
qm config <vmid>
\`\`\`

## Proxmox — Gestion stockage
\`\`\`bash
pvesm status                         # état des stockages
pvesm list <storage>                 # contenu d'un stockage
\`\`\`

## VMware ESXi — PowerCLI
\`\`\`powershell
Connect-VIServer -Server <esxi-ip>
Get-VM | Select Name, PowerState
Start-VM -VM "NomVM"
Stop-VM -VM "NomVM" -Confirm:$false
New-Snapshot -VM "NomVM" -Name "snap-pre-update"
\`\`\``,
  },
  {
    slug: 'securite-reseau',
    title: 'Sécurité Réseau — Checklist',
    category: 'Cybersécurité',
    date: '2026-03-28',
    desc: 'Bonnes pratiques et checklist de sécurité pour un réseau d\'entreprise.',
    color: 'from-red-500 to-orange-500',
    icon: '🛡️',
    content: `# Sécurité Réseau — Checklist

## Pare-feu
- [ ] Règles "deny all by default"
- [ ] Segmentation VLAN (serveurs, postes, IoT, invités)
- [ ] Logs activés et centralisés (SIEM)
- [ ] Mise à jour firmware régulière

## Active Directory
- [ ] MFA activé pour les comptes admins
- [ ] Comptes de service avec permissions minimales
- [ ] Audit des connexions échouées (Event ID 4625)
- [ ] Revue trimestrielle des membres des groupes admins

## Postes de travail
- [ ] BitLocker activé
- [ ] Antivirus/EDR déployé
- [ ] WSUS / mises à jour automatiques
- [ ] USB désactivé ou contrôlé

## Réseau
- [ ] Certificats SSL valides et renouvelés
- [ ] VPN avec authentification forte
- [ ] Monitoring trafic réseau (IDS/IPS)
- [ ] Backup testé et hors-site

## Audit régulier
\`\`\`bash
# Scan de vulnérabilités basique (nmap)
nmap -sV --script vuln <cible>

# Vérification ports ouverts
netstat -tlnp
\`\`\``,
  },
]

const CATEGORIES = ['Tous', 'Linux', 'Windows', 'Virtualisation', 'Cybersécurité']

function ArticleModal({ article, onClose }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.3 }}
          className="relative z-10 glass neon-border rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-8"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors text-2xl leading-none"
          >
            ×
          </button>
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${article.color} text-white text-xs font-mono mb-4`}>
            {article.icon} {article.category}
          </div>
          <h2 className="text-2xl font-black text-white mb-2">{article.title}</h2>
          <p className="text-slate-500 text-xs font-mono mb-6">{article.date}</p>
          <div className="prose prose-invert prose-sm max-w-none">
            <pre className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap font-mono bg-slate-900/50 rounded-xl p-4 overflow-x-auto">
              {article.content}
            </pre>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Tous')
  const [selectedArticle, setSelectedArticle] = useState(null)
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true })

  const filtered = activeCategory === 'Tous'
    ? ARTICLES
    : ARTICLES.filter(a => a.category === activeCategory)

  return (
    <section id="blog" className="py-24 px-4 max-w-6xl mx-auto">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 30 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          <span className="gradient-text">Blog & Cheatsheets</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto">
          Notes techniques, commandes utiles et cheatsheets SysAdmin.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-mono transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'glass text-slate-400 hover:text-purple-300 hover:border-purple-500/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((article, i) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            onClick={() => setSelectedArticle(article)}
            className="glass rounded-2xl p-6 cursor-pointer group hover:neon-border hover:scale-[1.02] transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${article.color} flex items-center justify-center text-xl flex-shrink-0`}>
                {article.icon}
              </div>
              <div className="flex-1">
                <span className={`text-xs font-mono px-2 py-0.5 rounded-full bg-gradient-to-r ${article.color} text-white`}>
                  {article.category}
                </span>
                <h3 className="text-white font-bold mt-1 group-hover:gradient-text transition-all duration-300">
                  {article.title}
                </h3>
                <p className="text-slate-500 text-xs font-mono mt-0.5">{article.date}</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">{article.desc}</p>
            <div className="mt-4 text-purple-400 text-xs font-mono group-hover:text-purple-300">
              Lire la note →
            </div>
          </motion.div>
        ))}
      </div>

      {selectedArticle && (
        <ArticleModal article={selectedArticle} onClose={() => setSelectedArticle(null)} />
      )}
    </section>
  )
}
