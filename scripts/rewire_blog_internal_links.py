#!/usr/bin/env python3
import re
from pathlib import Path
from urllib.parse import urlparse, urlunparse, ParseResult
import urllib.request
import os


REPO_ROOT = Path(__file__).resolve().parents[1]
BLOG_DIR = REPO_ROOT / "content" / "blog"
PUBLIC_BLOG_DIR = REPO_ROOT / "public" / "blog"


DOMAIN_RE = re.compile(r"^https?://(www\.)?soundpaintingsolutions\.com(?P<rest>/.*)?$", re.IGNORECASE)
# Match both the bare homepage URL (ending with the domain or a trailing slash)
# and deep links under it.
URL_IN_TEXT_RE = re.compile(
    r"https?://(www\.)?soundpaintingsolutions\.com(?:/[^\s\"')>]*)?",
    re.IGNORECASE,
)

HREF_RE = re.compile(r'href="(?P<path>/[^"#\s]+)(?P<rest>[^"]*)"', re.IGNORECASE)
MD_LINK_RE = re.compile(r"\]\((?P<path>/[^\s)]+)\)")

PATH_REWRITES = {
    "/contact-us/": "/contact",
    "/contact-us": "/contact",
    "/interior-painting/": "/services/interior",
    "/interior-painting": "/services/interior",
    "/exterior-painting/": "/services/exterior",
    "/exterior-painting": "/services/exterior",
    "/carpentry/": "/services/carpentry",
    "/carpentry": "/services/carpentry",
    "/commercial-painting/": "/services/commercial",
    "/commercial-painting": "/services/commercial",
    "/turnover-painting/": "/services/turnover",
    "/turnover-painting": "/services/turnover",
    "/power-washing/": "/services/powerwashing",
    "/power-washing": "/services/powerwashing",
    "/pressure-washing/": "/services/powerwashing",
    "/pressure-washing": "/services/powerwashing",
    "/virtual-quotes/": "/estimate",
    "/virtual-quotes": "/estimate",
    "/community/": "/contact",
    "/community": "/contact",
    "/warranty/": "/contact",
    "/warranty": "/contact",
    "/epa-lead-safe-practices/": "/blog/lead-based-paint-home",
    "/epa-lead-safe-practices": "/blog/lead-based-paint-home",
    "/privacy-policy/": "/contact",
    "/privacy-policy": "/contact",
    "/blog/": "/blog",
    "/blog": "/blog",
    "/": "/",
}

def download_to(path: Path, url: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    if path.exists():
        return
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "NE-Portland-Painters blog importer (+https://example.invalid)",
        },
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = resp.read()
    path.write_bytes(data)


def normalize_path(p: str) -> str:
    if not p.startswith("/"):
        p = "/" + p
    # Keep a trailing slash only for root; most of our Next routes are slashless.
    if p != "/" and p.endswith("/"):
        p = p[:-1]
    return p


def rewrite_sps_url(url: str, slugs: set[str], current_slug: str, download_assets: bool) -> str:
    parsed = urlparse(url)
    host = (parsed.hostname or "").lower()
    if host not in {"soundpaintingsolutions.com", "www.soundpaintingsolutions.com"}:
        return url

    path = parsed.path or "/"
    query = parsed.query
    fragment = parsed.fragment

    # Common known paths.
    if path in PATH_REWRITES:
        new_path = PATH_REWRITES[path]
        return urlunparse(ParseResult("", "", new_path, "", query, fragment))

    # Featured video / file embeds (mp4, pdf, etc) hosted on WP uploads.
    if path.startswith("/wp-content/uploads/"):
        filename = os.path.basename(path)
        if not filename:
            return urlunparse(ParseResult("", "", normalize_path(path), "", query, fragment))

        local_fs_path = PUBLIC_BLOG_DIR / current_slug / filename
        if download_assets:
            try:
                download_to(local_fs_path, urlunparse(parsed._replace(query="", fragment="")))
            except Exception:
                # If download fails, fall back to leaving the original URL in place.
                return url

        local_url_path = f"/blog/{current_slug}/{filename}"
        return urlunparse(ParseResult("", "", local_url_path, "", query, fragment))

    # Post permalinks are typically: /<slug>/ (sometimes deeper, but we handle the common case).
    parts = [p for p in path.split("/") if p]
    if parts:
        candidate = parts[0]
        if candidate in slugs:
            new_path = f"/blog/{candidate}"
            # If there were extra segments, drop them (they're usually WP artifacts like /amp/).
            return urlunparse(ParseResult("", "", new_path, "", query, fragment))

    # Fallback: keep the path on our domain (strip the host).
    return urlunparse(ParseResult("", "", normalize_path(path), "", query, fragment))

def rewrite_internal_path(path: str) -> str:
    # Keep blog asset links untouched.
    if path.startswith("/blog/"):
        return path

    norm = normalize_path(path)
    return PATH_REWRITES.get(norm, PATH_REWRITES.get(norm + "/", norm))


def main() -> int:
    if not BLOG_DIR.exists():
        print(f"Missing {BLOG_DIR}")
        return 1

    slugs = {p.stem for p in BLOG_DIR.glob("*.md")}
    download_assets = os.environ.get("DOWNLOAD_ASSETS", "1") not in {"0", "false", "no"}
    PUBLIC_BLOG_DIR.mkdir(parents=True, exist_ok=True)

    changed = 0
    for md_path in sorted(BLOG_DIR.glob("*.md")):
        slug = md_path.stem
        text = md_path.read_text(encoding="utf-8")

        def repl(match: re.Match[str]) -> str:
            # Keep provenance metadata intact.
            line_start = text.rfind("\n", 0, match.start()) + 1
            line_end = text.find("\n", match.start())
            if line_end == -1:
                line_end = len(text)
            line = text[line_start:line_end]
            if line.lstrip().startswith("source_url:"):
                return match.group(0)

            return rewrite_sps_url(match.group(0), slugs, slug, download_assets)

        new_text = URL_IN_TEXT_RE.sub(repl, text)

        # Rewrite old WP-style internal paths to current Next routes.
        def href_repl(match: re.Match[str]) -> str:
            p = match.group("path")
            rest = match.group("rest") or ""
            return f'href="{rewrite_internal_path(p)}{rest}"'

        new_text = HREF_RE.sub(href_repl, new_text)

        def md_link_repl(match: re.Match[str]) -> str:
            p = match.group("path")
            return f"]({rewrite_internal_path(p)})"

        new_text = MD_LINK_RE.sub(md_link_repl, new_text)

        if new_text != text:
            md_path.write_text(new_text, encoding="utf-8")
            changed += 1

    print(f"Rewrote links in {changed} markdown files.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
