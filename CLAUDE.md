# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio + app landing-page site (`tyh94.github.io`), served as a static Jekyll site on GitHub Pages. It hosts the developer bio and per-app marketing/legal pages (support, privacy, terms) for iOS apps. No build step beyond Jekyll; all pages are hand-written static HTML.

## Commands

```
bundle install              # install gems (jekyll, webrick, jekyll-sitemap)
bundle exec jekyll serve    # local dev server with live rebuild at http://localhost:4000
```

Deployment is automatic: GitHub Pages builds `main` on push. There are no tests or linters.

## Architecture

### Text lives in `_data/translations.json`
Every page is bilingual (RU, EN) and **all user-visible text lives in `_data/translations.json`** (`{ "ru": {...}, "en": {...} }`). `assets/js/main.js` has empty front matter, so Jekyll processes it and inlines that file as the `translations` object (`{{ site.data.translations | jsonify }}`). HTML elements carry a `data-i18n="key"` attribute; `applyTranslations()` fills them via `innerHTML` on `DOMContentLoaded`. Language is persisted in `localStorage` under `lang` (default: browser language, `ru` → RU, anything else → EN) and toggled by the `setLang()` RU/EN buttons in every nav.

Family Food Diary pages (`apps/family-food-diary/*`) additionally render the **English text server-side**: `{%- assign t = site.data.translations.en -%}` at the top, and every `data-i18n` element contains `{{ t["key"] }}`. Google OAuth verification reads the raw HTML without running JS and rejected the app when these pages were empty — keep it that way for any page Google (or another store) reviews.

Consequences when editing content:
- To add or change any visible text, edit `_data/translations.json`, **not** the HTML or `main.js`. Keep the `ru` and `en` maps in sync — every key must exist in both.
- Because values are injected with `innerHTML` (and output raw by Liquid), they may contain markup (e.g. `<br>`, `<span>`, `<a href>`); several keys rely on this.
- New pages must include an element with `id="btn-ru"` and `id="btn-en"` (the toggle) or the active-state logic is a no-op.
- Elements with `data-i18n` but no matching key stay empty on screen — a missing/mistyped key fails silently.

### Translation key namespacing
Keys are dot-namespaced by app and page: `nav.*`, `hero.*`, `about.*` (home page); `sc.*` = SourdoughCooker; `ffd.*` = Family Food Diary. Within an app, sub-namespaces mirror the page: `sc.page.*` (landing), `sc.support.*`, `sc.privacy.*`, `sc.tos.*`. Follow this scheme when adding a new app or page.

### App Store badge locale
`applyTranslations()` special-cases `#appstore-badge`, swapping its `src` to the `ru-ru` or `en-us` Apple badge endpoint by language. Give a badge `id="appstore-badge"` to get automatic localization.

### Page layout & paths
- `index.html` — home (bio, apps grid, contact). Uses **relative** asset paths (`assets/...`).
- `apps/<app>/index.html` + `support.html` / `privacy.html` / `terms.html` — one folder per app. These use **absolute** asset paths (`/assets/...`).
- `_config.yml` sets `permalink: pretty`, so `apps/foo/support.html` is served at `/apps/foo/support/`. In-page links between app subpages use trailing-slash pretty URLs (e.g. `href="support/"`, `href="privacy/"`).
- Every HTML file starts with an empty Jekyll front-matter block (`---\n---`) so Jekyll processes it.

### Shared assets
`assets/css/main.css` and `assets/js/main.js` are shared across all pages — a change affects the entire site. App icons live in `assets/` (e.g. `assets/sourdoughcooker-icon.jpeg`).

### Adding a new app
1. Create `apps/<app-slug>/` with `index.html`, `support.html`, `privacy.html`, `terms.html` (copy an existing app's folder as the template).
2. Add all its `data-i18n` keys under a new namespace to **both** `ru` and `en` in `_data/translations.json`.
3. Add a card to the apps grid in the root `index.html`.
4. Google site-verification and App Store links are hard-coded per file — update them.
