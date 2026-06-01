---
title: Roadmap
sidebar_position: 3
description: Planned features and upcoming development for Cinephage
tags: [roadmap, planning, features]
keywords: [roadmap, features, planning, future]
---

# Roadmap

Planned features, work in progress, and known limitations. For what has already shipped, see [Release History](/support/releases).

---

## Recently shipped

Items completed in recent releases.

| Feature | Version | Notes |
|---------|---------|-------|
| Calendar view | v0.10.0 | Month grid, day detail panel, Coming Up dashboard widget |
| qBittorrent v5 compatibility | v0.11.0 | Authentication fix for v5.2.0 API changes |
| Streaming provider settings | v0.8.0 | Cinephage IPTV wired into accounts, provider factory, and settings UI |
| Anime metadata | v0.11.0 | AniList/MAL providers with provider-aware enrichment and library support |
| Blocklist overhaul | v0.11.0 | Manual release blocking, metadata-level blocked media, bulk actions |
| RBAC and admin password reset | v0.7.0 | Role column, admin-only enforcement, password reset script |

---

## Current focus

### Notifications system

In Progress | Medium | **Area**: Infrastructure

Notify users of important events without constantly checking the UI.

**Planned channels**: Discord webhooks, email (SMTP), generic webhooks, Pushover, Telegram.

**Planned triggers**: download started/completed, import success/failure, health check failures, new content available.

---

## Up next

### Tag-based monitoring profiles

Planned | Medium | **Area**: Monitoring

Apply different delay and upgrade rules based on content tags - for example, longer delays for anime or immediate grabs for documentaries. Currently delay profiles apply globally.

---

### Additional indexers

Planned | Medium | **Area**: Indexers

Expanding built-in YAML definitions for public trackers and usenet indexers. Priority targets include anime sources (SubsPlease, Anidex, AnimeTosho) and general trackers (ShowRSS, Tokyo Toshokan).

---

### External watchlist sync (Trakt, Letterboxd, Plex)

Planned | Medium | **Area**: Library

Sync "want to watch" lists from Trakt, Letterboxd, and Plex watchlists into Cinephage monitoring.

**Current state**: IMDb lists, TMDB lists, and JSON URL import are already available via Smart Lists. Trakt, Letterboxd, and Plex watchlists are not yet implemented.

---

## Future plans

### Multi-user support

Under Consideration | Medium | **Area**: Infrastructure

User accounts with per-user preferences, role-based permissions, and activity logging per user. Currently Cinephage is single-admin.

**Workaround**: Place Cinephage behind an authenticating reverse proxy (Authelia, Authentik, or nginx basic auth).

---

### Enhanced streaming provider support

Under Consideration | Medium | **Area**: Streaming

Real-time availability checking across streaming services beyond the current TMDB watch provider data.

---

### Music, books, and audiobook support

Not Yet Started | Low | **Area**: Library

Extend the unified media library beyond video content. Each requires dedicated metadata sources (MusicBrainz, OpenLibrary) and format-specific indexers.

---

## Known limitations

| Limitation | Workaround |
|------------|------------|
| Single admin only | Reverse proxy authentication (Authelia, Authentik) |
| Cloudflare-protected indexers may fail | Built-in captcha solver covers many cases; some sites remain unreliable |
| Trakt/Letterboxd watchlist import not available | Use IMDb list or JSON URL import via Smart Lists |

---

## Contributing

Feature requests and bug reports are tracked on [GitHub Issues](https://github.com/MoldyTaint/Cinephage/issues). Community input on prioritization is welcome via [GitHub Discussions](https://github.com/MoldyTaint/Cinephage/discussions).
