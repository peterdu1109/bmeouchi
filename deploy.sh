#!/usr/bin/env bash
# Déploiement du portfolio sur aaPanel — à lancer depuis le terminal du serveur
# Usage : bash /www/wwwroot/bmeouchi.fr/bmeouchi/deploy.sh
set -euo pipefail

REPO=/www/wwwroot/bmeouchi.fr/bmeouchi

cd "$REPO"
git checkout -- portfolio/vite.config.js 2>/dev/null || true
git pull origin main

cd portfolio
npm install
npm run build

echo "✓ Build terminé : $REPO/portfolio/dist"
echo "→ Redémarre le projet Node dans aaPanel, ou pointe le root Nginx sur ce dossier dist."
