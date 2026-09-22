#!/usr/bin/env bash
set -euo pipefail

required=(
  "AGENTS.md"
  "CLAUDE.md"
  "src/app/layout.tsx"
  "src/app/(marketing)/layout.tsx"
  "src/app/(marketing)/page.tsx"
  "src/app/robots.ts"
  "src/app/sitemap.ts"
  "src/app/api/health/route.ts"
  "src/app/globals.css"
  "components"
  "content"
  "lib"
  "public"
  "styles"
  "types"
  "docs"
  "scripts"
)

missing=0
for item in "${required[@]}"; do
  if [[ ! -e "$item" ]]; then
    echo "Falta: $item"
    missing=1
  fi
done

if [[ -e src/app/page.tsx ]]; then
  echo "Existe una Home duplicada en src/app/page.tsx"
  missing=1
fi

if [[ $missing -ne 0 ]]; then
  echo "Estructura incompleta."
  exit 1
fi

echo "Estructura válida."
