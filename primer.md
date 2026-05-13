# Primer — Bautros Meouchi

> Lecture rapide pour comprendre qui je suis, ce que je fais, et comment ce dépôt est organisé.

---

## Qui suis-je ?

**Bautros Meouchi** (`@bmeouchi`)  
Administrateur Systèmes & Réseaux · Co-fondateur de l'association **Valaron**

Je travaille à l'intersection de trois domaines :
1. **Infrastructure** — monter, configurer et maintenir des serveurs et réseaux robustes
2. **Support IT** — résoudre des problèmes du niveau 1 (helpdesk) au niveau 3 (incidents complexes)
3. **Cybersécurité** — sécuriser des réseaux, auditer des configurations, durcir des systèmes

---

## Mon background en 5 lignes

- J'ai construit des infrastructures serveur from scratch (Proxmox, Linux, Windows Server)
- J'ai fait du support IT N1 → N2 → N3 sur le terrain
- J'ai sécurisé des réseaux : VLAN, pare-feux pfSense, VPN, monitoring
- J'ai co-fondé **Valaron**, une association que j'administre techniquement
- Je documente tout — ici, dans Obsidian, et dans `memory.sh`

---

## Contexte technique

### Systèmes
- **Linux** : Debian, Ubuntu, CentOS — administration quotidienne
- **Windows Server** : Active Directory, GPO, DNS/DHCP
- **Virtualisation** : Proxmox, VMware ESXi

### Réseaux
- Protocoles : TCP/IP, BGP (bases), OSPF (bases), DNS, DHCP
- Sécurité réseau : pfSense, iptables, Fail2ban
- VPN : OpenVPN, WireGuard
- Supervision : Zabbix, Grafana, Prometheus

### Support
- Ticketing : GLPI, Jira Service Management
- Niveaux couverts : N1 (first call), N2 (technique), N3 (escalade / résolution profonde)
- Rédaction de bases de connaissances et procédures

---

## Ce dépôt

Ce repo contient plusieurs couches :

```
portfolio/          → Site web public (bmeouchi.com)
coffre-obsidian/    → Base de connaissances personnelle
memory.sh           → Script utilitaire / notes CLI
hindsight.md        → Retours d'expérience accumulés
primer.md           → Ce fichier — point d'entrée
```

---

## Comment utiliser ce primer

- Tu débarques sur ce projet ? Lis ce fichier en premier.
- Tu cherches un contexte technique précis ? Va dans `coffre-obsidian/02-Competences/`.
- Tu veux déployer le site ? Lis `README.md` section "Déploiement".
- Tu veux comprendre les erreurs passées ? Lis `hindsight.md`.
- Tu cherches une commande ou config utile ? Lance `./memory.sh` ou `./memory.sh search <terme>`.

---

## Valeurs & principes de travail

- **Documenter d'abord** — si ça n'est pas écrit, ça n'existe pas
- **Automatiser le répétable** — les tâches manuelles répétitives deviennent des scripts
- **Sécurité by default** — on ne déploie pas sans audit minimal
- **Résilience** — toute infra doit avoir un plan B (backup, failover, rollback)

---

*Dernière mise à jour : 2026-05-13*
