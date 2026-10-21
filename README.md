# Waffle Film Co. — Kerala Wedding Photography & Videography

A cinematic, editorial-style wedding photography and cinematography portfolio website for **Waffle Film Co.**, a premier wedding studio based in Kerala, India.

---

## ✨ Features

- **Cinematic Luxury & Editorial Layouts**: Warm ivory (#F5F0E8), charcoal (#242321), and champagne (#B99B73) color harmony paired with Cormorant Garamond serif headings and DM Sans body typography.
- **Editorial Wedding Stories**: Asymmetric storytelling grid showcasing traditional Kerala weddings, candid portraiture, and celebration moments.
- **Curated Portfolio Gallery**: Responsive multi-column gallery with dynamic category filtering (*All, Ceremonies, Portraits, Details, Moments*).
- **Full-Screen Interactive Lightbox**: Immersive full-screen image viewer with previous/next controls, keyboard navigation (Left/Right arrow keys, Escape to close), photo counters, and story descriptions.
- **Wedding Cinema & Highlight Previews**: Prominent featured wedding film with embedded video playback plus a curated grid of additional highlight film previews.
- **Seamless Lead Engagement**: Direct WhatsApp enquiry CTA, email links, phone placeholders, and comprehensive social links (Instagram, Threads, YouTube, Facebook, Linktree).
- **Accessibility & Motion Restraint**: Smooth transitions powered by Motion for React, respecting `prefers-reduced-motion` settings.

---

## 🛠 Tech Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with native `@theme` tokens
- **Animations**: [Motion for React](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: [Oxlint](https://oxc.rs/docs/guide/usage/linter.html)

---

## 📂 Content Architecture & How to Update Media

All images, stories, videos, and contact information are centralized in a single module:

```
src/data/content.ts
```

### To Update Images & Portfolio:
1. Open `src/data/content.ts`.
2. Replace the URLs in `images.hero`, `images.stories`, and `images.gallery` with your studio's high-resolution photography.
3. Update the `title`, `location`, `category`, and `description` fields for each story.

### To Update Wedding Films:
1. In `src/data/content.ts`, update `featuredFilm` and `additionalFilms`.
2. Replace `videoUrl` with the studio's YouTube or Vimeo embed links (e.g. `https://www.youtube.com/embed/VIDEO_ID`).
3. Set the respective video thumbnails and durations.

### To Update Contact Information:
1. Update `contact.whatsapp`, `contact.phone`, `contact.email`, and social media links in `src/data/content.ts`.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
The site runs locally at `http://localhost:5173`.

### Quality & Linter Checks
```bash
npm run lint
```

### Production Build
```bash
npm run build
```
Generates an optimized static production bundle in `dist/`.

---

## 🌐 Zero-Cost Deployment (Cloudflare Pages)

This project is a 100% static frontend application designed for free hosting on **Cloudflare Pages**:

1. Push this repository to GitHub.
2. In the [Cloudflare Dashboard](https://dash.cloudflare.com/), go to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your repository (`waffle-films-co`).
4. Configure the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
5. Click **Save and Deploy**. Your website will be live on a free `*.pages.dev` subdomain with global CDN caching and SSL.

---

## 📄 License

Private portfolio project for Waffle Film Co.
