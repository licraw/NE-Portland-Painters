#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   scripts/extract-webflow-cdn-urls.sh 'https://example.com/page' > urls.txt
#
# Extracts full-size image URLs from Webflow lightbox JSON (`"url": "..."`)
# and from plain <img src="..."> attributes.

PAGE_URL="${1:-}"
if [ -z "$PAGE_URL" ]; then
  echo "Usage: scripts/extract-webflow-cdn-urls.sh <page-url>" >&2
  exit 2
fi

curl -sS "$PAGE_URL" \
  | rg -o 'https://cdn\.prod\.website-files\.com/[^"[:space:]>]+?\.(jpg|jpeg|png|webp|gif)(\?[^"[:space:]>]+)?' \
  | rg -v -- '-p-[0-9]+' \
  | sort -u

