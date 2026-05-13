# Hindsight — Retours d'expérience

> Ce fichier est un journal de bord des leçons apprises sur le terrain.
> Pas de théorie — uniquement ce qui s'est passé, ce qui a marché, et pourquoi.

---

## Format d'entrée

```
### [Date] Titre de l'incident ou projet
**Contexte** : ce qui se passait
**Ce que j'ai fait** : l'action
**Ce qui s'est passé** : le résultat réel
**Leçon** : ce que ça m'a appris
**À faire différemment** : le correctif pour la prochaine fois
```

---

## Incidents & Leçons

---

### [2026-05-13] Lancement du portfolio bmeouchi.com
**Contexte** : Création du site portfolio + base de connaissances depuis zéro.  
**Ce que j'ai fait** : React + Tailwind, coffre Obsidian, scripts utilitaires.  
**Ce qui s'est passé** : Structuration claire dès le départ — documentation en parallèle du code.  
**Leçon** : Documenter pendant la création coûte moins cher que de le faire après. Le `primer.md` et ce fichier sont essentiels pour la continuité.  
**À faire différemment** : Automatiser le déploiement Cloudflare Pages dès le début.

---

### [2025-XX-XX] Montage serveur Proxmox pour Valaron
**Contexte** : Besoin d'un environnement de virtualisation pour héberger les services de l'association.  
**Ce que j'ai fait** : Installation Proxmox sur bare metal, création des VMs pour chaque service.  
**Ce qui s'est passé** : Migration réussie, mais la segmentation réseau a été faite trop tard.  
**Leçon** : Planifier l'architecture réseau (VLAN, firewall rules) AVANT de déployer les VMs, pas après.  
**À faire différemment** : Créer un schéma réseau en amont, valider avec un second regard, puis déployer.

---

### [2025-XX-XX] Incident SSH — Root accessible depuis l'extérieur
**Contexte** : Serveur fraîchement installé, SSH en écoute sur le port 22, root activé.  
**Ce que j'ai fait** : Découvert lors d'un audit interne — `fail2ban` avait bloqué 200+ tentatives.  
**Ce qui s'est passé** : Pas de compromission, mais alerte sérieuse.  
**Leçon** : Le hardening SSH (port custom, no-root, clés uniquement) doit être la PREMIÈRE chose faite après une installation. Pas "à faire plus tard".  
**À faire différemment** : Créer un script de post-install qui applique automatiquement le hardening de base.

---

### [2024-XX-XX] Support N3 — Perte de données Active Directory
**Contexte** : Migration d'un contrôleur de domaine sans vérification préalable de la réplication.  
**Ce que j'ai fait** : Déconnexion du DC source avant que la réplication soit complète vers le DC secondaire.  
**Ce qui s'est passé** : Perte partielle des GPO et de certains attributs utilisateurs.  
**Leçon** : Toujours vérifier `repadmin /showrepl` et `dcdiag` AVANT toute opération sur un DC. Ne jamais désactiver un DC en premier.  
**À faire différemment** : Checklist de migration AD obligatoire avec étapes de validation à chaque phase.

---

### [2024-XX-XX] Déploiement VPN WireGuard en prod
**Contexte** : Remplacement d'OpenVPN par WireGuard pour la performance.  
**Ce que j'ai fait** : Migration progressive, clients mis à jour un par un.  
**Ce qui s'est passé** : 3x plus rapide, zéro coupure notable.  
**Leçon** : WireGuard est supérieur à OpenVPN sur presque tous les aspects (perf, config, audit). La migration vaut le coup.  
**À faire différemment** : Rien — la méthode progressive est la bonne.

---

### [2023-XX-XX] Premier contact avec la cybersécurité réseau
**Contexte** : Découverte d'un trafic suspect via Wireshark sur le réseau local.  
**Ce que j'ai fait** : Analyse des captures, identification d'un scan de ports interne.  
**Ce qui s'est passé** : Un poste utilisateur infecté par un malware qui scannait le réseau.  
**Leçon** : La surveillance réseau passive (IDS/IPS, logs centralisés) est indispensable. On ne peut pas protéger ce qu'on ne voit pas.  
**À faire différemment** : Mettre en place Suricata ou Zeek comme IDS passif dès le départ.

---

## Principes distillés

Après chaque expérience, les règles qui reviennent :

1. **Documenter avant d'oublier** — les détails s'évaporent en 48h
2. **Architecture réseau avant le déploiement** — pas après
3. **Hardening immédiat** — jamais "on le fera plus tard"
4. **Toujours un backup testé** — un backup non testé n'est pas un backup
5. **Validation à chaque étape critique** — surtout pour les migrations
6. **Le monitoring n'est pas optionnel** — c'est la première ligne de défense

---

## Template vierge

```markdown
### [YYYY-MM-DD] Titre
**Contexte** :
**Ce que j'ai fait** :
**Ce qui s'est passé** :
**Leçon** :
**À faire différemment** :
```

---

*Ce fichier est vivant — une nouvelle entrée après chaque incident ou projet significatif.*
