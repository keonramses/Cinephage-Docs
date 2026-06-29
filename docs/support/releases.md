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
docker pull ghcr.io/moldytaint/cinephage:v0.13.0   # pinned

# Preview
docker pull ghcr.io/moldytaint/cinephage:dev
```

| Use Case | Recommended tag |
|----------|----------------|
| Production | `latest` or pinned `vX.Y.Z` |
| Testing new features | `dev` |
| Reproducible deploys | pinned `vX.Y.Z` |

---

## Latest - v0.13.0 (2026-06-29)

**Storage maintenance** - Collapsible library rows with labeled badges (Monitored, Auto-search, Subtitles) and a direct link to each library. Sortable, filterable Top Played and Largest Items tables with type filter (All/Movies/Episodes), item count, and show-more pagination. Disk usage bar legend now labels each segment (Cinephage / Other / Free) on both mobile and desktop. Free space is deduplicated across root folders that share the same physical disk so totals are never counted twice. Dashboard storage card links directly to the Storage Maintenance page.

**Quality profiles** - New Prevent Resolution Downgrades toggle (enabled by default on all profiles) blocks a higher-scoring lower-resolution release from replacing an existing file. Failed downloads now have a 1-hour cooldown before a re-grab attempt. Releases with unknown file sizes are rejected when size limits are configured.

**Naming tokens** - New `{OriginalTitle}` and `{OriginalCleanTitle}` tokens expose the media's original-language title for use in file and folder naming patterns.

**Library detail** - Redesigned movie detail header with improved layout and metadata. Mobile sticky action bar. TV series contextual back button restores library scope on navigation.

**Discover** - Hero enriched with video clips and backdrops. Keyword blocklist now filters dashboard sections and takes effect without a restart.

**Bug fixes** - Vanished download recovery via client path reconstruction with auto-retry. Root folder path validation no longer incorrectly flags self-overlap on edit. Old theatrical-only movies now show as Released after 3 years.

[Full release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.13.0)

---

## Recent releases

### v0.12.0 (2026-06-23)

**Activity overhaul** - Failed downloads moved from the Active tab to History. Queue cards work across both tabs. Contextual status labels replace the generic active-download count.

**Search and indexers** - Smarter title selection reduces indexer load. Season pack scoping and category mapping fixed. Torznab URL auto-discovery added. Orphaned managed indexers auto-disabled on connection test failure. Profile-driven upgrades now work between streaming and downloaded media.

**Library and importer** - Library-scoped monitor-all works correctly in custom libraries for both movies and TV. Root folders shown in the folder browser. Manual importer hides media type filter when launched from a library item. Season override added to Match Folder modal for unparseable filenames. Absolute episode numbering fixed for unmatched file auto-matching. Anime content defaults to Anime series type on add via Discover.

**Media server integration** - Notifications sent to Plex/Emby/Jellyfin on file rename. Connection testing and version tracking improved.

**Parser** - Fansub and BD-BOX naming conventions handled. Fansub "S1 - NN" notation no longer mis-detected as a multi-season pack.

**Bug fixes** - Date/time handling is now i18n-aware with timezone safety. User-created custom format edit/delete fixed. Blocked keywords persist across server restarts. CSRF replaced with a proper LAN origin guard. Coming Up dashboard items are now clickable links to library detail pages.

[Full release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.12.0)

### v0.11.0 (2026-05-29)

Anime metadata with AniList/MAL providers, provider-aware enrichment, provider links on detail views, and metadata provider override support. Blocklist overhaul with manual release blocking from search results, configurable block durations, and metadata-level blocked media with 3-layer guard architecture. Activity type tags and status popovers. Library slide-out sort/filter/display drawer with persistent settings. Stalled download auto-fail with configurable timeout and auto-blocklist when no seeders found.

[Release notes](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.11.0)

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
| [v0.13.0](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.13.0) | 2026&#8209;06&#8209;29 | Storage maintenance UX; OriginalTitle naming tokens; prevent resolution downgrades; library detail redesign |
| [v0.12.0](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.12.0) | 2026&#8209;06&#8209;23 | Activity overhaul; search/indexer fixes; library importer improvements; media server notifications on rename |
| [v0.11.0](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.11.0) | 2026&#8209;05&#8209;29 | Anime metadata (AniList/MAL); blocklist overhaul; stalled download auto-fail |
| [v0.10.0](https://github.com/MoldyTaint/Cinephage/releases/tag/v0.10.0) | 2026&#8209;04&#8209;28 | Calendar page with Coming Up widget; releaseDate/firstAirDate metadata |
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
