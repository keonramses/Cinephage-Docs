---
title: Table Reference
description: Database table reference for Cinephage
sidebar_position: 2
tags: [database, schema, tables, reference]
keywords: [database, tables, schema, sqlite]
---

# Table Reference

Cinephage uses SQLite for data storage. The database schema is managed automatically - you do not need to create tables manually.

## Overview

The database is organized into logical groups:

- **Media tables** - Movies, TV shows, episodes, and metadata
- **Configuration tables** - Settings, profiles, and user preferences
- **Download tables** - Queue, history, and client connections
- **Search tables** - Indexers, queries, and results

## Key Tables

| Table | Purpose | Notes |
|-------|---------|-------|
| `movies` | Movie library entries | Links to TMDB metadata |
| `tv_shows` | TV show library entries | Contains season/episode counts |
| `episodes` | Individual episodes | Links to `tv_shows` and files |
| `download_queue` | Active downloads | Status tracking and client mapping |
| `indexers` | Configured search sources | YAML definition references |
| `settings` | Application configuration | Key-value store |
| `users` | User accounts | Authentication and permissions |
| `api_keys` | API key storage | Scoped access tokens |

## Schema Details

For a complete view of the database schema, including column types, indexes, and relationships, see the [Schema Overview](/reference/database/schema-overview).

## See Also

- [Schema Overview](/reference/database/schema-overview) - Complete database structure
- [Environment Variables](/reference/configuration/environment-variables) - Database configuration options
