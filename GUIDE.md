# Project Guide

## Project Structure

```
.
├── package.json
├── docs/
│   ├── README.md                 # Home page (type: Custom)
│   ├── about.md                  # About page
│   ├── friends.md                # Friends page
│   ├── blog/                     # Blog posts
│   ├── notes/                    # Notes (doc collection)
│   └── .vuepress/
│       ├── config.ts             # Site config (restart required after changes)
│       ├── plume.config.ts       # Theme config (hot reload supported)
│       ├── navbar.ts             # Navbar
│       ├── client.ts             # Register custom components
│       ├── public/               # Static assets
│       └── theme/
│           ├── components/       # Custom home page components
│           └── data/friends.json # Friends data
```

## Setup Guide

Search globally for `YOUR_` and replace with your real information.

### 1. Global Configuration

| File | Field | Description |
|------|-------|-------------|
| `docs/.vuepress/config.ts` | `title` | Site title |
| | `head` favicon | Favicon path |
| | `hostname` | Deployment domain (SEO) |
| | `contributors.info` | GitHub username |
| `docs/.vuepress/plume.config.ts` | `logo` | Navbar logo |
| | `profile.name` | Display name |
| | `profile.description` | Tagline |
| | `profile.avatar` | Avatar URL |
| | `profile.location` | Location |
| | `collections[].social` | Social links |
| | `footer.message` | Footer text |

### 2. Home Page Components

| File | Content |
|------|---------|
| `theme/components/Custom.vue` | Top GitHub link, avatar, email; two-line tagline; GitHub contributions username |
| `theme/components/AboutMeName.vue` | Greeting, display name, one-line intro |
| `theme/components/AboutMeSkill.vue` | `technology` / `tools` arrays, each item `{ type, icon }` |
| `theme/components/AboutMeLife.vue` | `lifeData` pie chart (life/study/work ratio) |
| `theme/components/AboutMeCharacter.vue` | MBTI title and type; replace `public/ISFJ-A.png` |
| `theme/data/friends.json` | Friends list `name/link/avatar/desc` |

Find skill icons on [Iconify](https://icon-sets.iconify.design/), e.g. `logos:vue`, `devicon:java`.

### 3. Friends Page `docs/friends.md`

- Friend cards are driven by `friends.json` and rendered via `<AllFriendContent/>`
- Edit the "My friend link info" YAML block and application instructions

### 4. About Page `docs/about.md`

- Personal intro paragraphs
- Tech stack table
- Site operations table
- Optional: GitHub contributions chart, typewriter animation, etc.

### 5. Blog Posts `docs/blog/*.md`

Chinese posts go in `docs/blog/`, English posts in `docs/en/blog/`. Keep the same directory structure; do not mix languages in one file:

```yaml
---
title: Post Title
createTime: 2025/01/01 12:00:00
tags: [tag1, tag2]
permalink: /blog/slug/
---
```

English permalinks must start with `/en/`, e.g. `/en/blog/slug/`.

Tags page `/blog/tags/` and archives page `/blog/archives/` are generated automatically.

### 6. Notes `docs/notes/`

Chinese notes go in `docs/notes/`, English notes in `docs/en/notes/`. Use `/notes/` and `/en/notes/` permalink prefixes respectively.

Configure the Notes dropdown in `navbar.ts` under `items`.

To add a note category: `plume.config.ts` already has a `type: 'doc'` collection; the directory structure becomes the sidebar.

### 7. Static Assets `docs/.vuepress/public/`

| File | Purpose |
|------|---------|
| `plume.svg` | Default avatar/logo (replace with yours) |
| `ISFJ-A.png` | Home page personality image |
| `bg-3.jpg` | Home page background |
| `images/hello.png` | About page header image |

### 8. Optional Features

**Umami Analytics** — Uncomment and fill `data-website-id` and `src` in `config.ts` `head`.

**Twikoo Comments** — Uncomment and fill `envId` in `config.ts` `comment`.

## Deployment

```bash
pnpm docs:build
```

Output directory: `docs/.vuepress/dist/`. Upload to any static hosting provider.
