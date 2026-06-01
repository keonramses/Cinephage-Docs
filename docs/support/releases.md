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

| Channel | Tag | Description |
|---------|-----|-------------|
| **Stable** | `latest` or `vX.Y.Z` | Production-ready releases |
| **Preview** | `dev` | Latest development builds |

## Version history

### v0.11.0 - 2026-05-29 (latest stable)

**Highlights:**
- Anime metadata via AniList/MAL with provider-aware enrichment and provider links
- Blocklist overhaul: manual release blocking, configurable durations, metadata-level blocked media, and bulk actions
- Auto-fail stalled downloads after configurable timeout; auto-blocklist on no seeders
- Activity type tags and status popovers across the activity table and dashboard sidebar
- Typed frontend API service layer
- Library sort/filter/display slide-out drawer with persistent settings
- Stalker portal auto-detection and endpoint probing with channel fallbacks
- Login page redesign with app logo and password toggle
- Full i18n pass across activity, blocklist, and remaining hardcoded UI strings
- Resolved 132 TypeScript errors; consolidated duplicate types

**Notable fixes:**
- qBittorrent v5.2.0 authentication compatibility
- Subtitle provider repairs (subf2m, gestdown, yify); subscene removed
- Calendar page error handling, race conditions, and locale fixes
- Smart list editor crash and duplicate profile-name validation

[Full release notes on GitHub](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.11.0)

---

### v0.10.0 - 2026-04-28

Calendar feature: month grid, day detail panel, Coming Up dashboard widget, and upcoming API endpoints. Adds `releaseDate`/`firstAirDate` to movies and series with TMDB `now_playing`/`upcoming` caching.

[Release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.10.0)

---

### v0.9.0 - 2026-04-28

Movie collection support in the database schema, naming system, and movie APIs. Adds a metadata refresh task and improves TMDB caching.

[Release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.9.0)

---

### v0.8.0 - 2026-04-27

Cinephage IPTV integration: replaces IPTV-org sync with the Cinephage API playlist endpoint, adds a native IPTV account form, country proxy, and backup URL support.

[Release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.8.0)

---

### v0.7.0 - 2026-04-26

**Breaking changes:**
- `BETTER_AUTH_SECRET` must now be set as an environment variable. The auto-generated `.auth-secret` file fallback is removed. Copy your secret from `data/.auth-secret` into the env var before upgrading.
- Subtitles analytics endpoint (`/api/subtitles/providers/analytics`) response shape changed: analytics object removed, provider fields are now at top level, throttle state includes `consecutiveFailures`/`lastError`/`lastErrorAt`.

**Major features:** RBAC with admin password reset, i18n via Paraglide JS v2 with Spanish translation, native subtitle sync engine, activity system overhaul, Plex integration, rTorrent and Transmission clients, Torznab protocol support, configuration backup/restore with encrypted secrets, Live TV EPG and stalker portal improvements, rate limiting, and extensive security hardening.

[Release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.7.0)

---

### v0.6.0 - 2026-04-25

Skip stream probing for instant playback startup. Fixes seeding limit checks for Transmission and Deluge, and a date parser regression.

[Release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.6.0)

---

### v0.5.0 - 2026-04-21

Large release with the same breaking changes as v0.7.0 (they were first introduced here). Adds list view with auto/manual grab, enhanced EPG and IPTV account management, symlinked file import, unified media type handling, and bulk library operations.

[Release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.5.0)

---

### v0.2.0 - 2026-04-17

Unified status page, isPlayed/playedPercentage indicators in the media explorer, and a redesigned filter bar with tiered chip layout.

[Release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.2.0)

---

### v0.1.0 - 2026-04-15

Initial public release. Full architecture including Live TV with EPG, captcha solver, NZB/NNTP streaming, smart lists, media naming, subtitle support, activity system, and Docker/NixOS support.

[Release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.1.0)

---

For patch releases and the complete changelog, see the [GitHub Releases page](https://github.com/MoldyTaint/Cinephage/releases).

## Docker tags reference

### Stable releases

```bash
# Latest stable
docker pull ghcr.io/moldytaint/cinephage:latest

# Pinned version (recommended for production)
docker pull ghcr.io/moldytaint/cinephage:v0.11.0
```

### Preview builds

```bash
# Latest development build
docker pull ghcr.io/moldytaint/cinephage:dev
```

## Which tag should I use?

| Use Case | Recommended Tag |
|----------|----------------|
| Production deployment | `latest` or `vX.Y.Z` |
| Testing new features | `dev` |
| Deterministic deploys | `vX.Y.Z` (pinned) |
| CI/CD pipelines | `vX.Y.Z` (pinned) |

## See Also

- [Migration Guide](/guides/deploy/migration) - Upgrading between versions
- [Backup & Restore](/guides/deploy/backup-restore) - Before updating
