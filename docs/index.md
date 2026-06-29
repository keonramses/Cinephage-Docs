---
title: Cinephage Documentation
description: Complete documentation for Cinephage, the unified self-hosted media management platform
sidebar_position: 0
slug: /
tags: [overview, getting-started]
keywords: [cinephage, documentation, media management, self-hosted]
---

# Cinephage Documentation

Welcome to the Cinephage documentation. Cinephage is a self-hosted media management platform that unifies movies, TV shows, live TV, and streaming into a single modern application.

## What Cinephage Does

Instead of running multiple separate services, Cinephage provides one cohesive platform:

- **One database** - All your media and configurations together
- **One interface** - Browse, search, and manage everything
- **One configuration** - Set up indexers and clients once
- **One container** - Deploy with Docker and go

## Documentation Sections

<div className="card-grid">

<div className="card">

### Getting started

Installation, setup, and your first steps.

[Get Started →](/getting-started)

</div>

<div className="card">

### Guides

Task-oriented guides for configuration and use.

[Browse Guides →](/guides)

</div>

<div className="card">

### Reference

API docs, configuration, database schema.

[View Reference →](/reference)

</div>

<div className="card">

### Explanation

Architecture, concepts, and design decisions.

[Learn More →](/explanation)

</div>

<div className="card">

### Support

FAQ, releases, roadmap, and troubleshooting.

[Get Help →](/support)

</div>

</div>

## Quick Start

1. **[Install](/getting-started/installation)** - Get running with Docker
2. **[Configure](/getting-started/initial-setup)** - Set up TMDB API, download clients, and Root Folders
3. **[Add Media](/getting-started/adding-media)** - Add your first movie or TV show

## New in v0.13.0

:::info[Latest Release]
- **Storage maintenance** - Collapsible library rows, sortable Top Played/Largest Items tables, labeled disk usage legend, deduplicated free space
- **Prevent resolution downgrades** - New quality profile toggle (on by default) blocks lower-resolution replacements even with higher custom format scores
- **Naming tokens** - `{OriginalTitle}` and `{OriginalCleanTitle}` for original-language titles in file/folder patterns
- **Library detail redesign** - Improved movie header layout, mobile sticky action bar, TV series contextual back button
- **Discover hero** - Video clips and backdrops on media hero; keyword blocklist filters dashboard sections immediately
- **Failed download cooldown** - 1-hour cooldown before re-grab; unknown-size releases rejected when size limits are set

[View release notes →](/support/releases#latest---v0130-2026-06-29)
:::

## Getting Help

- [Discord](https://discord.gg/scGCBTSWEt) - Community chat
- [GitHub Issues](https://github.com/MoldyTaint/Cinephage/issues) - Bug reports and feature requests
- [Troubleshooting Guide](/guides/deploy/troubleshooting) - Common issues and fixes

---

Ready to dive in? Start with the [Installation guide](/getting-started/installation).
