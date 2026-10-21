import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Maximize2 } from 'lucide-react';
import { images, type PortfolioItem } from '../data/content';

interface WeddingStoriesProps {
  onOpenLightbox: (story: PortfolioItem) => void;
}

function StoryCard({
  story,
  index,
  onClick,
}: {
  story: (typeof images.stories)[number];
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 60, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{
        duration: 0.9,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View story: ${story.title}, ${story.location}`}
      className="group relative overflow-hidden w-full h-full cursor-pointer select-none rounded-xs focus-visible:outline-2 focus-visible:outline-champagne focus-visible:outline-offset-2"
    >
      <div className="relative w-full h-full overflow-hidden">
        <img
          src={story.src}
          alt={story.alt}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] card-image-hover"
        />
        {/* Scrim overlay: persistent on touch/mobile, hover-reveal on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/45 via-45% to-transparent card-overlay-scrim pointer-events-none" />

        {/* Expand icon */}
        <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-charcoal/60 backdrop-blur-md text-ivory flex items-center justify-center border border-ivory/15 card-overlay-badge shadow-sm pointer-events-none">
          <Maximize2 size={15} />
        </div>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 md:p-6 card-overlay-caption pointer-events-none">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="text-[10px] uppercase tracking-[0.2em] text-champagne-light font-sans font-medium px-2 py-0.5 rounded-full bg-charcoal/60 border border-ivory/10">
              {story.category}
            </span>
            <p className="text-[11px] uppercase tracking-[0.2em] text-champagne-light/90 font-sans">
              {story.location}
            </p>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl text-white leading-snug line-clamp-2">
            {story.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export default function WeddingStories({ onOpenLightbox }: WeddingStoriesProps) {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: '-60px' });

  return (
    <section id="stories" className="py-20 md:py-30 bg-ivory">
      <div className="editorial-container">
        {/* Section header */}
        <motion.div
          ref={headingRef}
          initial={{ y: 30, opacity: 0 }}
          animate={headingInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className="text-[11px] md:text-[12px] uppercase tracking-[0.25em] text-champagne font-sans font-medium mb-3">
            Selected Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-charcoal">
            Wedding Stories
          </h2>
        </motion.div>

        {/* Editorial asymmetric grid with hardened aspect ratios */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          {/* Row 1: Large left (7 cols), Tall right (5 cols, spans 2 rows) */}
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] md:col-span-7 overflow-hidden">
            <StoryCard
              story={images.stories[0]}
              index={0}
              onClick={() => onOpenLightbox(images.stories[0])}
            />
          </div>
          <div className="relative w-full aspect-[4/5] md:aspect-auto md:h-full md:col-span-5 md:row-span-2 overflow-hidden">
            <StoryCard
              story={images.stories[1]}
              index={1}
              onClick={() => onOpenLightbox(images.stories[1])}
            />
          </div>

          {/* Row 2: Small left (3 cols), Medium middle (4 cols) */}
          <div className="relative w-full aspect-[4/3] sm:aspect-square md:col-span-3 overflow-hidden">
            <StoryCard
              story={images.stories[2]}
              index={2}
              onClick={() => onOpenLightbox(images.stories[2])}
            />
          </div>
          <div className="relative w-full aspect-[4/3] md:col-span-4 overflow-hidden">
            <StoryCard
              story={images.stories[3]}
              index={3}
              onClick={() => onOpenLightbox(images.stories[3])}
            />
          </div>

          {/* Row 3: Two equal columns */}
          <div className="relative w-full aspect-[4/5] md:col-span-5 overflow-hidden">
            <StoryCard
              story={images.stories[4]}
              index={4}
              onClick={() => onOpenLightbox(images.stories[4])}
            />
          </div>
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] md:col-span-7 overflow-hidden">
            <StoryCard
              story={images.stories[5]}
              index={5}
              onClick={() => onOpenLightbox(images.stories[5])}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
