#!/usr/bin/env bash
# memory.sh — Notes & commandes utiles de Bautros Meouchi
# Usage: ./memory.sh [commande] [terme]
#   ./memory.sh           → affiche toutes les notes
#   ./memory.sh search X  → cherche une note par mot-clé
#   ./memory.sh add       → ajoute une note interactive

set -euo pipefail

MEMORY_FILE="${HOME}/.bmeouchi_memory"
BLUE='\033[0;34m'
PURPLE='\033[0;35m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BOLD='\033[1m'
RESET='\033[0m'

banner() {
  echo -e "${PURPLE}${BOLD}"
  echo "  ██████╗ ███╗   ███╗███████╗ ██████╗ ██╗   ██╗ ██████╗██╗  ██╗██╗"
  echo "  ██╔══██╗████╗ ████║██╔════╝██╔═══██╗██║   ██║██╔════╝██║  ██║██║"
  echo "  ██████╔╝██╔████╔██║█████╗  ██║   ██║██║   ██║██║     ███████║██║"
  echo "  ██╔══██╗██║╚██╔╝██║██╔══╝  ██║   ██║██║   ██║██║     ██╔══██║██║"
  echo "  ██████╔╝██║ ╚═╝ ██║███████╗╚██████╔╝╚██████╔╝╚██████╗██║  ██║██║"
  echo "  ╚═════╝ ╚═╝     ╚═╝╚══════╝ ╚═════╝  ╚═════╝  ╚═════╝╚═╝  ╚═╝╚═╝"
  echo -e "${RESET}"
  echo -e "  ${CYAN}memory.sh${RESET} — Base de commandes & notes de ${BOLD}Bautros Meouchi${RESET}"
  echo -e "  ${PURPLE}SysAdmin · Réseaux · Cybersécurité · Valaron${RESET}"
  echo
}

# ─── NOTES INTÉGRÉES ───────────────────────────────────────────────────────────

declare -A NOTES

NOTES["proxmox-create-vm"]="
# Créer une VM Proxmox via CLI
qm create 100 --name myvm --memory 2048 --cores 2 --net0 virtio,bridge=vmbr0
qm importdisk 100 /var/lib/vz/images/debian.qcow2 local-lvm
qm set 100 --scsihw virtio-scsi-pci --scsi0 local-lvm:vm-100-disk-0
qm set 100 --boot c --bootdisk scsi0
qm start 100"

NOTES["ssh-hardening"]="
# Durcissement SSH (/etc/ssh/sshd_config)
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
MaxAuthTries 3
ClientAliveInterval 300
AllowUsers votre_user
Port 2222  # changer le port par défaut
# Redémarrer : systemctl restart sshd"

NOTES["pfsense-vlan"]="
# Créer un VLAN sur pfSense
# 1. Interfaces > Assignments > VLANs > Add
# 2. Parent Interface: em0 (ou votre NIC)
# 3. VLAN Tag: 10 (exemple)
# 4. Description: VLAN_ADMIN
# 5. Assign l'interface VLAN, activer, configurer IP
# 6. Firewall > Rules : créer règles inter-VLAN"

NOTES["wireguard-setup"]="
# Setup WireGuard serveur
apt install wireguard
wg genkey | tee /etc/wireguard/privatekey | wg pubkey > /etc/wireguard/publickey
# /etc/wireguard/wg0.conf :
# [Interface]
# Address = 10.0.0.1/24
# ListenPort = 51820
# PrivateKey = <clé_privée>
# [Peer]
# PublicKey = <clé_publique_client>
# AllowedIPs = 10.0.0.2/32
systemctl enable --now wg-quick@wg0"

NOTES["active-directory-users"]="
# Active Directory — PowerShell commandes utiles
# Lister tous les utilisateurs actifs
Get-ADUser -Filter {Enabled -eq \$true} -Properties *
# Créer un utilisateur
New-ADUser -Name 'Jean Dupont' -SamAccountName jdupont -AccountPassword (ConvertTo-SecureString 'P@ss1234' -AsPlainText -Force) -Enabled \$true
# Ajouter à un groupe
Add-ADGroupMember -Identity 'IT-Team' -Members jdupont
# Exporter tous les users en CSV
Get-ADUser -Filter * | Export-Csv users.csv -NoTypeInformation"

NOTES["fail2ban-config"]="
# Fail2ban — configuration de base
# /etc/fail2ban/jail.local
[DEFAULT]
bantime  = 3600
findtime = 600
maxretry = 5
[sshd]
enabled = true
port    = ssh
logpath = /var/log/auth.log
# Commandes utiles :
fail2ban-client status sshd       # voir les IPs bannies
fail2ban-client set sshd unbanip <IP>  # débannir une IP
systemctl restart fail2ban"

NOTES["nmap-scan"]="
# Nmap — scans courants
nmap -sV -sC -O <target>          # scan complet avec scripts
nmap -p- -T4 <target>             # tous les ports
nmap -sU -p 53,67,68,161 <target> # ports UDP courants
nmap --script vuln <target>        # scan vulnérabilités
nmap -sn 192.168.1.0/24           # découverte réseau (ping scan)"

NOTES["linux-disk-lvm"]="
# LVM — gestion des volumes logiques
pvcreate /dev/sdb                  # créer un volume physique
vgcreate vg_data /dev/sdb          # créer un groupe
lvcreate -L 50G -n lv_data vg_data # créer un volume logique
mkfs.ext4 /dev/vg_data/lv_data     # formater
mount /dev/vg_data/lv_data /data   # monter
# Étendre un LV existant :
lvextend -L +20G /dev/vg_data/lv_data && resize2fs /dev/vg_data/lv_data"

NOTES["docker-compose-basics"]="
# Docker Compose — commandes essentielles
docker compose up -d               # démarrer en arrière-plan
docker compose down                # arrêter et supprimer
docker compose logs -f             # suivre les logs
docker compose ps                  # état des services
docker compose exec <service> bash # shell dans un conteneur
# Mise à jour d'une image :
docker compose pull && docker compose up -d"

NOTES["backup-rsync"]="
# Rsync — sauvegarde incrémentale
rsync -avz --delete \
  --exclude='*.tmp' \
  --exclude='.cache/' \
  /source/ /destination/
# Sauvegarde distante via SSH :
rsync -avz -e 'ssh -p 2222' /local/ user@remote:/backup/
# Option --dry-run pour tester sans modifier"

NOTES["zabbix-agent"]="
# Installer l'agent Zabbix sur Debian/Ubuntu
wget https://repo.zabbix.com/zabbix/6.4/ubuntu/pool/main/z/zabbix-release/zabbix-release_6.4-1+ubuntu22.04_all.deb
dpkg -i zabbix-release_6.4-1+ubuntu22.04_all.deb
apt update && apt install zabbix-agent2
# /etc/zabbix/zabbix_agent2.conf :
# Server=<IP_ZABBIX_SERVER>
# Hostname=<nom_hôte>
systemctl enable --now zabbix-agent2"

NOTES["valaron-infra"]="
# Association Valaron — Notes infrastructure
# Serveurs déployés : voir coffre-obsidian/03-Projets/valaron.md
# Réseau : VLAN segmenté, pfSense en bordure
# Services : web, mail, git interne, monitoring
# Contacts : voir coffre-obsidian/01-Identite/
# Docs procédures : coffre-obsidian/05-Ressources/"

# ─── FONCTIONS ─────────────────────────────────────────────────────────────────

show_all() {
  banner
  echo -e "${BOLD}${YELLOW}═══ NOTES DISPONIBLES ═══${RESET}\n"
  for key in "${!NOTES[@]}"; do
    echo -e "  ${CYAN}▶ ${key}${RESET}"
  done
  echo
  echo -e "  ${GREEN}Usage : ./memory.sh show <nom>      → afficher une note${RESET}"
  echo -e "  ${GREEN}        ./memory.sh search <terme>  → chercher par mot-clé${RESET}"
  echo -e "  ${GREEN}        ./memory.sh add             → ajouter une note persistante${RESET}"
  echo
  if [[ -f "$MEMORY_FILE" ]]; then
    echo -e "${BOLD}${YELLOW}═══ NOTES PERSONNELLES ═══${RESET}"
    cat "$MEMORY_FILE"
  fi
}

show_note() {
  local key="${1:-}"
  if [[ -z "$key" ]]; then
    echo -e "${RED}Usage : ./memory.sh show <nom_note>${RESET}"
    echo -e "Notes disponibles :"
    for k in "${!NOTES[@]}"; do echo "  $k"; done
    exit 1
  fi
  if [[ -n "${NOTES[$key]+x}" ]]; then
    echo -e "${PURPLE}${BOLD}═══ $key ═══${RESET}"
    echo -e "${NOTES[$key]}"
  else
    echo -e "${RED}Note '$key' introuvable.${RESET}"
    echo "Notes disponibles :"
    for k in "${!NOTES[@]}"; do echo "  $k"; done
    exit 1
  fi
}

search_notes() {
  local term="${1:-}"
  if [[ -z "$term" ]]; then
    echo -e "${RED}Usage : ./memory.sh search <terme>${RESET}"
    exit 1
  fi
  echo -e "${BOLD}${YELLOW}Résultats pour '${term}' :${RESET}\n"
  local found=0
  for key in "${!NOTES[@]}"; do
    if echo "${NOTES[$key]}" | grep -qi "$term" || echo "$key" | grep -qi "$term"; then
      echo -e "  ${CYAN}▶ $key${RESET}"
      echo "${NOTES[$key]}" | grep -i "$term" | head -3 | sed 's/^/     /'
      echo
      found=1
    fi
  done
  if [[ $found -eq 0 ]]; then
    echo -e "  ${RED}Aucun résultat pour '$term'${RESET}"
  fi
}

add_note() {
  echo -e "${CYAN}Nouvelle note persistante${RESET}"
  printf "Titre : " && read -r title
  printf "Contenu (entrée vide pour terminer) :\n"
  local content=""
  while IFS= read -r line; do
    [[ -z "$line" ]] && break
    content+="$line\n"
  done
  {
    echo "---"
    echo "## [$title] — $(date '+%Y-%m-%d %H:%M')"
    echo -e "$content"
  } >> "$MEMORY_FILE"
  echo -e "${GREEN}Note ajoutée dans $MEMORY_FILE${RESET}"
}

# ─── MAIN ──────────────────────────────────────────────────────────────────────

case "${1:-}" in
  show)    show_note "${2:-}" ;;
  search)  search_notes "${2:-}" ;;
  add)     add_note ;;
  *)       show_all ;;
esac
