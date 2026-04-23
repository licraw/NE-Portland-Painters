#!/usr/bin/env python3
import re
import sys
import json
import html as html_lib


def main() -> int:
    html = sys.stdin.read()
    category_filter = (sys.argv[1] if len(sys.argv) > 1 else "Exterior Painting").strip().lower()
    require_keyword = (sys.argv[2] if len(sys.argv) > 2 else "").strip().lower() or None
    if require_keyword is None:
        if "interior" in category_filter:
            require_keyword = "interior"
        elif "exterior" in category_filter:
            require_keyword = "exterior"
        elif "carpentry" in category_filter:
            require_keyword = "carpentry"

    # Match each Webflow CMS item block and capture:
    # 1) the lightbox JSON blob (w-json)
    # 2) the category label text
    # 3) the <img alt="..."> (used as a sanity check)
    # 4) the overlay description text
    item_re = re.compile(
        r'<div[^>]*class="gallery-page_item[^"]*"[^>]*>.*?'
        r'<img[^>]*\salt="([^"]*)"[^>]*>.*?'
        r'<div[^>]*class="gallery-lighbox_overlay"[^>]*>.*?<div>\s*(.*?)\s*</div>.*?</div>.*?'
        r'<script[^>]*class="w-json"[^>]*>\s*(\{.*?\})\s*</script>.*?'
        r'<div[^>]*fs-cmsfilter-field="category"[^>]*>\s*([^<]+)\s*</div>.*?'
        r"</div>",
        re.DOTALL | re.IGNORECASE,
    )

    urls: set[str] = set()
    for m in item_re.finditer(html):
        alt = html_lib.unescape((m.group(1) or "").strip())
        overlay = html_lib.unescape((m.group(2) or "").strip())
        raw_json = m.group(3)
        category = html_lib.unescape(m.group(4).strip())

        alt_l = alt.lower()
        overlay_l = overlay.lower()

        if require_keyword and require_keyword not in (alt_l + " " + overlay_l):
            continue
        # Some items can be miscategorized; avoid obviously wrong ones.
        if require_keyword == "interior" and "exterior" in (alt_l + " " + overlay_l):
            continue
        if require_keyword == "exterior" and "interior" in (alt_l + " " + overlay_l):
            continue

        if category.strip().lower() != category_filter:
            continue

        try:
            data = json.loads(raw_json)
        except Exception:
            continue

        for item in data.get("items", []):
            url = item.get("url")
            if isinstance(url, str) and url.startswith("https://cdn.prod.website-files.com/"):
                # Skip responsive derivatives if present.
                if re.search(r"-p-\d+\.(jpe?g|png|webp|gif)$", url, re.IGNORECASE):
                    continue
                urls.add(url)

    for url in sorted(urls):
        print(url)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
