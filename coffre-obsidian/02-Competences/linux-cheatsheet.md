---
tags: [linux, cheatsheet, sysadmin]
---

# Linux — Cheatsheet

## Gestion des services
```bash
systemctl start|stop|restart|status <service>
systemctl enable|disable <service>
journalctl -u <service> -f          # logs en temps réel
```

## Disques & LVM
```bash
lsblk                               # lister les blocs
df -h                               # espace disque
fdisk -l                            # partitions
pvs / vgs / lvs                     # LVM status
lvextend -L +10G /dev/vg/lv && resize2fs /dev/vg/lv
```

## Réseau
```bash
ip a                                # interfaces
ip route                            # table de routage
ss -tulnp                          # ports ouverts
netstat -tulnp                      # alternative
tcpdump -i eth0 -n                  # capture réseau
```

## Sécurité
```bash
last                                # dernières connexions
who                                 # utilisateurs connectés
find / -perm -4000 2>/dev/null      # fichiers SUID
auditctl -l                         # règles audit
```

## Processus
```bash
ps aux | grep <processus>
top / htop
kill -9 <PID>
lsof -i :<port>                     # qui écoute sur un port
```

## Utilisateurs
```bash
adduser <user>
usermod -aG sudo <user>
passwd <user>
chage -l <user>                     # politique de mot de passe
```
