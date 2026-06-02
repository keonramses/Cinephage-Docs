---
title: Release History
description: Cinephage version history, release notes, and Docker tags
sidebar_position: 2
tags: [releases, versions, changelog]
keywords: [releases, versions, stable, dev]
---

# Release History

Cinephage follows semantic versioning and maintains two release channels.

## Release channels

| Channel | Docker Tag | Description |
|---------|------------|-------------|
| **Stable** | `latest` or `vX.Y.Z` | Production-ready releases |
| **Preview** | `dev` | Latest development builds |

```bash
# Stable
docker pull ghcr.io/moldytaint/cinephage:latest
docker pull ghcr.io/moldytaint/cinephage:v0.11.0   # pinned

# Preview
docker pull ghcr.io/moldytaint/cinephage:dev
```

| Use Case | Recommended tag |
|----------|----------------|
| Production | `latest` or pinned `vX.Y.Z` |
| Testing new features | `dev` |
| Reproducible deploys | pinned `vX.Y.Z` |

---

## Latest - v0.11.0 (2026-05-29)

**Anime metadata** - AniList/MAL providers with provider-aware enrichment, provider links on detail views, and metadata provider override support.

**Blocklist overhaul** - Manual release blocking from search results, configurable block durations, metadata-level blocked media with 3-layer guard architecture, and bulk actions.

**Activity improvements** - Activity type tags and status popovers across the table and dashboard sidebar. Typed frontend API service layer.

**Library UX** - Slide-out sort/filter/display drawer with persistent settings. Scope monitor/unmonitor to current library with cascade to seasons and episodes.

**Stalled downloads** - Auto-fail after configurable timeout; auto-blocklist when no seeders found.

**Bug fixes** - qBittorrent v5.2.0 authentication fix; subtitle provider repairs (subf2m, gestdown, yify), subscene removed; calendar error handling; smart list editor crash; 132 TypeScript errors resolved.

[Full release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.11.0)

---

## Recent releases

### v0.10.0 (2026-04-28)

Calendar page with month grid, day detail panel, and Coming Up dashboard widget. Adds `releaseDate`/`firstAirDate` to movies and series with TMDB caching.

[Release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.10.0)

### v0.9.0 (2026-04-28)

Movie collection support in schema, naming system, and APIs. Metadata refresh task and improved TMDB caching.

[Release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.9.0)

### v0.8.0 (2026-04-27)

Cinephage IPTV integration replacing IPTV-org sync. Adds native IPTV account form, country proxy, and backup URL support.

[Release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.8.0)

### v0.7.0 (2026-04-26)

:::warning[Breaking changes]
- **`BETTER_AUTH_SECRET`** must now be set as an environment variable. The auto-generated `.auth-secret` fallback is removed. Copy `data/.auth-secret` into the env var before upgrading or all sessions and API keys will be lost.
- **Subtitles analytics endpoint** (`/api/subtitles/providers/analytics`) response shape changed - analytics object removed, provider fields now at top level.

See the [Migration Guide](/guides/deploy/migration) for step-by-step instructions.
:::

RBAC with admin password reset, full i18n via Paraglide JS v2 (Spanish), native subtitle sync engine, Plex integration, rTorrent and Transmission clients, Torznab protocol, backup/restore with encrypted secrets, rate limiting, and extensive security hardening.

[Release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.7.0)

---

## Version history

All versions with key highlights. Click any link for full details.

| Version | Date | Highlights |
|---------|------|------------|
| [v0.6.0](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.6.0) | 2026&#8209;04&#8209;25 | Skip stream probing for instant playback; seeding limit fixes for Transmission and Deluge |
| [v0.5.0](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.5.0) | 2026&#8209;04&#8209;21 | List view with auto/manual grab; enhanced EPG and IPTV; symlinked file import; bulk library operations. Same breaking changes as v0.7.0. |
| [v0.2.0](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.2.0) | 2026&#8209;04&#8209;17 | Unified status page; isPlayed/playedPercentage indicators; redesigned media explorer filter bar |
| [v0.1.0](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.1.0) | 2026&#8209;04&#8209;15 | Initial public release - Live TV, captcha solver, NZB/NNTP streaming, smart lists, subtitle support, Docker and NixOS |

Patch releases (v0.1.1-v0.4.0, v0.6.1, v0.7.1-v0.7.4, v0.8.1-v0.8.2, v0.9.1) contained bug fixes and CI improvements only. See the [GitHub Releases page](https://github.com/MoldyTaint/Cinephage/releases) for complete details on every release.

---

## See Also

- [Migration Guide](/guides/deploy/migration) - Upgrading between versions with breaking changes
- [Backup and Restore](/guides/deploy/backup-restore) - Back up before updating
- [Roadmap](/support/roadmap) - What is coming next
