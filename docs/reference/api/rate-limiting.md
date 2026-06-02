---
title: Rate Limiting
description: API rate limiting policies for Cinephage
sidebar_position: 3
tags: [api, rate-limiting, authentication, reference]
keywords: [api, rate limits, throttling, requests]
---

# Rate Limiting

Cinephage implements rate limiting to ensure fair usage and system stability.

## Current Policy

The public API uses tiered rate limits based on authentication level:

| Authentication | Rate Limit | Scope |
|----------------|------------|-------|
| Unauthenticated | 60 requests/hour | Per IP address |
| API Key | 10,000 requests/hour | Per key |
| Streaming API Key | 10,000 requests/hour | Per key (live TV/EPG only) |

## Rate Limit Headers

All API responses include rate limit information:

| Header | Description |
|--------|-------------|
| `X-RateLimit-Limit` | Maximum requests allowed |
| `X-RateLimit-Remaining` | Requests remaining in window |
| `X-RateLimit-Reset` | Unix timestamp when limit resets |

## Exceeding the Limit

When you exceed the rate limit, the API returns:

- **Status:** `429 Too Many Requests`
- **Body:** Error message with retry timing
- **Header:** `Retry-After` with seconds to wait

## Best Practices

- **Cache responses** - Don't repeat identical requests
- **Use streaming keys** - For media server integrations, use the limited-scope Streaming API Key
- **Handle 429s gracefully** - Back off and retry with exponential delay
- **Monitor usage** - Check the `X-RateLimit-Remaining` header

## See Also

- [Authentication](/reference/api/authentication) - API key management
- [API Endpoints Overview](/reference/api/endpoints-overview) - Available endpoints
