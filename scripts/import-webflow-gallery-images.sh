#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   scripts/import-webflow-gallery-images.sh public/gallery/exterior < urls.txt
#
# Expects one image URL per line (full-size originals recommended).

TARGET_DIR="${1:-}"
if [ -z "$TARGET_DIR" ]; then
  echo "Usage: scripts/import-webflow-gallery-images.sh <target-dir> < urls.txt" >&2
  exit 2
fi

mkdir -p "$TARGET_DIR"

slugify() {
  # Keep extension, normalize name for filesystem safety.
  python3 - "$1" <<'PY'
import os, re, sys, urllib.parse
url = sys.argv[1]
path = urllib.parse.urlparse(url).path
base = os.path.basename(path)
base = urllib.parse.unquote(base)
name, ext = os.path.splitext(base)
name = name.strip().lower()
name = re.sub(r'[^a-z0-9]+', '-', name).strip('-')
if not ext:
  ext = ".jpg"
print(f"{name}{ext.lower()}")
PY
}

count=0
while IFS= read -r url; do
  url="${url%%$'\r'}"
  [ -z "${url:-}" ] && continue

  filename="$(slugify "$url")"
  dest="$TARGET_DIR/$filename"
  if [ -f "$dest" ]; then
    continue
  fi

  echo "Downloading: $url -> $dest"
  curl -L -sS -o "$dest" "$url"
  count=$((count + 1))
done

echo "Downloaded $count new images into $TARGET_DIR"

