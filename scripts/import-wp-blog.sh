#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-https://www.soundpaintingsolutions.com}"
AFTER_ISO="${AFTER_ISO:-2024-04-23T00:00:00}"
CONTENT_DIR="${CONTENT_DIR:-content/blog}"
PUBLIC_DIR="${PUBLIC_DIR:-public/blog}"
TMP_DIR="${TMP_DIR:-/tmp/wp-blog-import}"

mkdir -p "$CONTENT_DIR" "$PUBLIC_DIR" "$TMP_DIR"

echo "Importing posts from: $BASE_URL"
echo "After (inclusive-ish): $AFTER_ISO"

page=1
total_pages=1

while [ "$page" -le "$total_pages" ]; do
  headers="$TMP_DIR/headers-$page.txt"
  json="$TMP_DIR/posts-$page.json"

  url="$BASE_URL/wp-json/wp/v2/posts?per_page=100&after=$AFTER_ISO&page=$page&_embed"
  echo "Fetching page $page: $url"
  curl -sS -D "$headers" -o "$json" "$url"

  tp="$(awk -F': ' 'tolower($1)=="x-wp-totalpages"{print $2}' "$headers" | tr -d '\r' | tail -n 1)"
  if [ -n "${tp:-}" ]; then
    total_pages="$tp"
  fi

  jq -c '.[]' "$json" | while read -r post; do
    slug="$(jq -r '.slug' <<<"$post")"
    date="$(jq -r '.date_gmt // .date' <<<"$post")"
    link="$(jq -r '.link' <<<"$post")"

    title_json="$(jq -r '.title.rendered | @json' <<<"$post")"
    excerpt_json="$(jq -r '.excerpt.rendered | @json' <<<"$post")"
    content_html="$(jq -r '.content.rendered' <<<"$post")"

    # Strip srcset/sizes to avoid importing many responsive variants.
    content_html="$(python3 -c 'import re,sys; html=sys.stdin.read(); html=re.sub(r"\\s(srcset|sizes)=\\\"[^\\\"]*\\\"", "", html); sys.stdout.write(html)' <<<"$content_html")"

    cover_url="$(jq -r '._embedded["wp:featuredmedia"][0].source_url // empty' <<<"$post")"

    post_public_dir="$PUBLIC_DIR/$slug"
    mkdir -p "$post_public_dir"

    # Download cover image (if any) and rewrite to local path.
    cover_local=""
    if [ -n "${cover_url:-}" ]; then
      cover_fname="$(basename "${cover_url%%\?*}")"
      cover_local="/blog/$slug/$cover_fname"
      if [ ! -f "$post_public_dir/$cover_fname" ]; then
        echo "  cover: $cover_url"
        curl -L -sS -o "$post_public_dir/$cover_fname" "$cover_url"
      fi
    fi

    # Download and rewrite in-content images hosted on the same domain.
    while IFS= read -r img_url; do
      [ -z "${img_url:-}" ] && continue
      fname="$(basename "${img_url%%\?*}")"
      local_path="/blog/$slug/$fname"
      if [ ! -f "$post_public_dir/$fname" ]; then
        echo "  img: $img_url"
        curl -L -sS -o "$post_public_dir/$fname" "$img_url"
      fi
      content_html="$(python3 -c 'import sys; old=sys.argv[1]; new=sys.argv[2]; html=sys.stdin.read(); sys.stdout.write(html.replace(old, new))' "$img_url" "$local_path" <<<"$content_html")"
    done < <(printf "%s" "$content_html" | rg -o 'https://www\.soundpaintingsolutions\.com/wp-content/uploads/[^"[:space:]>]+\.(jpg|jpeg|png|webp|gif)(\?[^"[:space:]>]+)?' | sort -u || true)

    out_file="$CONTENT_DIR/$slug.md"
    echo "Writing $out_file"
    cat >"$out_file" <<EOF
---
date: "$date"
source_url: "$link"
title_html: $title_json
excerpt_html: $excerpt_json
cover_image: "${cover_local}"
---
$content_html
EOF
  done

  page=$((page + 1))
done

echo "Done."
