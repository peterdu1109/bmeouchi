# Outils Cybersécurité

> Liste d'outils classés par catégorie avec notes d'utilisation personnelles.

---

## Reconnaissance & Scanning

| Outil | Usage | Notes |
|-------|-------|-------|
| **nmap** | Scan ports/services | `nmap -sV -sC -p- <ip>` |
| **masscan** | Scan rapide grande plage | `masscan -p1-65535 --rate=1000 <cidr>` |
| **shodan** | Recherche assets exposés | Via CLI ou web |
| **theHarvester** | OSINT emails/domaines | `theHarvester -d domain.fr -b google` |

## Active Directory

| Outil | Usage | Notes |
|-------|-------|-------|
| **BloodHound** | Cartographie AD / chemins d'attaque | Import SharpHound |
| **SharpHound** | Collecte données BloodHound | `.exe -c All` |
| **CrackMapExec** | Pentest réseau Windows | `cme smb <ip> -u user -p pass` |
| **Impacket** | Suite d'outils AD | secretsdump, psexec, etc. |
| **Responder** | LLMNR/NBT-NS poisoning | Écoute passive réseau |

## Analyse & Défense

| Outil | Usage | Notes |
|-------|-------|-------|
| **Wireshark** | Capture trafic réseau | Filtres BPF |
| **Sysmon** | Monitoring événements Windows | Config SwiftOnSecurity |
| **Velociraptor** | DFIR / investigation | Déploiement agent |
| **OpenVAS / Greenbone** | Scanner vulnérabilités | Scan authentifié |

## Mots de passe

| Outil | Usage | Notes |
|-------|-------|-------|
| **Hashcat** | Crack hashes | `hashcat -m 1000 hash.txt wordlist.txt` |
| **John the Ripper** | Crack hashes | `john --wordlist=rockyou.txt hash.txt` |
| **KeePass** | Gestion mots de passe | Local, chiffré |
