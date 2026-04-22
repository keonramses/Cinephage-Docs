---
title: Releases
description: Cinephage release channels and version information
sidebar_position: 2
tags: [releases, versions, changelog]
keywords: [releases, versions, stable, dev]
---

# Releases

Cinephage uses a two-channel release model:

- `latest` - current stable release from `main`
- `dev` - current preview build from `dev`
- `vX.Y.Z` - pinned stable release tag

---

## Branch Roles

- `main` - stable branch, used for production releases
- `dev` - preview branch, used for ongoing integration and testing

Recommended flow:

1. Feature and fix branches target `dev`
2. `dev` is promoted into `main` when you want a stable release
3. Emergency hotfixes may target `main`, then must be merged back into `dev`

---

## Docker Tags

### Stable

- `ghcr.io/moldytaint/cinephage:latest`
- `ghcr.io/moldytaint/cinephage:vX.Y.Z`

Use `latest` if you want the current stable release.
Use `vX.Y.Z` if you want deterministic, pinned deployments.

### Preview

- `ghcr.io/moldytaint/cinephage:dev`

Use `dev` only if you want preview builds from the `dev` branch.

---

## Release Process

### Automated Releases (v0.5.0+)

Cinephage uses an automated release pipeline:

1. **Release-please** manages version bumps and changelog generation
2. **Semantic versioning** follows conventional commits
3. **Auto-release workflow** handles GitHub Releases and Docker tagging

### Preview builds

Every push to `dev` publishes:

- floating preview tag: `dev`
- immutable preview candidate: `dev-YYYYMMDD-RUN`

Preview builds do not create GitHub Releases.

### Stable releases

Stable releases are automatically created when release-please promotes a `main` branch PR:

That promotion creates:

- Git tag `vX.Y.Z`
- GitHub Release `vX.Y.Z` with auto-generated notes
- image tag `vX.Y.Z`
- image tag `latest`
- Discord announcement (if configured)

---

## Rollback Policy

- `latest` always points to a stable release
- rollback is done by repointing `latest` to an earlier stable `vX.Y.Z`
- Cinephage does not support forcing `latest` to a preview build

If you need a non-stable build, use `dev` explicitly.

---

## Version Reporting

The running application reports the deployed build/release version from runtime environment metadata.

In practice:

- Docker stable releases report `vX.Y.Z`
- Docker preview builds report `dev`, `main-YYYYMMDD-RUN`, or `dev-YYYYMMDD-RUN` as appropriate
- local/manual development falls back to `dev-local`

---

## Which Should You Use?

| Use Case | Recommended Tag |
|----------|-----------------|
| Production deployment | `latest` or `vX.Y.Z` |
| Testing new features | `dev` |
| Deterministic deploys | `vX.Y.Z` (pinned) |
| CI/CD pipelines | `vX.Y.Z` (pinned) |

---

## Version 0.5.0 (Latest Stable)

### Breaking Changes

:::danger Migration Required
**BETTER_AUTH_SECRET now required**
- Auto-generated `.auth-secret` fallback removed
- Must explicitly set `BETTER_AUTH_SECRET` environment variable
- Existing users: Copy secret from `data/.auth-secret` before upgrading
- Without migration: All sessions and encrypted API keys will be lost

**Subtitles API changes**
- `/api/subtitles/providers/analytics` response shape changed
- Analytics object removed, fields now at top level
- Throttle state includes new fields: `consecutiveFailures`, `lastError`, `lastErrorAt`

**Indexer changes**
- Removed `preferMagnetUrl` setting from all indexers
:::

### Major Features

- **Activity Management** — Enhanced activity history with stats, bulk actions, and SSE events
- **Backup & Restore** — Encrypted configuration backup and restore
- **Unified Status Page** — Combined storage and media server status
- **Native Subtitle Sync** — Built-in sync engine with alass algorithm
- **Media Move** — Move content between root folders directly in UI
- **Media Subtypes** — Anime subtype support for specialized metadata
- **New Indexers** — Kinozal and Milkie.cc support
- **Playback Sessions** — Track and manage active playback sessions
- **i18n Support** — Internationalization with Spanish localization
- **Content Rating Filter** — Filter discover page by content rating
- **Language Filter** — Filter discover page by language
- **List View** — Auto/manual grab for movies and TV shows
- **Enhanced Live TV** — Channel name cleanup and improved EPG
- **rTorrent Support** — XML-RPC download client implementation
- **Scoring Improvements** — Source-only and resolution-only scoring formats

### Infrastructure

- **Docker** — Base image updated to `node:24-trixie-slim`
- **Auto-release** — Automated release pipeline with release-please
- **Admin Auth** — Enhanced admin authorization on API endpoints

---

## See Also

- [Migration Guide](../guides/deploy/migration.md) — Upgrading between versions
- [Backup & Restore](../guides/deploy/backup-restore.md) — Before updating
