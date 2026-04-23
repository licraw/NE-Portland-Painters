#!/usr/bin/env bash
set -euo pipefail

# Usage:
#   scripts/sync-prp-exterior-gallery.sh
#
# Fetches all pages from https://www.phinneyridgepainting.com/gallery (including "Load More" pagination),
# extracts only "Exterior Painting" images, then downloads them into:
#   public/gallery/exterior
#
# Notes:
# - Requires network access (curl).
# - Safe to re-run; images are named deterministically and existing files are reused.

ROOT_URL="https://www.phinneyridgepainting.com/gallery"
TARGET_DIR="public/gallery/exterior"

tmp_dir="$(mktemp -d)"
trap 'rm -rf "$tmp_dir"' EXIT

all_urls_file="$tmp_dir/all-urls.txt"
: >"$all_urls_file"

page_url="$ROOT_URL"
page_count=0

while true; do
  page_count=$((page_count + 1))
  page_file="$tmp_dir/page-$page_count.html"

  echo "Fetching: $page_url"
  curl -sS "$page_url" -o "$page_file"

  python3 scripts/extract-phinneyridge-gallery-exterior-urls.py <"$page_file" >>"$all_urls_file" || true

  # Find the "Load More" link if present (e.g. href="?6bf7a93b_page=2")
  next_href="$(
    (rg -o '<a[^>]*w-pagination-next[^>]*>' "$page_file" || true) \
      | head -n 1 \
      | rg -o 'href="[^"]+"' \
      | sed -E 's/^href="(.*)"$/\1/' \
      || true
  )"

  if [ -z "${next_href:-}" ]; then
    break
  fi

  # Webflow uses a query string for paging; preserve host.
  if [[ "$next_href" == http* ]]; then
    next_url="$next_href"
  else
    next_url="$ROOT_URL$next_href"
  fi

  if [ "$next_url" = "$page_url" ]; then
    break
  fi

  page_url="$next_url"
done

sort -u "$all_urls_file" >"$tmp_dir/urls.txt"

count="$(wc -l <"$tmp_dir/urls.txt" | tr -d '[:space:]')"
echo "Found $count exterior images"

rm -rf "$TARGET_DIR"
mkdir -p "$TARGET_DIR"

scripts/import-webflow-gallery-images.sh "$TARGET_DIR" <"$tmp_dir/urls.txt"
