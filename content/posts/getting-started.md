---
title: "Getting Started with Eleventy"
date: 2025-01-07
tags: ["posts", "tutorial"]
---

# Getting Started with Eleventy

Eleventy is a simpler static site generator that's perfect for blogs and documentation sites.

## Why Eleventy?

- **Simple** - No complex build processes
- **Fast** - Generates static HTML quickly
- **Flexible** - Works with any template language
- **No JavaScript** - Pure HTML output

## Basic Commands

```bash
# Install dependencies
npm install

# Build the site
npm run build

# Serve locally
npm run serve
```

## File Structure

```
src/
├── _includes/     # Layout templates
├── posts/         # Blog posts (markdown)
├── assets/        # CSS, JS, images
└── index.njk      # Homepage
```

The site will be built to the `_site/` directory, ready for deployment.
