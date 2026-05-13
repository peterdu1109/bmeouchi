---
tags: [valaron, association, infrastructure]
statut: actif
créé: 2026-05-13
---

# Projet — Association Valaron

## Vue d'ensemble

**Valaron** est une association co-fondée par Bautros Meouchi.
En tant qu'administrateur technique, je gère l'ensemble de l'infrastructure IT.

---

## Infrastructure déployée

### Serveurs
| Serveur | Rôle | OS | Statut |
|---------|------|----|--------|
| srv-01 | Hyperviseur Proxmox | Proxmox VE | ✅ Opérationnel |
| srv-02 | Services web | Debian 12 | ✅ Opérationnel |
| srv-03 | Stockage NAS | TrueNAS | ✅ Opérationnel |
| srv-04 | Monitoring | Ubuntu 22.04 | 🔧 En déploiement |

### Réseau
- **Topologie** : pfSense en bordure, VLAN segmenté
- **VLANs** :
  - VLAN 10 — Administration
  - VLAN 20 — Services publics
  - VLAN 30 — Stockage
  - VLAN 99 — Management
- **VPN** : WireGuard site-à-site + accès remote

### Services
- [ ] Web / reverse proxy (Nginx)
- [ ] Git interne (Gitea)
- [ ] Mail (Postfix / Dovecot)
- [ ] Monitoring (Zabbix)
- [ ] Backup automatisé (rsync + rotation)

---

## Procédures

- [[../02-Competences/linux-cheatsheet]] — Référence Linux
- [[../02-Competences/firewall-pfsense]] — Config pfSense

---

## Journal des interventions

| Date | Intervention | Résultat |
|------|-------------|---------|
| 2026-05-13 | Création du coffre Obsidian | ✅ |
| — | Montage infrastructure initiale | ✅ |
| — | Déploiement VPN WireGuard | ✅ |

---

*Voir aussi : [[../01-Identite/profil]]*
