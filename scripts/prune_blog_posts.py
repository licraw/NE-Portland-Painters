#!/usr/bin/env python3
from __future__ import annotations

import html
import json
import re
import shutil
from dataclasses import asdict, dataclass
from pathlib import Path


@dataclass(frozen=True)
class PostDecision:
    slug: str
    title: str
    reasons: list[str]
    markdown_path: str
    assets_dir: str


FRONTMATTER_KEY_RE = re.compile(r"^([A-Za-z_][A-Za-z0-9_]*)\s*:\s*(.*)$")


def parse_frontmatter(markdown: str) -> dict[str, str]:
    if not markdown.startswith("---"):
        return {}
    parts = markdown.split("---", 2)
    if len(parts) < 3:
        return {}
    raw = parts[1].strip("\n")
    data: dict[str, str] = {}
    for line in raw.splitlines():
        match = FRONTMATTER_KEY_RE.match(line)
        if not match:
            continue
        key, value = match.group(1), match.group(2).strip()
        if (value.startswith('"') and value.endswith('"')) or (
            value.startswith("'") and value.endswith("'")
        ):
            value = value[1:-1]
        data[key] = value
    return data


def strip_html(value: str) -> str:
    value = html.unescape(value or "")
    value = re.sub(r"<[^>]*?>", " ", value)
    value = re.sub(r"\s+", " ", value).strip()
    return value


def compute_removal_reasons(title: str) -> list[str]:
    location_words = [
        "seattle",
        "bellevue",
        "capitol hill",
        "queen anne",
        "upper queen anne",
        "west seattle",
        "greenwood",
        "ballard",
        "wallingford",
        "phinney ridge",
        "phinney",
        "greenlake",
        "green lake",
        "belltown",
        "portage bay",
        "lake union",
        "loyal heights",
        "latona",
    ]

    location_re = re.compile(
        r"\b(" + "|".join(re.escape(w) for w in sorted(location_words, key=len, reverse=True)) + r")\b",
        re.IGNORECASE,
    )

    non_trade_re = re.compile(
        r"\b(quarantine|social distancing|binge watch|christmas in july|spooky|deals|gift guide)\b",
        re.IGNORECASE,
    )
    company_re = re.compile(
        r"\b(company updates|employee|spotlight|profile|award|winner|home show|in hindsight)\b",
        re.IGNORECASE,
    )
    project_re = re.compile(
        r"\b(project highlights|projects highlights|spring exterior project highlights)\b",
        re.IGNORECASE,
    )
    promo_re = re.compile(r"\b(painter for a day)\b", re.IGNORECASE)
    company_story_re = re.compile(
        r"\b(covid-19|covid|electric fleet|electric vehicle|electric vehicles|hire vets|hiring vets|remodel for reason|favorite projects)\b",
        re.IGNORECASE,
    )
    recent_re = re.compile(r"^(recent\b|volunteer\b)", re.IGNORECASE)

    reasons: list[str] = []
    if project_re.search(title):
        reasons.append("project")
    if company_re.search(title):
        reasons.append("company")
    if non_trade_re.search(title):
        reasons.append("non_trade")
    if promo_re.search(title):
        reasons.append("promo")
    if company_story_re.search(title):
        reasons.append("company")
    if recent_re.search(title):
        reasons.append("project")
    if location_re.search(title):
        reasons.append("location")

    if re.search(r"\bJob\b", title) and not re.search(r"^How\s+to\b", title, re.IGNORECASE):
        if location_re.search(title) or re.search(r"\b(Recent|Job in)\b", title, re.IGNORECASE):
            reasons.append("project")

    return sorted(set(reasons))


def main() -> int:
    repo_root = Path(__file__).resolve().parents[1]
    content_dir = repo_root / "content" / "blog"
    assets_root = repo_root / "public" / "blog"
    report_path = repo_root / "scripts" / "prune_blog_posts.report.json"

    dry_run = bool(int((__import__("os").environ.get("DRY_RUN", "0"))))

    to_remove: list[PostDecision] = []
    to_keep: list[PostDecision] = []

    for md_path in sorted(content_dir.glob("*.md")):
        markdown = md_path.read_text(encoding="utf-8")
        frontmatter = parse_frontmatter(markdown)
        title = strip_html(frontmatter.get("title_html", ""))
        if not title:
            continue
        slug = md_path.stem
        reasons = compute_removal_reasons(title)
        decision = PostDecision(
            slug=slug,
            title=title,
            reasons=reasons,
            markdown_path=str(md_path.relative_to(repo_root)),
            assets_dir=str((assets_root / slug).relative_to(repo_root)),
        )
        if reasons:
            to_remove.append(decision)
        else:
            to_keep.append(decision)

    report = {
        "dry_run": dry_run,
        "keep_count": len(to_keep),
        "remove_count": len(to_remove),
        "remove": [asdict(d) for d in to_remove],
        "keep": [{"slug": d.slug, "title": d.title} for d in to_keep],
    }
    report_path.write_text(json.dumps(report, indent=2), encoding="utf-8")

    if dry_run:
        print(f"DRY_RUN=1, would remove {len(to_remove)} posts. Report: {report_path}")
        return 0

    for d in to_remove:
        md = repo_root / d.markdown_path
        if md.exists():
            md.unlink()
        assets_dir = repo_root / d.assets_dir
        if assets_dir.exists() and assets_dir.is_dir():
            shutil.rmtree(assets_dir)

    print(f"Removed {len(to_remove)} posts. Kept {len(to_keep)} posts.")
    print(f"Report: {report_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
