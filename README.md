# Zach's Tianxia Notebook

A personal knowledge base and blog built with [Quartz](https://quartz.jzhao.xyz/), featuring a custom design inspired by the DKJ aesthetic with a warm tan background and minimalist typography.

## 🌟 Features

- **Custom Tianxia Theme**: Warm tan background with subtle pattern overlay
- **Minimalist Design**: Clean, centered layout inspired by DKJ's aesthetic
- **Obsidian Integration**: Write in Obsidian, publish automatically
- **Blog Functionality**: Personal posts and notes with automatic indexing
- **Responsive Design**: Works beautifully on desktop and mobile
- **GitHub Pages Deployment**: Automatic deployment on every push

## 🎨 Design Philosophy

This site replicates the design of my original Eleventy-based blog, featuring:

- **Tan Background** (`#eddbbe`) with subtle grid pattern
- **Minimalist Typography** using system fonts
- **Simple Navigation** without complex sidebars
- **Clean Content Layout** with centered 780px max-width
- **"File last modified"** header meta information
- **Simple Footer** with just an em dash (—)

## 🚀 Getting Started

### Prerequisites

- Node.js 22 or higher
- Git

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/ZacharyMR/ZachsTianxiaObsidian.git
   cd ZachsTianxiaObsidian
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npx quartz build --serve
   ```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Adding Content

- Create new markdown files in the `content/` directory
- Use proper frontmatter with title, date, and tags
- The site will automatically rebuild and deploy

### Deployment

The site automatically deploys to GitHub Pages when you push to the `v4` branch. The deployment workflow:

1. Builds the Quartz site
2. Deploys to GitHub Pages
3. Available at: `https://zacharymr.github.io/ZachsTianxiaObsidian/`

## 📁 Project Structure

```
├── content/                 # Your markdown content
│   ├── index.md            # Homepage
│   └── posts/              # Blog posts
├── quartz/
│   ├── components/         # Custom React components
│   ├── plugins/            # Custom plugins
│   ├── static/             # Static assets
│   └── styles/             # Custom SCSS styles
├── .github/workflows/      # GitHub Actions
└── quartz.config.ts        # Quartz configuration
```

## 🛠 Custom Components

- **HeaderMeta**: Shows "File last modified" in top-right corner
- **SimpleFooter**: Minimal footer with em dash
- **TianxiaScript**: JavaScript for last modified date functionality

## 🎨 Custom Styling

The custom styling is defined in `quartz/styles/custom.scss` and includes:

- Tan background theme with pattern overlay
- Typography overrides for minimalist design
- Layout overrides to disable Quartz's default grid system
- Responsive design for mobile devices

## 📝 Content Management

### Frontmatter

Use this frontmatter format for your posts:

```yaml
---
title: "Your Post Title"
date: 2025-01-07
tags: ["posts", "category"]
---

# Your content here...
```

### Obsidian Integration

1. Open this repository in Obsidian
2. Edit files in the `content/` directory
3. Use Obsidian's features like wikilinks, tags, and backlinks
4. Push changes to GitHub for automatic deployment

## 🔧 Configuration

Key configuration files:

- `quartz.config.ts`: Main Quartz configuration
- `quartz.layout.ts`: Layout and component configuration
- `quartz/styles/custom.scss`: Custom styling

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Quartz](https://quartz.jzhao.xyz/) by Jacky Zhao
- Design inspired by DKJ's minimalist aesthetic
- Original Eleventy layout successfully replicated in Quartz

---

*"All Under Heaven" - A personal notebook for thoughts, ideas, and discoveries.*