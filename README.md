# Waffle Films Co. — Kerala Wedding Photography & Cinematography

[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646cff?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-React-ff4154?style=flat-square)](https://motion.dev/)
[![Linter](https://img.shields.io/badge/Oxlint-passing-brightgreen?style=flat-square)](https://oxc.rs/)
[![Deploy](https://img.shields.io/badge/Cloudflare_Pages-Ready-f38020?style=flat-square&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)

A bespoke, editorial-grade digital portfolio and cinematic showcase created for **Waffle Films Co.**, a premier wedding photography and cinematography studio based in Kerala, India.

Combining high-end magazine aesthetics with fluid micro-interactions, the website is engineered to evoke intimacy, nostalgia, and visual luxury — reflecting the studio's philosophy of blending candid emotion with cinematic storytelling.

---

## 📑 Table of Contents

- [Overview & Creative Direction](#-overview--creative-direction)
- [Design System & Palette](#-design-system--palette)
- [Key Features](#-key-features)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Content Management Guide](#-content-management-guide)
  - [Updating Photography & Stories](#1-updating-photography--stories)
  - [Updating Wedding Films & Videos](#2-updating-wedding-films--videos)
  - [Updating Studio & Contact Information](#3-updating-studio--contact-information)
- [Local Development & Setup](#-local-development--setup)
- [Quality Assurance & Linting](#-quality-assurance--linting)
- [Zero-Cost Production Deployment](#-zero-cost-production-deployment)
- [Official Studio Contacts](#-official-studio-contacts)
- [License](#-license)

---

## 🎨 Overview & Creative Direction

The website adheres to a tri-pillar design philosophy tailored specifically for premium Indian weddings:

1. **Cinematic Luxury (50%)**:
   - Immersive full-width hero visual with subtle atmospheric darkening.
   - Elegant, high-contrast serif typography paired with warm metallic gold accents.
   - Dedicated cinema theatre with embedded wedding film playback.

2. **Editorial Wedding Journal (35%)**:
   - Magazine-inspired asymmetric grids and organic white space.
   - Storytelling cards focused on couples, cultural rites, and emotional candids.
   - Restrained interface elements allowing the photography to take center stage.

3. **Motion & Interactivity (15%)**:
   - Ultra-responsive image gallery with dynamic category filtering.
   - Full-screen interactive lightbox viewer with keyboard and touch navigation.
   - Seamless one-click WhatsApp client acquisition with pre-formatted inquiry templates.
   - Full accessibility with hardware-accelerated animations respecting `prefers-reduced-motion`.

---

## 🎭 Design System & Palette

The visual identity is defined by a curated, warm color palette specified as native tokens in `@theme`:

| Token | Hex Code | Visual Swatch | Role |
| :--- | :--- | :---: | :--- |
| **Warm Ivory** | `#F5F0E8` | `rgb(245, 240, 232)` | Canvas background, soft editorial surface |
| **Charcoal Noir** | `#242321` | `rgb(36, 35, 33)` | Primary typography, cinematic cinema backdrop |
| **Champagne Gold**| `#B99B73` | `rgb(185, 155, 115)` | Accent highlights, badges, borders, CTA links |
| **Soft Gold** | `#EADBC8` | `rgb(234, 219, 200)` | Subtle borders, light cards, badge backgrounds |
| **Muted Charcoal**| `#32302D` | `rgb(50, 48, 45)` | Secondary dark surfaces, cards, and input backgrounds |

### Typography

- **Headings & Display**: [*Cormorant Garamond*](https://fonts.google.com/specimen/Cormorant+Garamond) (serif) — Editorial elegance, luxury fashion feel, and emotional resonance.
- **Body & Interface**: [*DM Sans*](https://fonts.google.com/specimen/DM+Sans) (sans-serif) — High-legibility geometric sans-serif for comfortable reading across all screen sizes.

---

## ✨ Key Features

- **Hero Experience**: Full-bleed cinematic photography showcase with brand statement, smooth scroll triggers, and dual action buttons (*View Portfolio* and *Enquire on WhatsApp*).
- **Studio Ethos & Counters**: Authentic brand narrative highlighting the studio's craft, paired with stat badges (200+ weddings documented, 8+ years experience, 100% candid storytelling).
- **Editorial Wedding Stories**: Curated couples' journals featuring ceremony highlights across Kerala (Thrissur traditional rites, Kochi candid celebrations, Kovalam sunset vows).
- **Categorized Portfolio Gallery**:
  - Filter tabs: `All`, `Ceremonies`, `Portraits`, `Details`, `Moments`.
  - Multi-column responsive layout with image zoom hover states.
- **Full-Screen Interactive Lightbox**:
  - Keyboard navigation: `Left Arrow` (Previous), `Right Arrow` (Next), `Escape` (Close).
  - Previous/Next touch-friendly tap buttons.
  - Image position indicators (`Photo 3 of 12`), category pill, and descriptive caption overlay.
- **Wedding Cinema Theatre**:
  - Dedicated full-width dark theatre showcase.
  - Primary featured wedding film with responsive 16:9 embedded video player and custom play controls.
  - Secondary highlight reel preview cards with timestamps and category badges.
- **Conversion-Optimized Inquiries**:
  - Direct WhatsApp lead engagement featuring pre-populated event details (Event Date, Location, Required Services).
  - Direct mailto integration (`wafflefilms33@gmail.com`).
  - Studio operating hours and Kerala location indicators.
  - Floating mobile-friendly WhatsApp badge for quick contact.
- **SEO & Social Optimization**:
  - Semantic HTML5 with complete OpenGraph and Twitter card metadata in `index.html`.
  - Custom SVG monogram favicon (`W` in champagne gold on charcoal).
  - Clean `robots.txt` configuration.

---

## 🛠 Architecture & Tech Stack

- **Runtime & View Layer**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) for strict type safety
- **Bundler & Dev Server**: [Vite 8](https://vite.dev/) with `@vitejs/plugin-react`
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native CSS `@theme` tokens
- **Animations & Gestures**: [Motion for React](https://motion.dev/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Code Linter**: [Oxlint](https://oxc.rs/)

---

## 📂 Project Directory Structure

```text
waffle-films-co/
├── public/
│   ├── favicon.svg          # Custom SVG monogram favicon
│   ├── icons.svg            # SVG symbol definitions
│   └── robots.txt           # Search engine crawler instructions
├── src/
│   ├── components/
│   │   ├── ContactCTA.tsx   # WhatsApp & email enquiry section
│   │   ├── FeaturedFilm.tsx # Cinematic video player & highlight reel
│   │   ├── Footer.tsx       # Studio footer & social link directory
│   │   ├── Gallery.tsx      # Filterable portfolio gallery
│   │   ├── Hero.tsx         # Full-width cinematic hero header
│   │   ├── Lightbox.tsx     # Full-screen modal viewer with keyboard controls
│   │   ├── Navbar.tsx       # Floating glassmorphic navigation header
│   │   ├── StudioIntro.tsx  # Brand story & experience metrics
│   │   └── WeddingStories.tsx # Asymmetric editorial stories grid
│   ├── data/
│   │   └── content.ts       # Central Single Source of Truth for all data & media
│   ├── App.tsx              # Root page composition & lightbox state
│   ├── index.css            # Tailwind CSS v4 design tokens & base typography
│   └── main.tsx             # React DOM entry point
├── index.html               # Semantic HTML shell, SEO & social meta tags
├── package.json             # NPM dependencies & operational scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite build configuration
```

---

## 📝 Content Management Guide

All textual copy, high-resolution imagery, wedding cinema links, and contact channels are centralized in a single file:

```text
src/data/content.ts
```

No code modifications are necessary when updating photos, videos, or studio details.

### 1. Updating Photography & Stories

Open `src/data/content.ts`:

- **Hero Image**: Update `images.hero` with your primary high-resolution wedding portrait.
- **Editorial Stories**: Modify `images.stories` array. Each entry contains:
  ```ts
  {
    id: 'story-1',
    title: 'Arjun & Ananya',
    subtitle: 'Thrissur • Traditional Kerala Wedding',
    image: 'https://your-cdn-or-image-url.jpg',
    category: 'Ceremonies',
    description: 'A celebration grounded in cultural grace...'
  }
  ```
- **Portfolio Gallery**: Add or modify items in `images.gallery`. You can assign any item to one of the gallery categories (`Ceremonies`, `Portraits`, `Details`, `Moments`).

### 2. Updating Wedding Films & Videos

- **Featured Cinema**: Edit `featuredFilm` in `src/data/content.ts`:
  ```ts
  export const featuredFilm = {
    title: 'The Backwaters Vows',
    couple: 'Alappuzha Wedding Film',
    duration: '6:42 min',
    thumbnail: 'https://images.unsplash.com/...',
    videoUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&rel=0',
    description: 'An intimate sunset exchange of vows...'
  };
  ```
- **Additional Highlight Films**: Modify `additionalFilms` array with preview thumbnails, video URLs, and titles.

### 3. Updating Studio & Contact Information

Update `siteContent.contact` in `src/data/content.ts`:
- **WhatsApp Phone**: Set your international format number (e.g., `+91 98765 43210`).
- **WhatsApp Message**: Customize the automatic enquiry message template.
- **Social Handles**: Update URLs for Instagram, Threads, YouTube, Facebook, and Linktree.
- **Studio Location & Hours**: Update `contact.location` and `contact.hours`.

---

## 💻 Local Development & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0 or higher recommended)
- `npm` (bundled with Node.js) or `pnpm`

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/wafflefilmsco/waffle-films-co.git
cd waffle-films-co
npm install
```

### Start Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application with hot module replacement (HMR).

### Build for Production

```bash
npm run build
```

This compiles TypeScript and outputs an optimized, minified production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

Simulates the production environment locally on a local web server.

---

## 🔍 Quality Assurance & Linting

Run Oxlint to check code quality:

```bash
npm run lint
```

Run TypeScript compiler check:

```bash
npm run build
```

---

## 🚀 Zero-Cost Production Deployment

This project compiles to a pure, high-performance static frontend bundle, making it completely free to host globally on **Cloudflare Pages**, **Vercel**, or **GitHub Pages**.

### Deploying to Cloudflare Pages (Recommended)

1. Push your code to your GitHub/GitLab repository.
2. Sign in to the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages**.
3. Click **Create application** > **Pages** > **Connect to Git**.
4. Select your `waffle-films-co` repository.
5. In the build settings, configure:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/` (leave default)
6. Click **Save and Deploy**.

Cloudflare Pages automatically provisions:
- Free SSL / TLS certificates.
- Worldwide Anycast CDN distribution.
- Instant preview deployments on pull requests.
- Custom domain mapping (e.g., `wafflefilmsco.com`).

---

## 📬 Official Studio Contacts

| Channel | Link / Handle |
| :--- | :--- |
| **Studio** | **Waffle Films Co.** |
| **Instagram** | [@wafflefilmsco](https://www.instagram.com/wafflefilmsco) |
| **Threads** | [@wafflefilmsco](https://www.threads.com/@wafflefilmsco) |
| **YouTube** | [@wafflefilmsco](https://www.youtube.com/@wafflefilmsco) |
| **Facebook** | [Waffle Films Co.](https://www.facebook.com/wafflefilmsco) |
| **Linktree** | [linktr.ee/wafflefilmsco](https://linktr.ee/wafflefilmsco) |
| **Email** | [wafflefilms33@gmail.com](mailto:wafflefilms33@gmail.com) |
| **Location** | Kerala, India |

---

## 📄 License

Private commercial portfolio project for **Waffle Films Co.** All rights reserved.
Photography and film assets are the intellectual property of their respective creators and Waffle Films Co.
