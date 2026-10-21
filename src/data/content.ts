// ============================================================
// Waffle Films Co. — Centralized Content Data
// ============================================================
// All demo imagery, text, and contact info lives here.
// Replace the placeholder values with real studio content
// when the actual media is provided.
// ============================================================

export const portfolioCategories = [
  'All',
  'Ceremonies',
  'Portraits',
  'Details',
  'Moments',
] as const;

export type PortfolioCategory = (typeof portfolioCategories)[number];

export interface PortfolioItem {
  id: string;
  src: string;
  fullSrc: string;
  alt: string;
  title: string;
  location: string;
  category: Exclude<PortfolioCategory, 'All'>;
  aspect?: 'portrait' | 'landscape' | 'square';
  description?: string;
}

export interface FilmItem {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  description: string;
}

// --------------- Demo Images (Unsplash) ---------------
export const images = {
  hero: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80&auto=format&fit=crop',
  heroMobile: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop',

  stories: [
    {
      id: 'story-1',
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&auto=format&fit=crop',
      fullSrc: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=85&auto=format&fit=crop',
      alt: 'Traditional wedding ceremony — demo image',
      title: 'A Kerala Wedding',
      location: 'Kochi, Kerala',
      category: 'Ceremonies' as const,
      aspect: 'portrait' as const,
      description: 'Sacred rituals and heartfelt blessings surrounded by heritage architecture in Fort Kochi.',
    },
    {
      id: 'story-2',
      src: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80&auto=format&fit=crop',
      fullSrc: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=1920&q=85&auto=format&fit=crop',
      alt: 'Couple portrait at golden hour — demo image',
      title: 'Golden Hour Serenade',
      location: 'Munnar, Kerala',
      category: 'Portraits' as const,
      aspect: 'landscape' as const,
      description: 'Gentle mist rolling over tea plantations as evening sunlight envelops the newlyweds.',
    },
    {
      id: 'story-3',
      src: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80&auto=format&fit=crop',
      fullSrc: 'https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=1920&q=85&auto=format&fit=crop',
      alt: 'Bridal portrait with veil — demo image',
      title: 'The Bride',
      location: 'Trivandrum, Kerala',
      category: 'Portraits' as const,
      aspect: 'portrait' as const,
      description: 'An intimate bridal portrait captured in soft natural light before the main ceremony.',
    },
    {
      id: 'story-4',
      src: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80&auto=format&fit=crop',
      fullSrc: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1920&q=85&auto=format&fit=crop',
      alt: 'Celebration and wedding feast setup — demo image',
      title: 'The Celebration',
      location: 'Thrissur, Kerala',
      category: 'Moments' as const,
      aspect: 'landscape' as const,
      description: 'Warm candlelight, joyous reunions, and authentic Kerala hospitality shared among loved ones.',
    },
    {
      id: 'story-5',
      src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80&auto=format&fit=crop',
      fullSrc: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=1920&q=85&auto=format&fit=crop',
      alt: 'Candid couple embrace — demo image',
      title: 'Quiet Togetherness',
      location: 'Kozhikode, Kerala',
      category: 'Moments' as const,
      aspect: 'portrait' as const,
      description: 'Unposed, authentic laughter between the couple away from the grandeur of the stage.',
    },
    {
      id: 'story-6',
      src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80&auto=format&fit=crop',
      fullSrc: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920&q=85&auto=format&fit=crop',
      alt: 'Wedding rings and floral details — demo image',
      title: 'Sacred Details',
      location: 'Alleppey, Kerala',
      category: 'Details' as const,
      aspect: 'square' as const,
      description: 'Macro artistry celebrating heirloom ornaments and jasmine garlands crafted for the day.',
    },
  ],

  // Curated gallery collection for portfolio filtering & exploration
  gallery: [
    {
      id: 'gallery-1',
      src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop',
      fullSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85&auto=format&fit=crop',
      alt: 'Couple portrait in warm ambient light — demo image',
      title: 'Amber Glow',
      location: 'Kumarakom, Kerala',
      category: 'Portraits' as const,
      description: 'A serene twilight portrait across the calm backwaters of Kumarakom.',
    },
    {
      id: 'gallery-2',
      src: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=800&q=80&auto=format&fit=crop',
      fullSrc: 'https://images.unsplash.com/photo-1544077960-604201fe74bc?w=1920&q=85&auto=format&fit=crop',
      alt: 'Joyful wedding laughter — demo image',
      title: 'Spontaneous Joy',
      location: 'Palakkad, Kerala',
      category: 'Moments' as const,
      description: 'Unfiltered laughter during the familial welcome ceremony.',
    },
    {
      id: 'gallery-3',
      src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80&auto=format&fit=crop',
      fullSrc: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=1920&q=85&auto=format&fit=crop',
      alt: 'Floral garlands and wedding rituals — demo image',
      title: 'The Tali Muhurtham',
      location: 'Guruvayur, Kerala',
      category: 'Ceremonies' as const,
      description: 'The auspicious moment of union blessed with temple flowers and traditional nadaswaram.',
    },
    {
      id: 'gallery-4',
      src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80&auto=format&fit=crop',
      fullSrc: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1920&q=85&auto=format&fit=crop',
      alt: 'Kasavu saree and traditional gold jewelry detail — demo image',
      title: 'Heritage Threads',
      location: 'Kottayam, Kerala',
      category: 'Details' as const,
      description: 'Intricate details of golden Kasavu weaves and ancestral heritage ornaments.',
    },
    {
      id: 'gallery-5',
      src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80&auto=format&fit=crop',
      fullSrc: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1920&q=85&auto=format&fit=crop',
      alt: 'Couple by the lakeside — demo image',
      title: 'Lakeside Whispers',
      location: 'Vembanad, Kerala',
      category: 'Portraits' as const,
      description: 'Intimate evening walk along the tranquil shores of Vembanad Lake.',
    },
    {
      id: 'gallery-6',
      src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&auto=format&fit=crop',
      fullSrc: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=85&auto=format&fit=crop',
      alt: 'Mandap sacred vows — demo image',
      title: 'Sacred Vows',
      location: 'Kochi, Kerala',
      category: 'Ceremonies' as const,
      description: 'Hand in hand under the floral mandap as promises of a lifetime are spoken.',
    },
  ],

  about: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80&auto=format&fit=crop',
} as const;

