#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR"

PORT="${PORT:-4000}"

export PX_APP_ID="$(gopass show -o netlify-site8/px_app_id)"
export PX_AUTH_TOKEN="$(gopass show -o netlify-site8/px_auth_token)"
export PX_COOKIE_SECRET="$(gopass show -o netlify-site8/px_cookie_secret)"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js is required but was not found in PATH."
  echo "This project expects Node $(cat .nvmrc 2>/dev/null || echo 20)+."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  echo "npm is required but was not found in PATH."
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "Installing dependencies..."
  npm install
fi

echo "Starting local app on http://localhost:${PORT}"
exec npm run dev -- --hostname 0.0.0.0 --port "${PORT}"
