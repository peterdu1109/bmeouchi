<div align="center">

# ⚡ Bautros Meouchi

### `< Consultant IT · Support VIP/VVIP · SysAdmin · Cybersécurité />`

[![Site](https://img.shields.io/badge/🌐_Site-bmeouchi.com-a855f7?style=for-the-badge)](https://bmeouchi.com)
[![Poste](https://img.shields.io/badge/💼_CCF-La_Défense_(CDI)-ec4899?style=for-the-badge)](#)
[![Localisation](https://img.shields.io/badge/📍_Courbevoie-92400_·_Île--de--France-f97316?style=for-the-badge)](#)
[![CCNA](https://img.shields.io/badge/📜_CCNA-1_&_2_Certifié-06b6d4?style=for-the-badge)](#)

</div>

---

## 👤 Qui suis-je ?

Technicien Support Informatique **VIP/VVIP** actuellement en poste chez **CCF – La Défense**, dédié aux membres du Comité Exécutif et cadres dirigeants. Fondateur et ancien Président de l'association **Valaron** — infrastructure complète, du bare metal au monitoring.

```
📧  bautros@gmail.com          📞  07 87 60 39 49
📍  Courbevoie, 92400           🏛️  Fondateur · Association Valaron
```

---

## 💼 Expériences

| Période | Poste | Entreprise |
|---------|-------|------------|
| 2024 – Présent | Technicien Support VIP/VVIP | **CCF – La Défense** (CDI) |
| 2021 – 2024 | Technicien Informatique | **Colonna – Neuilly-sur-Seine** (CDI) |
| 2020 – 2021 | Technicien Informatique de Backup | **Metaline – Nanterre** (CDI) |
| 2019 – 2023 | Président & Directeur Général | **Association Valaron – Courbevoie** |

---

## 🧠 Compétences clés

```yaml
Systèmes:       Windows Server · Linux · macOS · Proxmox · VMware
Réseaux:        TCP/IP · DNS/DHCP · Active Directory · Pare-feu · VLAN
Support:        VIP/VVIP N1→N3 · ServiceNow · SmartDesk · Zendesk · Kace
Cloud/Office:   Office 365 · Azure AD · MDM iOS/Android
Dev:            Python · PHP · Ruby · C++ · Java · HTML/CSS
Sauvegarde:     NAS · Monitoring · Automatisation Bash/PowerShell
```

---

## 🗂️ Structure du dépôt

```
bmeouchi/
│
├── 🌐 portfolio/               → Site React + Tailwind (bmeouchi.com)
│   ├── src/
│   │   ├── components/         → Hero · About · Skills · Projects
│   │   └── App.jsx             → Navbar · Contact · Footer
│   ├── index.html
│   └── package.json
│
├── 🚧 maintenance/             → Page de maintenance (déployée actuellement)
│   └── index.html              → HTML autonome, zéro dépendance
│
├── 🧠 coffre-obsidian/         → Base de connaissances Obsidian
│   ├── 00-Index.md
│   ├── 01-Identite/            → Profil, contacts, objectifs
│   ├── 02-Competences/         → Cheatsheets Linux, Windows, Réseau...
│   ├── 03-Projets/             → Valaron, infra, réalisations
│   ├── 04-Journal/             → Notes quotidiennes
│   └── 05-Ressources/          → Docs, certifications, liens utiles
│
├── 📜 README.md                → Ce fichier
├── 📋 primer.md                → Onboarding rapide du projet
├── 🖥️  memory.sh               → CLI de notes & cheatsheets intégrées
└── 🔍 hindsight.md             → Journal de retours d'expérience
```

---

## 🚀 Lancer le portfolio

```bash
cd portfolio
npm install
npm run dev        # → http://localhost:5173
npm run build      # Build de production
npm run preview    # Prévisualisation du build
```

**Stack :** React 18 · Vite 5 · Tailwind CSS 3

---

## 🛠️ Outils utilitaires

```bash
# Voir toutes les notes & cheatsheets
./memory.sh

# Chercher une commande
./memory.sh search vpn
./memory.sh search proxmox

# Afficher une note précise
./memory.sh show ssh-hardening
./memory.sh show wireguard-setup

# Ajouter une note personnelle
./memory.sh add
```

---

## 🧱 Base de connaissances Obsidian

Ouvrir `coffre-obsidian/` dans [Obsidian](https://obsidian.md) pour accéder à la base de connaissances complète :

- **Cheatsheets** Linux, Windows Server, Active Directory
- **Procédures** support N1/N2/N3 et ITSM
- **Journal** de bord quotidien
- **Fiche projet** Valaron (infrastructure, services, interventions)
- **Ressources** : docs officielles, certifications recommandées (Network+, Security+, OSCP)

---

## 📦 Déploiement

> Le site est hébergé sur `bmeouchi.fr` via **1Panel**.

```bash
# Script de déploiement (panel)
export HOME=/root
git config --global --add safe.directory /www/wwwroot/bmeouchi.fr
cd /www/wwwroot/bmeouchi.fr
git pull origin main

# Phase maintenance (actuelle)
cp maintenance/index.html index.html

# Phase production (portfolio React — bientôt)
# cd portfolio && npm install && npm run build
# cp -r dist/* /www/wwwroot/bmeouchi.fr/
```

---

## 🎓 Formation & Certifications

| | |
|-|-|
| 📘 | **Gestionnaire maintenance et support informatique** — CESI École Supérieure *(alternance)* |
| 📗 | **Bac Pro Systèmes Électroniques Numériques** — Lycée Claude Chappe |
| 📜 | **CCNA 1 & 2** |
| 🛡️ | **Santé et Sécurité au travail** |

---

<div align="center">

*"L'infrastructure, c'est le fondement invisible sur lequel tout repose."*

**© 2026 Bautros Meouchi** · [`bmeouchi.com`](https://bmeouchi.com)

</div>