// Combined list for Lightbox navigation across all portfolio imagery
export const allPortfolioImages: PortfolioItem[] = [
  ...images.stories,
  ...images.gallery,
];

// --------------- Text Content ---------------
export const siteInfo = {
  name: 'Waffle Films Co.',
  tagline: 'Kerala Wedding Photography & Videography',
  heroHeadline: 'Your love story,\ntold cinematically.',
  heroSubline: 'Wedding photography & films from the heart of Kerala.',
} as const;

export const aboutContent = {
  headline: 'Our Approach',
  description: `We believe every wedding is a story waiting to be told. At Waffle Films Co., we blend cinematic artistry with candid storytelling to capture the beauty, emotion, and joy of your celebration.

Based in Kerala, we bring a deep appreciation for traditional ceremonies and a modern eye for timeless imagery. Every frame is crafted with intention — from the quiet moments before the ceremony to the exuberant celebrations that follow.`,
  philosophy: 'Stories, not just photographs.',
} as const;

// --------------- Wedding Films ---------------
export const featuredFilm: FilmItem = {
  id: 'film-featured',
  title: 'A Wedding in Kochi',
  subtitle: 'Priya & Arjun — A Cinematic Wedding Film',
  location: 'Fort Kochi, Kerala',
  duration: '4:15',
  thumbnail: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80&auto=format&fit=crop',
  videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  description: 'A glimpse into a beautiful celebration of love, tradition, and family in the heart of Kerala.',
};

export const additionalFilms: FilmItem[] = [
  {
    id: 'film-1',
    title: 'Munnar Mist',
    subtitle: 'Anjali & Rahul',
    location: 'Munnar, Kerala',
    duration: '3:40',
    thumbnail: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'An ethereal hillside elopement shrouded in monsoon clouds and rolling green slopes.',
  },
  {
    id: 'film-2',
    title: 'The Heritage Atrium',
    subtitle: 'Sneha & Vivek',
    location: 'Thrissur, Kerala',
    duration: '5:10',
    thumbnail: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Classic Kerala architecture, traditional Chenda Melam, and timeless family laughter.',
  },
  {
    id: 'film-3',
    title: 'Backwaters Sunset',
    subtitle: 'Maya & Kiran',
    location: 'Alleppey, Kerala',
    duration: '3:55',
    thumbnail: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80&auto=format&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Golden reflections along the tranquil palms of Alleppey during an intimate sunset ceremony.',
  },
];

// --------------- Contact / Social ---------------
export const contact = {
  whatsappNumber: '918304974376',
  whatsappDisplay: '+91 83049 74376',
  whatsappDefaultMessage:
    "Hello Waffle Films Co., I came across your website and would like to enquire about wedding photography & films.\n\n• Event Date:\n• Location:\n• Services needed: Photography / Cinematography",
  get whatsapp(): string {
    const encoded = encodeURIComponent(this.whatsappDefaultMessage);
    return `https://wa.me/${this.whatsappNumber}?text=${encoded}`;
  },
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
  { label: 'Stories', href: '#stories' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Films', href: '#films' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const;
