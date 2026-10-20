// ============================================================
// Waffle Film Co. — Centralized Content Data
// ============================================================
// All demo imagery, text, and contact info lives here.
// Replace the placeholder values with real studio content
// when the actual media is provided.
// ============================================================

// --------------- Demo Images (Unsplash) ---------------
// High-quality wedding photography from Unsplash.
// These are temporary and should be replaced with real work.
// Using photo IDs known to be reliable and wedding-related.

export const images = {
  hero: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80&auto=format&fit=crop',
  heroMobile: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop',

  stories: [
    {
      id: 'story-1',
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&auto=format&fit=crop',
      alt: 'Wedding ceremony with couple at altar — demo image',
      title: 'A Kerala Wedding',
      location: 'Kochi, Kerala',
      aspect: 'portrait' as const,
    },
    {
      id: 'story-2',
      src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80&auto=format&fit=crop',
      alt: 'Bride and groom walking by the ocean — demo image',
      title: 'Golden Hour',
      location: 'Munnar, Kerala',
      aspect: 'landscape' as const,
    },
    {
      id: 'story-3',
      src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80&auto=format&fit=crop',
      alt: 'Bride in elegant white gown — demo image',
      title: 'The Bride',
      location: 'Trivandrum, Kerala',
      aspect: 'portrait' as const,
    },
    {
      id: 'story-4',
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&auto=format&fit=crop',
      alt: 'Elegant wedding reception table arrangement — demo image',
      title: 'Celebration',
      location: 'Thrissur, Kerala',
      aspect: 'landscape' as const,
    },
    {
      id: 'story-5',
      src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80&auto=format&fit=crop',
      alt: 'Couple together at sunset — demo image',
      title: 'Together',
      location: 'Kozhikode, Kerala',
      aspect: 'portrait' as const,
    },
    {
      id: 'story-6',
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80&auto=format&fit=crop',
      alt: 'Wedding rings and flowers detail — demo image',
      title: 'Details',
      location: 'Alleppey, Kerala',
      aspect: 'square' as const,
    },
  ],

  gallery: [
    {
      id: 'gallery-1',
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80&auto=format&fit=crop',
      alt: 'Couple portrait in warm light — demo image',
    },
    {
      id: 'gallery-2',
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80&auto=format&fit=crop',
      alt: 'Wedding ceremony — demo image',
    },
    {
      id: 'gallery-3',
      src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=600&q=80&auto=format&fit=crop',
      alt: 'Bride and groom by the ocean — demo image',
    },
    {
      id: 'gallery-4',
      src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=600&q=80&auto=format&fit=crop',
      alt: 'Bride portrait — demo image',
    },
  ],

  filmThumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80&auto=format&fit=crop',

  about: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80&auto=format&fit=crop',
} as const;

// --------------- Text Content ---------------

export const siteInfo = {
  name: 'Waffle Film Co.',
  tagline: 'Kerala Wedding Photography & Videography',
  heroHeadline: 'Your love story,\ntold cinematically.',
  heroSubline: 'Wedding photography & films from the heart of Kerala.',
} as const;

export const aboutContent = {
  headline: 'Our Approach',
  description: `We believe every wedding is a story waiting to be told. At Waffle Film Co., we blend cinematic artistry with candid storytelling to capture the beauty, emotion, and joy of your celebration.

Based in Kerala, we bring a deep appreciation for traditional ceremonies and a modern eye for timeless imagery. Every frame is crafted with intention — from the quiet moments before the ceremony to the exuberant celebrations that follow.`,
  // Placeholder — replace with real studio philosophy when available
  philosophy: 'Stories, not just photographs.',
} as const;

export const featuredFilm = {
  title: 'A Wedding in Kochi',
  subtitle: 'Priya & Arjun — A Cinematic Wedding Film',
  description: 'A glimpse into a beautiful celebration of love, tradition, and family in the heart of Kerala.',
  // Replace with a real YouTube or Vimeo embed URL when available
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  thumbnailAlt: 'Wedding film thumbnail — demo image',
} as const;

// --------------- Contact / Social ---------------

export const contact = {
  whatsapp: 'https://wa.me/918304974376',
  whatsappDisplay: '+91 83049 74376',
  instagram: 'https://www.instagram.com/wafflefilmsco',
  instagramHandle: '@wafflefilmsco',
  threads: 'https://www.threads.com/@wafflefilmsco',
  facebook: 'https://www.facebook.com/wafflefilmsco',
  youtube: 'https://www.youtube.com/@wafflefilmsco',
  linktree: 'https://linktr.ee/wafflefilmsco',
  email: 'wafflefilms33@gmail.com',
  phone: '+91 83049 74376',
  location: 'Kottayam, Kerala, India',
} as const;

// --------------- Navigation ---------------

export const navLinks = [
  { label: 'Work', href: '#stories' },
  { label: 'Films', href: '#films' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;
