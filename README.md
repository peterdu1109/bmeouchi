# bmeouchi — Portfolio & Knowledge Base

> Infrastructure personnelle de **Bautros Meouchi** — SysAdmin · Réseaux · Cybersécurité · Valaron

---

## Présentation

Ce dépôt centralise le portfolio web, la base de connaissances, et les outils personnels de Bautros Meouchi, administrateur systèmes & réseaux avec une expertise couvrant :

- **Administration systèmes** (Linux, Windows Server, Active Directory)
- **Réseaux** (TCP/IP, VLAN, VPN, Firewall)
- **Support IT niveaux 1–3**
- **Cybersécurité** (audit, hardening, monitoring)
- **Co-fondateur de l'association Valaron**

---

## Structure du dépôt

```
bmeouchi/
├── portfolio/              # Site web React + Tailwind
│   ├── src/
│   │   ├── components/     # Hero, About, Skills, Projects
│   │   └── App.jsx
│   ├── index.html
│   └── package.json
│
├── coffre-obsidian/        # Base de connaissances Obsidian
│   ├── 01-Identite/
│   ├── 02-Competences/
│   ├── 03-Projets/
│   ├── 04-Journal/
│   └── 05-Ressources/
│
├── README.md               # Ce fichier
├── primer.md               # Onboarding & contexte rapide
├── memory.sh               # Script mémoire / notes rapides
└── hindsight.md            # Retours d'expérience & leçons apprises
```

---

## Portfolio — Démarrage rapide

```bash
cd portfolio
npm install
npm run dev        # Développement sur http://localhost:5173
npm run build      # Build de production
npm run preview    # Prévisualisation du build
```

**Stack :** React 18 · Vite · Tailwind CSS 3  
**Style :** Dark · Colorful · Glassmorphism  
**Sections :** Hero · À propos · Compétences · Projets · Contact

---

## Fichiers clés

| Fichier | Rôle |
|---------|------|
| `primer.md` | Contexte rapide pour onboarder quelqu'un sur ce projet |
| `memory.sh` | Notes et commandes utiles sous forme de script |
| `hindsight.md` | Retours d'expérience, ce qui a marché / pas marché |
| `coffre-obsidian/` | Vault Obsidian pour la gestion des connaissances |

---

## Déploiement

Le site est prévu pour être déployé sur le domaine **bmeouchi.com**.

Options recommandées :
- **Cloudflare Pages** — build automatique depuis GitHub, CDN mondial
- **Vercel** — déploiement en 1 clic
- **Nginx** sur VPS — contrôle total

```bash
npm run build
# Déployer le dossier dist/
```

---

## Contact

**Bautros Meouchi** — Administrateur Systèmes & Réseaux  
Association **Valaron**  
Site : [bmeouchi.com](https://bmeouchi.com)

---

*"L'infrastructure, c'est le fondement invisible sur lequel tout repose."*
